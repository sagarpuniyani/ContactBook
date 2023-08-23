import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Allcontacts from './modules/allcontacts/pages/Allcontact';
import Createcontact from './modules/createcontact/pages/Createcontact';
import Readcontact from './modules/readcontact/pages/Readcontact';
import Updatecontact from './modules/updatecontact/pages/Updatecontact';
import Removecontact from './modules/removecontact/pages/Removecontact';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <p> Contact Book App  </p>
    <Container >

      <Router>
      <Routes>
        <Route path="/" element={<Allcontacts />} />
        <Route path="/createcontact" element={<Createcontact />} />
        <Route path="/getcontact" element={<Readcontact /> } />
        <Route path="/updatecontact" element={<Updatecontact /> } />
        <Route path="/removecontact" element={<Removecontact /> } />
      </Routes>
    </Router>
    </Container>
    </>
  );
}

export default App;
