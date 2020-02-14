/**
 *
 * MainLayout
 *
 */

import React, { Fragment, useState, memo } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// Externals
import classNames from 'classnames';

// Material helpers

// Material components
import { Drawer, withStyles, withWidth } from '@material-ui/core';

// Custom components
// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// import { Sidebar, Topbar, Footer } from './components';
// import compose from 'redux';
import Topbar from './components/TopBar';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import Snackbar from '../Snackbar';
// Component styles
import styles from './styles';
// import makeSelectDashboard from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import { closeSnackbar } from './actions';

function MainLayout(props) {
  const [isOpen] = useState(true);
  const { classes, width, title, children, dashboard } = props;

  const isMobile = ['xs', 'sm', 'md'].includes(width);
  const shiftTopbar = isOpen && !isMobile;
  const shiftContent = isOpen && !isMobile;
  const handleClose = () => {
    isOpen(false);
  };
  const handleToggleOpen = prevState => ({
    isOpen: !prevState.isOpen,
  });
  return (
    <Fragment>
      <Snackbar
      // open={dashboard.status}
      // variant={dashboard.variant}
      // message={dashboard.message}
      // onClose={props.closeSnackbar}
      />
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar,
        })}
        isSidebarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
        title={title}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        onClose={handleClose}
        open={isOpen}
        variant={isMobile ? 'temporary' : 'persistent'}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent,
        })}
      >
        {children}
        <Footer />
      </main>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  // className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
  // closeSnackbar: PropTypes.func,
  dashboard: PropTypes.object,
};
// const mapStateToProps = createStructuredSelector({
//   dashboard: makeSelectDashboard(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     closeSnackbar: () => dispatch(closeSnackbar()),
//   };
// }

export default compose(
  withStyles(styles),
  withWidth(),
)(MainLayout);
