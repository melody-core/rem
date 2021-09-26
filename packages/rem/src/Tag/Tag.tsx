import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { TagProps } from './type';

import './Tag.scss';
import { NativeProps } from '../global/type';



export const Tag =  React.forwardRef<HTMLDivElement, TagProps & NativeProps>(({
  className = '',
  ...rest
}, ref)=>(
  <div ref={ref} className={cls('wrap', className)} {...rest}/>
));

Tag.propTypes = {
  className: PropTypes.string,
};

export default Tag;