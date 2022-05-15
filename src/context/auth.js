import Cookies from 'js-cookie'

import axios from "axios";

export const getAccessToken = () => Cookies.get('token')

export const isAuthenticated = () => !!getAccessToken()

export const authenticate = async (user) => {
    try {
        const res = await axios({
            method: "post",
            url: "http://localhost:5000/api/user/login",
            data: user,
            headers: { "Content-Type": "application/json" },
        })

        console.log(res);

        if (!res.data?.data?.token) {
            throw {
                message: 'login invalid'
            }
        }

        const expires = (60 * 60 * 24) * 1000

        const inOneDay = new Date(new Date().getTime() + expires)

        Cookies.set('token', res?.data?.data?.token, { expires: inOneDay })

        window.location.reload(false)

        return true
    } catch (error) {
        alert(error?.response?.data?.message);
        return false
    }
}

export const logout = async () => {
    try {

        Cookies.remove('token')

        window.location.reload(false)

        return true
    } catch (error) {
        return false
    }
}