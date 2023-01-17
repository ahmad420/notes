import { Button } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Page Not Found</h3>
      <img
        style={{ maxHeight: "80vh" }}
        src={require("./page-404.gif")}
        alt="loading..."
      />
      <Button href="/">Go to home page</Button>
    </div>
  );
};

export default PageNotFound;
