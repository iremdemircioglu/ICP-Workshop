import React, { useState, useEffect } from "react";
import { addProduct, getAllProducts, getProduct, updateStockStatus } from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, description: "" });
  const [productId, setProductId] = useState("");
  const [stockUpdate, setStockUpdate] = useState({ id: "", inStock: true });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productList = await getAllProducts();
    setProducts(productList);
  };

  const handleAddProduct = async () => {
    await addProduct(newProduct.name, newProduct.price, newProduct.description);
    fetchProducts();
  };

  const handleGetProduct = async () => {
    const product = await getProduct(productId);
    alert(product ? JSON.stringify(product) : "Product not found");
  };

  const handleUpdateStock = async () => {
    await updateStockStatus(stockUpdate.id, stockUpdate.inStock);
    fetchProducts();
  };

  return (
    <div>
      <h1>Product Management</h1>

      {/* Add Product Form */}
      <div>
        <h2>Add Product</h2>
        <input type="text" placeholder="Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="number" placeholder="Price" onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) })} />
        <input type="text" placeholder="Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Display All Products */}
      <div>
        <h2>All Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} - {product.description} - {product.inStock ? "In Stock" : "Out of Stock"}
            </li>
          ))}
        </ul>
      </div>

      {/* Get Product by ID */}
      <div>
        <h2>Get Product by ID</h2>
        <input type="text" placeholder="Product ID" onChange={(e) => setProductId(e.target.value)} />
        <button onClick={handleGetProduct}>Get Product</button>
      </div>

      {/* Update Stock Status */}
      <div>
        <h2>Update Stock Status</h2>
        <input type="text" placeholder="Product ID" onChange={(e) => setStockUpdate({ ...stockUpdate, id: e.target.value })} />
        <select onChange={(e) => setStockUpdate({ ...stockUpdate, inStock: e.target.value === "true" })}>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
        <button onClick={handleUpdateStock}>Update Stock</button>
      </div>
    </div>
  );
}

export default App;

