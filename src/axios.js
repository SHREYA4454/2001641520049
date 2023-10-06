import axios from 'axios';
const key=''
export const axiosApiInstance = axios.create();
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    const value = localStorage.getItem('token')
    // const keys = JSON.parse(value )
    config.headers = { 
      'Authorization': `Bearer ${value}`,
      'Accept': 'application/json',
    }
    return config;
  },
  error => {
    Promise.reject(error)
});
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log('caught',error)
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const data = await axios.post('http://20.244.56.144/train/auth',{
        "companyName":"Shreya Central",
        "clientID":"320fcb30-6f82-4236-a0a3-17d78a4748bf",
        "ownerName":"Shreya Verma",
        "rollNo":"2001641520049",
        "ownerEmail":"shreya.v064@gmail.com",
        "clientSecret":"DAODnRKcTqZThaTJ"
    });  
    localStorage.setItem('token',data.data.access_token)          
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.access_token;
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});