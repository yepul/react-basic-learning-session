import { ChangeEvent, useEffect, useState } from "react";

type TMissions = {
  name: string;
  flight: number;
};

interface ISpaceXResponse {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: TMissions[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

const Lifecycle = () => {
  //  - [x] lifecycle
  //  - [x] map & keys
  // - [ ] custom component
  // - [ ] custom hook
  // - [ ] serverside fetch

  const [contohDependency, setContohDependency] = useState<string>(() => "");
  const [spaceXCapsulesData, setSpaceXCapsulesData] = useState<
    ISpaceXResponse[] | []
  >(() => []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setContohDependency(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((data: ISpaceXResponse[]) => {
        setSpaceXCapsulesData(data);
      });
  }, []);

  return (
    <div className="container lg:min-w-1/2 mx-auto">
      <h1>value kita: {contohDependency}</h1>
      <input
        className="border-black border"
        id="contoh-dependency"
        value={contohDependency}
        onChange={handleInput}
      />
      {spaceXCapsulesData.map((capsule) => (
        <div key={capsule.capsule_serial}>
          <div>status: {capsule.status}</div>
          <div>id: {capsule.capsule_id}</div>
          <div>
            missions:
            {capsule.missions.map((mission) => (
              <div key={mission.name + mission.flight}>
                name: {mission.name}, flight: {mission.flight}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lifecycle;
