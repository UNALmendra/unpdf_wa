module.exports = {
    apiUrl: `http://104.197.178.60/graphql`,
    mutations: {
        postLogIn:`
        mutation postLogIn($username: String , $password: String){
            postLogIn(username: $username, password: $password){
                success
                message
                token
            }
          }`         
    }
}
