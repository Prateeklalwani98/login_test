import React from "react";
import MainNavLayout from "../../NavLayout/MainNavLayout";

import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  return (
    <MainNavLayout>
      <div className="homepage">
        <h1>Hello and welcome to the home</h1>
      </div>
    </MainNavLayout>
  );
}

export default HomePage;
