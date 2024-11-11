import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useSearchStore = (input = "") => {
  return useQuery({
    queryKey: ["search", input],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            name_like: input ? input : "00000",
          },
        })
        .then((res) => res.data),
  });
};