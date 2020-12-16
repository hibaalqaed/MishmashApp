import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);

  fetchProducts = async () => {
    try {
      const res = await instance.get("/products");
      this.products = res.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductsStore -> fetchProducts -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
