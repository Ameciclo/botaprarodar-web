import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SelectBikeUserPage.styles';

const SelectBikeUserPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.positionStyle}>
      <Typography component="h5" variant="h5" className={classes.titleStyle}>
        Selecione o ciclista
      </Typography>

      <TextField
        className={classes.textFieldStyle}
        id="busca"
        type="text"
        placeholder="Procure o ciclista pelo nome..."
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default SelectBikeUserPage;
