export const settings = {
  db: {
    url: '//localhost:3131',
    data: 'data',
  },
};

export const select = {
  containerOf: {
    products: '.products-wrapper .features',
  }, 
  templateOf: {
    templateProduct: '#template-product',
  },
};

export const templates = {
  product: Handlebars.compile(document.querySelector(select.templateOf.templateProduct).innerHTML),
};

export const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};