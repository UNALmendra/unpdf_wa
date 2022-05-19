module.exports = {
    apiUrl: `http://localhost:5000/graphql`,
    mutations: {
        postLogin:`
        mutation postLogin($email: String , $password: String){
            postLogin(email: $email, password: $password)
          }`         
    }
}