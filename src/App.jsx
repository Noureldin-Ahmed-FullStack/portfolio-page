import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import MyContextProvider from './components/ContextProvider';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <header className="App-header">
          <Layout />
        </header>
      </div>
    </MyContextProvider>

  );
}

export default App;
