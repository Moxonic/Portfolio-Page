/* ── About intro variants ───────────────────────────────────
   Pick one via the URL: yoursite.com/about=<key>
   (or yoursite.com/?about=<key> on hosts without rewrites).
   Keys are matched case-insensitively. Unknown or missing keys
   fall back to `default`; set `default` to null to hide the intro
   for visitors who don't arrive through a tailored link.

   `body` is a list of paragraphs.                              */
const ABOUT_VARIANTS = {
  default: null,

  general: {
    heading: <>Hi, I'm <em>Daniel</em>.</>,
    body: [
      "I'm a sound engineer — twenty years across live shows, theatre, and installations around the world. I love playing guitar, and lately I've been building apps.",
      "Take a look at some of the things I've made below, and feel free to send me a message if you have any questions.",
    ],
  },

  // Example of a tailored variant — duplicate and edit per recipient.
  theatre: {
    heading: <>Hi, I'm <em>Daniel</em>.</>,
    body: [
      "I've spent twenty years behind the sound desk in theatre — and the tools I build come straight out of that work: stage management, cue control and stage planning.",
      "Have a look at the apps below, and get in touch if any of it would help your production.",
    ],
  },
};

export const getAboutVariant = () => {
  if (typeof window === 'undefined') return ABOUT_VARIANTS.default;

  const { pathname, search } = window.location;
  const fromPath  = pathname.match(/\/about=([^/]+)/i);
  const fromQuery = new URLSearchParams(search).get('about');
  const key = decodeURIComponent(fromPath ? fromPath[1] : fromQuery || '')
    .trim()
    .toLowerCase();

  return (key && key !== 'default' && ABOUT_VARIANTS[key]) || ABOUT_VARIANTS.default;
};
