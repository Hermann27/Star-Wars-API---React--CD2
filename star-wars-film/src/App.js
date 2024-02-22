import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container } from 'semantic-ui-react';
import './App.css';
import FilmList from './Components/FilmList';
import Search from './Components/Search';
import NavBar from './Components/NavBar';
import Characters from './Components/Characters';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
         <NavBar/>
         <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/FilmList" element={<FilmList/>} />
              <Route exact path="/Characters" element={<Characters characterUrl ='https://www.swapi.tech/api/people/'/>} />
              <Route exact path="/Search" element={<Search />} />
            </Routes>           
         </Container>
      </Router>
    </>
  );
}

export default App;