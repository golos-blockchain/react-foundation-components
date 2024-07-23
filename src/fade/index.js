import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import Transition from 'react-overlays/lib/Transition';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Fade = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('fade'));

  return (
    <Transition
      {...restProps}
      className={classNames}
      enteredClassName={cxStyles('in')}
      enteringClassName={cxStyles('in')}
    />
  );
};
Fade.propTypes = {
  className: PropTypes.string,
};
Fade.defaultProps = {
  timeout: 100,
};

export default Fade;
