import { Category } from "../models/category";

export async function addCategory(categoryInfo) {
  const foundCategory = await Category.findOne({ name: category.name });
  if (foundCategory) throw new Error("Category with this name already exists");
  return Category.create(categoryInfo);
}
