const axios_ = require('axios');
const apiUrl = require('./constants').apiUrl;
const mutations = require('./constants').mutations;

export const postLogin = async (email, password) => {
  let response = await axios_.post(apiUrl, {
    query: mutations.postLogin,
    variables: {email: email, password: password}
  })
  return response
}