import axios from "axios";

export async function getFeaturedGame() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSIOIN = "api/v1";
  const URL = "players/landingpage";

  const response = await axios.get(`${ROOT_API}/${API_VERSIOIN}/${URL}`);
  const axiosReponse = response.data;

  return axiosReponse.data;
}

export async function getDetailVoucher() {
  return null;
}
