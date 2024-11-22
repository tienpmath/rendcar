import DestinationBlock from '@/components/home/destination-block/destination-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';
import TestimonialBlock from '@/components/home/testimonial-block';
import HeroBanner from '@/components/home/hero-banner';
import NewBoats from '@/components/home/new-boats';
import TopBoats from '@/components/home/top-boats';
import { sendRequest } from '@/utilsHandle/api';
import LichTrinhComponent from '@/components/lichTrinh';

export const metadata = {
  title: 'Cho thuê xe du lịch Đà Lạt giá rẻ xe đời mới',
  description:
    'Cho thuê xe du lịch Đà Lạt 5 7 9 16 24 29 chỗ giá rẻ xe đời mới, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 cho thuê xe Đà Lạt từ 5 7 9 16 24 29 chỗ giá rẻ xe đời mới✔️✔️ giao xe ngay',
  openGraph: {
    title: 'Cho thuê xe du lịch Đà Lạt giá rẻ xe đời mới',
    description:
      'Cho thuê xe du lịch Đà Lạt 5 7 9 16 24 29 chỗ giá rẻ xe đời mới, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 cho thuê xe Đà Lạt từ 5 7 9 16 24 29 chỗ giá rẻ xe đời mới✔️✔️ giao xe ngay',
    images: '/logo.png',
  },
};
interface IProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
const HomePage = async (props: IProps) => {
  const current = props?.searchParams?.current ?? 1;
  const pageSize = props?.searchParams?.pageSize ?? 10;
  //const session = await auth();

  const res = await sendRequest<IBackendRes<any>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products`,
    method: 'GET',
    queryParams: {
      current,
      pageSize,
    },
    nextOption: {
      next: { tags: ['list-products'] },
    },
  });

  //news
  const resNews = await sendRequest<IBackendRes<any>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog-posts`,
    method: 'GET',
    queryParams: {
      current,
      pageSize,
    },
    nextOption: {
      next: { tags: ['list-blog-posts'] },
    },
  });
  console.log(resNews?.data?.results);
  return (
    <>
      <HeroBanner />
      <TopBoats datas={res?.data?.results ?? []} metas={res?.data?.meta} />
      <LichTrinhComponent />
      <DestinationBlock />
      <InstructionBlock />

      <PromotionalBlock />
      <NewBoats
        datas={resNews?.data?.results ?? []}
        metas={resNews?.data?.meta}
      />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
};

export default HomePage;
