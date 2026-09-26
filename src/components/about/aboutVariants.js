/* ── About intro variants ───────────────────────────────────
   Pick one via the URL: yoursite.com/about:<key>
   (or yoursite.com/?about=<key> on hosts without rewrites).
   Keys are matched case-insensitively. Anything that isn't a key
   is shown as the subheader and /header:<text> as the heading —
   only what's in the link, no standard text — e.g.
   yoursite.com/header:Hi%20Bunny/about:I%20am%20a%20sound%20engineer.
   With neither in the URL, `default` is used; set it to null to hide
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

  const { header, about } = readUrlParams();
  if (!header && !about) return ABOUT_VARIANTS.default;

  const key   = about.toLowerCase();
  const saved = about && key !== 'default' && ABOUT_VARIANTS[key];

  // A saved variant, or only the text typed into the link — nothing standard.
  const variant = saved || {
    subheading: about.slice(0, 300) || undefined,
    body: [],
  };

  return header ? { ...variant, heading: header.slice(0, 120) } : variant;
};

/* Reads `header` and `about` from path segments like
   /header:Hi%20Bunny/about:I%20make%20sound (":" or "=" both work)
   or from ?header=…&about=…. A value runs until the next
   /header: or /about: segment, so it may itself contain "/".   */
const readUrlParams = () => {
  const { pathname, search } = window.location;
  const params = { header: '', about: '' };

  const segment = /\/(header|about)(?::|%3A|=)(.*?)(?=\/(?:header|about)(?::|%3A|=)|$)/gi;
  for (const [, name, raw] of pathname.matchAll(segment)) {
    params[name.toLowerCase()] = decode(raw);
  }

  const query = new URLSearchParams(search);
  for (const name of ['header', 'about']) {
    if (!params[name] && query.get(name)) params[name] = query.get(name).trim();
  }
  return params;
};

const decode = (raw) => {
  try {
    return decodeURIComponent(raw).trim();
  } catch {
    return raw.trim();  // malformed % escape — show it as typed
  }
};
