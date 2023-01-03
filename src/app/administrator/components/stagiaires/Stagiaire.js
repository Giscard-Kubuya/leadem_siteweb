import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Stagiaire";
import AdministratorContext from '../../context/AdministratorContxt';

function Stagiaire() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);

  return (
    <>
      <Outlet context={[base_url_api,base_url,model]} />
    </>
  )
}

export default Stagiaire