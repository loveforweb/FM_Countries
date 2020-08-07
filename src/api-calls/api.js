import axios from 'axios';
export const API_STALE_TIMEOUT = 3600000;
const API_BASE_URL = 'https://restcountries.eu/rest/v2';

export const allCountriesAPI = async () => {
  const { data } = await axios.get(
    `${API_BASE_URL}/all?fields=name;capital;region;flag;population;alpha3Code`
  );
  return data;
};

export const countryDataAPI = async (alpha3Code) => {
  const { data } = await axios.get(
    `${API_BASE_URL}/alpha/${alpha3Code}?fields=name;flag;population;flag;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders`
  );

  return data;
};

export const borderAPI = async (borderCodeParams) => {
  const { data } = await axios.get(
    `${API_BASE_URL}/alpha?codes=${borderCodeParams}&fields=name;alpha3Code;population;region;capital;flag;alpha3Code`
  );
  return data;
};
