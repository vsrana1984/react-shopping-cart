import Axios from "axios";

class AuthService {
  //login function....
  login(email, password) {
    return Axios
      .post("/api/users/login", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  //logout....
  logout() {
    localStorage.removeItem("user");
  }

  //register..
  register(username, email, password) {
    return Axios.post("/api/users/register", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();

