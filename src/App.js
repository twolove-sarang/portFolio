// import './App.css';
import { Outlet } from 'react-router-dom';
import FooterSection from './component/FooterSection';
import NavbarSection from './component/NavbarSection';

function App() {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default App;
