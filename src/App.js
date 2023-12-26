import './App.css';
import UserDataModal from './User/UserDataModal';
import UserForm from './User/UserForm';
import { useState } from './custom-hooks/useState';

const App = () => {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const handleClose = () => {
    setShow(false);
  }

  const onFormSubmit = (name, email) => {
    setFormData({
      name: name,
      email: email
    })
    setShow(true);
  }

  return (
    <div >
      <UserForm onFormSubmit={onFormSubmit}/>
      <UserDataModal show={show} handleClose={handleClose} userData = {formData}/>
    </div>
  );
}

export default App;
