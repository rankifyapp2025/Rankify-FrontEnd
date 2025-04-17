import React, { useState } from "react";
import styles from "./ReferralManagement.module.scss";

const ReferralManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [referrals, setReferrals] = useState([
    {
      id: 1,
      date: "10/12/2024",
      personName: "Rahul",
      number: "123457899",
      byReferral: "Sunil",
    },
    {
      id: 2,
      date: "12/10/2024",
      personName: "Kapil",
      number: "1234567899",
      byReferral: "Sunil",
    },
  ]);

  const handleSearch = () => {
    console.log("Search clicked with query:", searchQuery);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Referral Management</h2>

        <div className={styles.searchWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeadRow}>
                <th className={styles.th}>Sr. No.</th>
                <th className={styles.th}>Referral Date</th>
                <th className={styles.th}>Referral Person Name</th>
                <th className={styles.th}>Number</th>
                <th className={styles.th}>By Referral</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral) => (
                <tr key={referral.id} className={styles.tableRow}>
                  <td className={styles.td}>{referral.id}</td>
                  <td className={styles.td}>{referral.date}</td>
                  <td className={styles.td}>{referral.personName}</td>
                  <td className={styles.td}>{referral.number}</td>
                  <td className={styles.td}>{referral.byReferral}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralManagement