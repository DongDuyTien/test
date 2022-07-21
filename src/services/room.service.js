import axios from "axios";
import { API_URL } from "../constraints/const";
import authHeader from "./auth-header";

const getRooms = () => {
	return axios
		.get(API_URL + `api/room`, {
			headers: authHeader(),
		})
		.then((response) => {
			if (response.data && response.data.results) {
				return response.data.results;
			} 
		});
};

const roomService = {
	getRooms,
};
export default roomService;
