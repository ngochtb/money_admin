import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import { compose } from 'redux';
import styles from './styles';

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.company} variant="body1">
        &copy; CNI.vn
      </Typography>
      <Typography variant="caption">
        Được phát triển bởi đội ngũ cni.vn
      </Typography>
    </div>
  );
};
export default compose(withStyles(styles))(Footer);
