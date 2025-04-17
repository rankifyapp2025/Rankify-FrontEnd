import React, { useState } from "react";
import styles from "./MultiUserPage.module.scss";
import { useNavigate } from "react-router-dom";

const MultiUserPage = () => {
  const [department, setDepartment] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [permission, setPermission] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department,
      username,
      password,
      permission,
      confirmPassword,
      status,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.heading}> Multi User Management</h2>
        <h3 className={styles.subHeading}> Add User</h3>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Add/Edit USER MASTER</h4>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="department" className={styles.label}>
                Department
              </label>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className={styles.select}
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                placeholder="Enter username"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter password"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="permission" className={styles.label}>
                Permission
              </label>
              <input
                type="text"
                id="permission"
                value={permission}
                onChange={(e) => setPermission(e.target.value)}
                className={styles.input}
                placeholder="Enter permission level"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm password"
                required
              />
            </div>


            <div>
              <button type="submit" className={styles.button}>
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiUserPage