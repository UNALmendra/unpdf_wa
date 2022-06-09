const axios_ = require('axios');
const apiUrl = require('./constants').apiUrl;
const mutations = require('./constants').mutations;

export const postLogIn = async (username, password) => {
  let response = await axios_.post(apiUrl, {
    query: mutations.postLogIn,
    variables: {username: username, password: password}
  })
  return response
}