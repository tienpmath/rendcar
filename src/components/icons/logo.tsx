import Image from 'next/image';
export const LogoIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <>
      <Image src="/logo.png" alt="alt" width={150} height={100} />
    </>
  );
};
