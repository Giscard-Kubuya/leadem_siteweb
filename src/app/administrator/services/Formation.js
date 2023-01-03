class Formation {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/formations`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/formations`, { method: "POST", body: data });
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/formations/${id}`, { method: "PUT", body: data });
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/formations/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/formations/${id}`, { method: 'DELETE' });
    }
}

export default Formation;