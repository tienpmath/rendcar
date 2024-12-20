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
  title:
    'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt',
  description:
    'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ xe đời mới, uy tín tại Đà Lạt.☎️ 0918 638 068 Du Lịch Trung Thành ĐÀ LẠT thuê ô tô xe đời mới✔️✔️ giao xe ngay',
  openGraph: {
    title:
      'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt',
    description:
      'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt ✔️✔️ giá rẻ xe đời mới, uy tín tại Đà Lạt.☎️ 0918 638 068 City tour nội ngoại thành Đà Lạt, tour săn mây, Nha Trang, Mũi Né, Bảo Lộc, Đắc Lắc ✔️✔️ giao xe ngay',
    images: '/logo.jpg',
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
  // console.log(resNews?.data?.results);
  return (
    <>
      <HeroBanner />
      <TopBoats datas={res?.data?.results ?? []} metas={res?.data?.meta} />
      <LichTrinhComponent />
      <DestinationBlock />
      <InstructionBlock />

      <PromotionalBlock />
      <NewBoats
        blogs={resNews?.data?.results ?? []}
        meta={resNews?.data?.meta}
      />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
};

export default HomePage;
