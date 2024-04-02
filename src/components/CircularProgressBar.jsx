import React, { useState, useEffect } from 'react';
import '../css/CircularProgressBar.css'; // Import CSS file for styling
export default function CircularProgressBar({ radius, progress }) {
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [progress, circumference]);

    return (
        <svg className="progress-ring firstCircle" width={radius * 2.4} height={radius * 2.4}>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#953072" />
                    <stop offset="100%" stopColor="#46309f" />
                </linearGradient>
            </defs>
            <circle
                className="progress-ring-circle"
                strokeWidth="13"
                stroke="#ccc"
                fill="transparent"
                r={radius}
                cx={radius}
                cy={radius}
            />
            <circle
                className="progress-ring-circle secondCircle"
                strokeWidth="14"
                fill="transparent"
                r={radius}
                cx={radius}
                cy={radius}
                style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                    transition: 'stroke-dashoffset 2s ease 0s',
                    strokeLinecap: 'round',
                }}
            />
            {/* Display progress percentage in the center */}
            <text x="50%" y="55%" textAnchor="middle" fill="#000" fontSize="19px" fontWeight="900" className='noStroke respText'>
                {progress}%
            </text>
        </svg>
    );
};
