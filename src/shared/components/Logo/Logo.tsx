import { LogoBPR } from 'shared/assets';
import useStyles from './Logo.styles';

const Logo = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.logo}
      data-testid="logo"
      alt="Logo do projeto Bota pra rodar"
      src={LogoBPR}
    />
  );
};

export default Logo;
