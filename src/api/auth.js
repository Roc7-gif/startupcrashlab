import api from "./axios-conf.js";
import { useMutation } from "@tanstack/react-query";
export function useRegister() {
  return useMutation({
    mutationFn: async (formdata) => {
      try {
        const { password_confirm, email, password } = formdata;

        const res = await api.post("/auth/register", {
          email,
          password,
          password_confirm,
        });
        return res.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: async (formdata) => {
      try {
        const { email, password } = formdata;

        const response = await api.post("auth/login", {
          email,
          password,
        });

        // Retourne access et refresh
        return {
          access: response.data.access,
          refresh: response.data.refresh,
          email: email,
        };
      } catch (error) {
        // console.error("Erreur login :", error.response?.data || error.message);
        return error;
      }
    },
  });
}
