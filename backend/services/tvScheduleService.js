const axios = require('axios')
const config = require('../config');

/**
 * Gets a list of TV Shows recently aired and some descriptions about them.
 * 
 * @return Returns a promise. A successful response will contain the scheduled TV shows.
 * Otherwise an error is thrown.
 */
const getTVSchedule = () => {
  const response = axios(config.tvSchedule.baseUrl).catch(error => {
    if (error.response) {
      return Promise.reject(new Error('Request to API failed with status ' + error.response.status + ': ' + error.response.data));     
    } else if (error.request) {
      return Promise.reject(new Error('No response received from API: ' + error.message));
    } else {
      return Promise.reject(new Error('Error sending request to API: ' + error.message ));
    }
  })
  
  return response;
};

module.exports = {
  getTVSchedule
};