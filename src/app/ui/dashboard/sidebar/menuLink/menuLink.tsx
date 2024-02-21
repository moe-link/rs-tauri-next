import Link from 'next/link'
import styles from './menuLink.module.scss'

interface MenuItem {
  path: string;
  icon: any;
  title: string;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink = ({item}: MenuLinkProps) => {
  return (
    <Link href={item?.path} className={styles.container}>
      {item?.icon}
      {item?.title}
    </Link>
  )
}

export default MenuLink