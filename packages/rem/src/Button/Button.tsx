import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ className, ...rest }) => {
  return <button className={classnames('button', className)} {...rest} />;
};

Button.propTypes = {
  className: PropTypes.string,
};
export default Button;
