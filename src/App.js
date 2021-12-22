import React from "react";
import { PulseLoader } from "react-spinners";

import Layout from "./components/layout/Layout";
import Get from "./services/rest/Get";

const REST_URL = "https://api.punkapi.com/v2/beers";

const App = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([])

  React.useEffect(() => {

    const fetchList = async () => {
    setLoading(true);
      const response = await Get(REST_URL);
      const data = await response;
      setData(data)
      console.log(data);
      setLoading(false);
    };
    fetchList();
  }, []);
 
  return (
    <div className="beer-app">
      <h1>Punk API</h1>
      {isLoading ? <PulseLoader /> : <Layout list={data} />}
    </div>
  );
}

export default App;
