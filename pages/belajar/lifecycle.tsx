import { ChangeEvent, useState } from "react";
import { useCapsules } from "../../src/hooks/useCapsules";

const Lifecycle = () => {
  //  - [x] lifecycle
  //  - [x] map & keys
  // - [ ] custom hook
  // - [ ] custom component
  // - [ ] serverside fetch

  const [contohDependency, setContohDependency] = useState<string>(() => "");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setContohDependency(event.target.value);
  };

  const spaceXCapsulesData = useCapsules();

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
