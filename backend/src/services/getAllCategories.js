import { Category } from "../models/category";

export async function getAllCategories() {
  const categories = await Category.find({});
  if (!categories) throw new Error("Categories not found");
  return orders;
}
