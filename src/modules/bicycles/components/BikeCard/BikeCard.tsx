import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './BikeCard.styles';

interface BikeCardProps {
  cardClick?: any;
  id?: string;
  imagePath?: string;
  orderNumber?: number;
  name?: string;
  serialNumber?: string;
}

const BikeCard: React.FC<BikeCardProps> = ({
  cardClick,
  imagePath,
  orderNumber,
  name,
  serialNumber,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card
        data-testid="bike-card"
        className={classes.root}
        key={name}
        onClick={cardClick}
      >
        {imagePath && <CardMedia className={classes.cover} image={imagePath} />}
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h3" variant="h3">
              ORDEM: {orderNumber}
            </Typography>
            <Typography component="h4" variant="h4" color="textSecondary">
              {name}
            </Typography>
            <Typography component="h5" variant="h5" color="textSecondary">
              SÉRIE: {serialNumber}
            </Typography>
          </CardContent>
          <div className={classes.controls} />
        </div>
      </Card>
    </>
  );
};

export default BikeCard;
