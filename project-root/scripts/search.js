// Safe regex maker
 export const makeRe = (spell, flags = "i") => {
      try {
    return spell ? new RegExp(spell, flags) : null;
  } catch (err) {
     return null;
  }
};

// Highlight matches
 export const zap = (txt, re) =>
  re ? txt.replace(re, hit => `<mark>${hit}</mark>`) : txt;