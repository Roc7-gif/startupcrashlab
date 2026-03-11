import api from "./axios-conf.js";
import { useMutation } from "@tanstack/react-query";
export function useContact() {
  return useMutation({
    mutationFn: async (formdata) => {
      try {
        const { email, subject, message, phone , name } = formdata;

        const res = await api.post("/contact", {
          email,
          message,
          subject,
          phone,
          name
        });
        return res.data;
      } catch (error) {
        // console.error(error);
        return error;
      }
    },
  });
}
