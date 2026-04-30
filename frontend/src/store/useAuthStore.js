import {create} from 'zustand'
<<<<<<< HEAD
import toast from 'react-hot-toast';
=======
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf
import { axiosInstance } from '../lib/axios.js';


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp: false,
    isLoggingIng: false,
    isupdateProfile: false,

    isCheckingAuth:true,

    checkAuth: async () => {
        try {
<<<<<<< HEAD
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log('Error checking auth:', error);
            set({ authUser:null })
=======
            const res= await fetch('/auth/check',);

         set({authUser:res.data})   
        }catch (error) {
            console.log('Error checking auth:', error);
            set({authUser:null})
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf

        } finally {
            set({isCheckingAuth:false});

        }
    },

    signup: async (data) => {
      set({ isSigningUp: true });
      try {
       const res = await axiosInstance.post("/auth/signup", data);
       set({ authUser: res.data });
       toast.success("Account created successfully");
       
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        set({ isSigningUp: false });
      }
<<<<<<< HEAD
    },

    logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
        toast.error(error.response.data.message);

    }
},
=======
    }
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf
}));
