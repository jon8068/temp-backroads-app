import React from "react";

const PageLink = (props) => {
  const { id, href, text, pageLinkClass } = props;
  return (
    <li key={id}>
      <a href={href} className={pageLinkClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
