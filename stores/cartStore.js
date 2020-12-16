import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

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
      (item) => item.cookieId === newItem.cookieId
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
}

const cartStore = new CartStore();
cartStore.fetchCart;

export default cartStore;
