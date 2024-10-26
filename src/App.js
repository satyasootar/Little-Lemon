import { Nav } from './components/Nav';
import { AllRoutes } from './components/All_Routes';
import { Footer } from './components/Footer';

import Headroom from 'react-headroom';
import './App.css';

function App() {
  return (
    <>
      <Headroom>
        <Nav />
      </Headroom>

      
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
