import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";
import productStore from "../stores/productStore";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    // parse it cuz it is a string when recieving
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    // to make my cart persistent
    // stringify cuz it only accepts strings
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  // getter
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  // get totalPrice() {
  //   let total = 0;
  //   this.items
  //     .map((item) => ({
  //       ...productStore.getProductById(item.productId),
  //       quantity: item.quantity,
  //     }))
  //     .forEach((item) => (total += item.price * item.quantity));
  //   return total;
  // }

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.productId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = () => {
    this.items = [];
    alert("I'm a cute message");
  };
}

const cartStore = new CartStore();
cartStore.fetchCart;

export default cartStore;
