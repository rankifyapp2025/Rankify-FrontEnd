import React, { useState } from "react";
import styles from "./DepartmentManagement.module.scss";
import MainLayout from "../../Components/MainLayout";

const DepartmentManagement = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [status, setStatus] = useState("Active");

  const [permissions, setPermissions] = useState([
    { id: 1, label: "Manage Masters", all: false, canAdd: false, canEdit: false, canDelete: false, canSearch: false },
    { id: 2, label: "Manage Forms", all: false, canAdd: false, canEdit: false, canDelete: false, canSearch: false },
    { id: 3, label: "Manage Reports", all: false, canAdd: false, canEdit: false, canDelete: false, canSearch: false },
    { id: 4, label: "Manage Users", all: false, canAdd: false, canEdit: false, canDelete: false, canSearch: false },
  ]);

  const handleCheckboxChange = (rowId, field) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((row) => {
        if (row.id === rowId) {
          if (field === "all") {
            const newValue = !row.all;
            return {
              ...row,
              all: newValue,
              canAdd: newValue,
              canEdit: newValue,
              canDelete: newValue,
              canSearch: newValue,
            };
          }
          return { ...row, [field]: !row[field] };
        }
        return row;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Department Name:", departmentName);
    console.log("Status:", status);
    console.log("Permissions:", permissions);
  };

  return (
    <MainLayout>
    <div className={styles.pageWrapper}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}> Department management</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="departmentName" className={styles.label}>
              Department Name
            </label>
            <input
              type="text"
              id="departmentName"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className={styles.input}
              placeholder="Enter department name"
              required
            />
          </div>

          <div>
            <h3 className={styles.subHeading}>Permissions</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeader}>
                    <th className={styles.th}>Users</th>
                    <th className={styles.th}>All</th>
                    <th className={styles.th}>Can Add</th>
                    <th className={styles.th}>Can Edit</th>
                    <th className={styles.th}>Can Delete</th>
                    <th className={styles.th}>Can Search</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((row) => (
                    <tr key={row.id}>
                      <td className={styles.td}>{row.label}</td>
                      <td className={styles.td}>
                        <input
                          type="checkbox"
                          checked={row.all}
                          onChange={() => handleCheckboxChange(row.id, "all")}
                        />
                      </td>
                      <td className={styles.td}>
                        <input
                          type="checkbox"
                          checked={row.canAdd}
                          onChange={() => handleCheckboxChange(row.id, "canAdd")}
                        />
                      </td>
                      <td className={styles.td}>
                        <input
                          type="checkbox"
                          checked={row.canEdit}
                          onChange={() => handleCheckboxChange(row.id, "canEdit")}
                        />
                      </td>
                      <td className={styles.td}>
                        <input
                          type="checkbox"
                          checked={row.canDelete}
                          onChange={() => handleCheckboxChange(row.id, "canDelete")}
                        />
                      </td>
                      <td className={styles.td}>
                        <input
                          type="checkbox"
                          checked={row.canSearch}
                          onChange={() => handleCheckboxChange(row.id, "canSearch")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </MainLayout>
  );
};

export default DepartmentManagement
