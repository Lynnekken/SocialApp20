//Components

import Gesuche from '../Components/SeekAndFind/Gesuche'
import Angebot from '../Components/SeekAndFind/Angebot'
import Login from '../../components/login/login'
import Register from '../../components/register/Register'


//CSS
import '../scss/App.css'
import '../scss/index.css'

function App() {

  return (
    <div className="App">

      <Gesuche/>
      <Angebot/>
      <Login emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>
      <Register firstNameLabel={"First Name"} firstNamePlaceholder={"First Name"} lastNameLabel={"Last Name"} lastNamePlaceholder={"Last Name"} emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>

    </div>
  );
}

export default App
