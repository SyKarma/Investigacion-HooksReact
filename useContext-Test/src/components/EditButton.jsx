import { useUser } from '../hooks/useUser';

const EditButton = () => {
  const { setUser } = useUser();
  
  const handleClick = () => {
    const newName = prompt('Ingresa tu nuevo nombre:', 'David');
    if (newName) setUser({ name: newName });
  };

  return (
    <button onClick={handleClick} style={{ padding: '8px' }}>
      Cambiar Nombre
    </button>
  );
};

export default EditButton;