import { FunctionComponent, useMemo } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";
import { useStoreActions, useStoreState } from "@/src/store/hooks";
import dynamic from "next/dynamic";
import { IFavoriteButton } from "@/src/components/FavoriteButton";

const FavoriteButton = dynamic(
  () =>
    import("@/src/components/FavoriteButton").then<
      FunctionComponent<IFavoriteButton>
    >((mod) => mod.FavoriteButton),
  { ssr: false }
);

export const Card: FunctionComponent<ISpaceXResponse> = (capsule) => {
  const favorites = useStoreState((state) => state.capsules.favorites);
  const setFavorite = useStoreActions(
    (actions) => actions.capsules.setFavorite
  );
  const removeFavorite = useStoreActions(
    (actions) => actions.capsules.removeFavorite
  );

  const isFavorite = useMemo<boolean>(
    () =>
      !!favorites.find(
        (item) => item.capsule_serial === capsule.capsule_serial
      ),
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
