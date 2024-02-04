// apiService
import axios from 'axios';
// imagesearch
// search

// Define API base URL and endpoints
const API_BASE_URL = 'https://google-search72.p.rapidapi.com';
const search_API_URL = `${API_BASE_URL}/search`;
const imagesearch_API_URL = `${API_BASE_URL}/imagesearch`;


// Create an Axios instance with default configurations
const options = (query, country, language, numResults, startIndex) =>({
    params: {
        q: query,
        gl: country,
        lr: language,
        num: numResults,
        start: startIndex
      },
    headers: {
      'X-RapidAPI-Key': '4fa8ff6d46mshff063c08bac17b8p1feef1jsn860306d90bca',
      'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
    }
  });

export const search = async (query, country, language, numResults, startIndex) => {
  try {
    const response = await axios.get(search_API_URL,options(query, country, language, numResults, startIndex));
    console.log("logdaty in apiService",response,response.data,response.length);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const imagesearch = async () => {
    try {
      const response = await axios.get(imagesearch_API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
//   https://google-search72.p.rapidapi.com/imagesearch?q=Word%20Cup&gl=us&lr=lang_en&num=10&start=0
//   https://google-search72.p.rapidapi.com/search?q=word%20cup&gl=us&lr=lang_en&num=10&start=0
//   https://google-search72.p.rapidapi.com//search?q=tata&gl=us&lr=lang_en&num=10&start=0 