import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import RandomNumberCard from './randomNumberCard';
import { nonce } from '../actions';
import TopBar from "./topBar"


const styles = theme => ({
  root: {
    flex: 1
  },
  code: {
    display: 'inline',
    fontWeight: 'bold'
  },
  cardRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20,
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

function CollectionView(props) {
  const { classes } = props;  
  return (
    <div>
      <TopBar />
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(16)}
          >
            <Paper className={classes.cardRoot} elevation={1}>
              <Typography variant="headline" component="h3">
                Welcome to the autogenerated homepage for Cookiecutter-Django: React Edition.
              </Typography>
              <Typography component="p">
                <Link to="/About">About</Link>
              </Typography>
              <Typography component="p">
                If you're building with <Typography className={classes.code}>yarn start</Typography>, you should be able to make changes and see them reflected here immediately.
              </Typography>
              <Typography component="p">
                If you're using chrome, you probably want to go into the network console and check "Disable cache".
              </Typography>
              <Typography component="p">
                Don't forget to check out <Typography className={classes.code}>yarn storybook</Typography>!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(16)}
          >
            <RandomNumberCard />
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.createCollection('yo')}
      >
        Hello World
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  nonce: state.nonce 
});

const mapDispatchToProps = dispatch => ({
  setNonce: text => {
    dispatch(nonce.setNonce(text));
  }
});

CollectionView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CollectionView));
