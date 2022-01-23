import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService={
    //Отримуємо всі значення з посилання urls разом з /user методом getAll() інтерфейсу URLSearchParams
    getAll:()=>axiosService.get(urls.users).then(value=>value.data),
    getById:(id)=>axiosService.get(`${urls.users}?userId=${id}/posts`).then(value=>value.data)
}