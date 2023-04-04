import React from "react";
import PageLink from "./PageLink";
import { pageLinks, socialLinks } from "../data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => {
          return (
            <PageLink
              key={pageLink.id}
              {...pageLink}
              pageLinkClass={"footer-link"}
            />
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              socialLinkClass={"footer-icon"}
            />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
