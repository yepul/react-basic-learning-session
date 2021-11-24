import { useEffect, useMemo, useRef, useState } from "react";

type TMissions = {
  name: string;
  flight: number;
};

export interface ISpaceXResponse {
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

type TQuery = {
  capsule_serial?: string;
  capsule_id?: string;
  status?: string;
  original_launch?: string;
  mission?: string;
  landings?: number;
  type?: string;
  reuse_count?: number;
};

export const useCapsules = (
  params: TQuery,
  initialData: ISpaceXResponse[] | [] = []
) => {
  /**
   * {
   *     capsule_id: 'dragon1',
   *     status: 'unknown'
   * }
   *
   * => ?capsule_id=dragon1&status=unknown
   */
  const query = useMemo(() => {
    const resource = Object.entries(params);
    if (!resource.length) {
      return "";
    }

    return "?" + resource.map((source) => source.join("=")).join("&");
  }, [params]);

  const [spaceXCapsulesData, setSpaceXCapsulesData] = useState<
    ISpaceXResponse[] | []
  >(() => initialData);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      fetch("https://api.spacexdata.com/v3/capsules" + query)
        .then((response) => response.json())
        .then((data: ISpaceXResponse[]) => {
          setSpaceXCapsulesData(data);
        });
    } else {
      isMounted.current = true;
    }
  }, [query, isMounted]);

  return spaceXCapsulesData;
};
