import { createContext, useEffect, useState } from 'react';
import Service from '../services/Service'

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {

    const [diapos, setDiapos] = useState([]);
    const [abouts, setAbouts] = useState([]);
    const [services, setServices] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [clients, setClients] = useState([]);
    const [temoins, setTemoins] = useState([]);
    const [socials, setSocials] = useState([]);
    const [partners, setPartners] = useState([]);
    const [roles, setRoles] = useState([]);
    const [positions, setPositions] = useState([]);
    const [realisations, setRealisations] = useState([]);
    const [temoignages, setTemoignages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //let api = 'http://gdk.afrika-telema.org/gdk/v1';
    let api = 'http://localhost:4001/gdk/v1';
    let base_url = 'http://localhost:4001';

    const service = new Service(api);

    useEffect(() => {
        getAllDiapos();
        getAllAbouts();
        getAllServices();
        getAllRealisations();
    }, []);

    useEffect(() => {
        getAllPartners();
    }, []);

    const getAllDiapos = async () => {
        setIsLoading(true)
        const response = await service.getAllDiapos();

        if (response.status === 200) {
            const data = await response.json();
            setDiapos(data.data);
        }
        // console.log('------------------------');
        setIsLoading(false)
    }

    const getOneDiapo = async () => {
        const data = await service.getOneDiapo();
    }

    const getAllClients = async () => {
        const response = await service.getAllClients();
        const data = await response.json();
        setClients(data.data);

    }

    const getOneClient = async () => {
        const data = await service.getOneClient();
    }

    const getAllTemoins = async () => {
        const response = await service.getAllTemoins();
        const data = await response.json();
        setTemoins(data.data);
    }

    const getOneTemoin = async () => {
        const data = await service.getOneTemoin();
    }

    const getAllAbouts = async () => {
        const response = await service.getAllAbouts();
        const data = await response.json();
        setAbouts(data.data);
    }

    const getOneAbout = async () => {
        const data = await service.getOneAbout();
    }


    const getAllServices = async () => {
        const response = await service.getAllServices();
        const data = await response.json();
        setServices(data.data);

    }

    const getOneService = async () => {
        const data = await service.getOneService();
    }

    const getAllAddresses = async () => {
        const response = await service.getAllAddresses();
        const data = await response.json();
        setAddresses(data.data);
    }

    const getAllPartners = async () => {
        const response = await service.getAllPartners();
        const data = await response.json();
        setPartners(data.data);
    }

    const getOnePartner = async () => {
        const data = await service.getOnePartner();
    }

    const getAllRoles = async () => {
        const response = await service.getAllRoles();
        const data = await response.json();
        setRoles(data.data);
    }

    const getOneRole = async () => {
        const data = await service.getOneRole();
    }

    const getAllPosotions = async () => {
        const response = await service.getAllPosotions();
        const data = await response.json();
        setPositions(data.data);
    }

    const getOnePosotion = async () => {
        const data = await service.getOnePosotion();
    }

    const getAllRealisations = async () => {
        const response = await service.getAllRealisations();
        const data = await response.json();
        setRealisations(data.data);
    }

    const getOneRealisation = async () => {
        const data = await service.getOneRealisation();
    }

    const getOneTemoignage = async () => {
        const data = await service.getOneTemoignage();

    }

    return <SiteContext.Provider
        value={{
            diapos,
            abouts,
            temoignages,
            temoins,
            realisations,
            api,
            base_url, services
        }
        }
    >
        {children}
    </SiteContext.Provider>
}


export default SiteContext