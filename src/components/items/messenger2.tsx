import React from 'react';

interface Props {
    className: string;
}

const Messenger2: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <div>
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="25"
                fill="none"
                viewBox="0 0 17 25"
            >
                <path
                    fill="#fff"
                    d="M7.27 17.61c-1.939-.203-3.686-.68-5.182-1.85-.186-.146-.377-.286-.547-.449-.655-.629-.72-1.349-.203-2.091.444-.636 1.188-.805 1.961-.44.15.07.293.158.43.253 2.788 1.916 6.618 1.969 9.417.086.277-.212.573-.386.917-.474.668-.172 1.29.074 1.65.658.409.667.403 1.319-.101 1.837-.774.794-1.705 1.37-2.739 1.77-.978.38-2.05.57-3.11.697.16.174.236.26.336.36 1.44 1.447 2.886 2.887 4.32 4.338.49.494.591 1.107.322 1.682-.294.628-.953 1.042-1.599.998-.41-.029-.728-.232-1.012-.518-1.086-1.093-2.193-2.166-3.257-3.28-.31-.324-.459-.263-.732.019A217.722 217.722 0 014.82 24.54c-.502.495-1.099.584-1.68.301-.62-.3-1.013-.931-.982-1.565.02-.43.232-.757.526-1.051 1.425-1.423 2.846-2.85 4.267-4.274.094-.095.182-.195.318-.342z"
                />
                <path
                    fill="#fff"
                    d="M8.45 12.654c-3.457-.012-6.292-2.878-6.272-6.34C2.198 2.811 5.035-.01 8.526 0c3.499.01 6.307 2.872 6.29 6.41-.018 3.455-2.873 6.256-6.366 6.244zm3.143-6.333A3.082 3.082 0 008.5 3.231 3.086 3.086 0 005.402 6.36a3.082 3.082 0 003.115 3.065 3.075 3.075 0 003.075-3.103z"
                />
            </svg>
        </div>
    );
};

export default Messenger2;