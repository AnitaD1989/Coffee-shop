import {  settings } from './settings.js';
import Products from './components/products.js';

const app = {

  /* initPages: function() {
    const links = document.querySelector(select.nav.links);

    const products = document.querySelector(products.active);
    const about2 = document.querySelector(about2);
    const contact2 = document.querySelector(contact2);

    for (let link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedElement = this;

        products.classList.remove(classNames.pages.active);
        about2.classList.remove(classNames.pages.activre);
        contact2.classList.remove(classNames.pages.active);

        const href = clickedElement.getAttribute('href');

        if(href =='#products') {
          products.classList.add(classNames.pages.active);
        } if(href == '#about') {
          about2.classList.add(classNames.pages.active);
        } if (href == '#contact') {
          contact2.classList.add(classNames.pages.active);
        }
      });

    }
  },*/

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
    thisApp.scrollTo();
    //thisApp.initPages();
    
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