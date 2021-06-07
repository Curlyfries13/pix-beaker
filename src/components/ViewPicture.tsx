import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Link, useParams } from 'react-router-dom';

import { data } from 'types/pixabayResponse';
import './ViewPicture.css';

// This component allows a user to view a picture from the search screen:
// NOTE: this relies on the search screen, and shouldn't be accessed by other
// ways.
// If this page can't find the url to render, then it sends an error message,
// asking the user to return to the Search screen
function ViewPicture({results}: Props) {
  type urlParam = {
    id: string;
  }
  let { id } = useParams<urlParam>();
  const targets = results !== undefined ? results.filter((result) => {
    return result.id.toString() === id; }) : []
  // TODO: this url may need to be verified; if the API is compromised somehow,
  // this could load malicious images.
  const renderUrl = targets.length > 0 ? targets[0].largeImageURL: undefined;

  if (renderUrl !== undefined) {
    return (
      <Grid container>
        <Grid item xs={12} className="page">
          <Paper className="picutre-frame">
            <img src={renderUrl} className="picture"/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">
            <IconButton color="primary">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    )
  } else {
    // Error, cannot find the renderUrL
    return (
      <Grid item xs={12} className="page">
        <Paper className="picture-frame">
          <div className="error-message">
            <SentimentVeryDissatisfiedIcon style={{ fontSize: 40}}/>
            <p>Sorry something went wrong...</p>
          </div>
          <Link to='/'>Head back</Link>
        </Paper>
      </Grid>
    )
  }
  
}

type Props  = { results: data[]}

export default ViewPicture;
