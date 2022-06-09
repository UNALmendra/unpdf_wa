module.exports = {
    apiUrl: `http://localhost:5000/graphql`,
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