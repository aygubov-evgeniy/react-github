import { useState, useEffect } from "react";
import parse from 'parse-link-header';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    const linkHeader = response.headers.get('link');
    const linkData = parse(linkHeader);
    setData(json);
    setLink(linkData);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading, link];
}
export { useFetch };