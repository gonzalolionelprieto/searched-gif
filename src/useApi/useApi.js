import { useEffect, useState } from "react";


const useApi = (url) =>{


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
const [totalItems, setTotalItems] = useState(0)

  

  useEffect(() => {
    const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(true);
        setData(responseJson.data);
        setTotalItems(responseJson.pagination.total_count)
      })
      .catch((err) => console.log(err));
  };
  fetchApi();
  }, [url]);

  return {data, loading,totalItems};
}

export default useApi;
