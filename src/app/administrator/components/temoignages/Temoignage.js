import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Temoignage";
import Temoin from "../../services/Temoin";
import AdministratorContext from '../../context/AdministratorContxt';

function Temoignage() {

  const { api,base_url } = useContext(AdministratorContext);
  const model = new Model(api);
  const modelTemoin = new Temoin(api);

  return (
    <>
      <Outlet context={[api,base_url,model,modelTemoin]} />
    </>
  )
}

export default Temoignage