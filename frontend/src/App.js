import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("inside effect");
    fetchData();
  }, []);
  async function fetchData() {
    try {
      console.log("inside try");
      const response = await fetch("http://127.0.0.1:5000/api/data");
      const jasonData = await response.json();
      setData(jasonData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Front end</h1>
      <h2>{data.message}</h2>
    </div>
  );
}

export default App;
