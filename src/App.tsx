import { createTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from 'modules/authentication/contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'shared/components';
import Routes from './routes';
import 'shared/styles/global.css';

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
          <ToastContainer />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
