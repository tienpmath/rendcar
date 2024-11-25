import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ICT Đà Lạt',
    short_name:
      'Cho thuê xe du lịch Đà Lạt giá rẻ xe đời mới ☎️ 0918 638 068 - Du Lịch Trung Thành ĐÀ LẠT',
    description:
      'Cho thuê xe du lịch Đà Lạt giá rẻ xe đời mới ☎️ 0918 638 068 - Du Lịch Trung Thành ĐÀ LẠT, Lâm Đồng',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
