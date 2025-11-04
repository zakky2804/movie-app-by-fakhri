import Link from "next/link";

interface LinkData {
  name: string;
  link: string;
}

interface FooterListProps {
  data: LinkData[];
}
const FooterList = ({ data }: FooterListProps) => {
  return (
    <ul className="space-y-2 w-1/2 sm:w-fit mx-auto">
      {data.map((item) => (
        <li key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
