import axios from "axios";

import baseUrl from "../configs/urls";

//Через axios приймаємо базову url адресу
export const axiosService=axios.create({
    baseURL:baseUrl
});