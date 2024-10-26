import { Nav } from './components/Nav';
import { AllRoutes } from './components/All_Routes';
import { Footer } from './components/Footer';

import Headroom from 'react-headroom';
import './App.css';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          <Headroom>
            <Nav />
          </Headroom>
          <AllRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
