import axios from 'axios'

const http  = axios.create({
    baseURL:'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

//adicionar o header com autorização por padrão
http.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (err){
    return Promise.reject(err)
} )

export default http