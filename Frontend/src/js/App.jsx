//Components
import Login from '../../components/login/login'
import Register from '../../components/register/Register'
import Profile from '../../components/profile/Profile'

//CSS
import '../scss/App.css'
import '../scss/index.css'

function App() {

  return (
    <div className="App">
      <Login emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>
      <Register firstNameLabel={"First Name"} firstNamePlaceholder={"First Name"} lastNameLabel={"Last Name"} lastNamePlaceholder={"Last Name"} emailLabel={"Email"} emailPlaceholder={"Email Adress"} passwordLabel={"Password"} passwordPlaceholder={"Password"} submitButtonText={"Submit"}/>
      <Profile />
    </div>
  )
}

export default App
