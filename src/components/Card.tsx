import { FunctionComponent, useMemo } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";
import { FavoriteButton } from "@/src/components/FavoriteButton";
import { useStoreActions, useStoreState } from "@/src/store/hooks";

export const Card: FunctionComponent<ISpaceXResponse> = (capsule) => {
  const favorites = useStoreState((state) => state.capsules.favorites);
  const setFavorite = useStoreActions(
    (actions) => actions.capsules.setFavorite
  );
  const removeFavorite = useStoreActions(
    (actions) => actions.capsules.removeFavorite
  );

  const isFavorite = useMemo(
    () => favorites.includes(capsule),
    [favorites, capsule]
  );

  const handleSetFavorite = () => {
    isFavorite ? removeFavorite(capsule) : setFavorite(capsule);
  };

  return (
    <div className="py-8 px-4 bg-white rounded-md shadow-md">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h6 className="text-xs text-gray-600 uppercase mb-1">
              {capsule.capsule_serial} {capsule.type} &bull; {capsule.status}
            </h6>
          </div>
          <div className="text-right">
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={handleSetFavorite}
              name="favorite-button"
              aria-details="favorite-button"
            />
          </div>
        </div>
        <span className="text-gray-800 text-sm">{capsule.details}</span>
      </div>
      <div className="mt-4 flex flex-col">
        <h6 className="text-sm text-gray-800 mb-1">
          <strong>missions</strong>
        </h6>
        <ul className="list-none">
          {capsule.missions.map((mission) => (
            <li
              className="text-sm text-gray-800"
              key={mission.name + mission.flight}
            >
              {mission.name}, flight: {mission.flight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
