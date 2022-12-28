import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [test, setTest] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await (await fetch('/api/user')).json();
      console.log(data);
      return data;
    })();
  }, []);
  return <Outlet />;
}

export default App;
