import { FunctionComponent } from "react";

export const Container: FunctionComponent = (props) => {
  return (
    <div className="max-w-8xl mx-auto py-8 lg:px-8 sm:px-6">
      {props.children}
    </div>
  );
};
