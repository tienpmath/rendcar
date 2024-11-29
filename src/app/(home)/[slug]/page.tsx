import { vendorData } from 'public/data/listing-details';
import RelatedListingBlock from '@/components/listing-details/related-listings/related-listings-block';
import ListingDetails from '@/components/listing-details/listing-details-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import GalleryBlock from '@/components/listing-details/gallery-block';
export const metadata = {
  title:
    'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt- Du Lịch Trung Thành ĐÀ LẠT',
  description:
    'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt giá rẻ ✔️✔️ xe đời mới, uy tín tại Đà Lạt.☎️ 0918 638 068 Du Lịch Trung Thành ĐÀ LẠT thuê ô tô xe đời mới✔️✔️ giao xe ngay',
  openGraph: {
    title:
      'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt - Du Lịch Trung Thành ĐÀ LẠT',
    description:
      'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt ✔️✔️ giá rẻ xe đời mới, uy tín tại Đà Lạt.☎️ 0918 638 068 City tour nội ngoại thành Đà Lạt, tour săn mây, Nha Trang, Mũi Né, Bảo Lộc, Đắc Lắc ✔️✔️ giao xe ngay',
    images: '/logo.jpg',
  },
};
export default async function ListingDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <>
      <div className="container-fluid w-full 3xl:!px-12">
        <GalleryBlock images={vendorData.gallery} />
        <ListingDetails />
        <RelatedListingBlock />
      </div>
      <SubscriptionBlock sectionClassName="3xl:!px-12 4xl:!px-12" />
    </>
  );
}
