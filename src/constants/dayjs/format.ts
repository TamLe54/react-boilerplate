import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});
export enum EDateFormat {
  'h:mm A' = 'h:mm A',
  'h:mm:ss A' = 'h:mm:ss A',
  'MM/DD/YYYY' = 'MM/DD/YYYY',
  'MMMM D, YYYY' = 'MMMM D, YYYY',
  'MMMM D, YYYY h:mm A' = 'MMMM D, YYYY h:mm A',
  'dddd, MMMM D, YYYY h:mm A' = 'dddd, MMMM D, YYYY h:mm A',
  'M/D/YYYY' = 'M/D/YYYY',
  'MMM D, YYYY' = 'MMM D, YYYY',
  'MMM D, YYYY h:mm A' = 'MMM D, YYYY h:mm A',
  'ddd, MMM D, YYYY h:mm A' = 'ddd, MMM D, YYYY h:mm A',
}
