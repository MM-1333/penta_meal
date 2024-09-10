import { setLocalStorage } from "../utils/localStorage";
import { baseApiHandler } from "./axios";

export const surveyResultHandler = async () => {
  try {
    const url = "surveys-result";

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const totalSurveyHandler = async () => {
  try {
    const url = "surveys";

    const res = await baseApiHandler("get", url, null, true);

    console.log("res :::88:", res.data);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const loginHandler = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const url = "login";

    const res = await baseApiHandler("post", url, data, false);

    if (res?.data?.access) {
      setLocalStorage("access_token", res.data.access);
    }

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const surveySubmitHandler = async (data: {
  id: number | string;
  response: string;
  description: string;
}) => {
  try {
    const url = `survey/${data.id}/response`;

    const res = await baseApiHandler("post", url, data, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};
