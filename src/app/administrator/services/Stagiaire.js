class Stagiaire {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/stagiaires`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/stagiaires`, { method: "POST", body: data });
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/stagiaires/${id}`, { method: "PUT", body: data });
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/stagiaires/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/stagiaires/${id}`, { method: 'DELETE' });
    }
}

export default Stagiaire;