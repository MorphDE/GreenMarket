import { ProductService } from "../services/index.js";

export async function postCreateProductCtrl(req, res) {
  try {
    const { name, description, image, categoryId, price, rating, unit } =
      req.body;

    const result = await ProductService.addProduct({
      name,
      description,
      image,
      categoryId,
      price,
      rating,
      unit,
    });

    res.status(201).json({ result });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
}

export async function updateProductCtrl(req, res) {
  const { productId } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await ProductService.updateProduct(
      productId,
      updateData
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error while updating product." });
  }
}

export async function getAllProductsCtrl(req, res) {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error while fetching products." });
  }
}

export async function getProductByIdCtrl(req, res) {
  const { productId } = req.params;
  try {
    const product = await ProductService.getProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error while fetching product." });
  }
}

export async function getProductsByNameCtrl(req, res) {
  const { query } = req.query;
  try {
    const products = await ProductService.searchProductsByName(query);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching for products:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error while searching for products." });
  }
}

export async function getFilteredAndSortedProductsCtrl(req, res) {
  const { minPrice, maxPrice, categoryName, sortBy } = req.query;

  try {
    const products = await ProductService.getFilteredAndSortedProducts({
      minPrice: minPrice !== undefined ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice !== undefined ? parseFloat(maxPrice) : undefined,
      categoryName,
      sortBy,
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(
      "Error fetching filtered and sorted products:",
      error.message
    );
    res.status(500).json({
      error:
        "Internal server error while fetching filtered and sorted products.",
    });
  }
}

export const ProductController = {
  postCreateProductCtrl,
  updateProductCtrl,
  getAllProductsCtrl,
  getProductByIdCtrl,
  getProductsByNameCtrl,
  getFilteredAndSortedProductsCtrl,
};
