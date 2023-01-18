import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const CardBody = React.forwardRef<HTMLDivElement, DivProps>(function CardBody(props, ref) {
  const { className, children, ...other } = props;
  const {
    theme: { cardBody },
  } = useContext(ThemeContext);

  const baseStyle = cardBody.base;

  const cls = classNames(baseStyle, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default CardBody;
