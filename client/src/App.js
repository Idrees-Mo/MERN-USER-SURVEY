import UserForm from './components/userForm/UserForm'
import './App.css';
import UserList from './components/user/UserList';

function App() {
  return (
    <div className="container">
      <div className="form">
        <UserForm />
      </div>
      <div className="main">
        <UserList />
      </div>
    </div>

  );
}

export default App;