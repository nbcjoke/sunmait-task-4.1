import MockAdapter from "axios-mock-adapter";

import { login } from "./auth";
import api, { API_URL } from "../../api/config";

describe("login", () => {
  it("should login with success response", async () => {
    let mock = new MockAdapter(api);
    const mockUserData = {
      username: "admin",
      password: "1234",
    };
    mock.onPost(`${API_URL}/login`).reply(200, mockUserData);
    const dispatch = jest.fn();
    const thunk = login(mockUserData);

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(mock.history.post[0].url).toEqual(`/login`);
    expect(start[0].type).toBe("login/pending");
    expect(end[0].type).toBe("login/fulfilled");
    expect(end[0].payload).toStrictEqual(mockUserData);
  });

  it("should login with failed response", async () => {
    let mock = new MockAdapter(api);
    mock.onPost(`${API_URL}/login`).reply(400, "Error");

    const dispatch = jest.fn();
    const thunk = login({});

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe("login/pending");
    expect(end[0].type).toBe("login/rejected");
    expect(end[0].meta.rejectedWithValue).toBe(true);
    expect(end[0].payload).toBe("Wrong credentials");
  });
});
