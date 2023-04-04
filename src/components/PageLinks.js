import React from "react";
import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = () => {
  pageLinks.map((pageLink) => {
    return (
      <PageLink key={pageLink.id} {...pageLink} pageLinkClass={"footer-link"} />
    );
  });
};

export default PageLinks;
