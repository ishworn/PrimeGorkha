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
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Services",
        newTab: false,
        path: "/",
      },
      {
        id: 34,
        title: "Testimonials",
        newTab: false,
        path: "/",
      },
      {
        id: 35,
        title: "Trace Your Order",
        newTab: false,
        path: "/",
      },
      {
        id: 35,
        title: "Members",
        newTab: false,
        path: "/",
      },
      {
        id: 35.1,
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
];

export default menuData;
