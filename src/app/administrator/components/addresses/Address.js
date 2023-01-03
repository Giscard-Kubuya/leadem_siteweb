import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Address";
import AdministratorContext from '../../context/AdministratorContxt';

function Address() {

  const { api,base_url } = useContext(AdministratorContext);
  const model = new Model(api);

  return (
    <>
      <Outlet context={[api,base_url,model]} />
    </>
  )
}

export default Address