export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    data: 'data',
  },
};

export const select = {
  nav: {
    links: '.main-nav a'
  },
  containerOf: {
    products: '.products-wrapper .features',
  }, 
  templateOf: {
    templateProduct: '#template-product',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  }
};

export const templates = {
  product: Handlebars.compile(document.querySelector(select.templateOf.templateProduct).innerHTML),
};

/*export const utils = {}; 

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};
*/