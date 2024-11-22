'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import type { ListingItemNewsTypes, ListingItemTypes } from '@/types';
import { ChevronRightIcon } from '@/components/icons/chevronRight';
import { ChevronLeftIcon } from '@/components/icons/chevronLeft';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination,
} from '@/components/ui/slider';
import AddToWishlist from '@/components/add-to-wishlist';
import ActionIcon from '@/components/ui/action-icon';
import Rate from '@/components/ui/rating';
import { Routes } from '@/config/routes';

export default function ListingNewsCard({
  id,
  slides,
  title,
  description,
  slug,
}: ListingItemNewsTypes) {
  return (
    <>
      <div className="listing-card group/item relative inline-flex w-full flex-col">
        <div className="relative w-full overflow-hidden rounded-xl">
          <AddToWishlist
            isWishListed={false}
            onClick={(data) => console.log('Item added to Wishlist.', data)}
          />
          <Link href="#">
            <div className="listing-item after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-1/4 after:w-full after:bg-gradient-to-t after:from-black/25">
              <Swiper
                className="!static"
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                navigation={{
                  nextEl: `.${id}-listing-item-button-next`,
                  prevEl: `.${id}-listing-item-button-prev`,
                }}
              >
                <SwiperSlide>
                  <Image
                    className="aspect-[34/25] bg-gray-lighter"
                    src={slides}
                    width={816}
                    height={600}
                    alt="boat"
                    priority
                  />
                </SwiperSlide>
              </Swiper>
              <ActionIcon
                rounded="full"
                color="light"
                size="sm"
                className={clsx(
                  'absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 shadow-md !transition-all focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible',
                  `${id}-listing-item-button-prev`,
                )}
              >
                <ChevronLeftIcon className="-ml-0.5 h-auto w-[7px]" />
              </ActionIcon>
              <ActionIcon
                rounded="full"
                size="sm"
                color="light"
                className={clsx(
                  'absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 opacity-80 shadow-md !transition-all duration-300 focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible md:group-hover/item:opacity-100',
                  `${id}-listing-item-button-next`,
                )}
              >
                <ChevronRightIcon className="-mr-0.5 h-auto w-[7px]" />
              </ActionIcon>
            </div>
          </Link>
        </div>
        <Link href="#">
          <div className="content pt-3">
            <h2 className="text-lg font-medium font-bold text-blue-600 dark:text-white">
              {title}
            </h2>
            <p className="mb-3 text-gray-light xl:mb-3"> {description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 leading-7">
                {/* <Rate
                  allowHalf
                  allowClear
                  defaultValue={rating}
                  characterClassName="h-[14px] w-[14px] 3xl:h-[18px] 3xl:w-[18px]"
                />
                ({ratingCount}) */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
