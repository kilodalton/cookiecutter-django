import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import { getHash } from '../selectors'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 275,
    maxWidth: 275,
    minHeight: 230,
    maxHeight: 230
  },
  cardContent: {
    flex: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  number: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  hashline: {
    marginBottom: 16,
    fontSize: 14,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  hash: {
    display: "inline"
  },
  cardActions: {
    flex: 1
  },
  pos: {
    marginBottom: 12,
  }
};

function RandomNumberCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary">
            A random number is displayed here. Refresh the page for a new one!
          </Typography>
          <Typography
            className={classes.number}
            variant="headline"
            component="h2"
          >
            {props.randomNumber}
          </Typography>
          <Typography  className={classes.hashline}>
            hash: <Typography className={classes.hash} color="textSecondary" >{props.hash}</Typography>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            This is a demonstration of how you can use Redux and Reselect together.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

RandomNumberCard.propTypes = {
  classes: PropTypes.object.isRequired
};


const mapStateToProps = state => {
  console.log("State:", state)
  return {
  randomNumber: state.random_number,
  hash: getHash(state)
}}


export default connect(mapStateToProps)(withStyles(styles)(RandomNumberCard));
