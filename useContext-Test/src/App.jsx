import { UserProvider } from './hooks/useUser';
import UserProfile from './components/UserProfile';
import EditButton from './components/EditButton';
import './App.css'

function App() {
  return (
    <UserProvider>
      <div >
        <UserProfile />
        <EditButton />
      </div>
    </UserProvider>
  );
}

export default App;