import axios from "axios";
import baseURL from "../configs/urls";

//Створюємо змінну axiosService для збереження глобального посилання на сервер
const axiosService=axios.create({baseURL});
//Експортуємо axiosService в бібліотеку React
export {axiosService}