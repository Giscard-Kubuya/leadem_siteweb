import { useContext } from 'react'
import HeaderPage from '../pages/header-page';
import FooterPage from '../pages/footer-page'
import SiteContext from '../contexts/SiteContext';
import { Outlet } from 'react-router-dom';

function Home() {
  const { diapos, base_url, services, abouts,realisations } = useContext(SiteContext);


  return (
    <div>
      <HeaderPage diapos={diapos} base_url={base_url} />
      <Outlet context={[diapos, services,realisations]} />
      <FooterPage />
    </div>
  )
}

export default Home
