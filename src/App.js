import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Item from './components/item/item'; 
import Menu from './components/menu/menu';
import Formulario from './components/formulario/formulario';


function App() {
  return (
    <div className="App">
            <Menu />
      <Container>
        <Row>
        <Col>
          <Formulario />
        </Col>
        <Col>
          <Item />
          <Item /> 
          <Item /> 
        </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;