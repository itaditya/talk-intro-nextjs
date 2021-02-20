const productsApiUrl = `https://workshop-platform.netlify.app/.netlify/functions/api/products`;

export async function fetchRecommendedProducts() {
  const res = await fetch(`${productsApiUrl}?_limit=3`);
  const json = await res.json();
  return json;
}

export async function fetchProducts(options = {}) {
  const { page = 1 } = options;

  const res = await fetch(`${productsApiUrl}?_limit=6&_page=${page}`);
  const json = await res.json();
  return json;
}
