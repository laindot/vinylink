const r1 = require('../../assets/slideshow/rock/1.jpg');
const r2 = require('../../assets/slideshow/rock/2.jpg');
const r3 = require('../../assets/slideshow/rock/3.jpg');

const h1 = require('../../assets/slideshow/hip-hop/1.jpg');
const h2 = require('../../assets/slideshow/hip-hop/2.jpg');
const h3 = require('../../assets/slideshow/hip-hop/3.jpg');

const m1 = require('../../assets/slideshow/metal/1.jpg');
const m2 = require('../../assets/slideshow/metal/2.jpg');
const m3 = require('../../assets/slideshow/metal/3.jpg');

export default [
  {
    Id: 1,
    name: 'Rock',
    slideshow: [r1, r2, r3],
    description:
      'Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s',
  },
  {
    Id: 2,
    name: 'Hip-hop',
    slideshow: [h1, h2, h3],
    description:
      'Hip hop music or hip-hop music, also known as rap music, is a genre of popular music developed in the United States by inner-city African Americans, Latino Americans and Caribbean Americans in the Bronx',
  },
  {
    Id: 3,
    name: 'Metal',
    slideshow: [m1, m2, m3],
    description:
      'Metal, genre of rock music that includes a group of related styles that are intense, virtuosic, and powerful. Driven by the aggressive sounds of the distorted electric guitar',
  },
];
