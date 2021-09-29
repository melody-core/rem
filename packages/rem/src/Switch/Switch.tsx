import React, { FC } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Switch.scss';

const Switch: FC<Record<any, any>> = ({ className, ...rest }) => {
  return <div className={classnames('wrap', className)} {...rest} />;
};

Switch.propTypes = {
  className: PropTypes.string,
};
export default Switch;
