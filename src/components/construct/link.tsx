import React from "react";

interface Props {
  className: string;
  src: any;
}

const Link: React.FC<Props> = (props) => {
  const { className, src } = props;

  return (
    <a href="#">
      <img src={src} alt="icon" className={className} />
    </a>
  );
};

export default Link;
