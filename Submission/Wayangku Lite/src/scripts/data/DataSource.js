class DataSource {
  static showAll() {
    const BASE_URL = "https://wayangapi.herokuapp.com/api/wayang";
    return fetch(`${BASE_URL}`)
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (responseJSON.result) {
          return Promise.resolve(responseJSON.result);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`);
        }
      });
  }

  static search(keyword) {
    let url = "https://wayangapi.herokuapp.com/api/wayang";
    if(keyword){
      url = `${url}/search/${keyword}`
    }
    return fetch(`${url}`)
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (responseJSON.result) {
          return Promise.resolve(responseJSON.result);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`);
        }
      });
  }

  static showOne(id) {
    let url = "https://wayangapi.herokuapp.com/api/wayang";
    if(id){
      url = `${url}/${id}`
    }
    return fetch(`${url}`)
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (responseJSON.result) {
          return Promise.resolve(responseJSON.result);
        } else {
          return Promise.reject(`${id} tidak ditemukan`);
        }
      });
  }

  static searchByCategory(category) {
    let url = "https://wayangapi.herokuapp.com/api/wayang";
    if(category){
      url = `${url}/kategori/${category}`
    }
    return fetch(`${url}`)
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (responseJSON.result) {
          return Promise.resolve(responseJSON.result);
        } else {
          return Promise.reject(`${category} tidak ditemukan`);
        }
      });
  }

}

export default DataSource;
