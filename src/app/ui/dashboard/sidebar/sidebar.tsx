import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from './sidebar.module.scss'
import {
  MdDashboard,
  MdAddBox,
  MdShoppingBag,
  MdAssignmentAdd,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDraw
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Element",
        path: "/dashboard/element",
        icon: <MdAddBox />,
      },
      {
        title: "Product",
        path: "/dashboard/product",
        icon: <MdShoppingBag />,
      },
      {
        title: "Channel",
        path: "/dashboard/channel",
        icon: <MdDraw />,
      },
      {
        title: "Order",
        path: "/dashboard/order",
        icon: <MdAssignmentAdd />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Info",
        path: "/dashboard/user",
        icon: <MdHelpCenter />,
      },
      {
        title: "Team",
        path: "/dashboard/user/team",
        icon: <MdPeople />,
      },
      {
        title: "Logs",
        path: "/dashboard/user/log",
        icon: <MdAnalytics />,
      },
      {
        title: "Settings",
        path: "/dashboard/user/setting",
        icon: <MdOutlineSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={"/noavatar.png"} alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}></span>
          <span className={styles.userTitle}>Moesama</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
  
export default Sidebar