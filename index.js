/**
 * Fetches comic id
 * @returns {Promise} A promise that resolves with the fetched data or rejects with an error.
 */
const fetchXKCD = () => {
  return new Promise((resolve, reject) => {
    fetch('https://fwd.innopolis.university/api/hw2?email=d.gazizullin@innopolis.university')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch comic id');
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * Retrieves comic data from the API.
 * @returns {Promise} A promise that resolves with the comic data.
 */
const getComicData = () => {
  return new Promise((resolve, reject) => {
    fetchXKCD()
      .then(data => {
        fetch(`https://fwd.innopolis.university/api/comic?id=${data}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Failed to fetch comic data');
            }
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * Returns the formatted published date.
 *
 * @param {Object} data - The comic data
 * @returns {string} The formatted published date.
 */
const getPublishedDate = data => {
  const day = data.day;
  const month = data.month - 1;
  const year = data.year;
  const date = new Date(year, month, day);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Fills the DOM with data from the provided object.
 * @param {Object} data - The data object containing the comic information.
 */
const fillDOM = data => {
  document.querySelector('#comic-image').src = data.img;
  document.querySelector('#comic-image').alt = data.alt;
  document.querySelector('#comic-title').textContent = data.safe_title;
  document.querySelector('#comic-date').textContent = getPublishedDate(data);
  document.querySelector('#comic-skeleton').style.display = 'none';
};

window.addEventListener('load', () => {
  getComicData().then(data => {
    fillDOM(data);
  });
});
