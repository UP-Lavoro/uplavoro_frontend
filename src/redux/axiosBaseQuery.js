import axios from "axios";

export const axiosBaseQuery = (request) => {

let response = axios({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    headers: { 'Accept': 'application/json', Authorization: `Bearer ${request?.token}` },
    method: request?.method,
    url: request?.url,
    params: request?.params,
    data: request?.body,
});

return response;
}