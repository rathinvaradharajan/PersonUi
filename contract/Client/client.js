const axios = require('axios');

module.exports = {
  fetch: () => {
    return axios({
      method: 'GET',
      url:'http://localhost:5000/demo/all',
      headers: {
        'Authorization': 'Basic QWRtaW46MTIzNDU='
      }
    })
  }
}
