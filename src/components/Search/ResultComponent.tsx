import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { Comment, StarBorder } from '@material-ui/icons';
import { Link } from 'react-router-dom'

import './ResultComponent.css';
import { data as APIData } from 'types/pixabayResponse';

// This component handles rendering the data for the Results returned from the
// API, and allowing the user to save it to thier Favorites.
const ResultComponent = ({data, saved, handleSave}: Props) => {
  const handleClick = () => {
    handleSave(data.id);
  }
  console.log(data.tags.split(','));
  return (
    <Grid container spacing={1} className="results-container">
      <Grid container item xs={6}>
        <Grid item xs={6} className="preview-container" >
          <Link to={"/view/" + data.id}>
            <img src={data.previewURL} className="preview-display"/>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" variant="contained" className="save-button" onClick={handleClick}>
            { saved && saved.includes(data.id) ? 'Saved' : 'Save' }
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={1}/>
      <Grid container item xs={5} spacing={1}>
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
        <Grid item xs={12} className="tags">
          {data.tags.split(',').map((tag) => {
              return(<Chip label={tag}/>);
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

type Props = { data: APIData, saved: number[], handleSave: Function };

export default ResultComponent;
