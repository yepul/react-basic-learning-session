import { action, Action, actionOn, ActionOn, persist } from "easy-peasy";
import { ISpaceXResponse } from "@/src/hooks/useCapsules";

export interface ICapsulesModel {
  favorites: ISpaceXResponse[];
  lastUpdated: string;
  setFavorite: Action<ICapsulesModel, ISpaceXResponse>;
  removeFavorite: Action<ICapsulesModel, ISpaceXResponse>;
  onSetFavorite: ActionOn<ICapsulesModel>;
}

export const capsulesModel: ICapsulesModel = persist({
  //state
  favorites: [],
  lastUpdated: "",

  //actions
  setFavorite: action((state, payload) => {
    state.favorites.push(payload);
  }),

  removeFavorite: action((state, payload) => {
    state.favorites = state.favorites.filter(
      (item) => item.capsule_serial !== payload.capsule_serial
    );
  }),

  onSetFavorite: actionOn(
    (actions) => actions.setFavorite,
    (state) => {
      state.lastUpdated = new Date().toDateString();
    }
  ),
});
