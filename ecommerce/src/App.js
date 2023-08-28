import './App.css';
import AppRouter from './AppRouter';
import PageHeader from './components/PageHeader';
import AppProvider from './contexts/AppProvider';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <AppProvider>
      <UserProvider>
        <div className="App">
          <PageHeader />
          <AppRouter />
        </div>
      </UserProvider>
    </AppProvider>
  );
}

export default App;
