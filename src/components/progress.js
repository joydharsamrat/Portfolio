import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Progress = ({ targetValue, isInView, title }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (isInView) {
      const animationDuration = 2000;
      const interval = Math.floor(animationDuration / targetValue);
      let currentProgress = 0;

      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          currentProgress++;
          setProgress(currentProgress);

          if (currentProgress >= targetValue) {
            clearInterval(intervalId);
          }
        }, interval);

        return () => {
          clearInterval(intervalId);
        };
      }, 1500);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setProgress(0);
    }
  }, [targetValue, isInView]);

  return (
    <div>
      <div className="flex gap-2 items-end">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{progress}%</p>
      </div>
      <motion.progress
        className="progress w-56 progress-primary bg-gray-600"
        value={progress}
        max="100"
      />
    </div>
  );
};

export default Progress;
