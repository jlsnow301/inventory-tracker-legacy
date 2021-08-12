import React from "react";

import "../../css/loading-spinner.css";

interface Props {
  asOverlay: boolean;
}

/** Generates a loading spinner for axios requests, etc */
const LoadingSpinner: React.FC<Props> = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
