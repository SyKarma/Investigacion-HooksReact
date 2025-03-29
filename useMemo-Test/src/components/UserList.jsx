// components/UserList.jsx
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {users.length === 0 ? (
        <p>No se encontraron usuarios</p>
      ) : (
        users.map(user => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserList;