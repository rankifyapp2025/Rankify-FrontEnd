import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthWrapper } from "./AuthWrapper";
import { toast } from "react-toastify";
import styles from "./Login.module.scss";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (formData.email === "testing@gmail.com" && formData.password === "Pass123") {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successfully");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <AuthWrapper>
      <h4 className={styles.heading}>Welcome to Sneat! 👋</h4>
      <p className={styles.subHeading}>
        Please sign-in to your account and start the adventure
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email or Username
          </label>
          <input
            type="text"
            className={styles.input}
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your email or username"
            autoFocus
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.passwordLabel}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Link to="/auth/forgot-password" className={styles.forgotLink}>
              <small>Forgot Password?</small>
            </Link>
          </div>
          <input
            type="password"
            autoComplete="true"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            name="password"
            placeholder="••••••••••••"
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.signInButton} type="submit">
            Sign in
          </button>
        </div>
      </form>
    </AuthWrapper>
  );
};
