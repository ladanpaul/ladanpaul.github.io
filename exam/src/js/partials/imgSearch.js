(()=> {
  'use strict';

  const searchBtn = document.querySelector('#searchBtn');
  const searchIn = document.querySelector('#searchIn');
  const container = document.querySelector('#tile-container');
  const source = document.querySelector('#article__item').textContent;
  const compiled = _.template(source);

  const apiRandom = 'https://pixabay.com/api/?key=5784767-53bd9d6bd61ccfc7d2428b16b&image_type=photo&pretty=true&per_page=7';

  function getData(apiUrl) {
    const promise = fetch(apiUrl).then(function (response) {
      if (response) {
        return response.json();
      }
      throw new Error('ERROR while fetching!');
    }).then(function (data) {
      console.log(data);
      const articles = _.map(data.hits, function (item) {
        return {
          img: item.webformatURL,
          author: item.user
        };
      });
      renderPage(compiled, articles, container);
      masonryStart();
    }).catch(function (error) {
      console.log('Error = ' + error);
    });
  }

  getData(apiRandom);

  searchIn.addEventListener('keypress', function (e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const apiStr = createApiUrl(searchIn.value);
      getData(apiStr);
    }
  });

  searchBtn.addEventListener('click', function () {
    const apiStr = createApiUrl(searchIn.value);
    getData(apiStr);
  });

  function renderPage(template, data, parent) {
    let htmlString = '';
    _.forEach(data, function (item) {
      htmlString += template(item);
    });
    parent.innerHTML = htmlString;
  }

  function createApiUrl(title) {
    const server = 'https://pixabay.com/api/' + '?';
    const key = 'key=' + '5784767-53bd9d6bd61ccfc7d2428b16b';
    let q = '&q=' + title;
    const imageType = '&image_type=' + 'photo';
    const perPage = '&per_page=' + 7;
    return server + key + q + perPage + imageType;
  }

  function masonryStart() {
    setTimeout(function () {
      const container = document.querySelector('#tile-container');
      const msnry = new Masonry(container, {
        columnWidth: 300,
        itemSelector: '.tile__item',
        gutter: 20
      });
    }, 300);
  }

})();