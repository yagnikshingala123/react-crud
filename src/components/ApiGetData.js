import React, { useState, useEffect } from "react";
import NewsApiService from "./NewsApiService";
import Loader from "./Loader";
import NewsList from "./NewsList";

function ApiGetData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NewsApiService.getData()
      .then((res) => {
        setData(res.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
console.log();
  return (
    <div>
      {loading ? <Loader /> : <NewsList data={data} />}
    </div>
  );
}

export default ApiGetData;