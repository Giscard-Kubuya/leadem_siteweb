import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Social";
import AdministratorContext from '../../context/AdministratorContxt';

function Social() {

  const { api,base_url } = useContext(AdministratorContext);
  const model = new Model(api);

  return (
    <>
      <Outlet context={[api,base_url,model]} />
    </>
  )
}

export default Social