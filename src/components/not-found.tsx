/* eslint-disable react-refresh/only-export-components */

import { useEffect } from 'react';

import NotFoundImage from '@/assets/undraw_page_not_found_re_e9o6.svg';

export const NotFound = () => {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center px-36 pt-10">
      <img src={NotFoundImage} alt="Under Construction" />
    </div>
  );
};
