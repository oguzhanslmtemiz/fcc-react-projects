import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={faSpinner} />
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
}
