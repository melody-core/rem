import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { BadgeProps } from './type';

import './Badge.scss';

const classPrefix = `rem-badge`;

export const Badge =  React.forwardRef<
HTMLDivElement, 
  DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & 
  BadgeProps
>(({
  content = '',
  color,
  dot = false,
  max,
  children,
  ...rest
}, ref)=>{
  const cuclassName = cls(classPrefix,{
    // [`${classPrefix}-size-xs`]: size === 'small',
  })
  return (
    <div ref={ref} className={cuclassName} {...rest}>
      {children}
    </div>
  );
})

Badge.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  color: PropTypes.string,
  dot: PropTypes.bool,
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Badge.defaultProps = {
  dot: false,
};
export default Badge;