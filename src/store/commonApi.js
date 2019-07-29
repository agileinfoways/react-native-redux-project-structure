import axios from "axios";

export const getDataApi = (url, accessToken) => {
  return new Promise((resolve, reject) => {
    axios.defaults.headers.common["Access-Token"] = accessToken;
    axios
      .get(url)
      .then(response => {
        if (response !== null) {
          let data = response.data;
          if (data !== null && Object.keys(data).length !== 0) {
            if (data.status_code === 200) {
              resolve(response);
            }
          }
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const postDataApi = (url, AuthToken, body, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, body, { headers: headers })
      .then(response => {
        if (response !== null) {
          let data = response.data;
          if (data !== null && Object.keys(data).length !== 0) {
            if (data.status_code === 200) {
              resolve(response);
            }
          }
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const putDataApi = (url, AuthToken, body, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, body, { headers: headers })
      .then(response => {
        if (response !== null) {
          let data = response.data;
          if (data !== null && Object.keys(data).length !== 0) {
            if (data.status_code === 200) {
              resolve(response);
            }
          }
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
