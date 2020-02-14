import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import logo from '../../../../images copy/logos/logo.png';
import styles from './styles';

const Topbar = props => {
  const { className, classes, onSidebarOpen, ...rest } = props;
  const [notifications] = useState([]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        {/* <RouterLink to="/">
          <img alt="Logo" src={logo} />
        </RouterLink> */}
        <div className={classes.logoWrapper}>
          <RouterLink className={classes.logoLink} to="/">
            <img
              alt="Efoch Admin logo"
              className={classes.logoImage}
              src={logo}
            />
          </RouterLink>
        </div>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default compose(withStyles(styles))(Topbar);
