import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'

import LinkIcon from '@material-ui/icons/Link';
import './FavDrawer.css';

// This component handles displaying the favorites saved by the user. If the
// user hasn't saved any it shows a default message
function FavDrawer({favorites}: Props) {
  if (favorites.length === 0) {
    return (
      <div className="container">
        <p className="message">
          looks like you don't have any saved pictures yet
        </p>
      </div>
    )
  } else {
    return (
      <div className="container">
        <List>
          {favorites.map((favorite: number) => {
            return (
              <Link to={'/view/' + favorite}>
                <ListItem key={favorite}>
                  <ListItemIcon><LinkIcon /></ListItemIcon>
                  <ListItemText>{favorite}</ListItemText>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </div>
    )
  }
}

type Props = { favorites: number[] }

export default FavDrawer;
