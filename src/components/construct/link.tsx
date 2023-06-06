import React from "react";

interface Props {
  className: string;
  src: any;
}

const Link: React.FC<Props> = (props) => {
  const { className, src } = props;

  return (
    <p>
      <a href="#">
        <img src={src} alt="" className={className} />
      </a>
    </p>
  );
};

export default Link;
