import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

// Add a request interceptor
apiInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request_intercept***', config);
    config.headers = {
        Authorization: token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
apiInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response_intercept***', response);
    response.data= {
        ...response.data,
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default apiInstance