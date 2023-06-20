import React from "react";

interface Props {
  className: string;
}

const Rating: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <g stroke="#333" strokeLinejoin="round" strokeWidth="2" opacity="0.3">
          <path d="M1 1v22h8V1H1zM15 5v18h8V5h-8z" />
        </g>
      </svg>
    </div>
  );
};

export default Rating;
