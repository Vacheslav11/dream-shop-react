import React from 'react';

interface Props {
    className: string;
}

const Messenger1: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <div>
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="14"
                fill="none"
                viewBox="0 0 25 14"
            >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M11.978 13.819h1.487s.438-.088.7-.262c.175-.263.175-.613.175-.613s0-1.924.875-2.274c.875-.262 2.013 1.925 3.238 2.712.963.612 1.663.524 1.663.524l3.237-.087s1.75-.088.875-1.487c-.088-.087-.438-.962-2.45-2.799-2.012-1.924-1.75-1.574.7-4.898 1.487-2.011 2.1-3.236 1.925-3.76-.175-.525-1.313-.35-1.313-.35h-3.674s-.263 0-.438.087c-.175.088-.35.438-.35.438s-.613 1.574-1.4 2.886c-1.663 2.799-2.275 2.973-2.538 2.799-.612-.438-.437-1.662-.437-2.45 0-2.71.437-3.848-.788-4.11-.437-.088-.7-.175-1.75-.175-1.312 0-2.45 0-3.062.35-.438.175-.7.7-.525.7.262 0 .787.174 1.05.524.35.525.35 1.662.35 1.662s.175 3.149-.525 3.586c-.525.262-1.138-.262-2.625-2.799a18.906 18.906 0 01-1.313-2.711s-.087-.262-.262-.437C4.54.7 4.278.612 4.278.612h-3.5s-.525 0-.7.263c-.175.175 0 .612 0 .612s2.712 6.385 5.862 9.62c2.8 2.974 6.038 2.712 6.038 2.712z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
};

export default Messenger1;