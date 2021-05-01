const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const ul = document.createElement('ul');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice
 */
function render(maxPrice) {
  const filteredCatalog = maxPrice
    ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
    : catalog;

  ul.innerHTML = filteredCatalog
    .map(({ name, price }) => `<li>${name} - ${price}</li>`)
    .join('');
}

document.body.appendChild(ul);
render();
document
  .querySelector('input')
  .addEventListener('input', ({ target: { value } }) => {
    render(Number(value));
  });

function stockCatalog(lists) {
  const stockList = lists.filter(({ stocked }) => stocked === true);
  return stockList;
}
const stockItem = stockCatalog(catalog);

function renderStock(listStock) {
  ul.innerHTML = listStock
    .map(
      ({ name, price, stocked }) => `<li>${name} - ${price} - ${stocked}</li>`,
    )
    .join('');
}
renderStock(stockItem);
document
  .querySelector('input[type="checkbox"]')
  .addEventListener('change', () => {});
