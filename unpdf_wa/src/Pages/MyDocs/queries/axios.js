const axios_ = require('axios');
const apiUrl = require('./constants').apiUrl;
const queries = require('./constants').queries;

// faltaria meter una variable en la function getDocumentsUser que sea el usuario a buscar
export const getDocumentsUser = () => {
  axios_.post(apiUrl, {
    query: queries.getDocumentsUser,
    variables: {user: 'Johan'}
  })
    .then((res) => {
      console.log(res.data.data)
    })
    .catch((error) => {
      console.error(error)
    });
}
