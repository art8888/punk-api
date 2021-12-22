import React from "react";
import { PulseLoader } from "react-spinners";

import Layout from "./components/layout/Layout";
import { Get } from "./services/rest/Get";

const title = "Punk Beer"
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
      setLoading(false);
    };
    fetchList();
  }, []);
 
  return (
    <div className="beer-app">
      <h1>{title}</h1>
      {isLoading ? <PulseLoader /> : <Layout data={data} />}
    </div>
  );
}

export default App;
