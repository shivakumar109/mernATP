import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    //console.log(newUser);
    setLoading(true);
    // make HTTP POST req to create new user
    try {
      let res = await fetch("http://localhost:4000/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.status === 201) {
        //user created it shd navigate to users list
        navigate("/users-list");
      } else {
        console.log(res)
        throw new Error("error occurred");
      }
    } catch (err) {
      console.log(err)
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-gray-100 mt-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Add New User</h1>
      {/* Create user form */}
      <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" {...register("name")} className="border border-gray-300 w-full text-lg p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" {...register("email")} className="border border-gray-300 w-full text-lg p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter email address" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="border border-gray-300 w-full text-lg p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-600"
            placeholder="Date of birth"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            type="number"
            {...register("mobileNumber")}
            className="border border-gray-300 w-full text-lg p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter mobile number"
          />
        </div>
        <button type="submit" className="text-xl font-semibold bg-blue-600 text-white px-8 py-4 mt-4 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;