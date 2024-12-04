import React, { useState, useEffect } from 'react';
import styles from './DailyCaloriesFormBackground.module.css';

import strawberry from '../../../images/pictures/Desktop/desktop-strawberry-1x.png';
import banana from '../../../images/pictures/Desktop/desktop-banana-1x.png';
import leaves from '../../../images/pictures/Tablet/tablet-leafs-1x.png';
import leavesDesktop from '../../../images/pictures/Desktop/desktop-leaves-flipped-1x.png';

function DailyCaloriesFormBackground({ children }) {
  const [clientWidth, setclientWidth] = useState(0);

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    setclientWidth(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.background}>
      {clientWidth <= 767 ? null : clientWidth <= 1024 ? (
        <>
          <div className={styles.leaves}>
            <img src={leaves} alt="Leaves" />
          </div>

          <div className={styles.banana}>
            <img src={banana} alt="Banana" />
          </div>

          <div className={styles.strawberry}>
            <img src={strawberry} alt="Strawberry" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.leaves}>
            <img src={leavesDesktop} alt="Leaves" />
          </div>

          <div className={styles.banana}>
            <img src={banana} alt="Banana" />
          </div>

          <div className={styles.strawberry}>
            <img src={strawberry} alt="Strawberry" />
          </div>
        </>
      )}
      {children}
    </section>
  );
}

export default DailyCaloriesFormBackground;
