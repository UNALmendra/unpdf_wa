module.exports = {
    apiUrl: `http://35.239.72.193/graphql`,
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