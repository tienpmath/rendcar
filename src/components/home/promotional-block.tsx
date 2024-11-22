'use client';

import Link from 'next/link';
import { Routes } from '@/config/routes';
import BannerBlock from '@/components/banner-block/banner-block';

export default function PromotionalBlock() {
  return (
    <BannerBlock
      bgImg="/images/banner/bannnerxenew.png"
      title="DỊCH VỤ THUÊ XE ĐÀ LẠT"
      description="Là đơn vị cho thuê xe với hơn 20+ năm kinh nghiệm tại Đà Lạt. Tâm Anh tin rằng chúng tôi là đơn vị hiểu rõ nhất về địa hình, về nhu cầu khác"
      className="from-black/10 to-black/60 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b md:before:rounded-2xl md:before:bg-gradient-to-r xl:before:hidden 4xl:!py-[132px]"
      contentWrapperClassName="m-auto md:ml-0 max-w-[450px] xl:max-w-[513px] px-8 py-9 md:px-0 md:py-0 flex flex-col justify-center md:justify-start z-20"
      titleClassName="mb-3"
      sectionClassName="4xl:!px-16"
      descriptionClassName="text-sm text-center md:text-left"
    >
      <Link
        href="tel:"
        className="m-auto inline-block rounded-lg bg-white px-9 py-3 text-sm font-semibold text-gray-dark transition duration-150 hover:bg-gray-dark hover:!text-white md:ml-0 md:text-base"
      >
        Hotline: 0944 838 788
      </Link>
    </BannerBlock>
  );
}
