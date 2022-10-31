import { useEffect, useState } from "react";


const useApi = (url) =>{


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(true);
        setData(responseJson.data);
      })
      .catch((err) => console.log(err));
  };
  fetchApi();
  }, [url]);

  return {data, loading};
}

export default useApi;
