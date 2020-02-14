/**
 *
 * DialogPurpose
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField,
  Grid,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
// import imgUpload from '../../images/avatars/Upload-PNG.png';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import avatarSimple from '../../images/avatars/avatarSimple.png';
import styles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function DialogPurpose(props) {
  const { classes, className } = props;
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState({ preview: '', raw: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const schema = object().shape({
    email: string().required('Email is required'),
    password: string().required('Password is required'),
    name: string().required('Full Name is required'),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data, any) => {
    console.log(data);
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen} color="primary">
        <EditIcon />
      </IconButton>
      <Dialog
        fullScreen
        style={{ marginLeft: '271px' }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div
          style={{
            padding: '0 20px',
            width: '80%',
            margin: '0 auto',
            marginTop: '70px',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Grid xs="9">
              <TextField
                name="email"
                error={!!errors.email}
                label="Email"
                helperText={errors.email ? errors.email.message : ''}
                type="email"
                inputRef={register}
                fullWidth
                className={classes.textField}
                variant="outlined"
              />
              <TextField
                name="password"
                error={!!errors.password}
                label="Password"
                inputRef={register}
                helperText={errors.password ? errors.password.message : ''}
                type="password"
                fullWidth
                variant="outlined"
                className={classes.textField}
              />
              <TextField
                name="name"
                error={!!errors.name}
                label="Full Name"
                helperText={errors.name ? errors.name.message : ''}
                type="text"
                inputRef={register}
                fullWidth
                variant="outlined"
                className={classes.textField}
              />

              <Button
                color="primary"
                type="submit"
                variant="contained"
                fullWidth
                className={classes.textField}
              >
                Lưu
              </Button>
            </Grid>
            <Grid item xs="3">
              <div>
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img
                      src={image.preview}
                      width="200"
                      height="200"
                      className={classes.avatar}
                    />
                  ) : (
                    <img src={avatarSimple} width="200" height="200" />
                  )}
                </label>
                <input
                  type="file"
                  id="upload-button"
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

DialogPurpose.propTypes = {};

export default withStyles(styles)(DialogPurpose);
