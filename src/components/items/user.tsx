import React from "react";

interface Props {
  id: string;
}

const User = ({ id }: Props) => {
  switch (id) {
    case "svg":
      return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path fill="#fff" />
              <path
                stroke="#333"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 23c1.333-2.167 5.4-7 11-7s9.667 4.833 11 7"
              />
              <circle cx="12" cy="8" r="7" stroke="#333" strokeWidth="2" />
            </svg>
      );
    default:
      return null;
  }
};

export default User;
