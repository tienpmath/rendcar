import Image from 'next/image';
export const LogoIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <>
      <Image src="/logo.jpg" alt="alt" width={60} height={60} />
    </>
  );
};
