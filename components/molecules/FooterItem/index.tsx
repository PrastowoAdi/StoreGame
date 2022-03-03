interface FooterItemProps {
    title:string;
    href?:string;
}
export default function FooterItem(props: Partial<FooterItemProps>) {
  const { title, href } = props;
  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">{title}</a>
    </li>
  );
}
