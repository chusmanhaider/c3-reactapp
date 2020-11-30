import './App.css';

function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.name}</h1>
        <h2>{data.job}</h2>
      </header>
    </div>
  );
}

export default App;
