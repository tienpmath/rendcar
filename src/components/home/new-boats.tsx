'use client';

import { topBoats } from 'public/data/top-boats';
import { useTimeout } from '@/hooks/use-timeout';
import ListingCardLoader from '@/components/ui/loader/listing-card-loader';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';
import ListingNewsCard from '../ui/cards/listingNews';

function NewBoatsGrid(data: any) {
  //console.log(data);
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
      {data.data.map((item: any, index: number) => (
        <ListingNewsCard
          key={`new-boat-${index}`}
          id={`new-boat-${index}`}
          slides={item.image}
          title={item.name}
          slug={item.slug}
          price={item.price}
        />
      ))}
    </div>
  );
}

interface IProps {
  blogs: any;
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
}
const NewBoats = (props: IProps) => {
  const { blogs, meta } = props;
  //console.log(props.datas);
  const { state } = useTimeout();

  return (
    <Section
      className="container-fluid mt-12 overflow-hidden lg:mt-16"
      title="Bài viết mới"
      description="Tin tức thuê xe, bài viết về xe, thông tin du lịch, giá cả."
      headerClassName="items-end mb-4 lg:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoader />}
      {state && <NewBoatsGrid data={props.datas} />}
    </Section>
  );
};

export default NewBoats;
