import fetch from 'node-fetch';
import { formatDate } from '../utils/dateHelpers';

const EMAIL = 'd.gazizullin@innopolis.university';

interface Comic {
  num: number;
  day: string;
  month: string;
  year: string;
  link: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
}

async function fetchComicId(): Promise<number> {
  const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${EMAIL}`);
  const data: number = parseInt(await response.text());
  return data;
}

async function fetchComic(): Promise<Comic> {
  const id = await fetchComicId();
  const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
  const data: Comic = (await response.json()) as Comic;
  return data;
}

function getRelativePublicationDate(comic: Comic): string {
  const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);
  return formatDate(date);
}

export { Comic, fetchComic, getRelativePublicationDate };
