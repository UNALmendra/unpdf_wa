module.exports = {
  apiUrl: `http://localhost:5000/graphql`,
  queries: {
    getDocumentsUser: `
        query DocumentsUser ($user: String!){
            documents_user(user: $user) {
              storage,
              name,
              type
            }
          }`
  },
  mutations: {
    postNewDocument: `
      mutation PostNewDocument($document: NewDocument){
        postNewDocument(document: $document) {
          storage
        }
      }
      `
  }
}

