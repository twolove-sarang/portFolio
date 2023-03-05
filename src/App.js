// import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import FooterSection from './component/FooterSection';
import NavbarSection from './component/NavbarSection';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <NavbarSection />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <FooterSection />
    </>
  );
}

export default App;
