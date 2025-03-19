import logo from './logo.svg';
import './App.css';
import { AppRouter } from './Rotas';
import { AuthProvider } from './Auth/authContext';

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}