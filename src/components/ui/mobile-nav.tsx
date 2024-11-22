'use client';

import Link from 'next/link';
import { useAtom } from 'jotai';
import useAuth from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  UserCircleIcon,
  HeartIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline';
import { Routes } from '@/config/routes';
import { MobileMenuSearchIcon } from '@/components/icons/mobile-menu-search';
import { drawerStateAtom } from '@/components/drawers/view';
import { useModal } from '@/components/modals/context';
import ActionIcon from '@/components/ui/action-icon';

export default function MobileNav() {
  const { isAuthorized } = useAuth();
  const router = useRouter();
  const { openModal } = useModal();
  const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  return (
    <div className="sticky inset-x-0 bottom-0 z-30 grid h-16 w-full grid-cols-5 items-center justify-center gap-2 bg-white shadow-menu-shadow md:hidden">
      <div className="flex items-center justify-center">
        <Link href={Routes.public.home} className="inline-block hover:text-red">
          <HomeIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link href="tel:02633575579" className="inline-block hover:text-red">
          <MobileMenuSearchIcon className="h-5 w-5" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="https://zalo.me/0918638068"
          className="inline-block hover:text-red"
        >
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mb-2 inline-block rounded bg-[#0084ff] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={Routes.public.dashboard}
          className="inline-block hover:text-red"
        >
          <HeartIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ActionIcon
          variant="text"
          className="inline-block hover:text-red focus:!ring-0"
          onClick={() =>
            setDrawerState({
              ...drawerSate,
              isOpen: true,
              placement: 'right',
              view: 'SIDE_MENU',
            })
          }
        >
          <Bars3CenterLeftIcon className="h-6 w-6 rotate-180" />
        </ActionIcon>
      </div>
    </div>
  );
}
