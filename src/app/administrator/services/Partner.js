class Partner {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/partners`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/partners`, { method: "POST", body: data});
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/partners/${id}`, { method: "PUT", body: data});
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/partners/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/partners/${id}`, { method: 'DELETE' });
    }
}

export default Partner;