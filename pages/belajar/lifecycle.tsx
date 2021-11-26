import { ChangeEvent, FunctionComponent, useState } from "react";
import { ISpaceXResponse, useCapsules } from "@/src/hooks/useCapsules";
import { GetServerSideProps } from "next";
import { HeroBanner } from "@/src/components/HeroBanner";
import { CapsuleCard } from "@/src/components/CapsuleCard";
import { Container } from "@/src/components/Container";
import { PageHeader } from "@/src/components/PageHeader";
import Head from "next/head";

const Lifecycle: FunctionComponent<{ data: ISpaceXResponse[] }> = (props) => {
  // - [x] lifecycle
  // - [x] map & keys
  // - [x] custom hook
  // - [x] serverside fetch
  // - [x] custom component

  const [capsule_id, setCapsule_id] = useState<string>(() => "");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCapsule_id(event.target.value);
  };

  const spaceXCapsulesData = useCapsules({}, props.data);

  return (
    <>
      <Head>
        <title>Siri Mengajar React Lifecycle</title>
        <meta name="title" content="Siri Mengajar Lifecycle" />
        <meta
          name="description"
          content="siri mengajar mior dan saiful mengenali React lifecycle menggunakan SpaceX Capsule public API"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.github.com/yepul/react-basic-learning-session"
        />
        <meta property="og:title" content="Siri Mengajar Lifecycle" />
        <meta
          property="og:description"
          content="siri mengajar mior dan saiful mengenali React lifecycle menggunakan SpaceX Capsule public API"
        />
        <meta
          property="og:image"
          content="https://source.unsplash.com/k38XYpPLs-U/1200x628"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.github.com/yepul/react-basic-learning-session"
        />
        <meta property="twitter:title" content="Siri Mengajar Lifecycle" />
        <meta
          property="twitter:description"
          content="siri mengajar mior dan saiful mengenali React lifecycle menggunakan SpaceX Capsule public API"
        />
        <meta
          property="twitter:image"
          content="https://source.unsplash.com/k38XYpPLs-U/1200x628"
        />
      </Head>
      <div className="mb-5">
        <PageHeader />
        <HeroBanner
          title={
            <>
              apa-apa dekat sini, dia feeling.
              <br />
              yepul nanti dapat PS5 dia feeling jugak
            </>
          }
        />
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {spaceXCapsulesData.map((capsule: ISpaceXResponse) => (
              <CapsuleCard key={capsule.capsule_serial} {...capsule} />
            ))}
          </div>
        </Container>
      </div>
    </>
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
