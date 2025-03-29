import useFilteredUsers from './hooks/useFilteredUsers';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import './App.css'

const initialUsers = [
  { id: 1, name: 'David Morales', email: 'David@example.com' },
  { id: 2, name: 'Bernardo Morales', email: 'Bernardo@example.com' },
  { id: 3, name: 'Maria Gatica', email: 'Maria@example.com' },
  { id: 4, name: 'Alonso Sandoval', email: 'Alonso@example.com' },
];
function App() {
  const { filteredUsers, searchTerm, setSearchTerm } = useFilteredUsers(initialUsers);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Ejemplo de UseMemo</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App
