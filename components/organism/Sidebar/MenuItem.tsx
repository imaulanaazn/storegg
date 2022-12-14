import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps{
    title:string,
    active?: boolean,
    icon: 'logout'|'settings'|'rewards'|'cards'|'messages'|'transactions'|'overview',
    href: string
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href,
  } = props;
  const classItem = cx({
    item: true,
    active,
    'mb-30': true,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={`${icon} icon`} />
      </div>

      <p className="item-title m-0">
        <Link href={href ?? ''}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
