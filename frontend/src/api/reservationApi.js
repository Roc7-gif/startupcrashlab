import api from "./axios-conf.js";
import { useMutation } from "@tanstack/react-query";
export function useReservePack() {
  return useMutation({
    mutationFn: async (formdata) => {
      try {
        const { email, date, program, phone } = formdata;

        const res = await api.post("/pack/reserve", {
          email,
          program,
          date,
          phone,
        });
        return res.data;
      } catch (error) {
        // console.error(error);
        return error;
      }
    },
  });
}
