import './App.css';
import useFetch from './useFetch';

function App() {

  const base_url = "https://catfact.ninja/fact";

  const { data, error, loading } = useFetch(base_url);
 
  return (
    <div className="App">
      <div className="App-header">
        {loading && <h1>...loading</h1>}
        {error && <h3>error</h3>}
        {data.fact}
      </div>
    </div>
  );
}

export default App;
