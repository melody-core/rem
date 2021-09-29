import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { DividerProps} from './type';

import './Divider.scss';

const classPrefix = `rem-divider`;

export const Divider =  React.forwardRef<
  HTMLDivElement, 
  DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & 
  DividerProps
>(({
  className = '',
  children = null,
  dashed = false,
  contentPosition = 'center',
  hairline = true,
  ...rest
}, ref)=>{
  const cuclassName = cls(classPrefix,{
    [`${classPrefix}-hairline`]: hairline,
    [`${classPrefix}-center`]: contentPosition === 'center',
    [`${classPrefix}-left`]: contentPosition === 'left',
    [`${classPrefix}-right`]: contentPosition === 'right',
    [`${classPrefix}-dashed`]: dashed,
    [className||'null']: className,
  })
  return (
    <div ref={ref} className={cuclassName} {...rest}>
      {children}
    </div>
  );
})

Divider.propTypes = {
  contentPosition: PropTypes.oneOf(['center', 'left', 'right']),
  hairline: PropTypes.bool,
  dashed: PropTypes.bool
};
Divider.defaultProps = {
  contentPosition: 'center',
  hairline: true,
  dashed: false,
};
export default Divider;