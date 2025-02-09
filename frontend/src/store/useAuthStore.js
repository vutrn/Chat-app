import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in user checkAuth:", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      set({ authUser: res.data });
      toast.success("Account created successfully.");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signing up:", error.response.data);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      set({ authUser: res.data });
      toast.success("Logged in successfully.");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in logging in:", error.response.data);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully.");
    } catch (error) {
      console.log(error.response.data.message);
    }
  },

  updateProfile: async (formData) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", formData);
      set({ authUser: res.data });
      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error("Error in updating profile:", error);
      console.log("Error in updating profile:", error.response.data);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
