import Request from "./request";

class UsersService extends Request {
    constructor() {
        super("/users");
    }
    getBmsList(obj) {
        return this.GET(`/list/bms?${Request.makeQuery(obj)}`).then(
            ({ json, status }) => ({ json, status })
        );
    }
    getTrainers() {
        return this.GET("/list/trainers").then(({ json, status }) => ({
            json,
            status,
        }));
    }
    getArchivedUsers(obj) {
        return this.GET(`/archive?${Request.makeQuery(obj)}`).then(
            ({ json, status }) => ({ json, status })
        );
    }
    getSWList(obj) {
        return this.GET(`/list/social_worker?${Request.makeQuery(obj)}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }
    getStaffList(obj) {
        return this.GET(`/list/stuff?${Request.makeQuery(obj)}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }
    getBMSTrainers(obj) {
        return this.GET(`/list/bms_trainer?${Request.makeQuery(obj)}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }
    getSWTrainers(obj) {
        return this.GET(
            `/list/social_worker_trainer?${Request.makeQuery(obj)}`
        ).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    getUserById(id) {
        return this.GET(`/${id}`).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    getBmsListByWorker(id) {
        return this.GET(`/stuff/${id}/bms`).then(({ json, status }) => ({
            json,
            status,
        }));
    }

    getCurrentUser() {
        return this.GET("/current").then(({ json, status }) => ({
            json,
            status,
        }));
    }
    editCurrentUser(data) {
        return this.PUT("/", data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    editUser(data, id) {
        return this.PUT(`/${id}`, data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    bmsUserResult(data) {
        return this.PUT(`/result`, data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    createUser(data) {
        return this.POST("/", data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    archiveUser(data) {
        return this.POST("/archive", data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    getUsers() {
        return this.GET("/").then(({ json, status }) => ({ json, status }));
    }
    updatePassword(data) {
        return this.PUT(`/password`, data).then(({ json, status }) => ({
            json,
            status,
        }));
    }
    addBMSForSW(swId, bmsId) {
        return this.POST(`/assign/sw/${swId}/bms/${bmsId}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }
    removeBMSForSW(swId, bmsId) {
        const options = {
            method: "DELETE",
        };
        return this.send({
            path: `/unassign/sw/${swId}/bms/${bmsId}`,
            options,
        }).then(({ json, status }) => ({ json, status }));
    }
    addBMSForTrainer(trainerId, bmsId) {
        return this.POST(`/assign/trainer/${trainerId}/bms/${bmsId}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }

    removeBMSForTrainer(trainerId, bmsId) {
        const options = {
            method: "DELETE",
        };
        return this.send({
            path: `/unassign/trainer/${trainerId}/bms/${bmsId}`,
            options,
        }).then(({ json, status }) => ({ json, status }));
    }
    addSWForTrainer(trainerId, swId) {
        return this.POST(`/assign/trainer/${trainerId}/sw/${swId}`).then(
            ({ json, status }) => ({
                json,
                status,
            })
        );
    }
    removeSWForTrainer(trainerId, swId) {
        const options = {
            method: "DELETE",
        };
        return this.send({
            path: `/unassign/trainer/${trainerId}/sw/${swId}`,
            options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getSWListByTrainer(trainerId, obj) {
        return this.GET(
            `/sw-trainer/${trainerId}/social_worker?${Request.makeQuery(obj)}`
        ).then(({ json, status }) => ({
            json,
            status,
        }));
    }
}

export default new UsersService();
