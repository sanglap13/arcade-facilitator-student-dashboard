import axios from "axios";

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID as string;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

const getSheetData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.values;
};

export default getSheetData;
