import { create } from "zustand";

const useUserStore = create((set) => ({
  id: "",
  setId: (id) => set({ id }), 
}));

export default useUserStore;
