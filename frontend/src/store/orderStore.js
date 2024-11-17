import {create} from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/order" : "/api/order";

export const useOrderStore = create((set)=>({
    orders: [],
    isLoading: false,
    error:null,
    fetchOrder: async(pid)=>{
        set({isLoading: true, error: null})
        try {
            const res = await fetch(`${API_URL}${pid}`);
            const data = await res.json();
            set({ orders: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching product", isLoading:false})
            throw error
        }
    },createOrder: async (newProduct) => {
        set({isLoading:true,error:null})
        try{
          const response = await axios.post(API_URL, newProduct)
          set((state) => ({ isLoading:false }));
          return { success: true, message: "Product created successfully" };
        }catch(error){
          console.log(error)
        }
      }

}))