import axios from "axios";
import React, { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginFoam = () => {

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    country: "",
  });
  const navigate=useNavigate()

  
function handleSubmit(e){

 e.preventDefault();

axios
  .post("https://6968773c69178471522a8ee4.mockapi.io/userdata", formdata)
  .then((res) => {
    console.log(res.data);

    setFormdata({
      name: "",
      email: "",
      age: "",
      password: "",
      country: "",
    });

navigate("/get")

  })
  .catch((err) => {
    console.log("api address incorrect", err);
  });
}

  const clicked = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };





  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4 relative ">
      <form className="w-full max-w-sm bg-white rounded-2xl shadow-xl px-5 py-5 my-6"  onSubmit={handleSubmit}>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-3 text-sm">
          Fill in your details below
        </p>

        <div className="space-y-2.5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name :
            </label>
            <input
              name="name"
              value={formdata.name}
              onChange={clicked}
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg" required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address :
            </label>
            <input
              name="email"
              
              value={formdata.email}
              onChange={clicked}
              type="email"
              placeholder="abc123@email.com"
              className="w-full px-3 py-2 border rounded-lg" required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password :
            </label>
            <input
              name="password"
              value={formdata.password}
              onChange={clicked} required
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age :
            </label>
            <input 
              name="age" required
              value={formdata.age}
              onChange={clicked}
              type="number"
              placeholder="Enter your age"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country :
            </label>
            <select
              name="country" required
              value={formdata.country}
              onChange={clicked}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="selectcountry"
            >
              <option ></option>
              <option >Pakistan</option>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>France</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Netherlands</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Denmark</option>
              <option>Switzerland</option>
              <option>United Arab Emirates</option>
              <option>Saudi Arabia</option>
              <option>China</option>
              <option>Japan</option>
              <option>South Korea</option>
            </select>
          </div>
        </div>

        <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-lg font-semibold">
          Sign Up
        </button>

      </form>

<div className="grid gap-12 mx-12">

<div><h1>name : {formdata.name}</h1></div>
<div><h1>password : {formdata.password}</h1></div>
<div>
  <h1>email :  {formdata.email}</h1>
</div>
<div><h1>age :  {formdata.age}</h1></div>
<div><h1>country : {formdata.country}</h1></div>
</div>

    </div>
  );
};

export default LoginFoam;


