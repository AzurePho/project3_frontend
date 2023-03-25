import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../consts";
import "../Index.css";
import "../style/Auth.css";
import { Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialFormData = {
    email: "admin@gmail.com",
    password: "adminpassword",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const { data } = await axios.post(`${API_URL}/login`, formData);
      console.log(data.token);
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.payload.id);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      navigate("/drinks");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="viewLogin">
      <h2>Login</h2>
      {error && <h4 className="alert-failure">{error}</h4>}

      <form className="auth-form" onSubmit={onSubmit}>
        <input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />

        <Button type="submit">Login!</Button>
      </form>
    </div>
  );
};

export default Login;
