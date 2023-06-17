import React, { useEffect, useState } from 'react';

const DrawingText = () => {
    const [text, setText] = useState('');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const textToDraw = 'Samrat';

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentLetterIndex === textToDraw.length) {
                clearInterval(interval);
                return;
            }

            setText((prevText) => prevText + textToDraw[currentLetterIndex]);
            setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        }, 200);

        return () => clearInterval(interval);
    }, [currentLetterIndex, textToDraw]);

    return (
        <div className="flex justify-center items-center h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
                <text className="text-4xl animate-typing">{text}</text>
            </svg>
        </div>
    );
};

export default DrawingText;
