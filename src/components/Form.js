import GetUserInfo from "./GetUserInfo";

function Form(data) {
    return (
      <div className="App">
        <header className="App-headerTwo">
          <h1>Full Name : {data.name}</h1>
          <h2>Role : {data.role}</h2>
        </header>
        <div>
          <GetUserInfo></GetUserInfo>
          
        </div>
      </div>
    );
  }
  
  export default Form;