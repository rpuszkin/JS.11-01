function getKittenByAxios() {
  return axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      if (Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0].url;
      } else {
        throw new Error("Odpowiedź nie jest prawidłową tablicą lub jest pusta");
      }
    })
    .catch((error) => {
      alert("Błąd podczas pobierania kociaka: " + error);
      throw error;
    });
}
