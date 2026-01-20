import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    age: "",
    password: "",
    country: "",
    email: "",
  });

  // PREFILL form from localStorage
  useEffect(() => {
    const storedData = {
      id: localStorage.getItem("id") || "",
      name: localStorage.getItem("name") || "",
      age: localStorage.getItem("age") || "",
      password: localStorage.getItem("password") || "",
      country: localStorage.getItem("country") || "",
      email: localStorage.getItem("email") || "",
    };
    setFormdata(storedData);
  }, []);

  // handle input change
  const handleClicked = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // UPDATE form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.id) return alert("No ID to update");

    axios
      .put(
        `https://6968773c69178471522a8ee4.mockapi.io/userdata/${formdata.id}`,
        formdata
      )
      .then((res) => {
        console.log("Updated:", res.data);
        // Navigate back to Get page
        navigate("/get");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="grid justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl px-5 py-5 my-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center text-gray-800 mb-1 capitalize">
          Update Data
        </h2>

        <div className="space-y-2.5">
          {/* NAME */}
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleClicked}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleClicked}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleClicked}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* AGE */}
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handleClicked}
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* COUNTRY */}
          <select
            name="country"
            value={formdata.country}
            onChange={handleClicked}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select Country</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>
        </div>

        <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-lg font-semibold">
          Save Update
        </button>
      </form>
    </div>
  );
}

export default Update;
