import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/UserService/UserService';

interface User {
  name: string;
  communityId: string;
  telephone: string;
  status: boolean;
  id: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then(response => {
        const usersParsed = Object.keys(response.data).map(id => {
          return { uuid: id, ...response.data[id], status: true };
        });
        setUsers(usersParsed);
      })
      .catch(error => {
        console.error(error);
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
