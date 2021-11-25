import { FunctionComponent } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";

export const CapsuleCard: FunctionComponent<ISpaceXResponse> = (capsule) => {
  /**
   * justifyContent: '', => kiri dan kanan / x / horizontal
   * alignItems: ''      => atas bawah / vertical / y
   */

  return (
    <div className="p-8 bg-white rounded-md shadow-md">
      <section className="flex justify-between">
        <div className="flex">
          {capsule.capsule_serial} &bull; {capsule.type}
        </div>
        <div className="flex uppercase">{capsule.status}</div>
      </section>
      <section>
        <span>{capsule.details}</span>
      </section>
      <section>
        <h6 className="font-bold">missions</h6>
        <ul className="list-none">
          {capsule.missions.map((mission) => (
            <li key={mission.name + mission.flight}>
              {mission.name}, flight: {mission.flight}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
