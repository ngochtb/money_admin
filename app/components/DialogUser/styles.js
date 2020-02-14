const styles = () => ({
  root: {
    '& > *': {
      margin: 1,
      width: '100%',
    },
    display: 'flex',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: 2,
    flex: 1,
  },
  textField: {
    margin: 25,
    width: '80%',
  },
  avatar: {
    width: '150px',
    height: 150,
    cursor: 'pointer',
    borderRadius: '50%',
  },
  fullContainer: {
    display: 'flex',
    marginTop: 50,
  },
  inputImage: {
    cursor: 'pointer',
    opacity: 0,
    width: 150,
    position: 'absolute',
    zIndex: 999,
    margin: '0px',
    height: 150,
  },
});
export default styles;
