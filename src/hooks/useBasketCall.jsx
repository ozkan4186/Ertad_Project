import { useDispatch } from "react-redux";
import axios from "axios";
import {
  ekle
} from "../features/basketSlice";

import { useNavigate } from "react-router-dom";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBasketCalls = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
const BASE_URL = "http://127.0.0.1:8000/";
const Sepetim = async () => {
  dispatch(ekle());
  
    const { data } = await axios(
      `${BASE_URL}api/products/`,
  
    );
    navigate("/stock");
     return {
       Sepetim,
     };
  
}


  




}
export default useBasketCalls;
  

  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


 
 
 
 
 
 
 
 
 
 

  
  
  
  
  


