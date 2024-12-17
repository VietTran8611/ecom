import {create} from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/products/" : "/api/products/";

export const useProductsStore = create((set)=>({
    products: [],
    cart:[],
    isLoading: false,
    isCheckProduct: true,
    error:null,
    fetchProducts: async()=>{
        set({isLoading: true, error: null})
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            set({ products: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching product", isLoading:false})
            throw error
        }
    },createProduct: async (newProduct) => {
        set({isLoading:true,error:null})
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            set({isLoading:false})
			return { success: false, message: "Please fill in all fields." };
		}
        try{
          const response = await axios.post(API_URL, newProduct)
          set((state) => ({ products: [...state.products, response.data.data],isLoading:false }));
          return { success: true, message: "Product created successfully" };
        }catch(error){
          console.log(error)
        }
      },updateProduct: async (pid, newProduct) => {
        set({isLoading:true,error:null})
        try{
            const response = await axios.put(`${API_URL}${pid}`, newProduct)
            set((state) => ({ products: state.products.map((product) => (product._id === pid ? response.data.data : product)),isLoading:false }));
            return { success: true, message: "Product edit successfully" };
          }catch(error){
            console.log(error)
          }
      }, deleteProduct: async (pid) => {
        set({isLoading:true,error:null})
        try{
            const response = await axios.delete(`${API_URL}${pid}`)
            set((state) => ({ products: state.products.filter((product) => product._id !== pid),isLoading:false}));
            return { success: true, message: "Product edit successfully" };
          }catch(error){
            console.log(error)
          }
      },fetchCart: async(pid)=>{
        set({isLoading: true, error: null})
        try {
            const res = await fetch(`${API_URL}${pid}`);
            const data = await res.json();
            set((state) => ({ cart: [...state.cart, data.data],isLoading:false  }));
            
        } catch (error) {
          console.log(error)
        }
    },removeCartItem: (pid)=>{
      set({isLoading: true, error: null})
      set((state) => ({ cart: state.cart.filter((product) => product._id !== pid),isLoading:false  }));
    }, removeCart : ()=>{
      set({cart: []})
    }

}))