/* ── About intro variants ───────────────────────────────────
   Pick one via the URL: yoursite.com/about=<key>
   (or yoursite.com/?about=<key> on hosts without rewrites).
   Keys are matched case-insensitively. Anything that isn't a key
   is shown as the intro text itself, e.g.
   yoursite.com/about=I%20am%20a%20sound%20engineer.
   With no about= at all, `default` is used; set it to null to hide
   the intro for visitors who don't arrive through a tailored link.

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
  const fromPath  = pathname.match(/\/about=(.+)$/i);
  const fromQuery = new URLSearchParams(search).get('about');

  let value = fromPath ? fromPath[1] : fromQuery || '';
  try {
    value = decodeURIComponent(value);
  } catch {
    // malformed % escape — show it as typed
  }
  value = value.trim();
  if (!value) return ABOUT_VARIANTS.default;

  const key = value.toLowerCase();
  if (key !== 'default' && ABOUT_VARIANTS[key]) return ABOUT_VARIANTS[key];

  // Not a saved variant: show the text itself. Newlines (%0A) split paragraphs.
  return {
    heading: ABOUT_VARIANTS.general.heading,
    body: value.slice(0, 1200).split(/\n+/).map(p => p.trim()).filter(Boolean),
  };
};
