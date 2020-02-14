const styles = theme => ({
  topbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  topbarShift: {
    // marginLeft: '271px',
    width: 'calc( 100vw)',
  },
  drawerPaper: {
    zIndex: 1200,
    width: '271px',
    marginTop: '64px',
  },
  sidebar: {
    width: '270px',
    height: '100vh',
  },
  content: {
    marginTop: '64px',
    padding: '24px',
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: '270px',
  },
});
export default styles;
