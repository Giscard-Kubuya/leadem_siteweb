class Login {
    constructor(api) {
        this.api = api;
    }
    create = async (data) => {
        return await fetch(`${this.api}/auth/register`, { method: "POST", body: JSON.stringify(data) ,headers:{"Content-type":"application/json"}});
    }
    connect = async (data,id) => {
        return await fetch(`${this.api}/auth/connect`, { method: "POST", body: JSON.stringify(data) ,headers:{"Content-type":"application/json"}});
    }
}

export default Login;