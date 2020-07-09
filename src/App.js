import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import CartComponent from './component/card.component.jsx'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      http://dimagong.site/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


 const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline  />
      <AppBar position="relative">
        <Toolbar style={{backgroundColor: '#9a0036'}}>
          <WorkIcon className={classes.icon} />
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            PORTFOLIO  
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My some projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              In my projects, I prefer to use 
              the next technologies stack: 
              JS, React, Redux, Saga, 
              Material-UI, Ant, Scss.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary" onClick={ () => document.location.href = "https://github.com/dimagong" } >
                    GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary" onClick={ () => document.location.href = "https://www.linkedin.com/in/dmytrogongalskyy/" } >
                    Linkedin
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <CartComponent />
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        With hoping for collaboration! 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        dimagong@gmail.com 
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default App;