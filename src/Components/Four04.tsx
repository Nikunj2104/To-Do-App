import { FC } from "react";

const Four04: FC = () => {
  const GoBack = () => {
    window.location.href = "/";
  };

  return (
    <center>
      <button className="btn btn-primary" onClick={GoBack}>
        Go Back
      </button>
    </center>
  );
};
export default Four04;
