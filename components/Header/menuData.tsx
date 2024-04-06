import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu:[
      {
        id: 21,
        title: "AI Integration",
        newTab: false,
        path: "/#features",
              
      },
      {
        id: 22,
        title: "Software Developement",
        newTab: false,
        path: "/#features",
              
      },
      {
        id: 23,
        title: "Tech Consulting",
        newTab: false,
        path: "/#features",
              
      },
      {
        id: 24,
        title: "System Automation",
        newTab: false,
        path: "/#features",
              
      },
      {
        id: 25,
        title: "System Architecture",
        newTab: false,
        path: "/#features",
              
      },
      {
        id: 26,
        title: "MLOps",
        newTab: false,
        path: "/#features",
              
      },

    ]
  },
  {
    id: 5,
    title: "Coorporate Training",
    newTab: false,
    path: "/corporate-training",
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  // // {
  // //   id: 3,
  // //   title: "Pages",
  // //   newTab: false,
  // //   submenu: [
  // //     {
  // //       id: 31,
  // //       title: "Blog Grid",
  // //       newTab: false,
  // //       path: "/blog",
  // //     },
  // //     {
  // //       id: 34,
  // //       title: "Sign In",
  // //       newTab: false,
  // //       path: "/auth/signin",
  // //     },
  // //     {
  // //       id: 35,
  // //       title: "Sign Up",
  // //       newTab: false,
  // //       path: "/auth/signup",
  // //     },
  // //     {
  // //       id: 35,
  // //       title: "Docs",
  // //       newTab: false,
  // //       path: "/docs",
  // //     },
  // //     {
  // //       id: 35.1,
  // //       title: "Support",
  // //       newTab: false,
  // //       path: "/support",
  // //     },
  // //     {
  // //       id: 36,
  // //       title: "404",
  // //       newTab: false,
  // //       path: "/error",
  // //     },
  // //   ],
  // },

];

export default menuData;
