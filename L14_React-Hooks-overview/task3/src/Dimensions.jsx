import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="dimensions">{`${demensions.width}px - ${demensions.height}px`}</div>;
};

export default Dimensions;
