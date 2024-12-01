import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt',
    short_name:
      'Thuê xe du lịch từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt ☎️ 0918 638 068 - Tour nội thành, ngoại thành Đà Lạt',
    description:
      'Thuê xe du lịch từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt ☎️ 0918 638 068 - Tour nội thành, ngoại thành Đà Lạt, Lâm Đồng',
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
