class Realisation {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/realisations`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/realisations`, { method: "POST", body: data });
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/realisations/${id}`, { method: "PUT", body: data });
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/realisations/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/realisations/${id}`, { method: 'DELETE' });
    }
}

export default Realisation;