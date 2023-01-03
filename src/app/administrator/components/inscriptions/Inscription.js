import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/Inscription";
import Formation from "../../services/Formation";
import Stagiaire from "../../services/Stagiaire";
import AdministratorContext from '../../context/AdministratorContxt';

function Inscription() {

  const { api,base_url } = useContext(AdministratorContext);
 
  const model = new Model(api);
  const modelFormation = new Formation(api);
  const modelStagiaire = new Stagiaire(api);

  return (
    <>
      <Outlet context={[api,base_url,model,modelFormation,modelStagiaire]} />
    </>
  )
}

export default Inscription