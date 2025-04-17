import React, { useState } from "react";
import styles from "./UserManagement.module.scss";
import { useNavigate } from "react-router-dom";

 const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate()
  const [users, setUsers] = useState([
    { id: 1, username: "Rajesh", department: "Account", status: "Active" },
    { id: 2, username: "Rohit", department: "Marketing", status: "In-Active" },
  ]);

  const handleSearch = () => {
    console.log("Search clicked with query:", searchQuery);
  };

  const handleAdd = () => {
    navigate("/multi-user")
  };

  const handleEdit = (userId) => {
    console.log("Edit user with ID:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Delete user with ID:", userId);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}> User Management</h2>

        <div className={styles.controls}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className={styles.searchBtn}>
            Search
          </button>
          <button onClick={handleAdd} className={styles.addBtn}>
            Add
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Sr. No.</th>
                <th>Username</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={styles.tableRow}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.department}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className={styles.editBtn}
                    >
                      Edit
                    </button>
                    /
                    <button
                      onClick={() => handleDelete(user.id)}
                      className={styles.deleteBtn}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement