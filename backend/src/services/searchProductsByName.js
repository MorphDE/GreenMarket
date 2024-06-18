import Product from "../models/Product.js";

export async function searchProductsByName(query) {
  try {
    const searchCriteria = {
      name: { $regex: query, $options: "i" },
    };
    const products = await Product.find(searchCriteria).populate("categoryId");
    return products;
  } catch (error) {
    throw new Error("Error searching for products: " + error.message);
  }
}
