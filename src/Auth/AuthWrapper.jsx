import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthWrapper.module.scss';

export const AuthWrapper = ({ children }) => {
  return (
    <div className={styles.containerXxl}>
      <div className={styles.authenticationWrapper}>
        <div className={styles.authenticationInner}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.appBrand}>
                {/* <Link
                  aria-label="Go to Home Page"
                  to="/"
                  className={styles.appBrandLink}
                >
                  <span className={styles.appBrandLogo}>
                    <img src="/assets/img/sneat.svg" alt="sneat-logo" />
                  </span>
                  <span className={styles.appBrandText}>Sneat</span>
                </Link> */}
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
