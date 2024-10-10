import './App.css';
import ErrorBoundary from './features/error-boundary';
import { AppRoutes } from './assets/routing';

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
