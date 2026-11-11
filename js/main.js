import { createPhoto } from './data.js';
import { renderPictures } from './render.js';

const photos = [];
for (let i = 0; i < 25; i++) {
  photos.push(createPhoto());
}
renderPictures(photos);