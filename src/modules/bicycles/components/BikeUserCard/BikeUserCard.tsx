import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './BikeUserCard.styles';

interface BikeUserCardProps {
  cardClick?: any;
  profilePicture?: string;
  name?: string;
  telephone?: string;
}

const BikeUserCard: React.FC<BikeUserCardProps> = ({
  cardClick,
  profilePicture,
  name,
  telephone,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.root}
        onClick={cardClick}
        data-testid="selected-user"
      >
        <CardHeader
          avatar={
            <Avatar
              className={classes.avatar}
              src={profilePicture}
              alt="profile"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={telephone}
        />
      </Card>
    </>
  );
};

export default BikeUserCard;
