import TransparentHeader from '@/components/header/transparent';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';
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
export default function HomeLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <TransparentHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
