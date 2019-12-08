import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div>
      <ClipLoader loading="true" size={60} color={"#36D7B7"} />
    </div>
  );
}
