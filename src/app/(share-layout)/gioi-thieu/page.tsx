import Image from 'next/image';
const AboutPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="ext-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Giới thiệu Dịch vụ cho thuê xe ô tô du lịch Thành Trung Đà Lạt
            </h1>
            <strong className="mb-4">
              ⭐ Với 10 năm trong lĩnh vực cung cấp dịch vụ cho thuê xe 4, 5, 7,
              9, 16, 24, 29 chỗ tại Đà Lạt, Cho thuê xe ô tô Thành Trung Đà Lat
              đã đáp ứng nhu cầu di chuyển đa dạng của cá nhân, tổ chức, doanh
              nghiệp và các trường học.
            </strong>
            <p>
              Chúng tôi đặt sự đầu tư vào chất lượng dịch vụ lên hàng đầu, đặc
              biệt là về hệ thống xe và đội ngũ tài xế. Tự hào mang đến bạn trải
              nghiệm thuê xe ô tô tại Đà Lạt an toàn, vui vẻ, thoải mái, tiết
              kiệm và nhanh chóng. Khi đến Đà Lạt, việc thuê xe du lịch luôn là
              lựa chọn hàng đầu của du khách. Chúng tôi giúp bạn thỏa mãn niềm
              đam mê khám phá thành phố xinh đẹp này bằng việc cung cấp xe đời
              mới, đảm bảo chất lượng và sự an toàn hơn rất nhiều so với việc sử
              dụng dịch vụ taxi truyền thống.
            </p>
            <p>
              Dịch vụ cho thuê xe ô tô du lịch tại Đà Lạt Thành Trung ô tô
              chuyên cung cấp dịch vụ cho thuê xe ô tô tại Đà Lạt với một loạt
              dịch vụ đi kèm và sẵn sàng tư vấn để đáp ứng mục đích chuyến đi
              của bạn. Với quy trình đơn giản, tiện lợi và đội ngũ nhân viên
              luôn sẵn sàng hỗ trợ 24/24, chúng tôi cam kết đảm bảo bạn có một
              hành trình đáng nhớ và thuận tiện tại Đà Lạt.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/banner/Gp1.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/images/banner/GP2.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
