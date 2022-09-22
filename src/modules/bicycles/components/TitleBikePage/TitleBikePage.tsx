import { Typography } from '@material-ui/core';
import useStyles from './TitleBikePage.styles';

interface TitleBikePageProps {
  title: string;
}

const TitleBikePage: React.FC<TitleBikePageProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.pageNameStyle} data-testid="title-bike-page">
      {title}
    </Typography>
  );
};

export default TitleBikePage;
