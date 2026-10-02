# Boyfriend's Day Surprise Site
Everything you edit lives in **content.js** (no HTML/CSS needed).

1. **Run it:** double-click `index.html` (works offline except Google Fonts, which fall back to system fonts).
2. **Photos:** put files in `images/`, then edit the `photos` list (also `story`, `insideJokes`, `final`, `easter`, `music.cover`). Add/remove/reorder = add/remove/move a `{ ... }` line. Shape, rotation, frame, size and crop (`position`) are per photo. Missing images show a soft heart placeholder.
3. **Captions:** `caption`, `date`, `location`, `description` on each photo. Leave out what you don't want; no empty gaps appear.
4. **Colours/design:** `theme`, `customColors`, `fonts`, `decor`, `galleryLayout`, `reasonAnim` at the top of content.js.
5. **His name / yours:** `boyfriendName` and `myName`. Writing `[BOYFRIEND_NAME]` or `[MY_NAME]` in any text fills them in automatically.
6. **Music:** put an mp3 in `music/`, set `music.audio`, `title`, `artist`, `cover`. It only plays after he taps "Play our song". Keep the file small (under ~5 MB).
7. **Letter:** `letter.text` (blank line = new paragraph; `**bold**`, `*italic*`, emoji OK).
8. **Add/remove sections:** edit the `sections` list; delete a name to hide it, reorder to move it.
9. **Free link:** easiest is https://app.netlify.com/drop — drag the whole folder in and you get a link in seconds. Alternatives: GitHub Pages or Vercel. Send him the link on WhatsApp/Instagram.

Tip: resize photos to ~1200px wide (use squoosh.app) so it loads fast on mobile data.
