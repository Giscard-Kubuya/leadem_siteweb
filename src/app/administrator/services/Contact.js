class Contact {
    constructor(api) {
        this.api = api;
    }

    getAll = async () => {
        return await fetch(`${this.api}/contacts`, { method: 'GET' });
    }

    create = async (data) => {
        return await fetch(`${this.api}/contacts`, { method: "POST", body: JSON.stringify(data) ,headers:{"Content-type":"application/json"}});
    }

    update = async (data,id) => {
        return await fetch(`${this.api}/contacts/${id}`, { method: "PUT", body: JSON.stringify(data) ,headers:{"Content-type":"application/json"}});
    }

    getOne = async (id) =>{
        return await fetch(`${this.api}/contacts/${id}`, { method: 'GET' });
    }

    delete = async (id) =>{
        return await fetch(`${this.api}/contacts/${id}`, { method: 'DELETE' });
    }
}

export default Contact;