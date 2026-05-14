import { useEffect, useState } from "react";
import {useNavigate} from 'react-router'

function UsersList() {
  let [users, setUsers] = useState([]);
  let navigate=useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:4000/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          //extract json data
          let resObj = await res.json();
          //update the state
          setUsers(resObj.payload);
        } else {
        }
      } catch (err) {
        //set error
      }
    }

    getUsers();
  }, []);


  //go to user
  const gotoUser=(userObj)=>{
    navigate("/user",{state:{user:userObj}})
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">List of Users</h1>
      {users?.length === 0 ? (
         <p className="text-center text-gray-500 text-xl">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users?.map((userObj) => (
            <div key={userObj.email} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center text-center" onClick={()=>gotoUser(userObj)}>
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-inner">
                {userObj.name?.charAt(0).toUpperCase()}
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-1">{userObj.name}</p>
              <p className="text-md text-gray-500">{userObj.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;