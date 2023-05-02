import { useState } from 'react';
import styles from './Snowflake.module.css';

const MIN_DURATION = 3; // 애니메이션 최소 지속 시간

interface SnowflakeProps {
  makeSnowflake: () => void;
  removeSnowflake: () => void;
  n: number;
}
const Snowflake: React.FC<SnowflakeProps> = ({ makeSnowflake, removeSnowflake, n }) => {
  console.log('생성');
  const [animationProps, setAnimationProps] = useState({
    left: `${Math.random() * window.screen.width}px`,
    animationDuration: Math.random() * 20 + MIN_DURATION,
    animationDelay: Math.random() * 10,
    opacity: Math.random(),
  });

  setTimeout(() => {
    removeSnowflake();
    console.log(n);

    // makeSnowflake();
  }, (animationProps.animationDuration + animationProps.animationDelay) * 1000);

  const { left, animationDuration, animationDelay, opacity } = animationProps;
  return (
    <div
      className={styles.snowflake}
      style={{ left, animationDuration: `${animationDuration}s`, animationDelay: `${animationDelay}s`, opacity }}
    ></div>
  );
};

export default Snowflake;
