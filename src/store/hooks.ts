import { createTypedHooks } from "easy-peasy";
import { IStoreModel } from "@/src/store";

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<IStoreModel>();

export default {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
};
