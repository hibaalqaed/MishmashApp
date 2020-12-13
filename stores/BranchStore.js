import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BranchStore {
  branches = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBranches = async () => {
    try {
      const res = await instance.get("/branches");
      this.branches = res.data;
      this.loading = false;
    } catch (error) {
      console.error("BranchesStore -> fetchBranches -> error", error);
    }
  };
}

const branchStore = new BranchStore();
branchStore.fetchBranches();

export default branchStore;
