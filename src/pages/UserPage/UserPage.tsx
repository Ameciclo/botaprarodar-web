import React, { useState, useEffect } from 'react';
import User from '../../models/Users/User';
import UserService from '../../services/UserService/UserService';

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
          <li key={user.id}>
            <p>
              NOME <span> {user.name} </span>
            </p>
            <p>
              Comunidade <span>{user.communityId}</span>
            </p>
            <p>
              TELEFONE <span>{user.telephone ? user.telephone : ' - '}</span>
            </p>
            <p>
              STATUS <span>{user.status ? 'Ativo' : 'Inativo'}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
