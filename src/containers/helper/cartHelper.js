export const addItemToCart = (item) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const itemId = new Date().toISOString();
    cart.push({ [itemId]: item });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeItemFromCart = (itemId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((item, index) => {
      if (Object.keys(item)[0] === itemId) {
        cart.splice(index, 1);
      }
      return null;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const clearCart = () => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
