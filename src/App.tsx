import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from 'modules/authentication/contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'shared/components';
import Routes from './routes/Routes';
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
          <Suspense fallback={<></>}>
            <Routes />
          </Suspense>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
