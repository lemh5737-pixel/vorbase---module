import axios from "axios";

const BASE_URL = "https://vorbase.zone.id/api";

export async function add({ db, password, key, value }) {
  try {
    const res = await axios.post(`${BASE_URL}/add`, {
      db,
      password,
      key,
      value
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
}

export async function read({ db, password, key }) {
  try {
    const res = await axios.post(`${BASE_URL}/read`, {
      db,
      password,
      ...(key ? { key } : {})
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
}
