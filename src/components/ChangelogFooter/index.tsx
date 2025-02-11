import React from "react";
import styles from "./styles.module.css";

export default function ChangelogFooter(): JSX.Element {
  return (
    <footer className={styles.changelogFooter}>
      <div className={styles.mainContent}>
        <div className={styles.ctaColumn}>
          <h3>Quickly top up any canisters 100 at a time</h3>
          <p>icptopup.com is the fastest way to top up canisters on ICP.</p>
          <a
            target="_blank"
            href="https://icptopup.com"
            className={styles.ctaButton}
          >
            Top-Up Now
          </a>
        </div>
        <div className={styles.ctaColumn}>
          <h3>Monitor and automate top-ups</h3>
          <p>
            cycleops.dev manages canisters for the best developer teams on ICP.
          </p>
          <a
            target="_blank"
            href="https://cycleops.dev"
            className={styles.ctaButton}
          >
            Monitor & Automate Top-Ups
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <img src={"/icp.png"} alt="icp" style={{ height: "25px" }} />
      </div>
    </footer>
  );
}
