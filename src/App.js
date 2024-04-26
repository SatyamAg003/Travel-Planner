import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';
import DestinationList
    from './components/DestinationList';
import ContactForm
    from './components/ContactForm';
import {
  
  Routes, Route as RouteElement,
  
} from 'react-router-dom';
import SignIn from './components/SignIn';
function App() {

  return (<>  
    <Navbar/>
  
    <div>
      
      <Routes>
                    <RouteElement path="/"
                        element={<Main />} />
                    <RouteElement path="/contact"
                        element={<ContactForm />} />
                    <RouteElement path="/Destinations"
                        element={<DestinationList />} />
                    <RouteElement path="/SignIn"
                        element={<SignIn/>} />
             
                </Routes>
      <Footer />
  
    
    </div>
    </>

  );
}

export default App;
