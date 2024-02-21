import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container, Search} from 'semantic-ui-react';
import NavBar from './Components/NavBar';
import FilmList from './Components/FilmList';
import Characters from './Components/Characters';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Container>
            <Routes>
                  <Route exact path='/' element={<Search/>}/>
                  <Route exact path='/FilmList' element={<FilmList/>}/>
                  <Route exact path="/Characters" element={<Characters characterUrl ='https://www.swapi.tech/api/people/'/>} />
              </Routes>
          </Container>
      </Router>
    </div>
  );
}

export default App;
