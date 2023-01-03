class Team {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/teams`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/teams`, { method: "POST", body: data });
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/teams/${id}`, { method: "PUT", body: data });
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/teams/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/teams/${id}`, { method: 'DELETE' });
    }
}

export default Team;