import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/motoko_project_backend";

// Initialize agent and actor
const agent = new HttpAgent();
const motokoProjectBackend = Actor.createActor(idlFactory, { agent, canisterId: "bd3sg-teaaa-aaaaa-qaaba-cai" });

// Add a new product
export const addProduct = async (name, price, description) => {
  return await motokoProjectBackend.addProduct(name, price, description);
};

// Get all products
export const getAllProducts = async () => {
  return await motokoProjectBackend.getAllProducts();
};

// Get product by ID
export const getProduct = async (id) => {
  return await motokoProjectBackend.getProduct(id);
};

// Update stock status
export const updateStockStatus = async (id, inStock) => {
  return await motokoProjectBackend.updateStockStatus(id, inStock);
};
