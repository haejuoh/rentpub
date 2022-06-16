import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./assets/style/customTheme";
import DefaultLayout from "./layouts/DefaultLayout";
import { Container } from "@mui/material";
import Guide from "./views/Guide";
import Sample from "./views/Sample";
import RentalFeeCheck from "./views/rentalFeeCheck";
import RentalFeeCheckRegist from "./views/rentalFeeCheck/Regist";
import WorkGroupManagement from "./views/workGroupManagement";
import WorkGroupManagementRegist from "./views/workGroupManagement/Regist";

const App = () => {
  const element = useRoutes([
    {
      // path 지정
      path: "/sample",
      // layout 지정
      element: <DefaultLayout />,
      // page 지정
      children: [
        { index: true, element: <Sample /> },
        // { path: "about", element: <About /> },
      ],
    },
    {
      // path 지정
      path: "/",
      //layout 지정
      element: <Guide />,
    },
    {
      path: "/rentalFeeCheck",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <RentalFeeCheck /> },
        { path: "regist", element: <RentalFeeCheckRegist /> },
      ],
    },
    {
      path: "/workGroupManagement",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <WorkGroupManagement /> },
        { path: "regist", element: <WorkGroupManagementRegist /> },
      ],
    },
    // {
    //   // path 지정
    //   path: "/*",
    //   //layout 지정
    //   element: <NotFound />,
    // },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          {element}
          {/* <img src={iconArrow}/> */}
        </Container>
      </ThemeProvider>
    </>
  );
};
export default App;
