import { mutations } from './constants';

const axios_ = require('axios');
const apiUrl = require('./constants').apiUrl;
const queries = require('./constants').queries;

// faltaria meter una variable en la function getDocumentsUser que sea el usuario a buscar
export const getDocumentsUser = async (user) => {
  const response = await axios_.post(apiUrl, {
    query: queries.getDocumentsUser,
    variables: { user: user }
  })
  return response.data.data
}

export const uploadDocuments = (name, type, user, file) => {
  axios_.post(apiUrl, {
    query: mutations.postNewDocument,
    variables: { document: { name: name, type: type, user: user, file: file } }

  }).then((res) => {
    console.log(res.data.data)
  })
    .catch((error) => {
      console.error(error)
    });
}