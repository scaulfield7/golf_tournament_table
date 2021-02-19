import './App.css';
import GolfDataList from './components/GolfDataList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return(
    <header>
      <h3><strong>Golf</strong></h3>
    </header>
  );
}

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <GolfDataList />
      </div>
    </Container>
  );
}

export default App;
