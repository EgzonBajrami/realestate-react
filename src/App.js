
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import PublicRoutes from './Lib/Routes/PublicRoutes';
import PrivateRoutes from './Lib/Routes/PrivateRoutes'
import {routeData} from './Lib/Routes/RouteData'
import {Provider} from 'react-redux';
import {store} from './Lib/store/store.js'

function App() {
  return (
   <>
   <Provider store={store}> 
   <Header />
   <Router> 
   <Routes>
    {routeData.public.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
  ))}
     {routeData.private.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PrivateRoutes>{elem.element}</PrivateRoutes>} />
  ))}
   </Routes>
   </Router>
   </Provider>
   </>
  );
}

export default App;
