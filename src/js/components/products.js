import { select, templates} from '../settings.js';
class Products {
  constructor(data) {
    const thisProducts = this;
    thisProducts.data = data;

    thisProducts.getElements();
    thisProducts.render();
  }

  getElements() {
    const thisProducts = this;
    thisProducts.productsContainers = document.querySelectorAll(select.containerOf.products);
  }

  render() {
    const thisProducts = this;
    // const generatedHTML = templates.templateProduct(thisProducts.data);
    // thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    // thisProducts.productsContainer.appendChild(thisProducts.element);
    let html = '';
    for (const product of thisProducts.data) {
      const generatedHTML = templates.product(product);
      html = html + generatedHTML;
    }

    for (const productsContainer of thisProducts.productsContainers) {
      productsContainer.innerHTML = html;
    }

  }
}

export default Products;