import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CartStore {
  items = [
    {
      productId: 1,
      quantity: 5,
    },
    {
      productId: 2,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
