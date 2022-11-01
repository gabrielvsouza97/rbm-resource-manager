import axios from "axios";
import localStorageHandler from "services/local-storage";

const jwt = localStorageHandler().getJwt();

const axiosInstance = axios.create({
  baseURL: "https://agendamento.carloschoma.com.br",
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

export default axiosInstance;
