import React from 'react';

interface Props {
    className: string;
}

const Telegram: React.FC<Props> = (props) => {
    const { className } = props;

    return (
        <div>
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                fill="none"
                viewBox="0 0 22 20"
            >
                <path
                    fill="#fff"
                    d="M21.935 1.737l-3.32 16.189c-.25 1.142-.903 1.427-1.831.889l-5.058-3.855-2.44 2.427c-.27.28-.497.513-1.017.513l.363-5.326 9.375-8.76c.407-.376-.089-.584-.634-.208L5.784 11.152.794 9.537c-1.085-.35-1.104-1.123.227-1.66L20.536.101c.903-.35 1.694.208 1.4 1.635z"
                />
            </svg>
        </div>
    );
};

export default Telegram;
