import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import './styles/global.css';

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
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
