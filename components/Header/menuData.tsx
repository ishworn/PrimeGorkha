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
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id:3,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Services",
        newTab: false,
        path: "/",
      },
      {
        id: 42,
        title: "Testimonials",
        newTab: false,
        path: "/",
      },
      {
        id: 43,
        title: "Trace Your Order",
        newTab: false,
        path: "/",
      },
      {
        id: 44,
        title: "Members",
        newTab: false,
        path: "/",
      },
      {
        id: 45,
        title: "Pricing",
        newTab: false,
        path: "/",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title: "Career",
    newTab: false,
    path: "/career",
  },
];

export default menuData;
