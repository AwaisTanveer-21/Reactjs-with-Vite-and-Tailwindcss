import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Get = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // GET all data
  async function handleSubmit() {
    try {
      const res = await axios.get(
        "https://6968773c69178471522a8ee4.mockapi.io/userdata"
      );
      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(()=>{
    handleSubmit()
  },[])

  // DELETE single row
  const handleDelete = (id) => {
    axios
      .delete(`https://6968773c69178471522a8ee4.mockapi.io/userdata/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err.message));
  };

  // Save row into localStorage for Update page
  function dataIntoStorage(id, name, age, password, country, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("password", password);
    localStorage.setItem("country", country);
    localStorage.setItem("email", email);
  }

  // Navigate to Update page
  const handleEdit = (item) => {
    navigate("/update");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Users Data</h1>

      <div className="flex flex-col items-center gap-6">
        {/* Table */}
        <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Password</th>
                <th className="p-3">Email</th>
                <th className="p-3">Age</th>
                <th className="p-3 text-center">Edit</th>
                <th className="p-3 text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.password}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.age}</td>

                  <td className="p-3 text-center">
                    <Link to="/update">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                        onClick={() =>
                          dataIntoStorage(
                            item.id,
                            item.name,
                            item.age,
                            item.password,
                            item.country,
                            item.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>

                  <td className="p-3 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex gap-8">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            Get Data
          </button>

          <Link to="/loginpage">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow">
              Go to the login form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Get;
