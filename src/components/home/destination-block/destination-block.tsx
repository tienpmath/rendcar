'use client';

import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import DestinationCarousel from '@/components/home/destination-block/destination-carousel';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';

export default function DestinationBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Địa điểm Du lịch Đà Lạt, Tour nội thành Đà Lạt, Tour ngoại thành Đà Lạt, Tour Săn mây Đà Lạt"
      description="Danh sách các địa điểm được quan tâm."
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <DestinationCarousel data={destinations} />}
    </Section>
  );
}
