import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Model from "../../services/About";
import AdministratorContext from '../../context/AdministratorContxt';

function About() {

  const { api,base_url,base_url_api } = useContext(AdministratorContext);
  const model = new Model(api);
  return (
    <>
      <Outlet context={[base_url, api, model]} />
    </>
  )
}

export default About