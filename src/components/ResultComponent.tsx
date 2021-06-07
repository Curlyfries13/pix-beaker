import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Comment, StarBorder } from '@material-ui/icons';
import { Link } from 'react-router-dom'

import './ResultComponent.css';
import { data as APIData } from 'types/pixabayResponse';

const ResultComponent = ({data, active, saved, handleSave}: Props) => {
  const handleClick = () => {
    handleSave(data.id);
  }
  return (
    <Grid container className="results-container">
      <Grid item xs={6} className="preview-container" >
        <Link to={"/view/" + data.id}>
          <img src={data.previewURL} className="preview-display"/>
        </Link>
      </Grid>
      <Grid container item xs={2}/>
      <Grid container item xs={4}>
        <Grid item xs={12} className="stats">
          <div>
            <Comment />
            <p>{data.comments}</p>
          </div>
          <div>
            <StarBorder />
            <p>{data.favorites}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" variant="contained" className="save-button" onClick={handleClick}>
            { saved && saved.includes(data.id) ? 'Saved' : 'Save' }
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

type Props = { data: APIData, saved: [], handleSave: Function };

export default ResultComponent;
