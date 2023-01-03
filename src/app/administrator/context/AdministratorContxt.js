import { createContext,useEffect } from "react";

const AdministratorContext =  createContext();

export const AdministratorProvider = ({children})=>{
    // const api = 'https://gdk.afrika-telema.org/gdk/v1/';
    const api = 'http://localhost:4001/gdk/v1';
    const base_url_api = 'http://localhost:4001';
    const base_url = 'http://localhost:3000';

    return <AdministratorContext.Provider
        value={{
            api,
            base_url,
            base_url_api
        }}
    >
        {children}
    </AdministratorContext.Provider>
}


export default AdministratorContext;