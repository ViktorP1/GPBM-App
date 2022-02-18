import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/ layout/Layout";
import { Fragment } from "react";

import BatteryTool from "./pages/BatteryTool";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Statistics from "./pages/Statistics";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Fragment>
            <Route path="/" element={<BatteryTool />} exact />
            {loggedIn === false && (
              <>
                <Route path="register" element={<Page1 />} />
                <Route path="login" element={<Page2 />} />
              </>
            )}
            {loggedIn === true && (
              <>
                <Route path="page3" element={<Page3 />} />
                <Route path="statistics" element={<Statistics />} />
              </>
            )}
            <Route path="statistic" element={<Statistics />} />
          </Fragment>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
