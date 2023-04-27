import { useState } from 'react';
import { AddUserForm } from './AddUser';
import { EditUserDataForm } from './EditUser';

export const App = () => {
  // State of users, example:
  const [data, setData] = useState([
    { id: 1, name: 'John', email: 'test1@mail.com', age: 30 },
    { id: 2, name: 'Mary', email: 'test2@mail.com', age: 25 },
    { id: 3, name: 'Bob', email: 'test3@mail.com', age: 40 },
  ]);

  //   initial values (Form fields)
  const user = {
    name: '',
    age: '',
    email: '',
  };

  //Edit user
  const [editUserID, setEditUserID] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  //   create new user
  const handleSubmit = (data, { resetForm }) => {
    const newUser = {
      ...data,
      id: Date.now(),
    };
    setData(prev => [...prev, newUser]);
    resetForm();
  };

  //   delete user
  const deleteUser = id => {
    const updatedData = data.filter(user => user.id !== id);
    setData(updatedData);
  };

  //   edit userInfo
  const editUserInfo = (newUserInfo, id) => {
    const updatedUser = data.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: newUserInfo.name,
          email: newUserInfo.email,
          age: newUserInfo.age,
        };
      }
      return user;
    });
    setData(updatedUser);
    setShowEditForm(false);
  };

  //Sort by different values

  //   sort by numbers
  const sortByIdOrAge = type => {
    if (type === 'ascId') {
      const sortedData = [...data].sort((a, b) => a.id - b.id);
      setData(sortedData);
    }
    if (type === 'descId') {
      const sortedData = [...data].sort((a, b) => b.id - a.id);
      setData(sortedData);
    }
    if (type === 'ascAge') {
      const sortedData = data.sort((a, b) => Number(a.age) - Number(b.age));
      setData([...sortedData]);
    }
    if (type === 'descAge') {
      const sortedData = data.sort((a, b) => Number(b.age) - Number(a.age));
      setData([...sortedData]);
    }
  };

  //sort by strings
  const sortNameOrEmail = type => {
    if (type === 'ascName') {
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    }
    if (type === 'descName') {
      const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setData(sortedData);
    }
    if (type === 'ascEmail') {
      const sortedData = [...data].sort((a, b) =>
        a.email.localeCompare(b.email)
      );
      setData(sortedData);
    }
    if (type === 'descEmail') {
      const sortedData = [...data].sort((a, b) =>
        b.email.localeCompare(a.email)
      );
      setData(sortedData);
    }
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                ID
                <button onClick={() => sortByIdOrAge('ascId')}>Sort asc</button>
                <button onClick={() => sortByIdOrAge('descId')}>
                  Sort desc
                </button>
              </th>
              <th>
                Name
                <button onClick={() => sortNameOrEmail('ascName')}>
                  Sort asc
                </button>
                <button onClick={() => sortNameOrEmail('descName')}>
                  Sort desc
                </button>
              </th>
              <th>
                Email
                <button onClick={() => sortNameOrEmail('ascEmail')}>
                  Sort asc
                </button>
                <button onClick={() => sortNameOrEmail('descEmail')}>
                  Sort desc
                </button>
              </th>
              <th>
                Age
                <button onClick={() => sortByIdOrAge('ascAge')}>
                  Sort asc
                </button>
                <button onClick={() => sortByIdOrAge('descAge')}>
                  Sort desc
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <>
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.age}</td>
                  <td>
                    <button onClick={() => deleteUser(row.id)}>Delete</button>
                  </td>
                  <td>
                    <button
                      onClick={() => (
                        setShowEditForm(true) & setEditUserID(row.id)
                      )}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                {showEditForm && editUserID === row.id ? (
                  <EditUserDataForm editUserInfo={editUserInfo} row={row} />
                ) : (
                  <></>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <AddUserForm user={user} handleSubmit={handleSubmit} />
    </>
  );
};
