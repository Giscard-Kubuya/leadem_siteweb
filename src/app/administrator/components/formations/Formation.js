import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Formation";
import Team from "../../services/Team";
import AdministratorContext from '../../context/AdministratorContxt';

function Formation() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);
  const modelTeam = new Team(api);

  return (
    <>
      <Outlet context={[base_url_api,base_url,model,modelTeam]} />
    </>
  )
}

export default Formation