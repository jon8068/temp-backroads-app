import React from "react";

const SocialLink = (props) => {
  const { id, href, target, iClassName, socialLinkClass } = props;
  return (
    <li key={id}>
      <a href={href} target={target} className={socialLinkClass}>
        <i className={iClassName}></i>
      </a>
    </li>
  );
};

export default SocialLink;
