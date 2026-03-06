import api from "./axios-conf.js";
import { useMutation } from "@tanstack/react-query";
export function useReservePack() {
  return useMutation({
    mutationFn: async (formdata) => {
      try {
        const { email, date, program } = formdata;

        const res = await api.post("/pack/reserve", {
          email,
          program,
          date,
        });
        return res.data;
      } catch (error) {
        // console.error(error);
        return error;
      }
    },
  });
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Vérifie si ce cookie commence par le nom recherché
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
