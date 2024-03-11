import axios from "axios";

export const fetchQueryResults = async (query: string) => {
    if (!query) return [];
    console.log('query', query);
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
    return data;
  }