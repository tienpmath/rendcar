'use client';

import { useState } from 'react';
import { format, addDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import { makeQueryString } from '@/utils/makeQueryString';
import DatePickerInput from '@/components/home/search-form/daterange-picker';
import LocationInput from '@/components/home/search-form/location-input';
import SearchAutocomplete from '@/components/ui/search-autocomplete';
import { MapMarkerIcon } from '@/components/icons/map-marker';
import { CalenderIcon } from '@/components/icons/calender';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';
import Link from 'next/link';

type QueryStringType = {
  location?: string;
  departureDate: string;
  returnDate: string;
};

export default function FindTripForm() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchBox, setSearchBox] = useState<any>();
  const [locationInput, setLocationInput] = useState({
    searchedLocation: '',
    searchedPlaceAPIData: [],
  });

  const onLoad = (ref: any) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let queryString = '';
    const queryObj: QueryStringType = {
      location: locationInput.searchedLocation,
      departureDate: format(startDate, 'yyyy-MM-dd'),
      returnDate: format(endDate, 'yyyy-MM-dd'),
    };
    queryString = makeQueryString(queryObj);
    router.push(`${Routes.public.explore}?${queryString}`);
  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className="relative z-[2] w-full max-w-[250px] rounded-lg p-6 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12"
    >
      <div className="mb-3 sm:mb-0">
        <span className="text-white mb-2 hidden font-satisfy text-xl leading-7 text-gray-dark sm:block 4xl:text-[28px] 4xl:leading-[44px]">
          Cho thuê xe ô tô
        </span>
        <Text
          tag="h1"
          className="text-white leading-12 mb-2 !text-xl !font-black uppercase text-gray-dark sm:!text-[28px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Thuê xe từ 5 - 29 chỗ
        </Text>
      </div>
    </form>
  );
}
