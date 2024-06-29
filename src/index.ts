import { getRelativePublicationDate, fetchComic } from './api';

async function fillDOM(): Promise<void> {
  const comic = await fetchComic();
  const comicImage = document.querySelector('#comic-image') as HTMLImageElement;
  comicImage.src = comic.img;
  comicImage.alt = comic.alt;

  const comicTitle = document.querySelector('#comic-title') as HTMLHeadingElement;
  comicTitle.textContent = comic.safe_title;

  const comicDate = document.querySelector('#comic-date') as HTMLParagraphElement;
  comicDate.textContent = getRelativePublicationDate(comic);

  const comicSkeleton = document.querySelector('#comic-skeleton') as HTMLDivElement;
  comicSkeleton.style.display = 'none';
}

window.addEventListener('load', fillDOM);
