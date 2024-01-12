import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "WebSite",
    link: "deepakmajhi.com",
    href: "#",
  },
  {
    social: "Email",
    link: "dmajhi286@gmail.com",
    href: "https://mailto:dmajhi286@gmail.com",
  },
  {
    social: "Github",
    link: "deepak04112002",
    href: "https://github.com/deepak04112002",
  },
  {
    social: "LinkedIn",
    link: "Deepak_NITR",
    href: "https://www.linkedin.com/in/deepak-kumar-majhi-98b948239/",
  },
  {
    social: "Leetcode",
    link: "dmajhi286",
    href: "https://leetcode.com/dmajhi286/",
  },
  {
    social: "GeeksforGeeks",
    link: "dmajhi286",
    href: "https://auth.geeksforgeeks.org/user/dmajhi286",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
