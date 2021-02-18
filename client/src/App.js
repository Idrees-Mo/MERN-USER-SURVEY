import UserList from './components/UserList'
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1>user survye</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;