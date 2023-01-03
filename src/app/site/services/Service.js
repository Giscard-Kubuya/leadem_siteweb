class Service{
    
    constructor(api){
        this.api = api;
    }

    getAllDiapos = async ()=>{
        return await fetch(`${this.api}/diapos`,{method:'GET'});
    }

    getOneDiapo = async (id)=>{
        return await fetch(`${this.api}/diapos/${id}`,{method:'GET'});
    }

    getAllClients = async ()=>{
        return await fetch(`${this.api}/clients`,{method:'GET'});
    }

    getOneClient = async (id)=>{
        return await fetch(`${this.api}/clients/${id}`,{method:'GET'});
    }

    getAllSocials = async ()=>{
        return await fetch(`${this.api}/socials`,{method:'GET'});
    }

    getOneSocial = async (id)=>{
        return await fetch(`${this.api}/socials/${id}`,{method:'GET'});
    }

    getAllTemoins = async ()=>{
        return await fetch(`${this.api}/temoins`,{method:'GET'});
    }

    getOneTemoin = async (id)=>{
        return await fetch(`${this.api}/temoins/${id}`,{method:'GET'});
    }

    getAllAbouts = async ()=>{
        return await fetch(`${this.api}/abouts`,{method:'GET'});
    }

    getOneAbout = async (id)=>{
        return await fetch(`${this.api}/abouts/${id}`,{method:'GET'});
    }

    getAllServices = async ()=>{
        return await fetch(`${this.api}/services`,{method:'GET'});
    }

    getOneService = async (id)=>{
        return await fetch(`${this.api}/services/${id}`,{method:'GET'});
    }

    getAllAddresses = async ()=>{
        return await fetch(`${this.api}/addresses`,{method:'GET'});
    }

    getOneAddress = async (id)=>{
        return await fetch(`${this.api}/addresses/${id}`,{method:'GET'});
    }

    getAllPartners = async ()=>{
        return await fetch(`${this.api}/partners`,{method:'GET'});
    }

    getOnePartner = async (id)=>{
        return await fetch(`${this.api}/partners/${id}`,{method:'GET'});
    }

    getAllRoles = async ()=>{
        return await fetch(`${this.api}/roles`,{method:'GET'});
    }

    getOneRole = async (id)=>{
        return await fetch(`${this.api}/roles/${id}`,{method:'GET'});
    }

    getAllPosotions = async ()=>{
        return await fetch(`${this.api}/positions`,{method:'GET'});
    }

    getOnePosotion = async (id)=>{
        return await fetch(`${this.api}/positions/${id}`,{method:'GET'});
    }

    getAllRealisations = async ()=>{
        return await fetch(`${this.api}/realisations`,{method:'GET'});
    }

    getOneRealisation = async (id)=>{
        return await fetch(`${this.api}/realisations/${id}`,{method:'GET'});
    }

    getAllTemoignages = async ()=>{
        return await fetch(`${this.api}/temoignages`,{method:'GET'});
    }

    getOneTemoignage = async (id)=>{
        return await fetch(`${this.api}/temoignages/${id}`,{method:'GET'});
    }

}

export default Service;