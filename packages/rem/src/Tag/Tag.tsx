import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { TagProps, TagTypes, SizeTypes } from './type';

import './Tag.scss';
import { NativeProps } from '../global/type';

const classPrefix = `rem-tag`;

export const Tag =  React.forwardRef<HTMLDivElement, TagProps & NativeProps>(({
  className = '',
  size = SizeTypes.medium,
  mark = false,
  plain = false,
  round = false,
  closeable = false,
  type =  TagTypes.default,
  style = {},
  ...rest
}, ref)=>{
  
  return (
    <span ref={ref} className={cls(classPrefix, className)} {...rest}/>
  );
})

Tag.propTypes = {
  className: PropTypes.string,
};

export default Tag;