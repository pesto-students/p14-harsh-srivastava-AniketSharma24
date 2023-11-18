let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(product) {
  let views = productViews.get(product) || 0;

  views += 1;

  productViews.set(product, views);

  console.log(`Product ID ${product.id} viewed for the ${views} time(s)`);
}

function addToCart(product) {
  if (cartItems.has(product)) {
    return "Product already in cart";
  }

  cartItems.add(product);

  return "Product added to cart";
}

// Example usage:
const product1 = { id: 123 };
const product2 = { id: 456 };

incrementProductViews(product1);
incrementProductViews(product1);

console.log(addToCart(product1));
console.log(addToCart(product1));

incrementProductViews(product2);
