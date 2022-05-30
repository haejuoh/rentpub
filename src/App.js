import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./assets/style/customTheme";
import DefaultLayout from "./layouts/DefaultLayout";
import Guide from "./views/Guide";
import Sample from "./views/Sample";
import UserManage from "./views/UserManage";
import UserInquiry from "./views/UserInquiry";
import TaskManage from "./views/TaskManage";
import TaskRegister from "./views/TaskRegister";
import BusinessGroupManage from "./views/BusinessGroupManage";
import Shtprsv from "./views/shtprntlrsv/shtprsv/index";
import { Container } from "@mui/material";
import { LayoutStyle } from "./assets/style/common";

// function App() {
//   // console.log(themeMode);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Wrap>
//           {/* <Bookmark color={theme.palette.primary.light} /> */}
//           <ComponentTabs />
//         </Wrap>
//         {/* <img src={iconArrow}/> */}
//       </ThemeProvider>
//     </>
//   );
// }
const App = () => {
  const layout = LayoutStyle();
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
      path: "/user",
      // layout 지정
      element: <DefaultLayout />,
      // page 지정
      children: [
        { index: true, element: <UserManage /> },
        // { path: "about", element: <About /> },
      ],
    },
    {
      path: "/user-inquiry",
      element: <DefaultLayout />,
      children: [{ index: true, element: <UserInquiry /> }],
    },
    {
      path: "/task-manage",
      element: <DefaultLayout />,
      children: [{ index: true, element: <TaskManage /> }],
    },
    {
      path: "/task-register",
      element: <DefaultLayout />,
      children: [{ index: true, element: <TaskRegister /> }],
    },
    {
      path: "/business-group-manage",
      element: <DefaultLayout />,
      children: [{ index: true, element: <BusinessGroupManage /> }],
    },
    {
      path: "/shtprsv",
      element: <DefaultLayout />,
      children: [{ index: true, element: <Shtprsv /> }],
    },
    {
      // path 지정
      path: "/",
      //layout 지정
      element: <Guide />,
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
