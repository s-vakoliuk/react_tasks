import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService={
    getAll:()=>axiosService.get(urls.posts).then(value=>value.data),
    getByPostId:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getByPostComments:(id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}