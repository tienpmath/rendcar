'use client';

import { topBoats } from 'public/data/top-boats';
import { useTimeout } from '@/hooks/use-timeout';
import ListingCardLoader from '@/components/ui/loader/listing-card-loader';
import ListingCard from '@/components/ui/cards/listing';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';

function BoatGrid(data: any) {
  //console.log(data);
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
      {data.data.datas.map((item: any, index: any) => (
        <ListingCard
          key={`top-boat-grid-${index}`}
          id={`top-boat-grid-${index}`}
          slides={item.images}
          title={item.name}
          slug={item.slug}
          price={item.price}
        />
      ))}
    </div>
  );
}

const TopBoats = (datas: any) => {
  const { state } = useTimeout();

  return (
    <Section
      className="group/section container-fluid mt-12 overflow-hidden lg:mt-16"
      title="Danh sách các loại xe"
      description="Hỗ trợ 24/7 - Dịch vụ cung cấp xe Du lịch Đà Lạt"
      headerClassName="items-end mb-4 md:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoader />}
      {state && <BoatGrid data={datas} />}
    </Section>
  );
};

export default TopBoats;
