import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Allcontacts from './modules/allcontacts/pages/Allcontact';
import Createcontact from './modules/createcontact/pages/Createcontact';
import Readcontact from './modules/readcontact/pages/Readcontact';
import Updatecontact from './modules/updatecontact/pages/Updatecontact';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <Container >
    <h2> Contact Book App  </h2>
      {/* Different Routers  */}
      <Router>
      <Routes>
        <Route path="/" element={<Allcontacts />} />
        <Route path="/createcontact" element={<Createcontact />} />
        <Route path="/getcontact" element={<Readcontact /> } />
        <Route path={`/updatecontact/:name`} element={<Updatecontact /> } />
      </Routes>
    </Router>
    </Container>
    </>
  );
}

export default App;
