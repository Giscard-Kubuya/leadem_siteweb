import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Diapo";
import AdministratorContext from '../../context/AdministratorContxt';

function Diapo() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);

  return (
    <>
      <Outlet context={[base_url_api,base_url,model]} />
    </>
  )
}

export default Diapo