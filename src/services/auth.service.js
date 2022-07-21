import axios from "axios";
import { API_URL } from "../constraints/const";

const register = (name, identification, email, password) => {
	return axios.post(API_URL + "api/auth/register", {
		name,
		identification,
		email,
		password,
	});
};
const login = (email, password) => {
	return axios
		.post(API_URL + "api/auth/login", {
			email,
			password,
		})
		.then((response) => {
			if (response.data.token) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}
			return response.data;
		});
};
const logout = () => {
	localStorage.removeItem("user");
};
const reset = (email) => {
	return axios.post(API_URL + "reset", {
		email,
	});
};
const authService = {
	register,
	login,
	logout,
	reset,
};
export default authService;
