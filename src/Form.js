function Form(data) {
    return (
      <div className="App">
        <header className="App-headerTwo">
          <h1>{data.name}</h1>
          <h2>{data.job}</h2>
        </header>
      </div>
    );
  }
  
  export default Form;