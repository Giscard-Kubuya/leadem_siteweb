import React from 'react'
import Content from './Content';
import Dashboard from './dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Diapo from './diapos/Diapo';
import DiapoPage from './diapos/diapo-page';
import DiapoForm from './diapos/diapo-form';

import About from './abouts/About';
import AboutPage from './abouts/about-page';
import AboutForm from './abouts/about-form';

import Address from './addresses/Address';
import AddressPage from './addresses/address-page';
import AddressForm from './addresses/address-form';

import Client from './clients/Client';
import ClientPage from './clients/client-page';
import ClientForm from './clients/client-form';

import Partner from './partners/Partner';
import PartnerPage from './partners/partner-page';
import PartnerForm from './partners/partner-form';

import Position from './positions/Position';
import PositionPage from './positions/position-page';
import PositionForm from './positions/position-form';

import Realisation from './realisations/Realisation';
import RealisationPage from './realisations/realisation-page';
import RealisationForm from './realisations/realisation-form';

import Role from './roles/Role';
import RolePage from './roles/role-page';
import RoleForm from './roles/role-form';

import Service from './services/Service';
import ServicePage from './services/service-page';
import ServiceForm from './services/service-form';

import Temoin from './temoins/Temoin';
import TemoinPage from './temoins/temoin-page';
import TemoinForm from './temoins/temoin-form';

import Temoignage from './temoignages/Temoignage';
import TemoignagePage from './temoignages/temoignage-page';
import TemoignageForm from './temoignages/temoignage-form';

import Team from './teams/Team';
import TeamPage from './teams/team-page';
import TeamForm from './teams/team-form';

import Stagiaire from './stagiaires/Stagiaire';
import StagiairePage from './stagiaires/stagiaire-page';
import StagiaireForm from './stagiaires/stagiaire-form';

import Formation from './formations/Formation';
import FormationPage from './formations/formation-page';
import FormationForm from './formations/formation-form';

import Inscription from './inscriptions/Inscription';
import InscriptionPage from './inscriptions/inscription-page';
import InscriptionForm from './inscriptions/inscription-form';

import Contact from './contacts/Contact';
import ContactPage from './contacts/contact-page';

import Login from './logins/Login';
import LoginForm from './logins/login-form';

function Administrator({ isAdmin }) {

 
  return (
    <div>
      <Routes>
        <Route path='/administrator' element={<Content />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='diapos' element={<Diapo />} >
            <Route path='list' element={<DiapoPage />} />
            <Route path='add' element={<DiapoForm />} />
            <Route path='edit/:id' element={<DiapoForm />} />
          </Route>
          <Route path='abouts' element={<About />} >
            <Route path='list' element={<AboutPage />} />
            <Route path='add' element={<AboutForm />} />
            <Route path='edit/:id' element={<AboutForm />} />
          </Route>


          {/* <Route path='login' element={<Login />} > */}
          <Route path='login' element={<Login />} />

          {/* </Route> */}

          <Route path='addresses' element={<Address />} >
            <Route path='list' element={<AddressPage />} />
            <Route path='add' element={<AddressForm />} />
            <Route path='edit/:id' element={<AddressForm />} />
          </Route>

          <Route path='clients' element={<Client />} >
            <Route path='list' element={<ClientPage />} />
            <Route path='add' element={<ClientForm />} />
            <Route path='edit/:id' element={<ClientForm />} />
          </Route>

          <Route path='inscriptions' element={<Inscription />} >
            <Route path='list' element={<InscriptionPage />} />
            <Route path='add' element={<InscriptionForm />} />
            <Route path='edit/:id' element={<InscriptionForm />} />
          </Route>

          <Route path='formations' element={<Formation />} >
            <Route path='list' element={<FormationPage />} />
            <Route path='add' element={<FormationForm />} />
            <Route path='edit/:id' element={<FormationForm />} />
          </Route>

          <Route path='partners' element={<Partner />} >
            <Route path='list' element={<PartnerPage />} />
            <Route path='add' element={<PartnerForm />} />
            <Route path='edit/:id' element={<PartnerForm />} />
          </Route>

          <Route path='positions' element={<Position />} >
            <Route path='list' element={<PositionPage />} />
            <Route path='add' element={<PositionForm />} />
            <Route path='edit/:id' element={<PositionForm />} />
          </Route>

          <Route path='realisations' element={<Realisation />} >
            <Route path='list' element={<RealisationPage />} />
            <Route path='add' element={<RealisationForm />} />
            <Route path='edit/:id' element={<RealisationForm />} />
          </Route>

          <Route path='roles' element={<Role />} >
            <Route path='list' element={<RolePage />} />
            <Route path='add' element={<RoleForm />} />
            <Route path='edit/:id' element={<RoleForm />} />
          </Route>

          <Route path='services' element={<Service />} >
            <Route path='list' element={<ServicePage />} />
            <Route path='add' element={<ServiceForm />} />
            <Route path='edit/:id' element={<ServiceForm />} />
          </Route>

          <Route path='temoins' element={<Temoin />} >
            <Route path='list' element={<TemoinPage />} />
            <Route path='add' element={<TemoinForm />} />
            <Route path='edit/:id' element={<TemoinForm />} />
          </Route>

          <Route path='temoignages' element={<Temoignage />} >
            <Route path='list' element={<TemoignagePage />} />
            <Route path='add' element={<TemoignageForm />} />
            <Route path='edit/:id' element={<TemoignageForm />} />
          </Route>

          <Route path='teams' element={<Team />} >
            <Route path='list' element={<TeamPage />} />
            <Route path='add' element={<TeamForm />} />
            <Route path='edit/:id' element={<TeamForm />} />
          </Route>

          <Route path='contacts' element={<Contact />} >
            <Route path='list' element={<ContactPage />} />
          </Route>

          <Route path='stagiaires' element={<Stagiaire />} >
            <Route path='list' element={<StagiairePage />} />
            <Route path='add' element={<StagiaireForm />} />
            <Route path='edit/:id' element={<StagiaireForm />} />
          </Route>

        </Route>
      </Routes>

      {/* <Dashboard/> */}
    </div>
  )
}

export default Administrator;