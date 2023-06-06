import React from "react";
import styles from "../construct/construct.module.scss";

interface Props {
  className: string;
}

const Basket: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path fill="#fff" />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.5 23a1 1 0 100-2 1 1 0 000 2zM20.5 23a1 1 0 100-2 1 1 0 000 2zM1.5 1h4l2.68 15.175c.091.522.342.99.708 1.324.365.334.823.51 1.292.5h9.72c.47.01.927-.166 1.293-.5.365-.334.616-.802.707-1.324l1.6-9.508h-17"
        />
      </svg>
    </div>
  );
};

export default Basket;
