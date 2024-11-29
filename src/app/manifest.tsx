import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt',
    short_name:
      'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt ☎️ 0918 638 068 - Du Lịch Trung Thành ĐÀ LẠT',
    description:
      'Cho thuê xe du lịch từ 4, 5, 7, 16, 29 chỗ Đà Lạt ☎️ 0918 638 068 - Du Lịch Trung Thành ĐÀ LẠT, Lâm Đồng',
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
