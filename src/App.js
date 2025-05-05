import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Item from './components/item/item'; 
import Menu from './components/menu/menu';
import Formulario from './components/formulario/formulario';
import ButtonMobile from './components/buttonMobile/buttonMobile'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { initAddTodo }  from './reducers/todoSlice'; 

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos?.value || []);
  
  const arr = [
    { 'name': 'caminar al perro 1' },
    { 'name': 'caminar al perro 2' }
  ];

  useEffect(() => {
    arr.forEach(item => {
      console.log("Despachando acción:", initAddTodo(item)); 
      dispatch(initAddTodo(item));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-md-block'> 
            <Formulario />
          </Col>
          <Col xs={12} sm={12}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <ButtonMobile className='float-left' /> 
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                {todos.map((todo, index) => (
                  <Item key={index} name={todo.name} />
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;