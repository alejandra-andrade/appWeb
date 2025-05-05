import Button from 'react-bootstrap/Button';
import './buttonMobile.scss'

function buttonMobile() {
  return (
    <>
      <Button variant="info" className='btn-addgoal'>Añadir tarea</Button>
    </>
  );
}

export default buttonMobile;