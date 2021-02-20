const productsApiUrl = `https://workshop-platform.netlify.app/.netlify/functions/api/products`;

export async function fetchRecommendedProducts() {
  const res = await fetch(`${productsApiUrl}?_limit=3`);
  const json = await res.json();
  return json;
}
