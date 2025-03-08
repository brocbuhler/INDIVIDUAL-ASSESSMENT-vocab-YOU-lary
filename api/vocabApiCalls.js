// CRUD api calls for vocab cards
// test api call
const endpoint = 'https://broc-c-vocab-default-rtdb.firebaseio.com/';
const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getCards;
