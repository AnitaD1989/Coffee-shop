import { select, utils, templates } from '../settings.js';

class Products {
  constructor(data) {
    const thisProducts = this;

    thisProducts.data = data;

    thisProducts.getElements();
    thisProducts.render();
  }

  getElements() {
    const thisProducts = this;
    thisProducts.productsContainer = document.querySelector(select.containerOf.products);
  }

  render() {
    const thisProducts = this;
    // const generatedHTML = templates.templateProduct(thisProducts.data);
    // thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    // thisProducts.productsContainer.appendChild(thisProducts.element);
    for (const product of thisProducts.data) {
      const generatedHTML = templates.product(product);
      thisProducts.element = utils.createDOMFromHTML(generatedHTML);
      thisProducts.productsContainer.appendChild(thisProducts.element);
    }
  }
}

export default Products;