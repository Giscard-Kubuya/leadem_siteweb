import logo from './logo.svg';
import './App.css';
import Client from './app/client/components/Client';
import Administrator from './app/administrator/components/Administrator';
import { BrowserRouter } from 'react-router-dom';
import { AdministratorProvider } from './app/administrator/context/AdministratorContxt';
import { ClientProvider } from './app/client/contexts/ClientContext';
import { Helmet } from 'react-helmet';

function App() {
  let segmentIsAdmin = window.location.pathname.split('/');

  let isAdmin = segmentIsAdmin.some((el) => el === 'administrator');

  if (isAdmin === false) {

    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/assets/assets_front/fontawesome/js/all.js" />
          <link rel="stylesheet" href="/assets/assets_front/plugins/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/assets_front/plugins/tiny-slider/tiny-slider.css" />
          <link rel="stylesheet" href="/assets/assets_front/css/theme-1.css" />
        </Helmet>
        <BrowserRouter>
          <ClientProvider><Client isAdmin={isAdmin} /></ClientProvider>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/assets/assets_back/vendors/base/vendor.bundle.base.css" />
          <link rel="stylesheet" href="/assets/assets_back/vendors/ti-icons/css/themify-icons.css" />
          <link rel="stylesheet" href="/assets/assets_back/css/style.css" />
        </Helmet>
        <BrowserRouter>
          <AdministratorProvider><Administrator isAdmin={isAdmin} /></AdministratorProvider>
        </BrowserRouter>
      </>
    );
  }

}

export default App;
