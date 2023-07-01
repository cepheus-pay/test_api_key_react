import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
          <p>{process.env.REACT_APP_API_KEY}</p>

      </div>
  );
}

export default App;
