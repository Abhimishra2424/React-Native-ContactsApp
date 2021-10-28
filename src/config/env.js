import { DEV_BACKEND_URL, PRO_BACKEND_URL } from "@env";

const devEnviromentVariavles = {
  DEV_BACKEND_URL,
};

const prodEnviromentVariavles = {
  PRO_BACKEND_URL,
};

export default __DEV__ ? devEnviromentVariavles : prodEnviromentVariavles;
