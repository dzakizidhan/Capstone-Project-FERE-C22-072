import Cookies from "universal-cookie"

let cookies = new Cookies

let Cookie = {
    get: (key) => {
        return cookies.get(key)
    },
    set: (key,value) => {
        return cookies.set(key,value, {path: '/'})
    },
    remove: (key) => {
        return cookies.remove(key,{path: '/'})
    }
}

export default Cookie