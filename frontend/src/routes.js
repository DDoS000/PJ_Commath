// import Icons from "views/Icons.js";
// import UserPage from "views/User.js";
import Basic_Computing from "views/B1.js";
import B2 from "views/B2.js";
import B3 from "views/B3.js";
import B4 from "views/B4.js";
import B5 from "views/B5.js";
import B6 from "views/B6.js";

var routes = [
  {
    path: "/B1",
    name: "1.Basic Computing",
    icon: "nc-icon nc-simple-add",
    component: Basic_Computing,
    layout: "/Pj_Commath",
  },
  {
    path: "/B2",
    name: "2.Linear Equations",
    icon: "nc-icon nc-simple-delete",
    component: B2,
    layout: "/Pj_Commath",
  },
  {
    path: "/B3",
    name: "3.Interpolation",
    icon: "nc-icon nc-simple-remove",
    component: B3,
    layout: "/Pj_Commath",
  },
  {
    path: "/B4",
    name: "4.Differentiation",
    icon: "nc-icon nc-vector",
    component: B4,
    layout: "/Pj_Commath",
  },
  {
    path: "/B5",
    name: "5.Integration",
    icon: "nc-icon nc-chart-bar-32",
    component: B5,
    layout: "/Pj_Commath",
  },
  {
    path: "/B6",
    name: "6.Root-finding",
    icon: "nc-icon nc-atom",
    component: B6,
    layout: "/Pj_Commath",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/commath",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/commath",
  // },
];
export default routes;
