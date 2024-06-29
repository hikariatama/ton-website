import { formatDistance } from 'date-fns';

function formatDate(date: Date): string {
  const parsedDate = new Date(date);
  return formatDistance(parsedDate, new Date(), { addSuffix: true });
}

export { formatDate };
