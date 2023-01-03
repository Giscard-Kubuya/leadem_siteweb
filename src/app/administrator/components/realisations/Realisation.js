import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Realisation";
import Client from "../../services/Client";
import AdministratorContext from '../../context/AdministratorContxt';

function Realisation() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);
  const modelClient = new Client(api);

  return (
    <>
      <Outlet context={[base_url_api,base_url,model,modelClient]} />
    </>
  )
}

export default Realisation