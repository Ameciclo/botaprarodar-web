import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import './styles/global.css';
import Menu from './components/Menu/Menu';

const Theme = createTheme(
  {
    palette: {
      primary: {
        main: '#018786',
      },
      secondary: {
        main: '#EFF0F2',
      },
    },
  },
  ptBR,
);

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Menu>
          <Routes />
        </Menu>
      </ThemeProvider>
    </Router>
  );
}

export default App;
