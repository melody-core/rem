import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { TagProps} from './type';

import './Tag.scss';
import { NativeProps } from '../global/type';

const classPrefix = `rem-tag`;

export const Tag =  React.forwardRef<
  HTMLDivElement, 
  DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > & 
  TagProps & 
  NativeProps
>(({
  className = '',
  size = 'medium',
  mark = false,
  plain = false,
  round = false,
  type = 'primary',
  children = null,
  ...rest
}, ref)=>{
  const cuclassName = cls(classPrefix,{
    [`${classPrefix}-size-xs`]: size === 'small',
    [`${classPrefix}-size-lg`]: size === 'large',
    [`${classPrefix}-primary`]: type === 'primary',
    [`${classPrefix}-success`]: type === 'success',
    [`${classPrefix}-warning`]: type === 'warning',
    [`${classPrefix}-danger`]: type === 'danger',
    [`${classPrefix}-plain`]: plain,
    [`${classPrefix}-fill`]: !plain,
    [`${classPrefix}-round`]: round,
    [`${classPrefix}-mark`]: mark,
    [className||'null']: className,
  })
  return (
    <span ref={ref} className={cuclassName} {...rest}>
      {children}
    </span>
  );
})

Tag.propTypes = {
  size : PropTypes.oneOf(['large','medium', 'small']),
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
  mark : PropTypes.bool,
  plain: PropTypes.bool,
  round: PropTypes.bool,
  className: PropTypes.string,
};
Tag.defaultProps = {
  size: 'medium',
  type: 'primary',
  mark: false,
  plain: false,
  round: false,
  className: ''
};
export default Tag;