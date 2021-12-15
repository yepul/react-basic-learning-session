import { createStore } from "easy-peasy";
import {
  capsulesModel as capsules,
  ICapsulesModel,
} from "@/src/store/model/capsules";

export interface IStoreModel {
  capsules: ICapsulesModel;
}

export const store = createStore<IStoreModel>(
  { capsules },
  {
    name: "space-store-model",
  }
);
