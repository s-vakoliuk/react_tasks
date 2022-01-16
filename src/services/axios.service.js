import axios from "axios";
import baseUrl from "../configs/urls";

//Через axios приймаємо базову url адресу
export const axiosServices=axios.create({
    baseURL:baseUrl
});