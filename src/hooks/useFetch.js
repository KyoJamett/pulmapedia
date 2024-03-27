import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://aves.ninjas.cl/api/birds")
      //fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}
