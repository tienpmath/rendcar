import { InstructionIconOne } from '@/components/icons/instruction/instruction-one';
import { InstructionIconTwo } from '@/components/icons/instruction/instruction-two';
import { InstructionIconThree } from '@/components/icons/instruction/instruction-three';
import { InstructionIconFour } from '@/components/icons/instruction/instruction-four';

export const instructions = [
  {
    title: 'Bước 1',
    description:
      'Tìm kiếm nhu cầu cần thue xe từ 5 - 29 chỗ tại Đà Lạt, trên wesite.',
    icon: (
      <InstructionIconOne />
    ),
  },
  {
    title: 'Bước 2',
    description:
      'Gọi zalo, Hotline để được tư vấn miễn phí',
    icon: (
      <InstructionIconTwo />
    ),
  },
  {
    title: 'Bước 3',
    description:
      'Xác nhận thuê xe, làm thủ tục thuê xe, hợp đồng thực hiện',
    icon: (
      <InstructionIconThree />
    ),
  },
  {
    title: 'Bước 4',
    description:
      'Trải nghiệm dịch vụ thuê xe nhanh chóng, an toàn, tiện lợi, tiết kiệm.',
    icon: (
      <InstructionIconFour />
    ),
  },
];