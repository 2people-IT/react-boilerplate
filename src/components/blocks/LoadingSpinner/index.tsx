import React from 'react';
import classNames from 'classnames/bind';

import styles from './style.module.scss';

const cx = classNames.bind(styles);

interface LoadingSpinnerProps {
  fullSize?: boolean;
  style?: React.CSSProperties;
  small?: boolean;
  white?: boolean;
}

const LoadingSpinner = ({ fullSize = false, style = {}, small = false, white = false }: LoadingSpinnerProps) => {
  const spinnerInnerClass = cx({
    spinner__inner: true,
    spinner__inner_small: small,
    spinner__inner_white: white,
  });

  return (
    <div
      className={styles.spinner}
      style={{
        height: fullSize ? '100vh' : 'auto',
        ...style,
      }}
    >
      <div className={styles.spinnerContainer}>
        <div className={spinnerInnerClass} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
