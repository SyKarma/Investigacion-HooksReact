import { useUser } from '../hooks/useUser';

const UserProfile = () => {
  const { user } = useUser();
  return (
    <div >
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user.name}</p>
    </div>
  );
};

export default UserProfile;