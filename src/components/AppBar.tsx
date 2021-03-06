import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { default as MatAppBar } from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './AppBar.css';

// Use styles for Material to avoid material-ui overriding properties
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }),
);

// This component is the App bar, for containing universal actions, currently:
//   Favorites (toggle the favorite drawer)
const AppBar = ({ favToggle }: Props) => {
  const classes = useStyles();
  return (
    <>
      <MatAppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => favToggle()}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </MatAppBar>
      <Toolbar />
    </>
  )
}

type Props = { favToggle: Function };

export default AppBar;
