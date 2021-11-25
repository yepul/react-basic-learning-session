import { ChangeEvent, FunctionComponent, useState } from "react";
import { ISpaceXResponse, useCapsules } from "../../src/hooks/useCapsules";
import { GetServerSideProps } from "next";
import { HeroBanner } from "../../src/components/HeroBanner";

const Lifecycle: FunctionComponent<{ data: ISpaceXResponse[] }> = (props) => {
  // - [x] lifecycle
  // - [x] map & keys
  // - [x] custom hook
  // - [x] serverside fetch
  // - [ ] custom component

  const [capsule_id, setCapsule_id] = useState<string>(() => "");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCapsule_id(event.target.value);
  };

  const spaceXCapsulesData = useCapsules(
    {
      capsule_id,
      status: "unknown",
    },
    props.data
  );

  return (
    <div className="mb-5">
      {/*// hero banner
          xs => safe value
          md => ipad vertical
          lg => desktop
      */}
      <HeroBanner
        title={
          <>
            apa-apa dekat sini, dia feeling.
            <br />
            yepul nanti dapat PS5 dia feeling jugak
          </>
        }
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

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch("https://api.spacexdata.com/v3/capsules")
    .then((response) => response.json())
    .then((data: ISpaceXResponse[]) => data);

  return {
    props: { data },
  };
};

export default Lifecycle;
