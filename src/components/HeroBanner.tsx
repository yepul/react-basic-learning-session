import { FunctionComponent, ReactNode } from "react";
import { Container } from "./Container";

interface IHeroBanner {
  title: ReactNode | string;
}

export const HeroBanner: FunctionComponent<IHeroBanner> = (props) => {
  return (
    <div className="mb-16">
      <Container>
        <h1 className="text-2xl font-extrabold text-gray-800 mt-20 mb-8 sm:text-3xl md:max-w-4xl">
          {props.title}
        </h1>
      </Container>
    </div>
  );
};
