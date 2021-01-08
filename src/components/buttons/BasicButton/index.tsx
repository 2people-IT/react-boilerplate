import * as React from 'react';
import classNames from 'classnames/bind';
import LoadingSpinner from 'components/blocks/LoadingSpinner';

import styles from './style.module.scss';

const cx = classNames.bind(styles);

enum BasicButtonTypes {
  default = '',
  primary = 'primary',
  transparent = 'transparent',
}

interface BasicButtonProps {
  onClick: () => void;
  text: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: BasicButtonTypes;
}

const BasicButton = ({
  onClick,
  text,
  style = {},
  isDisabled = false,
  isLoading = false,
  type = BasicButtonTypes.default,
}: BasicButtonProps) => {
  const classname = cx({
    basicButton: true,
    [`basicButton_${type}`]: type,
  });

  return (
    <button className={classname} disabled={isDisabled} onClick={onClick} type="button" style={style}>
      {isLoading ? <LoadingSpinner small /> : text}
    </button>
  );
};

export default BasicButton;
