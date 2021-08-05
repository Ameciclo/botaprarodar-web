import React, { useState, useEffect } from 'react';
import User from '../../models/Users/User';
import UserService from '../../services/UserService/UserService';
import UserCard from './components/UserCard/UserCard';
import './UserPage.scss';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then(res => {
        setUsers(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <ul data-testid="userList">
        {users?.map(user => (
          <UserCard user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
