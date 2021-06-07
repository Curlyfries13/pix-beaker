import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './ResultComponent.css';
import { data as APIData } from 'types/pixabayResponse';

const ResultComponent = ({data}: Props) => {
  return (
    <Grid container className="results-container">
      <Grid item xs={6} className="preview-container" >
        <img src={data.previewURL} className="preview-display"/>
      </Grid>
      <Grid container item xs={2}/>
      <Grid container item xs={4}>
        <Grid item xs={12} className="stats">
          <div>
            <span class="material-icons">comment</span>
            <p>{data.comments}</p>
          </div>
          <div>
            <span class="material-icons">star</span>
            <p>{data.favorites}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" variant="contained" className="save-button">Save</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

type Props = { data: APIData };

export default ResultComponent;
