import './App.css';
import AppRouter from './AppRouter';
import PageHeader from './components/PageHeader';
import AppProvider from './contexts/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <PageHeader />
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;
