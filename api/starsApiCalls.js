// CRUD api calls for vocab cards
// test api call
const endpoint = 'https://broc-c-vocab-default-rtdb.firebaseio.com/';
const getStars = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stars.json`, {
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
  console.warn('did getStars work');
});

const createStar = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stars.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
  console.warn('did createStar work');
});

const updateStar = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stars/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
  console.warn('did updateStar work');
});

export { getStars, createStar, updateStar };
