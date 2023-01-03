class Diapo {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/diapos`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/diapos`, { method: "POST", body: data });
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/diapos/${id}`, { method: "PUT", body: data });
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/diapos/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/diapos/${id}`, { method: 'DELETE' });
    }
}

export default Diapo;