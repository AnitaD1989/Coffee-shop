import {  settings, select, classNames } from './settings.js';
import Products from './components/products.js';

const app = {

  initPages: function() {
    const links = document.querySelectorAll(select.nav.links);

    const home= document.querySelector('#home');
    const products = document.querySelector('#products');
    const contact = document.querySelector('#contact');

    for (let link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedElement = this;

        home.classList.remove(classNames.pages.active);
        products.classList.remove(classNames.pages.active);
        contact.classList.remove(classNames.pages.active);

        const href = clickedElement.getAttribute('href');

        if(href =='#products') {
          products.classList.add(classNames.pages.active);
        } if(href == '#home') {
          home.classList.add(classNames.pages.active);
        } if (href == '#contact') {
          contact.classList.add(classNames.pages.active);
        }
      });

    }
  },

  initData: function() {
    const thisApp= this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.data;
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      
      .then(function(parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        thisApp.data = parsedResponse;
        console.log('thisApp.data', JSON.stringify(thisApp.data));
        thisApp.initProducts();
      });
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
    //thisApp.scrollTo();
    thisApp.initPages();
    
  },

  initProducts: function() {
    const thisApp = this;
    new Products(thisApp.data);
  },

  scrollTo: function () {
    const anchors = document.querySelectorAll('a.scroll-to');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
          block: 'start'
        });
      });
    }
  }, 
};

app.init();
