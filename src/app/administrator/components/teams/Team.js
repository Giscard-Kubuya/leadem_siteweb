import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Team";
import Position from "../../services/Position";
import AdministratorContext from '../../context/AdministratorContxt';

function Diapo() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);
  const modelPosition = new Position(api);

  return (
    <>
      <Outlet context={[base_url_api,base_url,model,modelPosition]} />
    </>
  )
}

export default Diapo