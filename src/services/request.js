export default class ServerConnector {
    constructor(path, api = '/v1') {
        this.path = api + path;
    }

    isOkStatus(status) {
        return [200, 201, 204].includes(status);
    }

    static makeQuery(obj) {
        let query = '';
        Object.keys(obj).forEach((key, i) => {
            query += `&${key}=${obj[key]}`
        });
        return query.substr(1);
    }

    static _handleErrors(res) {
        if (res.status !== 401) return res;
        //logout
    }

    send(req, errHandler) {
        const path = `${this.path + req.path}`;
        return ServerConnector._makeRequest(req, path, errHandler).then((res) => {
            return res;
        })
    }

    GET(path, params = {}) {
        const queryString = ServerConnector.makeQuery(params);
        const options = {
            method: 'GET'
        };
        return this.send({
            path: `${path + queryString}`, options
        }).then(({ json, status }) => ({ json, status }));

    }

    postLogin(path, data, headers = []) {
        return this.send({
            path,
            options: {
                method: 'POST',
                body: data,
            },
            headers
        }, null);
    }

    POST(path, data) {
        return this.send({
            path,
            options: {
                method: 'POST',
                body: JSON.stringify(data),
            }
        }, null);
    }

    PUT(path, data) {
        return this.send({
            path,
            options: {
                method: 'PUT',
                body: JSON.stringify(data)
            }
        }, null);
    }

    DELETE(path, id) {
        return this.send({
            path: `${path + id}`,
            options: {
                method: 'DELETE'
            }
        }, null);
    }

    static _makeRequest(req, path, errHandler = null) {
        return ServerConnector.fetcher(req, path, errHandler)
            .then((res) => ServerConnector._handleErrors(res))
            .then((res) => {
                    return res.json().then(json => {
                        return { status: res.status, json };
                    });
                }
            )
            .catch(error => {
                if (errHandler) {
                    console.log('errHandler', errHandler);
                }
                return { status: error.message, json: {} }
            });
    }

    static fetcher(req, path, errHandler) {
        const headersObj = Object.assign({
            'content-type': 'application/json',
            'Cache-Control': 'no-cache',
            "authorization": `Bearer ${localStorage.getItem('token')}`,
        }, req.headers);

        const headers = new Headers(headersObj);

        const options = Object.assign({
            method: 'POST',
            rejectUnauthorized: false,
            //credentials: 'same-origin',
        }, req.options);

        options.headers = headers;
        const request = new Request(path, options);
        return fetch(request)
    }
}