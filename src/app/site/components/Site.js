import Home from './Home'
import { SiteProvider } from '../contexts/SiteContext'
import { Routes,Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
function Site() {
    
  return (
    <div>
        <SiteProvider>
          <Routes>
            <Route path='/' element={<Home/>}>
              <Route path='/' element={<HomePage/>}/>
            </Route>
          </Routes>
            {/* <Home/> */}
        </SiteProvider>
    </div>
  )
}

export default Site
