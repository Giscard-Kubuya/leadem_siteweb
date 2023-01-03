import { createContext } from "react";


const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const api = 'http://localhost:4001/gdk/v1';
    const base_url_api = 'http://localhost:4001';

    return <ClientContext.Provider
        value={{
            api, base_url_api
        }}
    >
        {children}
    </ClientContext.Provider>
}

export default ClientContext;