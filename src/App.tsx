import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';

function App() {
  return (
    <Container fixed sx={{ py: 4 }}>
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default App;
