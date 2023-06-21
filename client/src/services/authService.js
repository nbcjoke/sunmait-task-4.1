import api from "../api/config";

export class AuthService {
  pendingRefresh;

  refreshToken() {
    if (this.pendingRefresh) {
      console.log(this.pendingRefresh);
      return this.pendingRefresh;
    }
    const request = api
      .get("/refresh", {
        withCredentials: true,
      })
      .then((response) => {
        this.pendingRefresh = undefined;
        console.log(response);
        return response;
      });

    this.pendingRefresh = request;
    console.log(request);
    console.log(this.pendingRefresh);
    return request;
  }
}

const instance = new AuthService();
export default instance;
