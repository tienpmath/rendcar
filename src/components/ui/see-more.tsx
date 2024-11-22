'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Routes } from '@/config/routes';

export default function SeeMore({ className }: { className?: string }) {
  return (
    <Link
      href="#"
      className={clsx(
        'inline-block whitespace-nowrap pr-4 text-sm font-bold leading-6 text-gray-light underline sm:pr-6 md:text-base lg:pr-0',
        className,
      )}
    >
      Zalo: 0944838788
    </Link>
  );
}
