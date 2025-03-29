// hooks/useFilteredUsers.js
import { useState, useMemo } from 'react';

const useFilteredUsers = (initialUsers) => {
  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('loading');
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return { filteredUsers, searchTerm, setSearchTerm };
};

export default useFilteredUsers;