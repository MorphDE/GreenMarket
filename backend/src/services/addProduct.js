
import Category from "../models/Category.js";
import Product from "../models/Product.js";

export async function addProduct({
  name,
  description,
  image,
  categoryId,
  price,
  rating,
  unit,
}) {
  const foundProduct = await Product.findOne({ name });
  if (foundProduct) throw new Error("Product with this name already exists");

  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error("Category not found.");
  }

  const product = await Product.create({
    name,
    description,
    image,
    categoryId,
    price,
    rating,
    unit,
  });

  const populatedProduct = await Product.findById(product._id).populate(
    "categoryId"
  );

  return populatedProduct;
}
