import { useEffect, useState } from "react";

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

export const useCapsules = () => {
  const [spaceXCapsulesData, setSpaceXCapsulesData] = useState<
    ISpaceXResponse[] | []
  >(() => []);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((data: ISpaceXResponse[]) => {
        setSpaceXCapsulesData(data);
      });
  }, []);

  return spaceXCapsulesData;
};
