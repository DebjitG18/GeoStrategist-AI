import { create } from "zustand";

const useAuthStore = create((set) => ({
  user:
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("user")
        )
      : null,

  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null,

  setAuth: (user, token) => {
    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    set({
      user,
      token,
    });
  },

  logout: () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    set({
      user: null,
      token: null,
    });
  },

  setUser: (user) => {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    set({ user });
  },
}));

export default useAuthStore;