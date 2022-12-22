import { useEffect, useState } from 'react';
import axios from 'axios';
import { error } from 'bfj/src/events';

function App() {
  const [hello, setHello] = useState([]);
  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
    // fetch("/").then((response) => {
    //     return response.json();
    // }).then(function (data) {
    //     setMessage(data);
    // });
  }, []);
  return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
  // return (<div className="App">
  //     <header className="App-header"><img src={logo} className="App-logo" alt="logo"/>
  //         <p> Edit <code>src/App.js</code> and save to reload. </p> <a className="App-link" href="https://reactjs.org"
  //                                                                      target="_blank"
  //                                                                      rel="noopener noreferrer"> Learn React </a>
  //         <ul> {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)} </ul>
  //     </header>
  // </div>);
}

export default App;
