import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService={
    getAll:()=>axiosService.get(urls.users).then(value=>value.data),
    getByid:(id)=>axiosService.get(`$urls.users}/${id}`).then(value=>value.data)
}