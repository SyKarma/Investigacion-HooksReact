// components/UserItem.jsx
const UserItem = ({ user }) => {
    return (
      <div style={{
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #eeee',
        borderRadius: '4px'
      }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };
  
  export default UserItem;