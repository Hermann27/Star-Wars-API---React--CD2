import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import NavBar from './Components/NavBar';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Container>
            <Routes>
                <Route exact path='/'>

                </Route>
            </Routes>
          </Container>
      </Router>
    </div>
  );
}

export default App;
