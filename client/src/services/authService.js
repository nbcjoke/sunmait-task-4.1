import api from "../api/config";

export class AuthService {
  pendingRefresh;

  refreshToken() {
    if (this.pendingRefresh) {
      return this.pendingRefresh;
    }
    const request = api
      .get("/refresh", {
        withCredentials: true,
      })
      .then((response) => {
        this.pendingRefresh = undefined;
        return response;
      });

    this.pendingRefresh = request;
    return request;
  }
}

const instance = new AuthService();
export default instance;
