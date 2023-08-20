import axios from "axios";

export default class ProductService{
    baseUrl = "https://northwind.vercel.app/api/products/";

    getProducts(){
        return axios.get(this.baseUrl);
    }

    getProductDetails(id){
        return axios.get(this.baseUrl + id)
    }
}