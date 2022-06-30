import React, { useState } from 'react';

import UserList from './components/User/UserList';
import AddUser from './components/User/AddUser';

const App = () => {
  const [userList, SetUserList] = useState([]);
  const addUserHandler = (enteredUserInfo) => {
    SetUserList((prevUserList) => {
      return [...prevUserList, { ...enteredUserInfo, id: Date.now() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
