import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  InfoOutlined as InfoIcon,
} from '@material-ui/icons';
// import logo from '../../../../images copy/logos/logo.png';
import avatar from '../../../../images copy/avatars/avatar_1.png';
// import decodeJWT from '../../../../common/decodeJWT';
// Component styles
import styles from './styles';

const AdapterLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

const SideBar = props => {
  const { classes } = props;
  // const [useInfor] = useState([]);
  return (
    <nav className={classes.root}>
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link to="/profile">
          <Avatar alt="ngoc" className={classes.avatar} src={avatar} />
        </Link>
        <Typography className={classes.nameText} variant="h5">
          Hoàng Ngọc
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          Hoàng Ngọc
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />
      <List component="div" disablePadding>
        <ListItem
          button
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={AdapterLink}
          to="/purposes"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Mục đích"
          />
        </ListItem>
        <ListItem
          button
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={AdapterLink}
          to="/users"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Người Dùng"
          />
        </ListItem>
        <ListItem
          button
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={AdapterLink}
          to="/currencies"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Ngoại Tệ"
          />
        </ListItem>
      </List>
      <Divider className={classes.listDivider} />
      <List
        component="div"
        disablePadding
        subheader={
          <ListSubheader className={classes.listSubheader}>
            Support
          </ListSubheader>
        }
      >
        <ListItem
          className={classes.listItem}
          component="a"
          href="https://devias.io/contact-us"
          target="_blank"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Customer support"
          />
        </ListItem>
      </List>
    </nav>
  );
};

export default compose(withStyles(styles))(SideBar);
