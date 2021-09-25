import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Button.less';

const Button = ({ className, ...rest }) => {
  return <button className={classnames('Button', className)} {...rest} />;
};

Button.propTypes = {
  className: PropTypes.string,
};
export default Button;
