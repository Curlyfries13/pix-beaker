import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link, useParams } from 'react-router-dom';

import { data } from 'types/pixabayResponse';
import './ViewPicture.css';

function ViewPicture({results}: Props) {
  let { id } = useParams();
  const targets = results !== undefined ? results.filter((result) => {
    return result.id == id; }) : []
  const renderUrl = targets.length > 0 ? targets[0].largeImageURL: undefined;
  if (renderUrl !== undefined) {
    return (
      <Grid item xs={12} className="page">
        <Paper className="picutre-frame">
          <img src={renderUrl} className="picture"/>
        </Paper>
      </Grid>
    )
  } else {
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
