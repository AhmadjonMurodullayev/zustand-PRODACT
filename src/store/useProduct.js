import { create } from "zustand";
import { persist } from "zustand/middleware";
import { request } from "../config/request";

export const useProduct = create(
  persist(
    (set) => ({
      data: [],
      addProduct: (newData) =>     
        set((state) => ({
          ...state,
          data: [...state.data, newData],
        })),
      fetchProducts: async () => {
        try {
          const response = await request.get("/products");
          set({ data: response.data });
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      },
    }),
    { name: "product-data" }
  )
);
