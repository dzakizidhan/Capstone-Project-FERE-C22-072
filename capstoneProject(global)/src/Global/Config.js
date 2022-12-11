
let CONFIG = {
    BASE_API_URL: "http://localhost:8000/api",
    API_URL: (endpoint = '') => {
        return CONFIG.BASE_API_URL+endpoint
    },
    TOKEN_KEY: 'mind-health-id'
}

export default CONFIG