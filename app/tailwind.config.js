/*
! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the `hidden` attribute.
*/

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 350px) {
  .container {
    max-width: 350px;
  }
}

@media (min-width: 420px) {
  .container {
    max-width: 420px;
  }
}

@media (min-width: 480px) {
  .container {
    max-width: 480px;
  }
}

@media (min-width: 580px) {
  .container {
    max-width: 580px;
  }
}

@media (min-width: 676px) {
  .container {
    max-width: 676px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 910px) {
  .container {
    max-width: 910px;
  }
}

@media (min-width: 1050px) {
  .container {
    max-width: 1050px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1526px) {
  .container {
    max-width: 1526px;
  }
}

@media (min-width: 1696px) {
  .container {
    max-width: 1696px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
}

.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.inset-1 {
  top: 0.25rem;
  right: 0.25rem;
  bottom: 0.25rem;
  left: 0.25rem;
}

.inset-2 {
  top: 0.5rem;
  right: 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
}

.inset-3 {
  top: 0.75rem;
  right: 0.75rem;
  bottom: 0.75rem;
  left: 0.75rem;
}

.inset-4 {
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
}

.inset-5 {
  top: 1.25rem;
  right: 1.25rem;
  bottom: 1.25rem;
  left: 1.25rem;
}

.inset-6 {
  top: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  left: 1.5rem;
}

.inset-7 {
  top: 1.75rem;
  right: 1.75rem;
  bottom: 1.75rem;
  left: 1.75rem;
}

.inset-8 {
  top: 2rem;
  right: 2rem;
  bottom: 2rem;
  left: 2rem;
}

.inset-9 {
  top: 2.25rem;
  right: 2.25rem;
  bottom: 2.25rem;
  left: 2.25rem;
}

.inset-10 {
  top: 2.5rem;
  right: 2.5rem;
  bottom: 2.5rem;
  left: 2.5rem;
}

.inset-11 {
  top: 2.75rem;
  right: 2.75rem;
  bottom: 2.75rem;
  left: 2.75rem;
}

.inset-12 {
  top: 3rem;
  right: 3rem;
  bottom: 3rem;
  left: 3rem;
}

.inset-14 {
  top: 3.5rem;
  right: 3.5rem;
  bottom: 3.5rem;
  left: 3.5rem;
}

.inset-16 {
  top: 4rem;
  right: 4rem;
  bottom: 4rem;
  left: 4rem;
}

.inset-20 {
  top: 5rem;
  right: 5rem;
  bottom: 5rem;
  left: 5rem;
}

.inset-24 {
  top: 6rem;
  right: 6rem;
  bottom: 6rem;
  left: 6rem;
}

.inset-28 {
  top: 7rem;
  right: 7rem;
  bottom: 7rem;
  left: 7rem;
}

.inset-32 {
  top: 8rem;
  right: 8rem;
  bottom: 8rem;
  left: 8rem;
}

.inset-36 {
  top: 9rem;
  right: 9rem;
  bottom: 9rem;
  left: 9rem;
}

.inset-40 {
  top: 10rem;
  right: 10rem;
  bottom: 10rem;
  left: 10rem;
}

.inset-44 {
  top: 11rem;
  right: 11rem;
  bottom: 11rem;
  left: 11rem;
}

.inset-48 {
  top: 12rem;
  right: 12rem;
  bottom: 12rem;
  left: 12rem;
}

.inset-52 {
  top: 13rem;
  right: 13rem;
  bottom: 13rem;
  left: 13rem;
}

.inset-56 {
  top: 14rem;
  right: 14rem;
  bottom: 14rem;
  left: 14rem;
}

.inset-60 {
  top: 15rem;
  right: 15rem;
  bottom: 15rem;
  left: 15rem;
}

.inset-64 {
  top: 16rem;
  right: 16rem;
  bottom: 16rem;
  left: 16rem;
}

.inset-72 {
  top: 18rem;
  right: 18rem;
  bottom: 18rem;
  left: 18rem;
}

.inset-80 {
  top: 20rem;
  right: 20rem;
  bottom: 20rem;
  left: 20rem;
}

.inset-96 {
  top: 24rem;
  right: 24rem;
  bottom: 24rem;
  left: 24rem;
}

.inset-auto {
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
}

.inset-px {
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
}

.inset-full {
  top: 100%;
  right: 100%;
  bottom: 100%;
  left: 100%;
}

.-inset-0 {
  top: -0px;
  right: -0px;
  bottom: -0px;
  left: -0px;
}

.-inset-1 {
  top: -0.25rem;
  right: -0.25rem;
  bottom: -0.25rem;
  left: -0.25rem;
}

.-inset-2 {
  top: -0.5rem;
  right: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
}

.-inset-3 {
  top: -0.75rem;
  right: -0.75rem;
  bottom: -0.75rem;
  left: -0.75rem;
}

.-inset-4 {
  top: -1rem;
  right: -1rem;
  bottom: -1rem;
  left: -1rem;
}

.-inset-5 {
  top: -1.25rem;
  right: -1.25rem;
  bottom: -1.25rem;
  left: -1.25rem;
}

.-inset-6 {
  top: -1.5rem;
  right: -1.5rem;
  bottom: -1.5rem;
  left: -1.5rem;
}

.-inset-7 {
  top: -1.75rem;
  right: -1.75rem;
  bottom: -1.75rem;
  left: -1.75rem;
}

.-inset-8 {
  top: -2rem;
  right: -2rem;
  bottom: -2rem;
  left: -2rem;
}

.-inset-9 {
  top: -2.25rem;
  right: -2.25rem;
  bottom: -2.25rem;
  left: -2.25rem;
}

.-inset-10 {
  top: -2.5rem;
  right: -2.5rem;
  bottom: -2.5rem;
  left: -2.5rem;
}

.-inset-11 {
  top: -2.75rem;
  right: -2.75rem;
  bottom: -2.75rem;
  left: -2.75rem;
}

.-inset-12 {
  top: -3rem;
  right: -3rem;
  bottom: -3rem;
  left: -3rem;
}

.-inset-14 {
  top: -3.5rem;
  right: -3.5rem;
  bottom: -3.5rem;
  left: -3.5rem;
}

.-inset-16 {
  top: -4rem;
  right: -4rem;
  bottom: -4rem;
  left: -4rem;
}

.-inset-20 {
  top: -5rem;
  right: -5rem;
  bottom: -5rem;
  left: -5rem;
}

.-inset-24 {
  top: -6rem;
  right: -6rem;
  bottom: -6rem;
  left: -6rem;
}

.-inset-28 {
  top: -7rem;
  right: -7rem;
  bottom: -7rem;
  left: -7rem;
}

.-inset-32 {
  top: -8rem;
  right: -8rem;
  bottom: -8rem;
  left: -8rem;
}

.-inset-36 {
  top: -9rem;
  right: -9rem;
  bottom: -9rem;
  left: -9rem;
}

.-inset-40 {
  top: -10rem;
  right: -10rem;
  bottom: -10rem;
  left: -10rem;
}

.-inset-44 {
  top: -11rem;
  right: -11rem;
  bottom: -11rem;
  left: -11rem;
}

.-inset-48 {
  top: -12rem;
  right: -12rem;
  bottom: -12rem;
  left: -12rem;
}

.-inset-52 {
  top: -13rem;
  right: -13rem;
  bottom: -13rem;
  left: -13rem;
}

.-inset-56 {
  top: -14rem;
  right: -14rem;
  bottom: -14rem;
  left: -14rem;
}

.-inset-60 {
  top: -15rem;
  right: -15rem;
  bottom: -15rem;
  left: -15rem;
}

.-inset-64 {
  top: -16rem;
  right: -16rem;
  bottom: -16rem;
  left: -16rem;
}

.-inset-72 {
  top: -18rem;
  right: -18rem;
  bottom: -18rem;
  left: -18rem;
}

.-inset-80 {
  top: -20rem;
  right: -20rem;
  bottom: -20rem;
  left: -20rem;
}

.-inset-96 {
  top: -24rem;
  right: -24rem;
  bottom: -24rem;
  left: -24rem;
}

.-inset-px {
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
}

.-inset-full {
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
}

.inset-0\.5 {
  top: 0.125rem;
  right: 0.125rem;
  bottom: 0.125rem;
  left: 0.125rem;
}

.inset-1\.5 {
  top: 0.375rem;
  right: 0.375rem;
  bottom: 0.375rem;
  left: 0.375rem;
}

.inset-2\.5 {
  top: 0.625rem;
  right: 0.625rem;
  bottom: 0.625rem;
  left: 0.625rem;
}

.inset-3\.5 {
  top: 0.875rem;
  right: 0.875rem;
  bottom: 0.875rem;
  left: 0.875rem;
}

.inset-1\/2 {
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
}

.inset-1\/3 {
  top: 33.333333%;
  right: 33.333333%;
  bottom: 33.333333%;
  left: 33.333333%;
}

.inset-2\/3 {
  top: 66.666667%;
  right: 66.666667%;
  bottom: 66.666667%;
  left: 66.666667%;
}

.inset-1\/4 {
  top: 25%;
  right: 25%;
  bottom: 25%;
  left: 25%;
}

.inset-2\/4 {
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
}

.inset-3\/4 {
  top: 75%;
  right: 75%;
  bottom: 75%;
  left: 75%;
}

.-inset-0\.5 {
  top: -0.125rem;
  right: -0.125rem;
  bottom: -0.125rem;
  left: -0.125rem;
}

.-inset-1\.5 {
  top: -0.375rem;
  right: -0.375rem;
  bottom: -0.375rem;
  left: -0.375rem;
}

.-inset-2\.5 {
  top: -0.625rem;
  right: -0.625rem;
  bottom: -0.625rem;
  left: -0.625rem;
}

.-inset-3\.5 {
  top: -0.875rem;
  right: -0.875rem;
  bottom: -0.875rem;
  left: -0.875rem;
}

.-inset-1\/2 {
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
}

.-inset-1\/3 {
  top: -33.333333%;
  right: -33.333333%;
  bottom: -33.333333%;
  left: -33.333333%;
}

.-inset-2\/3 {
  top: -66.666667%;
  right: -66.666667%;
  bottom: -66.666667%;
  left: -66.666667%;
}

.-inset-1\/4 {
  top: -25%;
  right: -25%;
  bottom: -25%;
  left: -25%;
}

.-inset-2\/4 {
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
}

.-inset-3\/4 {
  top: -75%;
  right: -75%;
  bottom: -75%;
  left: -75%;
}

.inset-x-5 {
  left: 1.25rem;
  right: 1.25rem;
}

.inset-x-0 {
  left: 0px;
  right: 0px;
}

.inset-x-1 {
  left: 0.25rem;
  right: 0.25rem;
}

.inset-x-2 {
  left: 0.5rem;
  right: 0.5rem;
}

.inset-x-3 {
  left: 0.75rem;
  right: 0.75rem;
}

.inset-x-4 {
  left: 1rem;
  right: 1rem;
}

.inset-x-6 {
  left: 1.5rem;
  right: 1.5rem;
}

.inset-x-7 {
  left: 1.75rem;
  right: 1.75rem;
}

.inset-x-8 {
  left: 2rem;
  right: 2rem;
}

.inset-x-9 {
  left: 2.25rem;
  right: 2.25rem;
}

.inset-x-10 {
  left: 2.5rem;
  right: 2.5rem;
}

.inset-x-11 {
  left: 2.75rem;
  right: 2.75rem;
}

.inset-x-12 {
  left: 3rem;
  right: 3rem;
}

.inset-x-14 {
  left: 3.5rem;
  right: 3.5rem;
}

.inset-x-16 {
  left: 4rem;
  right: 4rem;
}

.inset-x-20 {
  left: 5rem;
  right: 5rem;
}

.inset-x-24 {
  left: 6rem;
  right: 6rem;
}

.inset-x-28 {
  left: 7rem;
  right: 7rem;
}

.inset-x-32 {
  left: 8rem;
  right: 8rem;
}

.inset-x-36 {
  left: 9rem;
  right: 9rem;
}

.inset-x-40 {
  left: 10rem;
  right: 10rem;
}

.inset-x-44 {
  left: 11rem;
  right: 11rem;
}

.inset-x-48 {
  left: 12rem;
  right: 12rem;
}

.inset-x-52 {
  left: 13rem;
  right: 13rem;
}

.inset-x-56 {
  left: 14rem;
  right: 14rem;
}

.inset-x-60 {
  left: 15rem;
  right: 15rem;
}

.inset-x-64 {
  left: 16rem;
  right: 16rem;
}

.inset-x-72 {
  left: 18rem;
  right: 18rem;
}

.inset-x-80 {
  left: 20rem;
  right: 20rem;
}

.inset-x-96 {
  left: 24rem;
  right: 24rem;
}

.inset-x-auto {
  left: auto;
  right: auto;
}

.inset-x-px {
  left: 1px;
  right: 1px;
}

.inset-x-full {
  left: 100%;
  right: 100%;
}

.-inset-x-0 {
  left: -0px;
  right: -0px;
}

.-inset-x-1 {
  left: -0.25rem;
  right: -0.25rem;
}

.-inset-x-2 {
  left: -0.5rem;
  right: -0.5rem;
}

.-inset-x-3 {
  left: -0.75rem;
  right: -0.75rem;
}

.-inset-x-4 {
  left: -1rem;
  right: -1rem;
}

.-inset-x-5 {
  left: -1.25rem;
  right: -1.25rem;
}

.-inset-x-6 {
  left: -1.5rem;
  right: -1.5rem;
}

.-inset-x-7 {
  left: -1.75rem;
  right: -1.75rem;
}

.-inset-x-8 {
  left: -2rem;
  right: -2rem;
}

.-inset-x-9 {
  left: -2.25rem;
  right: -2.25rem;
}

.-inset-x-10 {
  left: -2.5rem;
  right: -2.5rem;
}

.-inset-x-11 {
  left: -2.75rem;
  right: -2.75rem;
}

.-inset-x-12 {
  left: -3rem;
  right: -3rem;
}

.-inset-x-14 {
  left: -3.5rem;
  right: -3.5rem;
}

.-inset-x-16 {
  left: -4rem;
  right: -4rem;
}

.-inset-x-20 {
  left: -5rem;
  right: -5rem;
}

.-inset-x-24 {
  left: -6rem;
  right: -6rem;
}

.-inset-x-28 {
  left: -7rem;
  right: -7rem;
}

.-inset-x-32 {
  left: -8rem;
  right: -8rem;
}

.-inset-x-36 {
  left: -9rem;
  right: -9rem;
}

.-inset-x-40 {
  left: -10rem;
  right: -10rem;
}

.-inset-x-44 {
  left: -11rem;
  right: -11rem;
}

.-inset-x-48 {
  left: -12rem;
  right: -12rem;
}

.-inset-x-52 {
  left: -13rem;
  right: -13rem;
}

.-inset-x-56 {
  left: -14rem;
  right: -14rem;
}

.-inset-x-60 {
  left: -15rem;
  right: -15rem;
}

.-inset-x-64 {
  left: -16rem;
  right: -16rem;
}

.-inset-x-72 {
  left: -18rem;
  right: -18rem;
}

.-inset-x-80 {
  left: -20rem;
  right: -20rem;
}

.-inset-x-96 {
  left: -24rem;
  right: -24rem;
}

.-inset-x-px {
  left: -1px;
  right: -1px;
}

.-inset-x-full {
  left: -100%;
  right: -100%;
}

.inset-y-0 {
  top: 0px;
  bottom: 0px;
}

.inset-y-1 {
  top: 0.25rem;
  bottom: 0.25rem;
}

.inset-y-2 {
  top: 0.5rem;
  bottom: 0.5rem;
}

.inset-y-3 {
  top: 0.75rem;
  bottom: 0.75rem;
}

.inset-y-4 {
  top: 1rem;
  bottom: 1rem;
}

.inset-y-5 {
  top: 1.25rem;
  bottom: 1.25rem;
}

.inset-y-6 {
  top: 1.5rem;
  bottom: 1.5rem;
}

.inset-y-7 {
  top: 1.75rem;
  bottom: 1.75rem;
}

.inset-y-8 {
  top: 2rem;
  bottom: 2rem;
}

.inset-y-9 {
  top: 2.25rem;
  bottom: 2.25rem;
}

.inset-y-10 {
  top: 2.5rem;
  bottom: 2.5rem;
}

.inset-y-11 {
  top: 2.75rem;
  bottom: 2.75rem;
}

.inset-y-12 {
  top: 3rem;
  bottom: 3rem;
}

.inset-y-14 {
  top: 3.5rem;
  bottom: 3.5rem;
}

.inset-y-16 {
  top: 4rem;
  bottom: 4rem;
}

.inset-y-20 {
  top: 5rem;
  bottom: 5rem;
}

.inset-y-24 {
  top: 6rem;
  bottom: 6rem;
}

.inset-y-28 {
  top: 7rem;
  bottom: 7rem;
}

.inset-y-32 {
  top: 8rem;
  bottom: 8rem;
}

.inset-y-36 {
  top: 9rem;
  bottom: 9rem;
}

.inset-y-40 {
  top: 10rem;
  bottom: 10rem;
}

.inset-y-44 {
  top: 11rem;
  bottom: 11rem;
}

.inset-y-48 {
  top: 12rem;
  bottom: 12rem;
}

.inset-y-52 {
  top: 13rem;
  bottom: 13rem;
}

.inset-y-56 {
  top: 14rem;
  bottom: 14rem;
}

.inset-y-60 {
  top: 15rem;
  bottom: 15rem;
}

.inset-y-64 {
  top: 16rem;
  bottom: 16rem;
}

.inset-y-72 {
  top: 18rem;
  bottom: 18rem;
}

.inset-y-80 {
  top: 20rem;
  bottom: 20rem;
}

.inset-y-96 {
  top: 24rem;
  bottom: 24rem;
}

.inset-y-auto {
  top: auto;
  bottom: auto;
}

.inset-y-px {
  top: 1px;
  bottom: 1px;
}

.inset-y-full {
  top: 100%;
  bottom: 100%;
}

.-inset-y-0 {
  top: -0px;
  bottom: -0px;
}

.-inset-y-1 {
  top: -0.25rem;
  bottom: -0.25rem;
}

.-inset-y-2 {
  top: -0.5rem;
  bottom: -0.5rem;
}

.-inset-y-3 {
  top: -0.75rem;
  bottom: -0.75rem;
}

.-inset-y-4 {
  top: -1rem;
  bottom: -1rem;
}

.-inset-y-5 {
  top: -1.25rem;
  bottom: -1.25rem;
}

.-inset-y-6 {
  top: -1.5rem;
  bottom: -1.5rem;
}

.-inset-y-7 {
  top: -1.75rem;
  bottom: -1.75rem;
}

.-inset-y-8 {
  top: -2rem;
  bottom: -2rem;
}

.-inset-y-9 {
  top: -2.25rem;
  bottom: -2.25rem;
}

.-inset-y-10 {
  top: -2.5rem;
  bottom: -2.5rem;
}

.-inset-y-11 {
  top: -2.75rem;
  bottom: -2.75rem;
}

.-inset-y-12 {
  top: -3rem;
  bottom: -3rem;
}

.-inset-y-14 {
  top: -3.5rem;
  bottom: -3.5rem;
}

.-inset-y-16 {
  top: -4rem;
  bottom: -4rem;
}

.-inset-y-20 {
  top: -5rem;
  bottom: -5rem;
}

.-inset-y-24 {
  top: -6rem;
  bottom: -6rem;
}

.-inset-y-28 {
  top: -7rem;
  bottom: -7rem;
}

.-inset-y-32 {
  top: -8rem;
  bottom: -8rem;
}

.-inset-y-36 {
  top: -9rem;
  bottom: -9rem;
}

.-inset-y-40 {
  top: -10rem;
  bottom: -10rem;
}

.-inset-y-44 {
  top: -11rem;
  bottom: -11rem;
}

.-inset-y-48 {
  top: -12rem;
  bottom: -12rem;
}

.-inset-y-52 {
  top: -13rem;
  bottom: -13rem;
}

.-inset-y-56 {
  top: -14rem;
  bottom: -14rem;
}

.-inset-y-60 {
  top: -15rem;
  bottom: -15rem;
}

.-inset-y-64 {
  top: -16rem;
  bottom: -16rem;
}

.-inset-y-72 {
  top: -18rem;
  bottom: -18rem;
}

.-inset-y-80 {
  top: -20rem;
  bottom: -20rem;
}

.-inset-y-96 {
  top: -24rem;
  bottom: -24rem;
}

.-inset-y-px {
  top: -1px;
  bottom: -1px;
}

.-inset-y-full {
  top: -100%;
  bottom: -100%;
}

.inset-x-0\.5 {
  left: 0.125rem;
  right: 0.125rem;
}

.inset-x-1\.5 {
  left: 0.375rem;
  right: 0.375rem;
}

.inset-x-2\.5 {
  left: 0.625rem;
  right: 0.625rem;
}

.inset-x-3\.5 {
  left: 0.875rem;
  right: 0.875rem;
}

.inset-x-1\/2 {
  left: 50%;
  right: 50%;
}

.inset-x-1\/3 {
  left: 33.333333%;
  right: 33.333333%;
}

.inset-x-2\/3 {
  left: 66.666667%;
  right: 66.666667%;
}

.inset-x-1\/4 {
  left: 25%;
  right: 25%;
}

.inset-x-2\/4 {
  left: 50%;
  right: 50%;
}

.inset-x-3\/4 {
  left: 75%;
  right: 75%;
}

.-inset-x-0\.5 {
  left: -0.125rem;
  right: -0.125rem;
}

.-inset-x-1\.5 {
  left: -0.375rem;
  right: -0.375rem;
}

.-inset-x-2\.5 {
  left: -0.625rem;
  right: -0.625rem;
}

.-inset-x-3\.5 {
  left: -0.875rem;
  right: -0.875rem;
}

.-inset-x-1\/2 {
  left: -50%;
  right: -50%;
}

.-inset-x-1\/3 {
  left: -33.333333%;
  right: -33.333333%;
}

.-inset-x-2\/3 {
  left: -66.666667%;
  right: -66.666667%;
}

.-inset-x-1\/4 {
  left: -25%;
  right: -25%;
}

.-inset-x-2\/4 {
  left: -50%;
  right: -50%;
}

.-inset-x-3\/4 {
  left: -75%;
  right: -75%;
}

.inset-y-0\.5 {
  top: 0.125rem;
  bottom: 0.125rem;
}

.inset-y-1\.5 {
  top: 0.375rem;
  bottom: 0.375rem;
}

.inset-y-2\.5 {
  top: 0.625rem;
  bottom: 0.625rem;
}

.inset-y-3\.5 {
  top: 0.875rem;
  bottom: 0.875rem;
}

.inset-y-1\/2 {
  top: 50%;
  bottom: 50%;
}

.inset-y-1\/3 {
  top: 33.333333%;
  bottom: 33.333333%;
}

.inset-y-2\/3 {
  top: 66.666667%;
  bottom: 66.666667%;
}

.inset-y-1\/4 {
  top: 25%;
  bottom: 25%;
}

.inset-y-2\/4 {
  top: 50%;
  bottom: 50%;
}

.inset-y-3\/4 {
  top: 75%;
  bottom: 75%;
}

.-inset-y-0\.5 {
  top: -0.125rem;
  bottom: -0.125rem;
}

.-inset-y-1\.5 {
  top: -0.375rem;
  bottom: -0.375rem;
}

.-inset-y-2\.5 {
  top: -0.625rem;
  bottom: -0.625rem;
}

.-inset-y-3\.5 {
  top: -0.875rem;
  bottom: -0.875rem;
}

.-inset-y-1\/2 {
  top: -50%;
  bottom: -50%;
}

.-inset-y-1\/3 {
  top: -33.333333%;
  bottom: -33.333333%;
}

.-inset-y-2\/3 {
  top: -66.666667%;
  bottom: -66.666667%;
}

.-inset-y-1\/4 {
  top: -25%;
  bottom: -25%;
}

.-inset-y-2\/4 {
  top: -50%;
  bottom: -50%;
}

.-inset-y-3\/4 {
  top: -75%;
  bottom: -75%;
}

.bottom-4 {
  bottom: 1rem;
}

.top-0 {
  top: 0px;
}

.right-0 {
  right: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-2 {
  top: 0.5rem;
}

.top-3 {
  top: 0.75rem;
}

.top-4 {
  top: 1rem;
}

.top-5 {
  top: 1.25rem;
}

.top-6 {
  top: 1.5rem;
}

.top-7 {
  top: 1.75rem;
}

.top-8 {
  top: 2rem;
}

.top-9 {
  top: 2.25rem;
}

.top-10 {
  top: 2.5rem;
}

.top-11 {
  top: 2.75rem;
}

.top-12 {
  top: 3rem;
}

.top-14 {
  top: 3.5rem;
}

.top-16 {
  top: 4rem;
}

.top-20 {
  top: 5rem;
}

.top-24 {
  top: 6rem;
}

.top-28 {
  top: 7rem;
}

.top-32 {
  top: 8rem;
}

.top-36 {
  top: 9rem;
}

.top-40 {
  top: 10rem;
}

.top-44 {
  top: 11rem;
}

.top-48 {
  top: 12rem;
}

.top-52 {
  top: 13rem;
}

.top-56 {
  top: 14rem;
}

.top-60 {
  top: 15rem;
}

.top-64 {
  top: 16rem;
}

.top-72 {
  top: 18rem;
}

.top-80 {
  top: 20rem;
}

.top-96 {
  top: 24rem;
}

.top-auto {
  top: auto;
}

.top-px {
  top: 1px;
}

.top-full {
  top: 100%;
}

.-top-0 {
  top: -0px;
}

.-top-1 {
  top: -0.25rem;
}

.-top-2 {
  top: -0.5rem;
}

.-top-3 {
  top: -0.75rem;
}

.-top-4 {
  top: -1rem;
}

.-top-5 {
  top: -1.25rem;
}

.-top-6 {
  top: -1.5rem;
}

.-top-7 {
  top: -1.75rem;
}

.-top-8 {
  top: -2rem;
}

.-top-9 {
  top: -2.25rem;
}

.-top-10 {
  top: -2.5rem;
}

.-top-11 {
  top: -2.75rem;
}

.-top-12 {
  top: -3rem;
}

.-top-14 {
  top: -3.5rem;
}

.-top-16 {
  top: -4rem;
}

.-top-20 {
  top: -5rem;
}

.-top-24 {
  top: -6rem;
}

.-top-28 {
  top: -7rem;
}

.-top-32 {
  top: -8rem;
}

.-top-36 {
  top: -9rem;
}

.-top-40 {
  top: -10rem;
}

.-top-44 {
  top: -11rem;
}

.-top-48 {
  top: -12rem;
}

.-top-52 {
  top: -13rem;
}

.-top-56 {
  top: -14rem;
}

.-top-60 {
  top: -15rem;
}

.-top-64 {
  top: -16rem;
}

.-top-72 {
  top: -18rem;
}

.-top-80 {
  top: -20rem;
}

.-top-96 {
  top: -24rem;
}

.-top-px {
  top: -1px;
}

.-top-full {
  top: -100%;
}

.right-1 {
  right: 0.25rem;
}

.right-2 {
  right: 0.5rem;
}

.right-3 {
  right: 0.75rem;
}

.right-4 {
  right: 1rem;
}

.right-5 {
  right: 1.25rem;
}

.right-6 {
  right: 1.5rem;
}

.right-7 {
  right: 1.75rem;
}

.right-8 {
  right: 2rem;
}

.right-9 {
  right: 2.25rem;
}

.right-10 {
  right: 2.5rem;
}

.right-11 {
  right: 2.75rem;
}

.right-12 {
  right: 3rem;
}

.right-14 {
  right: 3.5rem;
}

.right-16 {
  right: 4rem;
}

.right-20 {
  right: 5rem;
}

.right-24 {
  right: 6rem;
}

.right-28 {
  right: 7rem;
}

.right-32 {
  right: 8rem;
}

.right-36 {
  right: 9rem;
}

.right-40 {
  right: 10rem;
}

.right-44 {
  right: 11rem;
}

.right-48 {
  right: 12rem;
}

.right-52 {
  right: 13rem;
}

.right-56 {
  right: 14rem;
}

.right-60 {
  right: 15rem;
}

.right-64 {
  right: 16rem;
}

.right-72 {
  right: 18rem;
}

.right-80 {
  right: 20rem;
}

.right-96 {
  right: 24rem;
}

.right-auto {
  right: auto;
}

.right-px {
  right: 1px;
}

.right-full {
  right: 100%;
}

.-right-0 {
  right: -0px;
}

.-right-1 {
  right: -0.25rem;
}

.-right-2 {
  right: -0.5rem;
}

.-right-3 {
  right: -0.75rem;
}

.-right-4 {
  right: -1rem;
}

.-right-5 {
  right: -1.25rem;
}

.-right-6 {
  right: -1.5rem;
}

.-right-7 {
  right: -1.75rem;
}

.-right-8 {
  right: -2rem;
}

.-right-9 {
  right: -2.25rem;
}

.-right-10 {
  right: -2.5rem;
}

.-right-11 {
  right: -2.75rem;
}

.-right-12 {
  right: -3rem;
}

.-right-14 {
  right: -3.5rem;
}

.-right-16 {
  right: -4rem;
}

.-right-20 {
  right: -5rem;
}

.-right-24 {
  right: -6rem;
}

.-right-28 {
  right: -7rem;
}

.-right-32 {
  right: -8rem;
}

.-right-36 {
  right: -9rem;
}

.-right-40 {
  right: -10rem;
}

.-right-44 {
  right: -11rem;
}

.-right-48 {
  right: -12rem;
}

.-right-52 {
  right: -13rem;
}

.-right-56 {
  right: -14rem;
}

.-right-60 {
  right: -15rem;
}

.-right-64 {
  right: -16rem;
}

.-right-72 {
  right: -18rem;
}

.-right-80 {
  right: -20rem;
}

.-right-96 {
  right: -24rem;
}

.-right-px {
  right: -1px;
}

.-right-full {
  right: -100%;
}

.bottom-1 {
  bottom: 0.25rem;
}

.bottom-2 {
  bottom: 0.5rem;
}

.bottom-3 {
  bottom: 0.75rem;
}

.bottom-5 {
  bottom: 1.25rem;
}

.bottom-6 {
  bottom: 1.5rem;
}

.bottom-7 {
  bottom: 1.75rem;
}

.bottom-8 {
  bottom: 2rem;
}

.bottom-9 {
  bottom: 2.25rem;
}

.bottom-10 {
  bottom: 2.5rem;
}

.bottom-11 {
  bottom: 2.75rem;
}

.bottom-12 {
  bottom: 3rem;
}

.bottom-14 {
  bottom: 3.5rem;
}

.bottom-16 {
  bottom: 4rem;
}

.bottom-20 {
  bottom: 5rem;
}

.bottom-24 {
  bottom: 6rem;
}

.bottom-28 {
  bottom: 7rem;
}

.bottom-32 {
  bottom: 8rem;
}

.bottom-36 {
  bottom: 9rem;
}

.bottom-40 {
  bottom: 10rem;
}

.bottom-44 {
  bottom: 11rem;
}

.bottom-48 {
  bottom: 12rem;
}

.bottom-52 {
  bottom: 13rem;
}

.bottom-56 {
  bottom: 14rem;
}

.bottom-60 {
  bottom: 15rem;
}

.bottom-64 {
  bottom: 16rem;
}

.bottom-72 {
  bottom: 18rem;
}

.bottom-80 {
  bottom: 20rem;
}

.bottom-96 {
  bottom: 24rem;
}

.bottom-auto {
  bottom: auto;
}

.bottom-px {
  bottom: 1px;
}

.bottom-full {
  bottom: 100%;
}

.-bottom-0 {
  bottom: -0px;
}

.-bottom-1 {
  bottom: -0.25rem;
}

.-bottom-2 {
  bottom: -0.5rem;
}

.-bottom-3 {
  bottom: -0.75rem;
}

.-bottom-4 {
  bottom: -1rem;
}

.-bottom-5 {
  bottom: -1.25rem;
}

.-bottom-6 {
  bottom: -1.5rem;
}

.-bottom-7 {
  bottom: -1.75rem;
}

.-bottom-8 {
  bottom: -2rem;
}

.-bottom-9 {
  bottom: -2.25rem;
}

.-bottom-10 {
  bottom: -2.5rem;
}

.-bottom-11 {
  bottom: -2.75rem;
}

.-bottom-12 {
  bottom: -3rem;
}

.-bottom-14 {
  bottom: -3.5rem;
}

.-bottom-16 {
  bottom: -4rem;
}

.-bottom-20 {
  bottom: -5rem;
}

.-bottom-24 {
  bottom: -6rem;
}

.-bottom-28 {
  bottom: -7rem;
}

.-bottom-32 {
  bottom: -8rem;
}

.-bottom-36 {
  bottom: -9rem;
}

.-bottom-40 {
  bottom: -10rem;
}

.-bottom-44 {
  bottom: -11rem;
}

.-bottom-48 {
  bottom: -12rem;
}

.-bottom-52 {
  bottom: -13rem;
}

.-bottom-56 {
  bottom: -14rem;
}

.-bottom-60 {
  bottom: -15rem;
}

.-bottom-64 {
  bottom: -16rem;
}

.-bottom-72 {
  bottom: -18rem;
}

.-bottom-80 {
  bottom: -20rem;
}

.-bottom-96 {
  bottom: -24rem;
}

.-bottom-px {
  bottom: -1px;
}

.-bottom-full {
  bottom: -100%;
}

.left-1 {
  left: 0.25rem;
}

.left-2 {
  left: 0.5rem;
}

.left-3 {
  left: 0.75rem;
}

.left-4 {
  left: 1rem;
}

.left-5 {
  left: 1.25rem;
}

.left-6 {
  left: 1.5rem;
}

.left-7 {
  left: 1.75rem;
}

.left-8 {
  left: 2rem;
}

.left-9 {
  left: 2.25rem;
}

.left-10 {
  left: 2.5rem;
}

.left-11 {
  left: 2.75rem;
}

.left-12 {
  left: 3rem;
}

.left-14 {
  left: 3.5rem;
}

.left-16 {
  left: 4rem;
}

.left-20 {
  left: 5rem;
}

.left-24 {
  left: 6rem;
}

.left-28 {
  left: 7rem;
}

.left-32 {
  left: 8rem;
}

.left-36 {
  left: 9rem;
}

.left-40 {
  left: 10rem;
}

.left-44 {
  left: 11rem;
}

.left-48 {
  left: 12rem;
}

.left-52 {
  left: 13rem;
}

.left-56 {
  left: 14rem;
}

.left-60 {
  left: 15rem;
}

.left-64 {
  left: 16rem;
}

.left-72 {
  left: 18rem;
}

.left-80 {
  left: 20rem;
}

.left-96 {
  left: 24rem;
}

.left-auto {
  left: auto;
}

.left-px {
  left: 1px;
}

.left-full {
  left: 100%;
}

.-left-0 {
  left: -0px;
}

.-left-1 {
  left: -0.25rem;
}

.-left-2 {
  left: -0.5rem;
}

.-left-3 {
  left: -0.75rem;
}

.-left-4 {
  left: -1rem;
}

.-left-5 {
  left: -1.25rem;
}

.-left-6 {
  left: -1.5rem;
}

.-left-7 {
  left: -1.75rem;
}

.-left-8 {
  left: -2rem;
}

.-left-9 {
  left: -2.25rem;
}

.-left-10 {
  left: -2.5rem;
}

.-left-11 {
  left: -2.75rem;
}

.-left-12 {
  left: -3rem;
}

.-left-14 {
  left: -3.5rem;
}

.-left-16 {
  left: -4rem;
}

.-left-20 {
  left: -5rem;
}

.-left-24 {
  left: -6rem;
}

.-left-28 {
  left: -7rem;
}

.-left-32 {
  left: -8rem;
}

.-left-36 {
  left: -9rem;
}

.-left-40 {
  left: -10rem;
}

.-left-44 {
  left: -11rem;
}

.-left-48 {
  left: -12rem;
}

.-left-52 {
  left: -13rem;
}

.-left-56 {
  left: -14rem;
}

.-left-60 {
  left: -15rem;
}

.-left-64 {
  left: -16rem;
}

.-left-72 {
  left: -18rem;
}

.-left-80 {
  left: -20rem;
}

.-left-96 {
  left: -24rem;
}

.-left-px {
  left: -1px;
}

.-left-full {
  left: -100%;
}

.top-0\.5 {
  top: 0.125rem;
}

.top-1\.5 {
  top: 0.375rem;
}

.top-2\.5 {
  top: 0.625rem;
}

.top-3\.5 {
  top: 0.875rem;
}

.top-1\/2 {
  top: 50%;
}

.top-1\/3 {
  top: 33.333333%;
}

.top-2\/3 {
  top: 66.666667%;
}

.top-1\/4 {
  top: 25%;
}

.top-2\/4 {
  top: 50%;
}

.top-3\/4 {
  top: 75%;
}

.-top-0\.5 {
  top: -0.125rem;
}

.-top-1\.5 {
  top: -0.375rem;
}

.-top-2\.5 {
  top: -0.625rem;
}

.-top-3\.5 {
  top: -0.875rem;
}

.-top-1\/2 {
  top: -50%;
}

.-top-1\/3 {
  top: -33.333333%;
}

.-top-2\/3 {
  top: -66.666667%;
}

.-top-1\/4 {
  top: -25%;
}

.-top-2\/4 {
  top: -50%;
}

.-top-3\/4 {
  top: -75%;
}

.right-0\.5 {
  right: 0.125rem;
}

.right-1\.5 {
  right: 0.375rem;
}

.right-2\.5 {
  right: 0.625rem;
}

.right-3\.5 {
  right: 0.875rem;
}

.right-1\/2 {
  right: 50%;
}

.right-1\/3 {
  right: 33.333333%;
}

.right-2\/3 {
  right: 66.666667%;
}

.right-1\/4 {
  right: 25%;
}

.right-2\/4 {
  right: 50%;
}

.right-3\/4 {
  right: 75%;
}

.-right-0\.5 {
  right: -0.125rem;
}

.-right-1\.5 {
  right: -0.375rem;
}

.-right-2\.5 {
  right: -0.625rem;
}

.-right-3\.5 {
  right: -0.875rem;
}

.-right-1\/2 {
  right: -50%;
}

.-right-1\/3 {
  right: -33.333333%;
}

.-right-2\/3 {
  right: -66.666667%;
}

.-right-1\/4 {
  right: -25%;
}

.-right-2\/4 {
  right: -50%;
}

.-right-3\/4 {
  right: -75%;
}

.bottom-0\.5 {
  bottom: 0.125rem;
}

.bottom-1\.5 {
  bottom: 0.375rem;
}

.bottom-2\.5 {
  bottom: 0.625rem;
}

.bottom-3\.5 {
  bottom: 0.875rem;
}

.bottom-1\/2 {
  bottom: 50%;
}

.bottom-1\/3 {
  bottom: 33.333333%;
}

.bottom-2\/3 {
  bottom: 66.666667%;
}

.bottom-1\/4 {
  bottom: 25%;
}

.bottom-2\/4 {
  bottom: 50%;
}

.bottom-3\/4 {
  bottom: 75%;
}

.-bottom-0\.5 {
  bottom: -0.125rem;
}

.-bottom-1\.5 {
  bottom: -0.375rem;
}

.-bottom-2\.5 {
  bottom: -0.625rem;
}

.-bottom-3\.5 {
  bottom: -0.875rem;
}

.-bottom-1\/2 {
  bottom: -50%;
}

.-bottom-1\/3 {
  bottom: -33.333333%;
}

.-bottom-2\/3 {
  bottom: -66.666667%;
}

.-bottom-1\/4 {
  bottom: -25%;
}

.-bottom-2\/4 {
  bottom: -50%;
}

.-bottom-3\/4 {
  bottom: -75%;
}

.left-0\.5 {
  left: 0.125rem;
}

.left-1\.5 {
  left: 0.375rem;
}

.left-2\.5 {
  left: 0.625rem;
}

.left-3\.5 {
  left: 0.875rem;
}

.left-1\/2 {
  left: 50%;
}

.left-1\/3 {
  left: 33.333333%;
}

.left-2\/3 {
  left: 66.666667%;
}

.left-1\/4 {
  left: 25%;
}

.left-2\/4 {
  left: 50%;
}

.left-3\/4 {
  left: 75%;
}

.-left-0\.5 {
  left: -0.125rem;
}

.-left-1\.5 {
  left: -0.375rem;
}

.-left-2\.5 {
  left: -0.625rem;
}

.-left-3\.5 {
  left: -0.875rem;
}

.-left-1\/2 {
  left: -50%;
}

.-left-1\/3 {
  left: -33.333333%;
}

.-left-2\/3 {
  left: -66.666667%;
}

.-left-1\/4 {
  left: -25%;
}

.-left-2\/4 {
  left: -50%;
}

.-left-3\/4 {
  left: -75%;
}

.isolate {
  isolation: isolate;
}

.isolation-auto {
  isolation: auto;
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.z-0 {
  z-index: 0;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

.z-auto {
  z-index: auto;
}

.-z-0 {
  z-index: 0;
}

.-z-10 {
  z-index: -10;
}

.-z-20 {
  z-index: -20;
}

.-z-30 {
  z-index: -30;
}

.-z-40 {
  z-index: -40;
}

.-z-50 {
  z-index: -50;
}

.z-\[-99\] {
  z-index: -99;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.order-first {
  order: -9999;
}

.order-last {
  order: 9999;
}

.order-none {
  order: 0;
}

.-order-1 {
  order: -1;
}

.-order-2 {
  order: -2;
}

.-order-3 {
  order: -3;
}

.-order-4 {
  order: -4;
}

.-order-5 {
  order: -5;
}

.-order-6 {
  order: -6;
}

.-order-7 {
  order: -7;
}

.-order-8 {
  order: -8;
}

.-order-9 {
  order: -9;
}

.-order-10 {
  order: -10;
}

.-order-11 {
  order: -11;
}

.-order-12 {
  order: -12;
}

.-order-first {
  order: 9999;
}

.-order-last {
  order: -9999;
}

.-order-none {
  order: 0;
}

.col-span-3 {
  grid-column: span 3 / span 3;
}

.col-auto {
  grid-column: auto;
}

.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.col-span-4 {
  grid-column: span 4 / span 4;
}

.col-span-5 {
  grid-column: span 5 / span 5;
}

.col-span-6 {
  grid-column: span 6 / span 6;
}

.col-span-7 {
  grid-column: span 7 / span 7;
}

.col-span-8 {
  grid-column: span 8 / span 8;
}

.col-span-9 {
  grid-column: span 9 / span 9;
}

.col-span-10 {
  grid-column: span 10 / span 10;
}

.col-span-11 {
  grid-column: span 11 / span 11;
}

.col-span-12 {
  grid-column: span 12 / span 12;
}

.col-span-full {
  grid-column: 1 / -1;
}

.col-start-1 {
  grid-column-start: 1;
}

.col-start-2 {
  grid-column-start: 2;
}

.col-start-3 {
  grid-column-start: 3;
}

.col-start-4 {
  grid-column-start: 4;
}

.col-start-5 {
  grid-column-start: 5;
}

.col-start-6 {
  grid-column-start: 6;
}

.col-start-7 {
  grid-column-start: 7;
}

.col-start-8 {
  grid-column-start: 8;
}

.col-start-9 {
  grid-column-start: 9;
}

.col-start-10 {
  grid-column-start: 10;
}

.col-start-11 {
  grid-column-start: 11;
}

.col-start-12 {
  grid-column-start: 12;
}

.col-start-13 {
  grid-column-start: 13;
}

.col-start-auto {
  grid-column-start: auto;
}

.col-end-1 {
  grid-column-end: 1;
}

.col-end-2 {
  grid-column-end: 2;
}

.col-end-3 {
  grid-column-end: 3;
}

.col-end-4 {
  grid-column-end: 4;
}

.col-end-5 {
  grid-column-end: 5;
}

.col-end-6 {
  grid-column-end: 6;
}

.col-end-7 {
  grid-column-end: 7;
}

.col-end-8 {
  grid-column-end: 8;
}

.col-end-9 {
  grid-column-end: 9;
}

.col-end-10 {
  grid-column-end: 10;
}

.col-end-11 {
  grid-column-end: 11;
}

.col-end-12 {
  grid-column-end: 12;
}

.col-end-13 {
  grid-column-end: 13;
}

.col-end-auto {
  grid-column-end: auto;
}

.row-auto {
  grid-row: auto;
}

.row-span-1 {
  grid-row: span 1 / span 1;
}

.row-span-2 {
  grid-row: span 2 / span 2;
}

.row-span-3 {
  grid-row: span 3 / span 3;
}

.row-span-4 {
  grid-row: span 4 / span 4;
}

.row-span-5 {
  grid-row: span 5 / span 5;
}

.row-span-6 {
  grid-row: span 6 / span 6;
}

.row-span-full {
  grid-row: 1 / -1;
}

.row-start-1 {
  grid-row-start: 1;
}

.row-start-2 {
  grid-row-start: 2;
}

.row-start-3 {
  grid-row-start: 3;
}

.row-start-4 {
  grid-row-start: 4;
}

.row-start-5 {
  grid-row-start: 5;
}

.row-start-6 {
  grid-row-start: 6;
}

.row-start-7 {
  grid-row-start: 7;
}

.row-start-auto {
  grid-row-start: auto;
}

.row-end-1 {
  grid-row-end: 1;
}

.row-end-2 {
  grid-row-end: 2;
}

.row-end-3 {
  grid-row-end: 3;
}

.row-end-4 {
  grid-row-end: 4;
}

.row-end-5 {
  grid-row-end: 5;
}

.row-end-6 {
  grid-row-end: 6;
}

.row-end-7 {
  grid-row-end: 7;
}

.row-end-auto {
  grid-row-end: auto;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.float-none {
  float: none;
}

.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}

.clear-both {
  clear: both;
}

.clear-none {
  clear: none;
}

.m-auto {
  margin: auto;
}

.m-0 {
  margin: 0px;
}

.m-1 {
  margin: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.m-3 {
  margin: 0.75rem;
}

.m-4 {
  margin: 1rem;
}

.m-5 {
  margin: 1.25rem;
}

.m-6 {
  margin: 1.5rem;
}

.m-7 {
  margin: 1.75rem;
}

.m-8 {
  margin: 2rem;
}

.m-9 {
  margin: 2.25rem;
}

.m-10 {
  margin: 2.5rem;
}

.m-11 {
  margin: 2.75rem;
}

.m-12 {
  margin: 3rem;
}

.m-14 {
  margin: 3.5rem;
}

.m-16 {
  margin: 4rem;
}

.m-20 {
  margin: 5rem;
}

.m-24 {
  margin: 6rem;
}

.m-28 {
  margin: 7rem;
}

.m-32 {
  margin: 8rem;
}

.m-36 {
  margin: 9rem;
}

.m-40 {
  margin: 10rem;
}

.m-44 {
  margin: 11rem;
}

.m-48 {
  margin: 12rem;
}

.m-52 {
  margin: 13rem;
}

.m-56 {
  margin: 14rem;
}

.m-60 {
  margin: 15rem;
}

.m-64 {
  margin: 16rem;
}

.m-72 {
  margin: 18rem;
}

.m-80 {
  margin: 20rem;
}

.m-96 {
  margin: 24rem;
}

.m-px {
  margin: 1px;
}

.-m-0 {
  margin: -0px;
}

.-m-1 {
  margin: -0.25rem;
}

.-m-2 {
  margin: -0.5rem;
}

.-m-3 {
  margin: -0.75rem;
}

.-m-4 {
  margin: -1rem;
}

.-m-5 {
  margin: -1.25rem;
}

.-m-6 {
  margin: -1.5rem;
}

.-m-7 {
  margin: -1.75rem;
}

.-m-8 {
  margin: -2rem;
}

.-m-9 {
  margin: -2.25rem;
}

.-m-10 {
  margin: -2.5rem;
}

.-m-11 {
  margin: -2.75rem;
}

.-m-12 {
  margin: -3rem;
}

.-m-14 {
  margin: -3.5rem;
}

.-m-16 {
  margin: -4rem;
}

.-m-20 {
  margin: -5rem;
}

.-m-24 {
  margin: -6rem;
}

.-m-28 {
  margin: -7rem;
}

.-m-32 {
  margin: -8rem;
}

.-m-36 {
  margin: -9rem;
}

.-m-40 {
  margin: -10rem;
}

.-m-44 {
  margin: -11rem;
}

.-m-48 {
  margin: -12rem;
}

.-m-52 {
  margin: -13rem;
}

.-m-56 {
  margin: -14rem;
}

.-m-60 {
  margin: -15rem;
}

.-m-64 {
  margin: -16rem;
}

.-m-72 {
  margin: -18rem;
}

.-m-80 {
  margin: -20rem;
}

.-m-96 {
  margin: -24rem;
}

.-m-px {
  margin: -1px;
}

.m-0\.5 {
  margin: 0.125rem;
}

.m-1\.5 {
  margin: 0.375rem;
}

.m-2\.5 {
  margin: 0.625rem;
}

.m-3\.5 {
  margin: 0.875rem;
}

.-m-0\.5 {
  margin: -0.125rem;
}

.-m-1\.5 {
  margin: -0.375rem;
}

.-m-2\.5 {
  margin: -0.625rem;
}

.-m-3\.5 {
  margin: -0.875rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-16 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.mx-7 {
  margin-left: 1.75rem;
  margin-right: 1.75rem;
}

.mx-9 {
  margin-left: 2.25rem;
  margin-right: 2.25rem;
}

.mx-10 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

.mx-11 {
  margin-left: 2.75rem;
  margin-right: 2.75rem;
}

.mx-12 {
  margin-left: 3rem;
  margin-right: 3rem;
}

.mx-14 {
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}

.mx-16 {
  margin-left: 4rem;
  margin-right: 4rem;
}

.mx-20 {
  margin-left: 5rem;
  margin-right: 5rem;
}

.mx-24 {
  margin-left: 6rem;
  margin-right: 6rem;
}

.mx-28 {
  margin-left: 7rem;
  margin-right: 7rem;
}

.mx-32 {
  margin-left: 8rem;
  margin-right: 8rem;
}

.mx-36 {
  margin-left: 9rem;
  margin-right: 9rem;
}

.mx-40 {
  margin-left: 10rem;
  margin-right: 10rem;
}

.mx-44 {
  margin-left: 11rem;
  margin-right: 11rem;
}

.mx-48 {
  margin-left: 12rem;
  margin-right: 12rem;
}

.mx-52 {
  margin-left: 13rem;
  margin-right: 13rem;
}

.mx-56 {
  margin-left: 14rem;
  margin-right: 14rem;
}

.mx-60 {
  margin-left: 15rem;
  margin-right: 15rem;
}

.mx-64 {
  margin-left: 16rem;
  margin-right: 16rem;
}

.mx-72 {
  margin-left: 18rem;
  margin-right: 18rem;
}

.mx-80 {
  margin-left: 20rem;
  margin-right: 20rem;
}

.mx-96 {
  margin-left: 24rem;
  margin-right: 24rem;
}

.mx-px {
  margin-left: 1px;
  margin-right: 1px;
}

.-mx-0 {
  margin-left: -0px;
  margin-right: -0px;
}

.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.-mx-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.-mx-3 {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.-mx-5 {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}

.-mx-6 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.-mx-7 {
  margin-left: -1.75rem;
  margin-right: -1.75rem;
}

.-mx-8 {
  margin-left: -2rem;
  margin-right: -2rem;
}

.-mx-9 {
  margin-left: -2.25rem;
  margin-right: -2.25rem;
}

.-mx-10 {
  margin-left: -2.5rem;
  margin-right: -2.5rem;
}

.-mx-11 {
  margin-left: -2.75rem;
  margin-right: -2.75rem;
}

.-mx-12 {
  margin-left: -3rem;
  margin-right: -3rem;
}

.-mx-14 {
  margin-left: -3.5rem;
  margin-right: -3.5rem;
}

.-mx-16 {
  margin-left: -4rem;
  margin-right: -4rem;
}

.-mx-20 {
  margin-left: -5rem;
  margin-right: -5rem;
}

.-mx-24 {
  margin-left: -6rem;
  margin-right: -6rem;
}

.-mx-28 {
  margin-left: -7rem;
  margin-right: -7rem;
}

.-mx-32 {
  margin-left: -8rem;
  margin-right: -8rem;
}

.-mx-36 {
  margin-left: -9rem;
  margin-right: -9rem;
}

.-mx-40 {
  margin-left: -10rem;
  margin-right: -10rem;
}

.-mx-44 {
  margin-left: -11rem;
  margin-right: -11rem;
}

.-mx-48 {
  margin-left: -12rem;
  margin-right: -12rem;
}

.-mx-52 {
  margin-left: -13rem;
  margin-right: -13rem;
}

.-mx-56 {
  margin-left: -14rem;
  margin-right: -14rem;
}

.-mx-60 {
  margin-left: -15rem;
  margin-right: -15rem;
}

.-mx-64 {
  margin-left: -16rem;
  margin-right: -16rem;
}

.-mx-72 {
  margin-left: -18rem;
  margin-right: -18rem;
}

.-mx-80 {
  margin-left: -20rem;
  margin-right: -20rem;
}

.-mx-96 {
  margin-left: -24rem;
  margin-right: -24rem;
}

.-mx-px {
  margin-left: -1px;
  margin-right: -1px;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.my-9 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}

.my-11 {
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
}

.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.my-14 {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}

.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.my-24 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.my-28 {
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.my-32 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}

.my-36 {
  margin-top: 9rem;
  margin-bottom: 9rem;
}

.my-40 {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.my-44 {
  margin-top: 11rem;
  margin-bottom: 11rem;
}

.my-48 {
  margin-top: 12rem;
  margin-bottom: 12rem;
}

.my-52 {
  margin-top: 13rem;
  margin-bottom: 13rem;
}

.my-56 {
  margin-top: 14rem;
  margin-bottom: 14rem;
}

.my-60 {
  margin-top: 15rem;
  margin-bottom: 15rem;
}

.my-64 {
  margin-top: 16rem;
  margin-bottom: 16rem;
}

.my-72 {
  margin-top: 18rem;
  margin-bottom: 18rem;
}

.my-80 {
  margin-top: 20rem;
  margin-bottom: 20rem;
}

.my-96 {
  margin-top: 24rem;
  margin-bottom: 24rem;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.my-px {
  margin-top: 1px;
  margin-bottom: 1px;
}

.-my-0 {
  margin-top: -0px;
  margin-bottom: -0px;
}

.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}

.-my-2 {
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
}

.-my-3 {
  margin-top: -0.75rem;
  margin-bottom: -0.75rem;
}

.-my-4 {
  margin-top: -1rem;
  margin-bottom: -1rem;
}

.-my-5 {
  margin-top: -1.25rem;
  margin-bottom: -1.25rem;
}

.-my-6 {
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}

.-my-7 {
  margin-top: -1.75rem;
  margin-bottom: -1.75rem;
}

.-my-8 {
  margin-top: -2rem;
  margin-bottom: -2rem;
}

.-my-9 {
  margin-top: -2.25rem;
  margin-bottom: -2.25rem;
}

.-my-10 {
  margin-top: -2.5rem;
  margin-bottom: -2.5rem;
}

.-my-11 {
  margin-top: -2.75rem;
  margin-bottom: -2.75rem;
}

.-my-12 {
  margin-top: -3rem;
  margin-bottom: -3rem;
}

.-my-14 {
  margin-top: -3.5rem;
  margin-bottom: -3.5rem;
}

.-my-16 {
  margin-top: -4rem;
  margin-bottom: -4rem;
}

.-my-20 {
  margin-top: -5rem;
  margin-bottom: -5rem;
}

.-my-24 {
  margin-top: -6rem;
  margin-bottom: -6rem;
}

.-my-28 {
  margin-top: -7rem;
  margin-bottom: -7rem;
}

.-my-32 {
  margin-top: -8rem;
  margin-bottom: -8rem;
}

.-my-36 {
  margin-top: -9rem;
  margin-bottom: -9rem;
}

.-my-40 {
  margin-top: -10rem;
  margin-bottom: -10rem;
}

.-my-44 {
  margin-top: -11rem;
  margin-bottom: -11rem;
}

.-my-48 {
  margin-top: -12rem;
  margin-bottom: -12rem;
}

.-my-52 {
  margin-top: -13rem;
  margin-bottom: -13rem;
}

.-my-56 {
  margin-top: -14rem;
  margin-bottom: -14rem;
}

.-my-60 {
  margin-top: -15rem;
  margin-bottom: -15rem;
}

.-my-64 {
  margin-top: -16rem;
  margin-bottom: -16rem;
}

.-my-72 {
  margin-top: -18rem;
  margin-bottom: -18rem;
}

.-my-80 {
  margin-top: -20rem;
  margin-bottom: -20rem;
}

.-my-96 {
  margin-top: -24rem;
  margin-bottom: -24rem;
}

.-my-px {
  margin-top: -1px;
  margin-bottom: -1px;
}

.mx-0\.5 {
  margin-left: 0.125rem;
  margin-right: 0.125rem;
}

.mx-1\.5 {
  margin-left: 0.375rem;
  margin-right: 0.375rem;
}

.mx-2\.5 {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
}

.mx-3\.5 {
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}

.-mx-0\.5 {
  margin-left: -0.125rem;
  margin-right: -0.125rem;
}

.-mx-1\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}

.-mx-2\.5 {
  margin-left: -0.625rem;
  margin-right: -0.625rem;
}

.-mx-3\.5 {
  margin-left: -0.875rem;
  margin-right: -0.875rem;
}

.my-0\.5 {
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}

.my-1\.5 {
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}

.my-2\.5 {
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
}

.my-3\.5 {
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
}

.-my-0\.5 {
  margin-top: -0.125rem;
  margin-bottom: -0.125rem;
}

.-my-1\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}

.-my-2\.5 {
  margin-top: -0.625rem;
  margin-bottom: -0.625rem;
}

.-my-3\.5 {
  margin-top: -0.875rem;
  margin-bottom: -0.875rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.ml-12 {
  margin-left: 3rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.ml-10 {
  margin-left: 2.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mb-20 {
  margin-bottom: 5rem;
}

.mr-10 {
  margin-right: 2.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mt-0 {
  margin-top: 0px;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-7 {
  margin-top: 1.75rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mt-9 {
  margin-top: 2.25rem;
}

.mt-11 {
  margin-top: 2.75rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.mt-28 {
  margin-top: 7rem;
}

.mt-32 {
  margin-top: 8rem;
}

.mt-36 {
  margin-top: 9rem;
}

.mt-40 {
  margin-top: 10rem;
}

.mt-44 {
  margin-top: 11rem;
}

.mt-48 {
  margin-top: 12rem;
}

.mt-52 {
  margin-top: 13rem;
}

.mt-56 {
  margin-top: 14rem;
}

.mt-60 {
  margin-top: 15rem;
}

.mt-64 {
  margin-top: 16rem;
}

.mt-72 {
  margin-top: 18rem;
}

.mt-80 {
  margin-top: 20rem;
}

.mt-96 {
  margin-top: 24rem;
}

.mt-auto {
  margin-top: auto;
}

.mt-px {
  margin-top: 1px;
}

.-mt-0 {
  margin-top: -0px;
}

.-mt-1 {
  margin-top: -0.25rem;
}

.-mt-2 {
  margin-top: -0.5rem;
}

.-mt-3 {
  margin-top: -0.75rem;
}

.-mt-4 {
  margin-top: -1rem;
}

.-mt-5 {
  margin-top: -1.25rem;
}

.-mt-6 {
  margin-top: -1.5rem;
}

.-mt-7 {
  margin-top: -1.75rem;
}

.-mt-8 {
  margin-top: -2rem;
}

.-mt-9 {
  margin-top: -2.25rem;
}

.-mt-10 {
  margin-top: -2.5rem;
}

.-mt-11 {
  margin-top: -2.75rem;
}

.-mt-12 {
  margin-top: -3rem;
}

.-mt-14 {
  margin-top: -3.5rem;
}

.-mt-16 {
  margin-top: -4rem;
}

.-mt-20 {
  margin-top: -5rem;
}

.-mt-24 {
  margin-top: -6rem;
}

.-mt-28 {
  margin-top: -7rem;
}

.-mt-32 {
  margin-top: -8rem;
}

.-mt-36 {
  margin-top: -9rem;
}

.-mt-40 {
  margin-top: -10rem;
}

.-mt-44 {
  margin-top: -11rem;
}

.-mt-48 {
  margin-top: -12rem;
}

.-mt-52 {
  margin-top: -13rem;
}

.-mt-56 {
  margin-top: -14rem;
}

.-mt-60 {
  margin-top: -15rem;
}

.-mt-64 {
  margin-top: -16rem;
}

.-mt-72 {
  margin-top: -18rem;
}

.-mt-80 {
  margin-top: -20rem;
}

.-mt-96 {
  margin-top: -24rem;
}

.-mt-px {
  margin-top: -1px;
}

.mr-0 {
  margin-right: 0px;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mr-7 {
  margin-right: 1.75rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mr-9 {
  margin-right: 2.25rem;
}

.mr-11 {
  margin-right: 2.75rem;
}

.mr-12 {
  margin-right: 3rem;
}

.mr-14 {
  margin-right: 3.5rem;
}

.mr-16 {
  margin-right: 4rem;
}

.mr-20 {
  margin-right: 5rem;
}

.mr-24 {
  margin-right: 6rem;
}

.mr-28 {
  margin-right: 7rem;
}

.mr-32 {
  margin-right: 8rem;
}

.mr-36 {
  margin-right: 9rem;
}

.mr-40 {
  margin-right: 10rem;
}

.mr-44 {
  margin-right: 11rem;
}

.mr-48 {
  margin-right: 12rem;
}

.mr-52 {
  margin-right: 13rem;
}

.mr-56 {
  margin-right: 14rem;
}

.mr-60 {
  margin-right: 15rem;
}

.mr-64 {
  margin-right: 16rem;
}

.mr-72 {
  margin-right: 18rem;
}

.mr-80 {
  margin-right: 20rem;
}

.mr-96 {
  margin-right: 24rem;
}

.mr-auto {
  margin-right: auto;
}

.mr-px {
  margin-right: 1px;
}

.-mr-0 {
  margin-right: -0px;
}

.-mr-1 {
  margin-right: -0.25rem;
}

.-mr-2 {
  margin-right: -0.5rem;
}

.-mr-3 {
  margin-right: -0.75rem;
}

.-mr-4 {
  margin-right: -1rem;
}

.-mr-5 {
  margin-right: -1.25rem;
}

.-mr-6 {
  margin-right: -1.5rem;
}

.-mr-7 {
  margin-right: -1.75rem;
}

.-mr-8 {
  margin-right: -2rem;
}

.-mr-9 {
  margin-right: -2.25rem;
}

.-mr-10 {
  margin-right: -2.5rem;
}

.-mr-11 {
  margin-right: -2.75rem;
}

.-mr-12 {
  margin-right: -3rem;
}

.-mr-14 {
  margin-right: -3.5rem;
}

.-mr-16 {
  margin-right: -4rem;
}

.-mr-20 {
  margin-right: -5rem;
}

.-mr-24 {
  margin-right: -6rem;
}

.-mr-28 {
  margin-right: -7rem;
}

.-mr-32 {
  margin-right: -8rem;
}

.-mr-36 {
  margin-right: -9rem;
}

.-mr-40 {
  margin-right: -10rem;
}

.-mr-44 {
  margin-right: -11rem;
}

.-mr-48 {
  margin-right: -12rem;
}

.-mr-52 {
  margin-right: -13rem;
}

.-mr-56 {
  margin-right: -14rem;
}

.-mr-60 {
  margin-right: -15rem;
}

.-mr-64 {
  margin-right: -16rem;
}

.-mr-72 {
  margin-right: -18rem;
}

.-mr-80 {
  margin-right: -20rem;
}

.-mr-96 {
  margin-right: -24rem;
}

.-mr-px {
  margin-right: -1px;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-9 {
  margin-bottom: 2.25rem;
}

.mb-11 {
  margin-bottom: 2.75rem;
}

.mb-14 {
  margin-bottom: 3.5rem;
}

.mb-24 {
  margin-bottom: 6rem;
}

.mb-28 {
  margin-bottom: 7rem;
}

.mb-32 {
  margin-bottom: 8rem;
}

.mb-36 {
  margin-bottom: 9rem;
}

.mb-40 {
  margin-bottom: 10rem;
}

.mb-44 {
  margin-bottom: 11rem;
}

.mb-48 {
  margin-bottom: 12rem;
}

.mb-52 {
  margin-bottom: 13rem;
}

.mb-56 {
  margin-bottom: 14rem;
}

.mb-60 {
  margin-bottom: 15rem;
}

.mb-64 {
  margin-bottom: 16rem;
}

.mb-72 {
  margin-bottom: 18rem;
}

.mb-80 {
  margin-bottom: 20rem;
}

.mb-96 {
  margin-bottom: 24rem;
}

.mb-auto {
  margin-bottom: auto;
}

.mb-px {
  margin-bottom: 1px;
}

.-mb-0 {
  margin-bottom: -0px;
}

.-mb-1 {
  margin-bottom: -0.25rem;
}

.-mb-2 {
  margin-bottom: -0.5rem;
}

.-mb-3 {
  margin-bottom: -0.75rem;
}

.-mb-4 {
  margin-bottom: -1rem;
}

.-mb-5 {
  margin-bottom: -1.25rem;
}

.-mb-6 {
  margin-bottom: -1.5rem;
}

.-mb-7 {
  margin-bottom: -1.75rem;
}

.-mb-8 {
  margin-bottom: -2rem;
}

.-mb-9 {
  margin-bottom: -2.25rem;
}

.-mb-10 {
  margin-bottom: -2.5rem;
}

.-mb-11 {
  margin-bottom: -2.75rem;
}

.-mb-12 {
  margin-bottom: -3rem;
}

.-mb-14 {
  margin-bottom: -3.5rem;
}

.-mb-16 {
  margin-bottom: -4rem;
}

.-mb-20 {
  margin-bottom: -5rem;
}

.-mb-24 {
  margin-bottom: -6rem;
}

.-mb-28 {
  margin-bottom: -7rem;
}

.-mb-32 {
  margin-bottom: -8rem;
}

.-mb-36 {
  margin-bottom: -9rem;
}

.-mb-40 {
  margin-bottom: -10rem;
}

.-mb-44 {
  margin-bottom: -11rem;
}

.-mb-48 {
  margin-bottom: -12rem;
}

.-mb-52 {
  margin-bottom: -13rem;
}

.-mb-56 {
  margin-bottom: -14rem;
}

.-mb-60 {
  margin-bottom: -15rem;
}

.-mb-64 {
  margin-bottom: -16rem;
}

.-mb-72 {
  margin-bottom: -18rem;
}

.-mb-80 {
  margin-bottom: -20rem;
}

.-mb-96 {
  margin-bottom: -24rem;
}

.-mb-px {
  margin-bottom: -1px;
}

.ml-0 {
  margin-left: 0px;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.ml-7 {
  margin-left: 1.75rem;
}

.ml-8 {
  margin-left: 2rem;
}

.ml-9 {
  margin-left: 2.25rem;
}

.ml-11 {
  margin-left: 2.75rem;
}

.ml-14 {
  margin-left: 3.5rem;
}

.ml-16 {
  margin-left: 4rem;
}

.ml-20 {
  margin-left: 5rem;
}

.ml-24 {
  margin-left: 6rem;
}

.ml-28 {
  margin-left: 7rem;
}

.ml-32 {
  margin-left: 8rem;
}

.ml-36 {
  margin-left: 9rem;
}

.ml-40 {
  margin-left: 10rem;
}

.ml-44 {
  margin-left: 11rem;
}

.ml-48 {
  margin-left: 12rem;
}

.ml-52 {
  margin-left: 13rem;
}

.ml-56 {
  margin-left: 14rem;
}

.ml-60 {
  margin-left: 15rem;
}

.ml-64 {
  margin-left: 16rem;
}

.ml-72 {
  margin-left: 18rem;
}

.ml-80 {
  margin-left: 20rem;
}

.ml-96 {
  margin-left: 24rem;
}

.ml-auto {
  margin-left: auto;
}

.ml-px {
  margin-left: 1px;
}

.-ml-0 {
  margin-left: -0px;
}

.-ml-1 {
  margin-left: -0.25rem;
}

.-ml-2 {
  margin-left: -0.5rem;
}

.-ml-3 {
  margin-left: -0.75rem;
}

.-ml-4 {
  margin-left: -1rem;
}

.-ml-5 {
  margin-left: -1.25rem;
}

.-ml-6 {
  margin-left: -1.5rem;
}

.-ml-7 {
  margin-left: -1.75rem;
}

.-ml-8 {
  margin-left: -2rem;
}

.-ml-9 {
  margin-left: -2.25rem;
}

.-ml-10 {
  margin-left: -2.5rem;
}

.-ml-11 {
  margin-left: -2.75rem;
}

.-ml-12 {
  margin-left: -3rem;
}

.-ml-14 {
  margin-left: -3.5rem;
}

.-ml-16 {
  margin-left: -4rem;
}

.-ml-20 {
  margin-left: -5rem;
}

.-ml-24 {
  margin-left: -6rem;
}

.-ml-28 {
  margin-left: -7rem;
}

.-ml-32 {
  margin-left: -8rem;
}

.-ml-36 {
  margin-left: -9rem;
}

.-ml-40 {
  margin-left: -10rem;
}

.-ml-44 {
  margin-left: -11rem;
}

.-ml-48 {
  margin-left: -12rem;
}

.-ml-52 {
  margin-left: -13rem;
}

.-ml-56 {
  margin-left: -14rem;
}

.-ml-60 {
  margin-left: -15rem;
}

.-ml-64 {
  margin-left: -16rem;
}

.-ml-72 {
  margin-left: -18rem;
}

.-ml-80 {
  margin-left: -20rem;
}

.-ml-96 {
  margin-left: -24rem;
}

.-ml-px {
  margin-left: -1px;
}

.mt-0\.5 {
  margin-top: 0.125rem;
}

.mt-1\.5 {
  margin-top: 0.375rem;
}

.mt-2\.5 {
  margin-top: 0.625rem;
}

.mt-3\.5 {
  margin-top: 0.875rem;
}

.-mt-0\.5 {
  margin-top: -0.125rem;
}

.-mt-1\.5 {
  margin-top: -0.375rem;
}

.-mt-2\.5 {
  margin-top: -0.625rem;
}

.-mt-3\.5 {
  margin-top: -0.875rem;
}

.mr-0\.5 {
  margin-right: 0.125rem;
}

.mr-1\.5 {
  margin-right: 0.375rem;
}

.mr-2\.5 {
  margin-right: 0.625rem;
}

.mr-3\.5 {
  margin-right: 0.875rem;
}

.-mr-0\.5 {
  margin-right: -0.125rem;
}

.-mr-1\.5 {
  margin-right: -0.375rem;
}

.-mr-2\.5 {
  margin-right: -0.625rem;
}

.-mr-3\.5 {
  margin-right: -0.875rem;
}

.mb-0\.5 {
  margin-bottom: 0.125rem;
}

.mb-1\.5 {
  margin-bottom: 0.375rem;
}

.mb-2\.5 {
  margin-bottom: 0.625rem;
}

.mb-3\.5 {
  margin-bottom: 0.875rem;
}

.-mb-0\.5 {
  margin-bottom: -0.125rem;
}

.-mb-1\.5 {
  margin-bottom: -0.375rem;
}

.-mb-2\.5 {
  margin-bottom: -0.625rem;
}

.-mb-3\.5 {
  margin-bottom: -0.875rem;
}

.ml-0\.5 {
  margin-left: 0.125rem;
}

.ml-1\.5 {
  margin-left: 0.375rem;
}

.ml-2\.5 {
  margin-left: 0.625rem;
}

.ml-3\.5 {
  margin-left: 0.875rem;
}

.-ml-0\.5 {
  margin-left: -0.125rem;
}

.-ml-1\.5 {
  margin-left: -0.375rem;
}

.-ml-2\.5 {
  margin-left: -0.625rem;
}

.-ml-3\.5 {
  margin-left: -0.875rem;
}

.box-border {
  box-sizing: border-box;
}

.box-content {
  box-sizing: content-box;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.inline-table {
  display: inline-table;
}

.table-caption {
  display: table-caption;
}

.table-cell {
  display: table-cell;
}

.table-column {
  display: table-column;
}

.table-column-group {
  display: table-column-group;
}

.table-footer-group {
  display: table-footer-group;
}

.table-header-group {
  display: table-header-group;
}

.table-row-group {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.flow-root {
  display: flow-root;
}

.grid {
  display: grid;
}

.inline-grid {
  display: inline-grid;
}

.contents {
  display: contents;
}

.list-item {
  display: list-item;
}

.hidden {
  display: none;
}

.aspect-auto {
  aspect-ratio: auto;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

.h-4 {
  height: 1rem;
}

.h-3 {
  height: 0.75rem;
}

.h-full {
  height: 100%;
}

.h-7 {
  height: 1.75rem;
}

.h-5 {
  height: 1.25rem;
}

.h-auto {
  height: auto;
}

.h-6 {
  height: 1.5rem;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-fit {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

.h-80 {
  height: 20rem;
}

.h-0 {
  height: 0px;
}

.h-1 {
  height: 0.25rem;
}

.h-2 {
  height: 0.5rem;
}

.h-8 {
  height: 2rem;
}

.h-9 {
  height: 2.25rem;
}

.h-11 {
  height: 2.75rem;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-20 {
  height: 5rem;
}

.h-24 {
  height: 6rem;
}

.h-28 {
  height: 7rem;
}

.h-32 {
  height: 8rem;
}

.h-36 {
  height: 9rem;
}

.h-40 {
  height: 10rem;
}

.h-44 {
  height: 11rem;
}

.h-48 {
  height: 12rem;
}

.h-52 {
  height: 13rem;
}

.h-56 {
  height: 14rem;
}

.h-60 {
  height: 15rem;
}

.h-64 {
  height: 16rem;
}

.h-72 {
  height: 18rem;
}

.h-96 {
  height: 24rem;
}

.h-px {
  height: 1px;
}

.h-screen {
  height: 100vh;
}

.h-min {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.h-max {
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
}

.h-\[12\.5rem\] {
  height: 12.5rem;
}

.h-\[70px\] {
  height: 70px;
}

.h-\[4rem\] {
  height: 4rem;
}

.h-0\.5 {
  height: 0.125rem;
}

.h-1\.5 {
  height: 0.375rem;
}

.h-2\.5 {
  height: 0.625rem;
}

.h-3\.5 {
  height: 0.875rem;
}

.h-1\/2 {
  height: 50%;
}

.h-1\/3 {
  height: 33.333333%;
}

.h-2\/3 {
  height: 66.666667%;
}

.h-1\/4 {
  height: 25%;
}

.h-2\/4 {
  height: 50%;
}

.h-3\/4 {
  height: 75%;
}

.h-1\/5 {
  height: 20%;
}

.h-2\/5 {
  height: 40%;
}

.h-3\/5 {
  height: 60%;
}

.h-4\/5 {
  height: 80%;
}

.h-1\/6 {
  height: 16.666667%;
}

.h-2\/6 {
  height: 33.333333%;
}

.h-3\/6 {
  height: 50%;
}

.h-4\/6 {
  height: 66.666667%;
}

.h-5\/6 {
  height: 83.333333%;
}

.max-h-0 {
  max-height: 0px;
}

.max-h-1 {
  max-height: 0.25rem;
}

.max-h-2 {
  max-height: 0.5rem;
}

.max-h-3 {
  max-height: 0.75rem;
}

.max-h-4 {
  max-height: 1rem;
}

.max-h-5 {
  max-height: 1.25rem;
}

.max-h-6 {
  max-height: 1.5rem;
}

.max-h-7 {
  max-height: 1.75rem;
}

.max-h-8 {
  max-height: 2rem;
}

.max-h-9 {
  max-height: 2.25rem;
}

.max-h-10 {
  max-height: 2.5rem;
}

.max-h-11 {
  max-height: 2.75rem;
}

.max-h-12 {
  max-height: 3rem;
}

.max-h-14 {
  max-height: 3.5rem;
}

.max-h-16 {
  max-height: 4rem;
}

.max-h-20 {
  max-height: 5rem;
}

.max-h-24 {
  max-height: 6rem;
}

.max-h-28 {
  max-height: 7rem;
}

.max-h-32 {
  max-height: 8rem;
}

.max-h-36 {
  max-height: 9rem;
}

.max-h-40 {
  max-height: 10rem;
}

.max-h-44 {
  max-height: 11rem;
}

.max-h-48 {
  max-height: 12rem;
}

.max-h-52 {
  max-height: 13rem;
}

.max-h-56 {
  max-height: 14rem;
}

.max-h-60 {
  max-height: 15rem;
}

.max-h-64 {
  max-height: 16rem;
}

.max-h-72 {
  max-height: 18rem;
}

.max-h-80 {
  max-height: 20rem;
}

.max-h-96 {
  max-height: 24rem;
}

.max-h-px {
  max-height: 1px;
}

.max-h-full {
  max-height: 100%;
}

.max-h-screen {
  max-height: 100vh;
}

.max-h-min {
  max-height: -webkit-min-content;
  max-height: -moz-min-content;
  max-height: min-content;
}

.max-h-max {
  max-height: -webkit-max-content;
  max-height: -moz-max-content;
  max-height: max-content;
}

.max-h-fit {
  max-height: -webkit-fit-content;
  max-height: -moz-fit-content;
  max-height: fit-content;
}

.max-h-0\.5 {
  max-height: 0.125rem;
}

.max-h-1\.5 {
  max-height: 0.375rem;
}

.max-h-2\.5 {
  max-height: 0.625rem;
}

.max-h-3\.5 {
  max-height: 0.875rem;
}

.min-h-screen {
  min-height: 100vh;
}

.min-h-0 {
  min-height: 0px;
}

.min-h-full {
  min-height: 100%;
}

.min-h-min {
  min-height: -webkit-min-content;
  min-height: -moz-min-content;
  min-height: min-content;
}

.min-h-max {
  min-height: -webkit-max-content;
  min-height: -moz-max-content;
  min-height: max-content;
}

.min-h-fit {
  min-height: -webkit-fit-content;
  min-height: -moz-fit-content;
  min-height: fit-content;
}

.min-h-\[12\.5rem\] {
  min-height: 12.5rem;
}

.w-full {
  width: 100%;
}

.w-4 {
  width: 1rem;
}

.w-3 {
  width: 0.75rem;
}

.w-5 {
  width: 1.25rem;
}

.w-auto {
  width: auto;
}

.w-12 {
  width: 3rem;
}

.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.w-8 {
  width: 2rem;
}

.w-7 {
  width: 1.75rem;
}

.w-6 {
  width: 1.5rem;
}

.w-96 {
  width: 24rem;
}

.w-44 {
  width: 11rem;
}

.w-72 {
  width: 18rem;
}

.w-32 {
  width: 8rem;
}

.w-56 {
  width: 14rem;
}

.w-0 {
  width: 0px;
}

.w-1 {
  width: 0.25rem;
}

.w-2 {
  width: 0.5rem;
}

.w-9 {
  width: 2.25rem;
}

.w-10 {
  width: 2.5rem;
}

.w-11 {
  width: 2.75rem;
}

.w-14 {
  width: 3.5rem;
}

.w-16 {
  width: 4rem;
}

.w-20 {
  width: 5rem;
}

.w-24 {
  width: 6rem;
}

.w-28 {
  width: 7rem;
}

.w-36 {
  width: 9rem;
}

.w-40 {
  width: 10rem;
}

.w-48 {
  width: 12rem;
}

.w-52 {
  width: 13rem;
}

.w-60 {
  width: 15rem;
}

.w-64 {
  width: 16rem;
}

.w-80 {
  width: 20rem;
}

.w-px {
  width: 1px;
}

.w-screen {
  width: 100vw;
}

.w-min {
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}

.w-max {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.w-\[83\%\] {
  width: 83%;
}

.w-\[70px\] {
  width: 70px;
}

.w-\[4rem\] {
  width: 4rem;
}

.w-2\/3 {
  width: 66.666667%;
}

.w-0\.5 {
  width: 0.125rem;
}

.w-1\.5 {
  width: 0.375rem;
}

.w-2\.5 {
  width: 0.625rem;
}

.w-3\.5 {
  width: 0.875rem;
}

.w-1\/2 {
  width: 50%;
}

.w-1\/3 {
  width: 33.333333%;
}

.w-1\/4 {
  width: 25%;
}

.w-2\/4 {
  width: 50%;
}

.w-3\/4 {
  width: 75%;
}

.w-1\/5 {
  width: 20%;
}

.w-2\/5 {
  width: 40%;
}

.w-3\/5 {
  width: 60%;
}

.w-4\/5 {
  width: 80%;
}

.w-1\/6 {
  width: 16.666667%;
}

.w-2\/6 {
  width: 33.333333%;
}

.w-3\/6 {
  width: 50%;
}

.w-4\/6 {
  width: 66.666667%;
}

.w-5\/6 {
  width: 83.333333%;
}

.w-1\/12 {
  width: 8.333333%;
}

.w-2\/12 {
  width: 16.666667%;
}

.w-3\/12 {
  width: 25%;
}

.w-4\/12 {
  width: 33.333333%;
}

.w-5\/12 {
  width: 41.666667%;
}

.w-6\/12 {
  width: 50%;
}

.w-7\/12 {
  width: 58.333333%;
}

.w-8\/12 {
  width: 66.666667%;
}

.w-9\/12 {
  width: 75%;
}

.w-10\/12 {
  width: 83.333333%;
}

.w-11\/12 {
  width: 91.666667%;
}

.min-w-0 {
  min-width: 0px;
}

.min-w-full {
  min-width: 100%;
}

.min-w-min {
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
}

.min-w-max {
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
}

.min-w-fit {
  min-width: -webkit-fit-content;
  min-width: -moz-fit-content;
  min-width: fit-content;
}

.max-w-screen-lg {
  max-width: 1050px;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-0 {
  max-width: 0rem;
}

.max-w-none {
  max-width: none;
}

.max-w-xs {
  max-width: 20rem;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-5xl {
  max-width: 64rem;
}

.max-w-6xl {
  max-width: 72rem;
}

.max-w-7xl {
  max-width: 80rem;
}

.max-w-full {
  max-width: 100%;
}

.max-w-min {
  max-width: -webkit-min-content;
  max-width: -moz-min-content;
  max-width: min-content;
}

.max-w-max {
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
}

.max-w-fit {
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
}

.max-w-prose {
  max-width: 65ch;
}

.max-w-screen-xxs {
  max-width: 350px;
}

.max-w-screen-custom3 {
  max-width: 420px;
}

.max-w-screen-xs {
  max-width: 480px;
}

.max-w-screen-custom2 {
  max-width: 580px;
}

.max-w-screen-sm {
  max-width: 676px;
}

.max-w-screen-md {
  max-width: 768px;
}

.max-w-screen-custom {
  max-width: 910px;
}

.max-w-screen-xl {
  max-width: 1280px;
}

.max-w-screen-2xl {
  max-width: 1526px;
}

.max-w-screen-3xl {
  max-width: 1696px;
}

.max-w-\[800px\] {
  max-width: 800px;
}

.max-w-\[700px\] {
  max-width: 700px;
}

.max-w-\[1200px\] {
  max-width: 1200px;
}

.max-w-\[510px\] {
  max-width: 510px;
}

.max-w-\[1000px\] {
  max-width: 1000px;
}

.flex-none {
  flex: none;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-initial {
  flex: 0 1 auto;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.shrink {
  flex-shrink: 1;
}

.flex-grow-0 {
  flex-grow: 0;
}

.flex-grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.grow {
  flex-grow: 1;
}

.basis-0 {
  flex-basis: 0px;
}

.basis-1 {
  flex-basis: 0.25rem;
}

.basis-2 {
  flex-basis: 0.5rem;
}

.basis-3 {
  flex-basis: 0.75rem;
}

.basis-4 {
  flex-basis: 1rem;
}

.basis-5 {
  flex-basis: 1.25rem;
}

.basis-6 {
  flex-basis: 1.5rem;
}

.basis-7 {
  flex-basis: 1.75rem;
}

.basis-8 {
  flex-basis: 2rem;
}

.basis-9 {
  flex-basis: 2.25rem;
}

.basis-10 {
  flex-basis: 2.5rem;
}

.basis-11 {
  flex-basis: 2.75rem;
}

.basis-12 {
  flex-basis: 3rem;
}

.basis-14 {
  flex-basis: 3.5rem;
}

.basis-16 {
  flex-basis: 4rem;
}

.basis-20 {
  flex-basis: 5rem;
}

.basis-24 {
  flex-basis: 6rem;
}

.basis-28 {
  flex-basis: 7rem;
}

.basis-32 {
  flex-basis: 8rem;
}

.basis-36 {
  flex-basis: 9rem;
}

.basis-40 {
  flex-basis: 10rem;
}

.basis-44 {
  flex-basis: 11rem;
}

.basis-48 {
  flex-basis: 12rem;
}

.basis-52 {
  flex-basis: 13rem;
}

.basis-56 {
  flex-basis: 14rem;
}

.basis-60 {
  flex-basis: 15rem;
}

.basis-64 {
  flex-basis: 16rem;
}

.basis-72 {
  flex-basis: 18rem;
}

.basis-80 {
  flex-basis: 20rem;
}

.basis-96 {
  flex-basis: 24rem;
}

.basis-auto {
  flex-basis: auto;
}

.basis-px {
  flex-basis: 1px;
}

.basis-full {
  flex-basis: 100%;
}

.basis-0\.5 {
  flex-basis: 0.125rem;
}

.basis-1\.5 {
  flex-basis: 0.375rem;
}

.basis-2\.5 {
  flex-basis: 0.625rem;
}

.basis-3\.5 {
  flex-basis: 0.875rem;
}

.basis-1\/2 {
  flex-basis: 50%;
}

.basis-1\/3 {
  flex-basis: 33.333333%;
}

.basis-2\/3 {
  flex-basis: 66.666667%;
}

.basis-1\/4 {
  flex-basis: 25%;
}

.basis-2\/4 {
  flex-basis: 50%;
}

.basis-3\/4 {
  flex-basis: 75%;
}

.basis-1\/5 {
  flex-basis: 20%;
}

.basis-2\/5 {
  flex-basis: 40%;
}

.basis-3\/5 {
  flex-basis: 60%;
}

.basis-4\/5 {
  flex-basis: 80%;
}

.basis-1\/6 {
  flex-basis: 16.666667%;
}

.basis-2\/6 {
  flex-basis: 33.333333%;
}

.basis-3\/6 {
  flex-basis: 50%;
}

.basis-4\/6 {
  flex-basis: 66.666667%;
}

.basis-5\/6 {
  flex-basis: 83.333333%;
}

.basis-1\/12 {
  flex-basis: 8.333333%;
}

.basis-2\/12 {
  flex-basis: 16.666667%;
}

.basis-3\/12 {
  flex-basis: 25%;
}

.basis-4\/12 {
  flex-basis: 33.333333%;
}

.basis-5\/12 {
  flex-basis: 41.666667%;
}

.basis-6\/12 {
  flex-basis: 50%;
}

.basis-7\/12 {
  flex-basis: 58.333333%;
}

.basis-8\/12 {
  flex-basis: 66.666667%;
}

.basis-9\/12 {
  flex-basis: 75%;
}

.basis-10\/12 {
  flex-basis: 83.333333%;
}

.basis-11\/12 {
  flex-basis: 91.666667%;
}

.table-auto {
  table-layout: auto;
}

.table-fixed {
  table-layout: fixed;
}

.border-collapse {
  border-collapse: collapse;
}

.border-separate {
  border-collapse: separate;
}

.origin-center {
  transform-origin: center;
}

.origin-top {
  transform-origin: top;
}

.origin-top-right {
  transform-origin: top right;
}

.origin-right {
  transform-origin: right;
}

.origin-bottom-right {
  transform-origin: bottom right;
}

.origin-bottom {
  transform-origin: bottom;
}

.origin-bottom-left {
  transform-origin: bottom left;
}

.origin-left {
  transform-origin: left;
}

.origin-top-left {
  transform-origin: top left;
}

.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-2 {
  --tw-translate-x: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-3 {
  --tw-translate-x: 0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-4 {
  --tw-translate-x: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-5 {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-6 {
  --tw-translate-x: 1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-7 {
  --tw-translate-x: 1.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-8 {
  --tw-translate-x: 2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-9 {
  --tw-translate-x: 2.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-10 {
  --tw-translate-x: 2.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-11 {
  --tw-translate-x: 2.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-12 {
  --tw-translate-x: 3rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-14 {
  --tw-translate-x: 3.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-16 {
  --tw-translate-x: 4rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-20 {
  --tw-translate-x: 5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-24 {
  --tw-translate-x: 6rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-28 {
  --tw-translate-x: 7rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-32 {
  --tw-translate-x: 8rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-36 {
  --tw-translate-x: 9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-40 {
  --tw-translate-x: 10rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-44 {
  --tw-translate-x: 11rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-48 {
  --tw-translate-x: 12rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-52 {
  --tw-translate-x: 13rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-56 {
  --tw-translate-x: 14rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-60 {
  --tw-translate-x: 15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-64 {
  --tw-translate-x: 16rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-72 {
  --tw-translate-x: 18rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-80 {
  --tw-translate-x: 20rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-96 {
  --tw-translate-x: 24rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-px {
  --tw-translate-x: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-0 {
  --tw-translate-x: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-2 {
  --tw-translate-x: -0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-3 {
  --tw-translate-x: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-4 {
  --tw-translate-x: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-5 {
  --tw-translate-x: -1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-6 {
  --tw-translate-x: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-7 {
  --tw-translate-x: -1.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-8 {
  --tw-translate-x: -2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-9 {
  --tw-translate-x: -2.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-10 {
  --tw-translate-x: -2.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-11 {
  --tw-translate-x: -2.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-12 {
  --tw-translate-x: -3rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-14 {
  --tw-translate-x: -3.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-16 {
  --tw-translate-x: -4rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-20 {
  --tw-translate-x: -5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-24 {
  --tw-translate-x: -6rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-28 {
  --tw-translate-x: -7rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-32 {
  --tw-translate-x: -8rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-36 {
  --tw-translate-x: -9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-40 {
  --tw-translate-x: -10rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-44 {
  --tw-translate-x: -11rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-48 {
  --tw-translate-x: -12rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-52 {
  --tw-translate-x: -13rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-56 {
  --tw-translate-x: -14rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-60 {
  --tw-translate-x: -15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-64 {
  --tw-translate-x: -16rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-72 {
  --tw-translate-x: -18rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-80 {
  --tw-translate-x: -20rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-96 {
  --tw-translate-x: -24rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-px {
  --tw-translate-x: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1 {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-2 {
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-3 {
  --tw-translate-y: 0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-5 {
  --tw-translate-y: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-6 {
  --tw-translate-y: 1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-7 {
  --tw-translate-y: 1.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-8 {
  --tw-translate-y: 2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-9 {
  --tw-translate-y: 2.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-10 {
  --tw-translate-y: 2.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-11 {
  --tw-translate-y: 2.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-12 {
  --tw-translate-y: 3rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-14 {
  --tw-translate-y: 3.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-16 {
  --tw-translate-y: 4rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-20 {
  --tw-translate-y: 5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-24 {
  --tw-translate-y: 6rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-28 {
  --tw-translate-y: 7rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-32 {
  --tw-translate-y: 8rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-36 {
  --tw-translate-y: 9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-40 {
  --tw-translate-y: 10rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-44 {
  --tw-translate-y: 11rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-48 {
  --tw-translate-y: 12rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-52 {
  --tw-translate-y: 13rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-56 {
  --tw-translate-y: 14rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-60 {
  --tw-translate-y: 15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-64 {
  --tw-translate-y: 16rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-72 {
  --tw-translate-y: 18rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-80 {
  --tw-translate-y: 20rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-96 {
  --tw-translate-y: 24rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-px {
  --tw-translate-y: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-0 {
  --tw-translate-y: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-2 {
  --tw-translate-y: -0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-3 {
  --tw-translate-y: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-4 {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-5 {
  --tw-translate-y: -1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-7 {
  --tw-translate-y: -1.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-8 {
  --tw-translate-y: -2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-9 {
  --tw-translate-y: -2.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-10 {
  --tw-translate-y: -2.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-11 {
  --tw-translate-y: -2.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-12 {
  --tw-translate-y: -3rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-14 {
  --tw-translate-y: -3.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-16 {
  --tw-translate-y: -4rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-20 {
  --tw-translate-y: -5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-24 {
  --tw-translate-y: -6rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-28 {
  --tw-translate-y: -7rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-32 {
  --tw-translate-y: -8rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-36 {
  --tw-translate-y: -9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-40 {
  --tw-translate-y: -10rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-44 {
  --tw-translate-y: -11rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-48 {
  --tw-translate-y: -12rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-52 {
  --tw-translate-y: -13rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-56 {
  --tw-translate-y: -14rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-60 {
  --tw-translate-y: -15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-64 {
  --tw-translate-y: -16rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-72 {
  --tw-translate-y: -18rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-80 {
  --tw-translate-y: -20rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-96 {
  --tw-translate-y: -24rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-px {
  --tw-translate-y: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-full {
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-\[-1rem\] {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-0\.5 {
  --tw-translate-x: 0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\.5 {
  --tw-translate-x: 0.375rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-2\.5 {
  --tw-translate-x: 0.625rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-3\.5 {
  --tw-translate-x: 0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\/3 {
  --tw-translate-x: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-2\/3 {
  --tw-translate-x: 66.666667%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\/4 {
  --tw-translate-x: 25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-2\/4 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-3\/4 {
  --tw-translate-x: 75%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-0\.5 {
  --tw-translate-x: -0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\.5 {
  --tw-translate-x: -0.375rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-2\.5 {
  --tw-translate-x: -0.625rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-3\.5 {
  --tw-translate-x: -0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\/3 {
  --tw-translate-x: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-2\/3 {
  --tw-translate-x: -66.666667%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\/4 {
  --tw-translate-x: -25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-2\/4 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-3\/4 {
  --tw-translate-x: -75%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-0\.5 {
  --tw-translate-y: 0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1\.5 {
  --tw-translate-y: 0.375rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-2\.5 {
  --tw-translate-y: 0.625rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-3\.5 {
  --tw-translate-y: 0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1\/2 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1\/3 {
  --tw-translate-y: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-2\/3 {
  --tw-translate-y: 66.666667%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1\/4 {
  --tw-translate-y: 25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-2\/4 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-3\/4 {
  --tw-translate-y: 75%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-0\.5 {
  --tw-translate-y: -0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\.5 {
  --tw-translate-y: -0.375rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-2\.5 {
  --tw-translate-y: -0.625rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-3\.5 {
  --tw-translate-y: -0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\/3 {
  --tw-translate-y: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-2\/3 {
  --tw-translate-y: -66.666667%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\/4 {
  --tw-translate-y: -25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-2\/4 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-3\/4 {
  --tw-translate-y: -75%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-1 {
  --tw-rotate: 1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-2 {
  --tw-rotate: 2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-3 {
  --tw-rotate: 3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-6 {
  --tw-rotate: 6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-12 {
  --tw-rotate: 12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-0 {
  --tw-rotate: -0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-1 {
  --tw-rotate: -1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-2 {
  --tw-rotate: -2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-3 {
  --tw-rotate: -3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-6 {
  --tw-rotate: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-12 {
  --tw-rotate: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-45 {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-180 {
  --tw-rotate: -180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-0 {
  --tw-skew-x: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-1 {
  --tw-skew-x: 1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-2 {
  --tw-skew-x: 2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-3 {
  --tw-skew-x: 3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-6 {
  --tw-skew-x: 6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-x-12 {
  --tw-skew-x: 12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-0 {
  --tw-skew-x: -0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-1 {
  --tw-skew-x: -1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-2 {
  --tw-skew-x: -2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-3 {
  --tw-skew-x: -3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-6 {
  --tw-skew-x: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-x-12 {
  --tw-skew-x: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-0 {
  --tw-skew-y: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-1 {
  --tw-skew-y: 1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-2 {
  --tw-skew-y: 2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-3 {
  --tw-skew-y: 3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-6 {
  --tw-skew-y: 6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.skew-y-12 {
  --tw-skew-y: 12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-0 {
  --tw-skew-y: -0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-1 {
  --tw-skew-y: -1deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-2 {
  --tw-skew-y: -2deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-3 {
  --tw-skew-y: -3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-6 {
  --tw-skew-y: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-skew-y-12 {
  --tw-skew-y: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-90 {
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-50 {
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-125 {
  --tw-scale-x: 1.25;
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-150 {
  --tw-scale-x: 1.5;
  --tw-scale-y: 1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-50 {
  --tw-scale-x: -.5;
  --tw-scale-y: -.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-75 {
  --tw-scale-x: -.75;
  --tw-scale-y: -.75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-90 {
  --tw-scale-x: -.9;
  --tw-scale-y: -.9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-95 {
  --tw-scale-x: -.95;
  --tw-scale-y: -.95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-100 {
  --tw-scale-x: -1;
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-105 {
  --tw-scale-x: -1.05;
  --tw-scale-y: -1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-110 {
  --tw-scale-x: -1.1;
  --tw-scale-y: -1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-125 {
  --tw-scale-x: -1.25;
  --tw-scale-y: -1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-150 {
  --tw-scale-x: -1.5;
  --tw-scale-y: -1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-0 {
  --tw-scale-x: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-50 {
  --tw-scale-x: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-75 {
  --tw-scale-x: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-90 {
  --tw-scale-x: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-95 {
  --tw-scale-x: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-100 {
  --tw-scale-x: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-105 {
  --tw-scale-x: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-110 {
  --tw-scale-x: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-125 {
  --tw-scale-x: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-x-150 {
  --tw-scale-x: 1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-0 {
  --tw-scale-x: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-50 {
  --tw-scale-x: -.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-75 {
  --tw-scale-x: -.75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-90 {
  --tw-scale-x: -.9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-95 {
  --tw-scale-x: -.95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-100 {
  --tw-scale-x: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-105 {
  --tw-scale-x: -1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-110 {
  --tw-scale-x: -1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-125 {
  --tw-scale-x: -1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-x-150 {
  --tw-scale-x: -1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-0 {
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-50 {
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-75 {
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-90 {
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-95 {
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-100 {
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-105 {
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-110 {
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-125 {
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-150 {
  --tw-scale-y: 1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-0 {
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-50 {
  --tw-scale-y: -.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-75 {
  --tw-scale-y: -.75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-90 {
  --tw-scale-y: -.9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-95 {
  --tw-scale-y: -.95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-100 {
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-105 {
  --tw-scale-y: -1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-110 {
  --tw-scale-y: -1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-125 {
  --tw-scale-y: -1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-scale-y-150 {
  --tw-scale-y: -1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-cpu {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-gpu {
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-none {
  transform: none;
}

.animate-none {
  -webkit-animation: none;
          animation: none;
}

@-webkit-keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}

@-webkit-keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@-webkit-keyframes pulse {
  50% {
    opacity: .5;
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@-webkit-keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.animate-bounce {
  -webkit-animation: bounce 1s infinite;
          animation: bounce 1s infinite;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-auto {
  cursor: auto;
}

.cursor-default {
  cursor: default;
}

.cursor-wait {
  cursor: wait;
}

.cursor-text {
  cursor: text;
}

.cursor-move {
  cursor: move;
}

.cursor-help {
  cursor: help;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-none {
  cursor: none;
}

.cursor-context-menu {
  cursor: context-menu;
}

.cursor-progress {
  cursor: progress;
}

.cursor-cell {
  cursor: cell;
}

.cursor-crosshair {
  cursor: crosshair;
}

.cursor-vertical-text {
  cursor: vertical-text;
}

.cursor-alias {
  cursor: alias;
}

.cursor-copy {
  cursor: copy;
}

.cursor-no-drop {
  cursor: no-drop;
}

.cursor-grab {
  cursor: -webkit-grab;
  cursor: grab;
}

.cursor-grabbing {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

.cursor-all-scroll {
  cursor: all-scroll;
}

.cursor-col-resize {
  cursor: col-resize;
}

.cursor-row-resize {
  cursor: row-resize;
}

.cursor-n-resize {
  cursor: n-resize;
}

.cursor-e-resize {
  cursor: e-resize;
}

.cursor-s-resize {
  cursor: s-resize;
}

.cursor-w-resize {
  cursor: w-resize;
}

.cursor-ne-resize {
  cursor: ne-resize;
}

.cursor-nw-resize {
  cursor: nw-resize;
}

.cursor-se-resize {
  cursor: se-resize;
}

.cursor-sw-resize {
  cursor: sw-resize;
}

.cursor-ew-resize {
  cursor: ew-resize;
}

.cursor-ns-resize {
  cursor: ns-resize;
}

.cursor-nesw-resize {
  cursor: nesw-resize;
}

.cursor-nwse-resize {
  cursor: nwse-resize;
}

.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-zoom-out {
  cursor: zoom-out;
}

.touch-auto {
  touch-action: auto;
}

.touch-none {
  touch-action: none;
}

.touch-pan-x {
  --tw-pan-x: pan-x;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-left {
  --tw-pan-x: pan-left;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-right {
  --tw-pan-x: pan-right;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-y {
  --tw-pan-y: pan-y;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-up {
  --tw-pan-y: pan-up;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-down {
  --tw-pan-y: pan-down;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pinch-zoom {
  --tw-pinch-zoom: pinch-zoom;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-manipulation {
  touch-action: manipulation;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.select-text {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
}

.select-all {
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
}

.select-auto {
  -webkit-user-select: auto;
     -moz-user-select: auto;
      -ms-user-select: auto;
          user-select: auto;
}

.resize-none {
  resize: none;
}

.resize-y {
  resize: vertical;
}

.resize-x {
  resize: horizontal;
}

.resize {
  resize: both;
}

.snap-none {
  -ms-scroll-snap-type: none;
      scroll-snap-type: none;
}

.snap-x {
  -ms-scroll-snap-type: x var(--tw-scroll-snap-strictness);
      scroll-snap-type: x var(--tw-scroll-snap-strictness);
}

.snap-y {
  -ms-scroll-snap-type: y var(--tw-scroll-snap-strictness);
      scroll-snap-type: y var(--tw-scroll-snap-strictness);
}

.snap-both {
  -ms-scroll-snap-type: both var(--tw-scroll-snap-strictness);
      scroll-snap-type: both var(--tw-scroll-snap-strictness);
}

.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}

.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}

.snap-start {
  scroll-snap-align: start;
}

.snap-end {
  scroll-snap-align: end;
}

.snap-center {
  scroll-snap-align: center;
}

.snap-align-none {
  scroll-snap-align: none;
}

.snap-normal {
  scroll-snap-stop: normal;
}

.snap-always {
  scroll-snap-stop: always;
}

.scroll-m-0 {
  scroll-margin: 0px;
}

.scroll-m-1 {
  scroll-margin: 0.25rem;
}

.scroll-m-2 {
  scroll-margin: 0.5rem;
}

.scroll-m-3 {
  scroll-margin: 0.75rem;
}

.scroll-m-4 {
  scroll-margin: 1rem;
}

.scroll-m-5 {
  scroll-margin: 1.25rem;
}

.scroll-m-6 {
  scroll-margin: 1.5rem;
}

.scroll-m-7 {
  scroll-margin: 1.75rem;
}

.scroll-m-8 {
  scroll-margin: 2rem;
}

.scroll-m-9 {
  scroll-margin: 2.25rem;
}

.scroll-m-10 {
  scroll-margin: 2.5rem;
}

.scroll-m-11 {
  scroll-margin: 2.75rem;
}

.scroll-m-12 {
  scroll-margin: 3rem;
}

.scroll-m-14 {
  scroll-margin: 3.5rem;
}

.scroll-m-16 {
  scroll-margin: 4rem;
}

.scroll-m-20 {
  scroll-margin: 5rem;
}

.scroll-m-24 {
  scroll-margin: 6rem;
}

.scroll-m-28 {
  scroll-margin: 7rem;
}

.scroll-m-32 {
  scroll-margin: 8rem;
}

.scroll-m-36 {
  scroll-margin: 9rem;
}

.scroll-m-40 {
  scroll-margin: 10rem;
}

.scroll-m-44 {
  scroll-margin: 11rem;
}

.scroll-m-48 {
  scroll-margin: 12rem;
}

.scroll-m-52 {
  scroll-margin: 13rem;
}

.scroll-m-56 {
  scroll-margin: 14rem;
}

.scroll-m-60 {
  scroll-margin: 15rem;
}

.scroll-m-64 {
  scroll-margin: 16rem;
}

.scroll-m-72 {
  scroll-margin: 18rem;
}

.scroll-m-80 {
  scroll-margin: 20rem;
}

.scroll-m-96 {
  scroll-margin: 24rem;
}

.scroll-m-px {
  scroll-margin: 1px;
}

.-scroll-m-0 {
  scroll-margin: -0px;
}

.-scroll-m-1 {
  scroll-margin: -0.25rem;
}

.-scroll-m-2 {
  scroll-margin: -0.5rem;
}

.-scroll-m-3 {
  scroll-margin: -0.75rem;
}

.-scroll-m-4 {
  scroll-margin: -1rem;
}

.-scroll-m-5 {
  scroll-margin: -1.25rem;
}

.-scroll-m-6 {
  scroll-margin: -1.5rem;
}

.-scroll-m-7 {
  scroll-margin: -1.75rem;
}

.-scroll-m-8 {
  scroll-margin: -2rem;
}

.-scroll-m-9 {
  scroll-margin: -2.25rem;
}

.-scroll-m-10 {
  scroll-margin: -2.5rem;
}

.-scroll-m-11 {
  scroll-margin: -2.75rem;
}

.-scroll-m-12 {
  scroll-margin: -3rem;
}

.-scroll-m-14 {
  scroll-margin: -3.5rem;
}

.-scroll-m-16 {
  scroll-margin: -4rem;
}

.-scroll-m-20 {
  scroll-margin: -5rem;
}

.-scroll-m-24 {
  scroll-margin: -6rem;
}

.-scroll-m-28 {
  scroll-margin: -7rem;
}

.-scroll-m-32 {
  scroll-margin: -8rem;
}

.-scroll-m-36 {
  scroll-margin: -9rem;
}

.-scroll-m-40 {
  scroll-margin: -10rem;
}

.-scroll-m-44 {
  scroll-margin: -11rem;
}

.-scroll-m-48 {
  scroll-margin: -12rem;
}

.-scroll-m-52 {
  scroll-margin: -13rem;
}

.-scroll-m-56 {
  scroll-margin: -14rem;
}

.-scroll-m-60 {
  scroll-margin: -15rem;
}

.-scroll-m-64 {
  scroll-margin: -16rem;
}

.-scroll-m-72 {
  scroll-margin: -18rem;
}

.-scroll-m-80 {
  scroll-margin: -20rem;
}

.-scroll-m-96 {
  scroll-margin: -24rem;
}

.-scroll-m-px {
  scroll-margin: -1px;
}

.scroll-m-0\.5 {
  scroll-margin: 0.125rem;
}

.scroll-m-1\.5 {
  scroll-margin: 0.375rem;
}

.scroll-m-2\.5 {
  scroll-margin: 0.625rem;
}

.scroll-m-3\.5 {
  scroll-margin: 0.875rem;
}

.-scroll-m-0\.5 {
  scroll-margin: -0.125rem;
}

.-scroll-m-1\.5 {
  scroll-margin: -0.375rem;
}

.-scroll-m-2\.5 {
  scroll-margin: -0.625rem;
}

.-scroll-m-3\.5 {
  scroll-margin: -0.875rem;
}

.scroll-mx-0 {
  scroll-margin-left: 0px;
  scroll-margin-right: 0px;
}

.scroll-mx-1 {
  scroll-margin-left: 0.25rem;
  scroll-margin-right: 0.25rem;
}

.scroll-mx-2 {
  scroll-margin-left: 0.5rem;
  scroll-margin-right: 0.5rem;
}

.scroll-mx-3 {
  scroll-margin-left: 0.75rem;
  scroll-margin-right: 0.75rem;
}

.scroll-mx-4 {
  scroll-margin-left: 1rem;
  scroll-margin-right: 1rem;
}

.scroll-mx-5 {
  scroll-margin-left: 1.25rem;
  scroll-margin-right: 1.25rem;
}

.scroll-mx-6 {
  scroll-margin-left: 1.5rem;
  scroll-margin-right: 1.5rem;
}

.scroll-mx-7 {
  scroll-margin-left: 1.75rem;
  scroll-margin-right: 1.75rem;
}

.scroll-mx-8 {
  scroll-margin-left: 2rem;
  scroll-margin-right: 2rem;
}

.scroll-mx-9 {
  scroll-margin-left: 2.25rem;
  scroll-margin-right: 2.25rem;
}

.scroll-mx-10 {
  scroll-margin-left: 2.5rem;
  scroll-margin-right: 2.5rem;
}

.scroll-mx-11 {
  scroll-margin-left: 2.75rem;
  scroll-margin-right: 2.75rem;
}

.scroll-mx-12 {
  scroll-margin-left: 3rem;
  scroll-margin-right: 3rem;
}

.scroll-mx-14 {
  scroll-margin-left: 3.5rem;
  scroll-margin-right: 3.5rem;
}

.scroll-mx-16 {
  scroll-margin-left: 4rem;
  scroll-margin-right: 4rem;
}

.scroll-mx-20 {
  scroll-margin-left: 5rem;
  scroll-margin-right: 5rem;
}

.scroll-mx-24 {
  scroll-margin-left: 6rem;
  scroll-margin-right: 6rem;
}

.scroll-mx-28 {
  scroll-margin-left: 7rem;
  scroll-margin-right: 7rem;
}

.scroll-mx-32 {
  scroll-margin-left: 8rem;
  scroll-margin-right: 8rem;
}

.scroll-mx-36 {
  scroll-margin-left: 9rem;
  scroll-margin-right: 9rem;
}

.scroll-mx-40 {
  scroll-margin-left: 10rem;
  scroll-margin-right: 10rem;
}

.scroll-mx-44 {
  scroll-margin-left: 11rem;
  scroll-margin-right: 11rem;
}

.scroll-mx-48 {
  scroll-margin-left: 12rem;
  scroll-margin-right: 12rem;
}

.scroll-mx-52 {
  scroll-margin-left: 13rem;
  scroll-margin-right: 13rem;
}

.scroll-mx-56 {
  scroll-margin-left: 14rem;
  scroll-margin-right: 14rem;
}

.scroll-mx-60 {
  scroll-margin-left: 15rem;
  scroll-margin-right: 15rem;
}

.scroll-mx-64 {
  scroll-margin-left: 16rem;
  scroll-margin-right: 16rem;
}

.scroll-mx-72 {
  scroll-margin-left: 18rem;
  scroll-margin-right: 18rem;
}

.scroll-mx-80 {
  scroll-margin-left: 20rem;
  scroll-margin-right: 20rem;
}

.scroll-mx-96 {
  scroll-margin-left: 24rem;
  scroll-margin-right: 24rem;
}

.scroll-mx-px {
  scroll-margin-left: 1px;
  scroll-margin-right: 1px;
}

.-scroll-mx-0 {
  scroll-margin-left: -0px;
  scroll-margin-right: -0px;
}

.-scroll-mx-1 {
  scroll-margin-left: -0.25rem;
  scroll-margin-right: -0.25rem;
}

.-scroll-mx-2 {
  scroll-margin-left: -0.5rem;
  scroll-margin-right: -0.5rem;
}

.-scroll-mx-3 {
  scroll-margin-left: -0.75rem;
  scroll-margin-right: -0.75rem;
}

.-scroll-mx-4 {
  scroll-margin-left: -1rem;
  scroll-margin-right: -1rem;
}

.-scroll-mx-5 {
  scroll-margin-left: -1.25rem;
  scroll-margin-right: -1.25rem;
}

.-scroll-mx-6 {
  scroll-margin-left: -1.5rem;
  scroll-margin-right: -1.5rem;
}

.-scroll-mx-7 {
  scroll-margin-left: -1.75rem;
  scroll-margin-right: -1.75rem;
}

.-scroll-mx-8 {
  scroll-margin-left: -2rem;
  scroll-margin-right: -2rem;
}

.-scroll-mx-9 {
  scroll-margin-left: -2.25rem;
  scroll-margin-right: -2.25rem;
}

.-scroll-mx-10 {
  scroll-margin-left: -2.5rem;
  scroll-margin-right: -2.5rem;
}

.-scroll-mx-11 {
  scroll-margin-left: -2.75rem;
  scroll-margin-right: -2.75rem;
}

.-scroll-mx-12 {
  scroll-margin-left: -3rem;
  scroll-margin-right: -3rem;
}

.-scroll-mx-14 {
  scroll-margin-left: -3.5rem;
  scroll-margin-right: -3.5rem;
}

.-scroll-mx-16 {
  scroll-margin-left: -4rem;
  scroll-margin-right: -4rem;
}

.-scroll-mx-20 {
  scroll-margin-left: -5rem;
  scroll-margin-right: -5rem;
}

.-scroll-mx-24 {
  scroll-margin-left: -6rem;
  scroll-margin-right: -6rem;
}

.-scroll-mx-28 {
  scroll-margin-left: -7rem;
  scroll-margin-right: -7rem;
}

.-scroll-mx-32 {
  scroll-margin-left: -8rem;
  scroll-margin-right: -8rem;
}

.-scroll-mx-36 {
  scroll-margin-left: -9rem;
  scroll-margin-right: -9rem;
}

.-scroll-mx-40 {
  scroll-margin-left: -10rem;
  scroll-margin-right: -10rem;
}

.-scroll-mx-44 {
  scroll-margin-left: -11rem;
  scroll-margin-right: -11rem;
}

.-scroll-mx-48 {
  scroll-margin-left: -12rem;
  scroll-margin-right: -12rem;
}

.-scroll-mx-52 {
  scroll-margin-left: -13rem;
  scroll-margin-right: -13rem;
}

.-scroll-mx-56 {
  scroll-margin-left: -14rem;
  scroll-margin-right: -14rem;
}

.-scroll-mx-60 {
  scroll-margin-left: -15rem;
  scroll-margin-right: -15rem;
}

.-scroll-mx-64 {
  scroll-margin-left: -16rem;
  scroll-margin-right: -16rem;
}

.-scroll-mx-72 {
  scroll-margin-left: -18rem;
  scroll-margin-right: -18rem;
}

.-scroll-mx-80 {
  scroll-margin-left: -20rem;
  scroll-margin-right: -20rem;
}

.-scroll-mx-96 {
  scroll-margin-left: -24rem;
  scroll-margin-right: -24rem;
}

.-scroll-mx-px {
  scroll-margin-left: -1px;
  scroll-margin-right: -1px;
}

.scroll-my-0 {
  scroll-margin-top: 0px;
  scroll-margin-bottom: 0px;
}

.scroll-my-1 {
  scroll-margin-top: 0.25rem;
  scroll-margin-bottom: 0.25rem;
}

.scroll-my-2 {
  scroll-margin-top: 0.5rem;
  scroll-margin-bottom: 0.5rem;
}

.scroll-my-3 {
  scroll-margin-top: 0.75rem;
  scroll-margin-bottom: 0.75rem;
}

.scroll-my-4 {
  scroll-margin-top: 1rem;
  scroll-margin-bottom: 1rem;
}

.scroll-my-5 {
  scroll-margin-top: 1.25rem;
  scroll-margin-bottom: 1.25rem;
}

.scroll-my-6 {
  scroll-margin-top: 1.5rem;
  scroll-margin-bottom: 1.5rem;
}

.scroll-my-7 {
  scroll-margin-top: 1.75rem;
  scroll-margin-bottom: 1.75rem;
}

.scroll-my-8 {
  scroll-margin-top: 2rem;
  scroll-margin-bottom: 2rem;
}

.scroll-my-9 {
  scroll-margin-top: 2.25rem;
  scroll-margin-bottom: 2.25rem;
}

.scroll-my-10 {
  scroll-margin-top: 2.5rem;
  scroll-margin-bottom: 2.5rem;
}

.scroll-my-11 {
  scroll-margin-top: 2.75rem;
  scroll-margin-bottom: 2.75rem;
}

.scroll-my-12 {
  scroll-margin-top: 3rem;
  scroll-margin-bottom: 3rem;
}

.scroll-my-14 {
  scroll-margin-top: 3.5rem;
  scroll-margin-bottom: 3.5rem;
}

.scroll-my-16 {
  scroll-margin-top: 4rem;
  scroll-margin-bottom: 4rem;
}

.scroll-my-20 {
  scroll-margin-top: 5rem;
  scroll-margin-bottom: 5rem;
}

.scroll-my-24 {
  scroll-margin-top: 6rem;
  scroll-margin-bottom: 6rem;
}

.scroll-my-28 {
  scroll-margin-top: 7rem;
  scroll-margin-bottom: 7rem;
}

.scroll-my-32 {
  scroll-margin-top: 8rem;
  scroll-margin-bottom: 8rem;
}

.scroll-my-36 {
  scroll-margin-top: 9rem;
  scroll-margin-bottom: 9rem;
}

.scroll-my-40 {
  scroll-margin-top: 10rem;
  scroll-margin-bottom: 10rem;
}

.scroll-my-44 {
  scroll-margin-top: 11rem;
  scroll-margin-bottom: 11rem;
}

.scroll-my-48 {
  scroll-margin-top: 12rem;
  scroll-margin-bottom: 12rem;
}

.scroll-my-52 {
  scroll-margin-top: 13rem;
  scroll-margin-bottom: 13rem;
}

.scroll-my-56 {
  scroll-margin-top: 14rem;
  scroll-margin-bottom: 14rem;
}

.scroll-my-60 {
  scroll-margin-top: 15rem;
  scroll-margin-bottom: 15rem;
}

.scroll-my-64 {
  scroll-margin-top: 16rem;
  scroll-margin-bottom: 16rem;
}

.scroll-my-72 {
  scroll-margin-top: 18rem;
  scroll-margin-bottom: 18rem;
}

.scroll-my-80 {
  scroll-margin-top: 20rem;
  scroll-margin-bottom: 20rem;
}

.scroll-my-96 {
  scroll-margin-top: 24rem;
  scroll-margin-bottom: 24rem;
}

.scroll-my-px {
  scroll-margin-top: 1px;
  scroll-margin-bottom: 1px;
}

.-scroll-my-0 {
  scroll-margin-top: -0px;
  scroll-margin-bottom: -0px;
}

.-scroll-my-1 {
  scroll-margin-top: -0.25rem;
  scroll-margin-bottom: -0.25rem;
}

.-scroll-my-2 {
  scroll-margin-top: -0.5rem;
  scroll-margin-bottom: -0.5rem;
}

.-scroll-my-3 {
  scroll-margin-top: -0.75rem;
  scroll-margin-bottom: -0.75rem;
}

.-scroll-my-4 {
  scroll-margin-top: -1rem;
  scroll-margin-bottom: -1rem;
}

.-scroll-my-5 {
  scroll-margin-top: -1.25rem;
  scroll-margin-bottom: -1.25rem;
}

.-scroll-my-6 {
  scroll-margin-top: -1.5rem;
  scroll-margin-bottom: -1.5rem;
}

.-scroll-my-7 {
  scroll-margin-top: -1.75rem;
  scroll-margin-bottom: -1.75rem;
}

.-scroll-my-8 {
  scroll-margin-top: -2rem;
  scroll-margin-bottom: -2rem;
}

.-scroll-my-9 {
  scroll-margin-top: -2.25rem;
  scroll-margin-bottom: -2.25rem;
}

.-scroll-my-10 {
  scroll-margin-top: -2.5rem;
  scroll-margin-bottom: -2.5rem;
}

.-scroll-my-11 {
  scroll-margin-top: -2.75rem;
  scroll-margin-bottom: -2.75rem;
}

.-scroll-my-12 {
  scroll-margin-top: -3rem;
  scroll-margin-bottom: -3rem;
}

.-scroll-my-14 {
  scroll-margin-top: -3.5rem;
  scroll-margin-bottom: -3.5rem;
}

.-scroll-my-16 {
  scroll-margin-top: -4rem;
  scroll-margin-bottom: -4rem;
}

.-scroll-my-20 {
  scroll-margin-top: -5rem;
  scroll-margin-bottom: -5rem;
}

.-scroll-my-24 {
  scroll-margin-top: -6rem;
  scroll-margin-bottom: -6rem;
}

.-scroll-my-28 {
  scroll-margin-top: -7rem;
  scroll-margin-bottom: -7rem;
}

.-scroll-my-32 {
  scroll-margin-top: -8rem;
  scroll-margin-bottom: -8rem;
}

.-scroll-my-36 {
  scroll-margin-top: -9rem;
  scroll-margin-bottom: -9rem;
}

.-scroll-my-40 {
  scroll-margin-top: -10rem;
  scroll-margin-bottom: -10rem;
}

.-scroll-my-44 {
  scroll-margin-top: -11rem;
  scroll-margin-bottom: -11rem;
}

.-scroll-my-48 {
  scroll-margin-top: -12rem;
  scroll-margin-bottom: -12rem;
}

.-scroll-my-52 {
  scroll-margin-top: -13rem;
  scroll-margin-bottom: -13rem;
}

.-scroll-my-56 {
  scroll-margin-top: -14rem;
  scroll-margin-bottom: -14rem;
}

.-scroll-my-60 {
  scroll-margin-top: -15rem;
  scroll-margin-bottom: -15rem;
}

.-scroll-my-64 {
  scroll-margin-top: -16rem;
  scroll-margin-bottom: -16rem;
}

.-scroll-my-72 {
  scroll-margin-top: -18rem;
  scroll-margin-bottom: -18rem;
}

.-scroll-my-80 {
  scroll-margin-top: -20rem;
  scroll-margin-bottom: -20rem;
}

.-scroll-my-96 {
  scroll-margin-top: -24rem;
  scroll-margin-bottom: -24rem;
}

.-scroll-my-px {
  scroll-margin-top: -1px;
  scroll-margin-bottom: -1px;
}

.scroll-mx-0\.5 {
  scroll-margin-left: 0.125rem;
  scroll-margin-right: 0.125rem;
}

.scroll-mx-1\.5 {
  scroll-margin-left: 0.375rem;
  scroll-margin-right: 0.375rem;
}

.scroll-mx-2\.5 {
  scroll-margin-left: 0.625rem;
  scroll-margin-right: 0.625rem;
}

.scroll-mx-3\.5 {
  scroll-margin-left: 0.875rem;
  scroll-margin-right: 0.875rem;
}

.-scroll-mx-0\.5 {
  scroll-margin-left: -0.125rem;
  scroll-margin-right: -0.125rem;
}

.-scroll-mx-1\.5 {
  scroll-margin-left: -0.375rem;
  scroll-margin-right: -0.375rem;
}

.-scroll-mx-2\.5 {
  scroll-margin-left: -0.625rem;
  scroll-margin-right: -0.625rem;
}

.-scroll-mx-3\.5 {
  scroll-margin-left: -0.875rem;
  scroll-margin-right: -0.875rem;
}

.scroll-my-0\.5 {
  scroll-margin-top: 0.125rem;
  scroll-margin-bottom: 0.125rem;
}

.scroll-my-1\.5 {
  scroll-margin-top: 0.375rem;
  scroll-margin-bottom: 0.375rem;
}

.scroll-my-2\.5 {
  scroll-margin-top: 0.625rem;
  scroll-margin-bottom: 0.625rem;
}

.scroll-my-3\.5 {
  scroll-margin-top: 0.875rem;
  scroll-margin-bottom: 0.875rem;
}

.-scroll-my-0\.5 {
  scroll-margin-top: -0.125rem;
  scroll-margin-bottom: -0.125rem;
}

.-scroll-my-1\.5 {
  scroll-margin-top: -0.375rem;
  scroll-margin-bottom: -0.375rem;
}

.-scroll-my-2\.5 {
  scroll-margin-top: -0.625rem;
  scroll-margin-bottom: -0.625rem;
}

.-scroll-my-3\.5 {
  scroll-margin-top: -0.875rem;
  scroll-margin-bottom: -0.875rem;
}

.scroll-mt-0 {
  scroll-margin-top: 0px;
}

.scroll-mt-1 {
  scroll-margin-top: 0.25rem;
}

.scroll-mt-2 {
  scroll-margin-top: 0.5rem;
}

.scroll-mt-3 {
  scroll-margin-top: 0.75rem;
}

.scroll-mt-4 {
  scroll-margin-top: 1rem;
}

.scroll-mt-5 {
  scroll-margin-top: 1.25rem;
}

.scroll-mt-6 {
  scroll-margin-top: 1.5rem;
}

.scroll-mt-7 {
  scroll-margin-top: 1.75rem;
}

.scroll-mt-8 {
  scroll-margin-top: 2rem;
}

.scroll-mt-9 {
  scroll-margin-top: 2.25rem;
}

.scroll-mt-10 {
  scroll-margin-top: 2.5rem;
}

.scroll-mt-11 {
  scroll-margin-top: 2.75rem;
}

.scroll-mt-12 {
  scroll-margin-top: 3rem;
}

.scroll-mt-14 {
  scroll-margin-top: 3.5rem;
}

.scroll-mt-16 {
  scroll-margin-top: 4rem;
}

.scroll-mt-20 {
  scroll-margin-top: 5rem;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}

.scroll-mt-28 {
  scroll-margin-top: 7rem;
}

.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

.scroll-mt-36 {
  scroll-margin-top: 9rem;
}

.scroll-mt-40 {
  scroll-margin-top: 10rem;
}

.scroll-mt-44 {
  scroll-margin-top: 11rem;
}

.scroll-mt-48 {
  scroll-margin-top: 12rem;
}

.scroll-mt-52 {
  scroll-margin-top: 13rem;
}

.scroll-mt-56 {
  scroll-margin-top: 14rem;
}

.scroll-mt-60 {
  scroll-margin-top: 15rem;
}

.scroll-mt-64 {
  scroll-margin-top: 16rem;
}

.scroll-mt-72 {
  scroll-margin-top: 18rem;
}

.scroll-mt-80 {
  scroll-margin-top: 20rem;
}

.scroll-mt-96 {
  scroll-margin-top: 24rem;
}

.scroll-mt-px {
  scroll-margin-top: 1px;
}

.-scroll-mt-0 {
  scroll-margin-top: -0px;
}

.-scroll-mt-1 {
  scroll-margin-top: -0.25rem;
}

.-scroll-mt-2 {
  scroll-margin-top: -0.5rem;
}

.-scroll-mt-3 {
  scroll-margin-top: -0.75rem;
}

.-scroll-mt-4 {
  scroll-margin-top: -1rem;
}

.-scroll-mt-5 {
  scroll-margin-top: -1.25rem;
}

.-scroll-mt-6 {
  scroll-margin-top: -1.5rem;
}

.-scroll-mt-7 {
  scroll-margin-top: -1.75rem;
}

.-scroll-mt-8 {
  scroll-margin-top: -2rem;
}

.-scroll-mt-9 {
  scroll-margin-top: -2.25rem;
}

.-scroll-mt-10 {
  scroll-margin-top: -2.5rem;
}

.-scroll-mt-11 {
  scroll-margin-top: -2.75rem;
}

.-scroll-mt-12 {
  scroll-margin-top: -3rem;
}

.-scroll-mt-14 {
  scroll-margin-top: -3.5rem;
}

.-scroll-mt-16 {
  scroll-margin-top: -4rem;
}

.-scroll-mt-20 {
  scroll-margin-top: -5rem;
}

.-scroll-mt-24 {
  scroll-margin-top: -6rem;
}

.-scroll-mt-28 {
  scroll-margin-top: -7rem;
}

.-scroll-mt-32 {
  scroll-margin-top: -8rem;
}

.-scroll-mt-36 {
  scroll-margin-top: -9rem;
}

.-scroll-mt-40 {
  scroll-margin-top: -10rem;
}

.-scroll-mt-44 {
  scroll-margin-top: -11rem;
}

.-scroll-mt-48 {
  scroll-margin-top: -12rem;
}

.-scroll-mt-52 {
  scroll-margin-top: -13rem;
}

.-scroll-mt-56 {
  scroll-margin-top: -14rem;
}

.-scroll-mt-60 {
  scroll-margin-top: -15rem;
}

.-scroll-mt-64 {
  scroll-margin-top: -16rem;
}

.-scroll-mt-72 {
  scroll-margin-top: -18rem;
}

.-scroll-mt-80 {
  scroll-margin-top: -20rem;
}

.-scroll-mt-96 {
  scroll-margin-top: -24rem;
}

.-scroll-mt-px {
  scroll-margin-top: -1px;
}

.scroll-mr-0 {
  scroll-margin-right: 0px;
}

.scroll-mr-1 {
  scroll-margin-right: 0.25rem;
}

.scroll-mr-2 {
  scroll-margin-right: 0.5rem;
}

.scroll-mr-3 {
  scroll-margin-right: 0.75rem;
}

.scroll-mr-4 {
  scroll-margin-right: 1rem;
}

.scroll-mr-5 {
  scroll-margin-right: 1.25rem;
}

.scroll-mr-6 {
  scroll-margin-right: 1.5rem;
}

.scroll-mr-7 {
  scroll-margin-right: 1.75rem;
}

.scroll-mr-8 {
  scroll-margin-right: 2rem;
}

.scroll-mr-9 {
  scroll-margin-right: 2.25rem;
}

.scroll-mr-10 {
  scroll-margin-right: 2.5rem;
}

.scroll-mr-11 {
  scroll-margin-right: 2.75rem;
}

.scroll-mr-12 {
  scroll-margin-right: 3rem;
}

.scroll-mr-14 {
  scroll-margin-right: 3.5rem;
}

.scroll-mr-16 {
  scroll-margin-right: 4rem;
}

.scroll-mr-20 {
  scroll-margin-right: 5rem;
}

.scroll-mr-24 {
  scroll-margin-right: 6rem;
}

.scroll-mr-28 {
  scroll-margin-right: 7rem;
}

.scroll-mr-32 {
  scroll-margin-right: 8rem;
}

.scroll-mr-36 {
  scroll-margin-right: 9rem;
}

.scroll-mr-40 {
  scroll-margin-right: 10rem;
}

.scroll-mr-44 {
  scroll-margin-right: 11rem;
}

.scroll-mr-48 {
  scroll-margin-right: 12rem;
}

.scroll-mr-52 {
  scroll-margin-right: 13rem;
}

.scroll-mr-56 {
  scroll-margin-right: 14rem;
}

.scroll-mr-60 {
  scroll-margin-right: 15rem;
}

.scroll-mr-64 {
  scroll-margin-right: 16rem;
}

.scroll-mr-72 {
  scroll-margin-right: 18rem;
}

.scroll-mr-80 {
  scroll-margin-right: 20rem;
}

.scroll-mr-96 {
  scroll-margin-right: 24rem;
}

.scroll-mr-px {
  scroll-margin-right: 1px;
}

.-scroll-mr-0 {
  scroll-margin-right: -0px;
}

.-scroll-mr-1 {
  scroll-margin-right: -0.25rem;
}

.-scroll-mr-2 {
  scroll-margin-right: -0.5rem;
}

.-scroll-mr-3 {
  scroll-margin-right: -0.75rem;
}

.-scroll-mr-4 {
  scroll-margin-right: -1rem;
}

.-scroll-mr-5 {
  scroll-margin-right: -1.25rem;
}

.-scroll-mr-6 {
  scroll-margin-right: -1.5rem;
}

.-scroll-mr-7 {
  scroll-margin-right: -1.75rem;
}

.-scroll-mr-8 {
  scroll-margin-right: -2rem;
}

.-scroll-mr-9 {
  scroll-margin-right: -2.25rem;
}

.-scroll-mr-10 {
  scroll-margin-right: -2.5rem;
}

.-scroll-mr-11 {
  scroll-margin-right: -2.75rem;
}

.-scroll-mr-12 {
  scroll-margin-right: -3rem;
}

.-scroll-mr-14 {
  scroll-margin-right: -3.5rem;
}

.-scroll-mr-16 {
  scroll-margin-right: -4rem;
}

.-scroll-mr-20 {
  scroll-margin-right: -5rem;
}

.-scroll-mr-24 {
  scroll-margin-right: -6rem;
}

.-scroll-mr-28 {
  scroll-margin-right: -7rem;
}

.-scroll-mr-32 {
  scroll-margin-right: -8rem;
}

.-scroll-mr-36 {
  scroll-margin-right: -9rem;
}

.-scroll-mr-40 {
  scroll-margin-right: -10rem;
}

.-scroll-mr-44 {
  scroll-margin-right: -11rem;
}

.-scroll-mr-48 {
  scroll-margin-right: -12rem;
}

.-scroll-mr-52 {
  scroll-margin-right: -13rem;
}

.-scroll-mr-56 {
  scroll-margin-right: -14rem;
}

.-scroll-mr-60 {
  scroll-margin-right: -15rem;
}

.-scroll-mr-64 {
  scroll-margin-right: -16rem;
}

.-scroll-mr-72 {
  scroll-margin-right: -18rem;
}

.-scroll-mr-80 {
  scroll-margin-right: -20rem;
}

.-scroll-mr-96 {
  scroll-margin-right: -24rem;
}

.-scroll-mr-px {
  scroll-margin-right: -1px;
}

.scroll-mb-0 {
  scroll-margin-bottom: 0px;
}

.scroll-mb-1 {
  scroll-margin-bottom: 0.25rem;
}

.scroll-mb-2 {
  scroll-margin-bottom: 0.5rem;
}

.scroll-mb-3 {
  scroll-margin-bottom: 0.75rem;
}

.scroll-mb-4 {
  scroll-margin-bottom: 1rem;
}

.scroll-mb-5 {
  scroll-margin-bottom: 1.25rem;
}

.scroll-mb-6 {
  scroll-margin-bottom: 1.5rem;
}

.scroll-mb-7 {
  scroll-margin-bottom: 1.75rem;
}

.scroll-mb-8 {
  scroll-margin-bottom: 2rem;
}

.scroll-mb-9 {
  scroll-margin-bottom: 2.25rem;
}

.scroll-mb-10 {
  scroll-margin-bottom: 2.5rem;
}

.scroll-mb-11 {
  scroll-margin-bottom: 2.75rem;
}

.scroll-mb-12 {
  scroll-margin-bottom: 3rem;
}

.scroll-mb-14 {
  scroll-margin-bottom: 3.5rem;
}

.scroll-mb-16 {
  scroll-margin-bottom: 4rem;
}

.scroll-mb-20 {
  scroll-margin-bottom: 5rem;
}

.scroll-mb-24 {
  scroll-margin-bottom: 6rem;
}

.scroll-mb-28 {
  scroll-margin-bottom: 7rem;
}

.scroll-mb-32 {
  scroll-margin-bottom: 8rem;
}

.scroll-mb-36 {
  scroll-margin-bottom: 9rem;
}

.scroll-mb-40 {
  scroll-margin-bottom: 10rem;
}

.scroll-mb-44 {
  scroll-margin-bottom: 11rem;
}

.scroll-mb-48 {
  scroll-margin-bottom: 12rem;
}

.scroll-mb-52 {
  scroll-margin-bottom: 13rem;
}

.scroll-mb-56 {
  scroll-margin-bottom: 14rem;
}

.scroll-mb-60 {
  scroll-margin-bottom: 15rem;
}

.scroll-mb-64 {
  scroll-margin-bottom: 16rem;
}

.scroll-mb-72 {
  scroll-margin-bottom: 18rem;
}

.scroll-mb-80 {
  scroll-margin-bottom: 20rem;
}

.scroll-mb-96 {
  scroll-margin-bottom: 24rem;
}

.scroll-mb-px {
  scroll-margin-bottom: 1px;
}

.-scroll-mb-0 {
  scroll-margin-bottom: -0px;
}

.-scroll-mb-1 {
  scroll-margin-bottom: -0.25rem;
}

.-scroll-mb-2 {
  scroll-margin-bottom: -0.5rem;
}

.-scroll-mb-3 {
  scroll-margin-bottom: -0.75rem;
}

.-scroll-mb-4 {
  scroll-margin-bottom: -1rem;
}

.-scroll-mb-5 {
  scroll-margin-bottom: -1.25rem;
}

.-scroll-mb-6 {
  scroll-margin-bottom: -1.5rem;
}

.-scroll-mb-7 {
  scroll-margin-bottom: -1.75rem;
}

.-scroll-mb-8 {
  scroll-margin-bottom: -2rem;
}

.-scroll-mb-9 {
  scroll-margin-bottom: -2.25rem;
}

.-scroll-mb-10 {
  scroll-margin-bottom: -2.5rem;
}

.-scroll-mb-11 {
  scroll-margin-bottom: -2.75rem;
}

.-scroll-mb-12 {
  scroll-margin-bottom: -3rem;
}

.-scroll-mb-14 {
  scroll-margin-bottom: -3.5rem;
}

.-scroll-mb-16 {
  scroll-margin-bottom: -4rem;
}

.-scroll-mb-20 {
  scroll-margin-bottom: -5rem;
}

.-scroll-mb-24 {
  scroll-margin-bottom: -6rem;
}

.-scroll-mb-28 {
  scroll-margin-bottom: -7rem;
}

.-scroll-mb-32 {
  scroll-margin-bottom: -8rem;
}

.-scroll-mb-36 {
  scroll-margin-bottom: -9rem;
}

.-scroll-mb-40 {
  scroll-margin-bottom: -10rem;
}

.-scroll-mb-44 {
  scroll-margin-bottom: -11rem;
}

.-scroll-mb-48 {
  scroll-margin-bottom: -12rem;
}

.-scroll-mb-52 {
  scroll-margin-bottom: -13rem;
}

.-scroll-mb-56 {
  scroll-margin-bottom: -14rem;
}

.-scroll-mb-60 {
  scroll-margin-bottom: -15rem;
}

.-scroll-mb-64 {
  scroll-margin-bottom: -16rem;
}

.-scroll-mb-72 {
  scroll-margin-bottom: -18rem;
}

.-scroll-mb-80 {
  scroll-margin-bottom: -20rem;
}

.-scroll-mb-96 {
  scroll-margin-bottom: -24rem;
}

.-scroll-mb-px {
  scroll-margin-bottom: -1px;
}

.scroll-ml-0 {
  scroll-margin-left: 0px;
}

.scroll-ml-1 {
  scroll-margin-left: 0.25rem;
}

.scroll-ml-2 {
  scroll-margin-left: 0.5rem;
}

.scroll-ml-3 {
  scroll-margin-left: 0.75rem;
}

.scroll-ml-4 {
  scroll-margin-left: 1rem;
}

.scroll-ml-5 {
  scroll-margin-left: 1.25rem;
}

.scroll-ml-6 {
  scroll-margin-left: 1.5rem;
}

.scroll-ml-7 {
  scroll-margin-left: 1.75rem;
}

.scroll-ml-8 {
  scroll-margin-left: 2rem;
}

.scroll-ml-9 {
  scroll-margin-left: 2.25rem;
}

.scroll-ml-10 {
  scroll-margin-left: 2.5rem;
}

.scroll-ml-11 {
  scroll-margin-left: 2.75rem;
}

.scroll-ml-12 {
  scroll-margin-left: 3rem;
}

.scroll-ml-14 {
  scroll-margin-left: 3.5rem;
}

.scroll-ml-16 {
  scroll-margin-left: 4rem;
}

.scroll-ml-20 {
  scroll-margin-left: 5rem;
}

.scroll-ml-24 {
  scroll-margin-left: 6rem;
}

.scroll-ml-28 {
  scroll-margin-left: 7rem;
}

.scroll-ml-32 {
  scroll-margin-left: 8rem;
}

.scroll-ml-36 {
  scroll-margin-left: 9rem;
}

.scroll-ml-40 {
  scroll-margin-left: 10rem;
}

.scroll-ml-44 {
  scroll-margin-left: 11rem;
}

.scroll-ml-48 {
  scroll-margin-left: 12rem;
}

.scroll-ml-52 {
  scroll-margin-left: 13rem;
}

.scroll-ml-56 {
  scroll-margin-left: 14rem;
}

.scroll-ml-60 {
  scroll-margin-left: 15rem;
}

.scroll-ml-64 {
  scroll-margin-left: 16rem;
}

.scroll-ml-72 {
  scroll-margin-left: 18rem;
}

.scroll-ml-80 {
  scroll-margin-left: 20rem;
}

.scroll-ml-96 {
  scroll-margin-left: 24rem;
}

.scroll-ml-px {
  scroll-margin-left: 1px;
}

.-scroll-ml-0 {
  scroll-margin-left: -0px;
}

.-scroll-ml-1 {
  scroll-margin-left: -0.25rem;
}

.-scroll-ml-2 {
  scroll-margin-left: -0.5rem;
}

.-scroll-ml-3 {
  scroll-margin-left: -0.75rem;
}

.-scroll-ml-4 {
  scroll-margin-left: -1rem;
}

.-scroll-ml-5 {
  scroll-margin-left: -1.25rem;
}

.-scroll-ml-6 {
  scroll-margin-left: -1.5rem;
}

.-scroll-ml-7 {
  scroll-margin-left: -1.75rem;
}

.-scroll-ml-8 {
  scroll-margin-left: -2rem;
}

.-scroll-ml-9 {
  scroll-margin-left: -2.25rem;
}

.-scroll-ml-10 {
  scroll-margin-left: -2.5rem;
}

.-scroll-ml-11 {
  scroll-margin-left: -2.75rem;
}

.-scroll-ml-12 {
  scroll-margin-left: -3rem;
}

.-scroll-ml-14 {
  scroll-margin-left: -3.5rem;
}

.-scroll-ml-16 {
  scroll-margin-left: -4rem;
}

.-scroll-ml-20 {
  scroll-margin-left: -5rem;
}

.-scroll-ml-24 {
  scroll-margin-left: -6rem;
}

.-scroll-ml-28 {
  scroll-margin-left: -7rem;
}

.-scroll-ml-32 {
  scroll-margin-left: -8rem;
}

.-scroll-ml-36 {
  scroll-margin-left: -9rem;
}

.-scroll-ml-40 {
  scroll-margin-left: -10rem;
}

.-scroll-ml-44 {
  scroll-margin-left: -11rem;
}

.-scroll-ml-48 {
  scroll-margin-left: -12rem;
}

.-scroll-ml-52 {
  scroll-margin-left: -13rem;
}

.-scroll-ml-56 {
  scroll-margin-left: -14rem;
}

.-scroll-ml-60 {
  scroll-margin-left: -15rem;
}

.-scroll-ml-64 {
  scroll-margin-left: -16rem;
}

.-scroll-ml-72 {
  scroll-margin-left: -18rem;
}

.-scroll-ml-80 {
  scroll-margin-left: -20rem;
}

.-scroll-ml-96 {
  scroll-margin-left: -24rem;
}

.-scroll-ml-px {
  scroll-margin-left: -1px;
}

.scroll-mt-0\.5 {
  scroll-margin-top: 0.125rem;
}

.scroll-mt-1\.5 {
  scroll-margin-top: 0.375rem;
}

.scroll-mt-2\.5 {
  scroll-margin-top: 0.625rem;
}

.scroll-mt-3\.5 {
  scroll-margin-top: 0.875rem;
}

.-scroll-mt-0\.5 {
  scroll-margin-top: -0.125rem;
}

.-scroll-mt-1\.5 {
  scroll-margin-top: -0.375rem;
}

.-scroll-mt-2\.5 {
  scroll-margin-top: -0.625rem;
}

.-scroll-mt-3\.5 {
  scroll-margin-top: -0.875rem;
}

.scroll-mr-0\.5 {
  scroll-margin-right: 0.125rem;
}

.scroll-mr-1\.5 {
  scroll-margin-right: 0.375rem;
}

.scroll-mr-2\.5 {
  scroll-margin-right: 0.625rem;
}

.scroll-mr-3\.5 {
  scroll-margin-right: 0.875rem;
}

.-scroll-mr-0\.5 {
  scroll-margin-right: -0.125rem;
}

.-scroll-mr-1\.5 {
  scroll-margin-right: -0.375rem;
}

.-scroll-mr-2\.5 {
  scroll-margin-right: -0.625rem;
}

.-scroll-mr-3\.5 {
  scroll-margin-right: -0.875rem;
}

.scroll-mb-0\.5 {
  scroll-margin-bottom: 0.125rem;
}

.scroll-mb-1\.5 {
  scroll-margin-bottom: 0.375rem;
}

.scroll-mb-2\.5 {
  scroll-margin-bottom: 0.625rem;
}

.scroll-mb-3\.5 {
  scroll-margin-bottom: 0.875rem;
}

.-scroll-mb-0\.5 {
  scroll-margin-bottom: -0.125rem;
}

.-scroll-mb-1\.5 {
  scroll-margin-bottom: -0.375rem;
}

.-scroll-mb-2\.5 {
  scroll-margin-bottom: -0.625rem;
}

.-scroll-mb-3\.5 {
  scroll-margin-bottom: -0.875rem;
}

.scroll-ml-0\.5 {
  scroll-margin-left: 0.125rem;
}

.scroll-ml-1\.5 {
  scroll-margin-left: 0.375rem;
}

.scroll-ml-2\.5 {
  scroll-margin-left: 0.625rem;
}

.scroll-ml-3\.5 {
  scroll-margin-left: 0.875rem;
}

.-scroll-ml-0\.5 {
  scroll-margin-left: -0.125rem;
}

.-scroll-ml-1\.5 {
  scroll-margin-left: -0.375rem;
}

.-scroll-ml-2\.5 {
  scroll-margin-left: -0.625rem;
}

.-scroll-ml-3\.5 {
  scroll-margin-left: -0.875rem;
}

.scroll-p-0 {
  scroll-padding: 0px;
}

.scroll-p-1 {
  scroll-padding: 0.25rem;
}

.scroll-p-2 {
  scroll-padding: 0.5rem;
}

.scroll-p-3 {
  scroll-padding: 0.75rem;
}

.scroll-p-4 {
  scroll-padding: 1rem;
}

.scroll-p-5 {
  scroll-padding: 1.25rem;
}

.scroll-p-6 {
  scroll-padding: 1.5rem;
}

.scroll-p-7 {
  scroll-padding: 1.75rem;
}

.scroll-p-8 {
  scroll-padding: 2rem;
}

.scroll-p-9 {
  scroll-padding: 2.25rem;
}

.scroll-p-10 {
  scroll-padding: 2.5rem;
}

.scroll-p-11 {
  scroll-padding: 2.75rem;
}

.scroll-p-12 {
  scroll-padding: 3rem;
}

.scroll-p-14 {
  scroll-padding: 3.5rem;
}

.scroll-p-16 {
  scroll-padding: 4rem;
}

.scroll-p-20 {
  scroll-padding: 5rem;
}

.scroll-p-24 {
  scroll-padding: 6rem;
}

.scroll-p-28 {
  scroll-padding: 7rem;
}

.scroll-p-32 {
  scroll-padding: 8rem;
}

.scroll-p-36 {
  scroll-padding: 9rem;
}

.scroll-p-40 {
  scroll-padding: 10rem;
}

.scroll-p-44 {
  scroll-padding: 11rem;
}

.scroll-p-48 {
  scroll-padding: 12rem;
}

.scroll-p-52 {
  scroll-padding: 13rem;
}

.scroll-p-56 {
  scroll-padding: 14rem;
}

.scroll-p-60 {
  scroll-padding: 15rem;
}

.scroll-p-64 {
  scroll-padding: 16rem;
}

.scroll-p-72 {
  scroll-padding: 18rem;
}

.scroll-p-80 {
  scroll-padding: 20rem;
}

.scroll-p-96 {
  scroll-padding: 24rem;
}

.scroll-p-px {
  scroll-padding: 1px;
}

.scroll-p-0\.5 {
  scroll-padding: 0.125rem;
}

.scroll-p-1\.5 {
  scroll-padding: 0.375rem;
}

.scroll-p-2\.5 {
  scroll-padding: 0.625rem;
}

.scroll-p-3\.5 {
  scroll-padding: 0.875rem;
}

.scroll-px-0 {
  scroll-padding-left: 0px;
  scroll-padding-right: 0px;
}

.scroll-px-1 {
  scroll-padding-left: 0.25rem;
  scroll-padding-right: 0.25rem;
}

.scroll-px-2 {
  scroll-padding-left: 0.5rem;
  scroll-padding-right: 0.5rem;
}

.scroll-px-3 {
  scroll-padding-left: 0.75rem;
  scroll-padding-right: 0.75rem;
}

.scroll-px-4 {
  scroll-padding-left: 1rem;
  scroll-padding-right: 1rem;
}

.scroll-px-5 {
  scroll-padding-left: 1.25rem;
  scroll-padding-right: 1.25rem;
}

.scroll-px-6 {
  scroll-padding-left: 1.5rem;
  scroll-padding-right: 1.5rem;
}

.scroll-px-7 {
  scroll-padding-left: 1.75rem;
  scroll-padding-right: 1.75rem;
}

.scroll-px-8 {
  scroll-padding-left: 2rem;
  scroll-padding-right: 2rem;
}

.scroll-px-9 {
  scroll-padding-left: 2.25rem;
  scroll-padding-right: 2.25rem;
}

.scroll-px-10 {
  scroll-padding-left: 2.5rem;
  scroll-padding-right: 2.5rem;
}

.scroll-px-11 {
  scroll-padding-left: 2.75rem;
  scroll-padding-right: 2.75rem;
}

.scroll-px-12 {
  scroll-padding-left: 3rem;
  scroll-padding-right: 3rem;
}

.scroll-px-14 {
  scroll-padding-left: 3.5rem;
  scroll-padding-right: 3.5rem;
}

.scroll-px-16 {
  scroll-padding-left: 4rem;
  scroll-padding-right: 4rem;
}

.scroll-px-20 {
  scroll-padding-left: 5rem;
  scroll-padding-right: 5rem;
}

.scroll-px-24 {
  scroll-padding-left: 6rem;
  scroll-padding-right: 6rem;
}

.scroll-px-28 {
  scroll-padding-left: 7rem;
  scroll-padding-right: 7rem;
}

.scroll-px-32 {
  scroll-padding-left: 8rem;
  scroll-padding-right: 8rem;
}

.scroll-px-36 {
  scroll-padding-left: 9rem;
  scroll-padding-right: 9rem;
}

.scroll-px-40 {
  scroll-padding-left: 10rem;
  scroll-padding-right: 10rem;
}

.scroll-px-44 {
  scroll-padding-left: 11rem;
  scroll-padding-right: 11rem;
}

.scroll-px-48 {
  scroll-padding-left: 12rem;
  scroll-padding-right: 12rem;
}

.scroll-px-52 {
  scroll-padding-left: 13rem;
  scroll-padding-right: 13rem;
}

.scroll-px-56 {
  scroll-padding-left: 14rem;
  scroll-padding-right: 14rem;
}

.scroll-px-60 {
  scroll-padding-left: 15rem;
  scroll-padding-right: 15rem;
}

.scroll-px-64 {
  scroll-padding-left: 16rem;
  scroll-padding-right: 16rem;
}

.scroll-px-72 {
  scroll-padding-left: 18rem;
  scroll-padding-right: 18rem;
}

.scroll-px-80 {
  scroll-padding-left: 20rem;
  scroll-padding-right: 20rem;
}

.scroll-px-96 {
  scroll-padding-left: 24rem;
  scroll-padding-right: 24rem;
}

.scroll-px-px {
  scroll-padding-left: 1px;
  scroll-padding-right: 1px;
}

.scroll-py-0 {
  scroll-padding-top: 0px;
  scroll-padding-bottom: 0px;
}

.scroll-py-1 {
  scroll-padding-top: 0.25rem;
  scroll-padding-bottom: 0.25rem;
}

.scroll-py-2 {
  scroll-padding-top: 0.5rem;
  scroll-padding-bottom: 0.5rem;
}

.scroll-py-3 {
  scroll-padding-top: 0.75rem;
  scroll-padding-bottom: 0.75rem;
}

.scroll-py-4 {
  scroll-padding-top: 1rem;
  scroll-padding-bottom: 1rem;
}

.scroll-py-5 {
  scroll-padding-top: 1.25rem;
  scroll-padding-bottom: 1.25rem;
}

.scroll-py-6 {
  scroll-padding-top: 1.5rem;
  scroll-padding-bottom: 1.5rem;
}

.scroll-py-7 {
  scroll-padding-top: 1.75rem;
  scroll-padding-bottom: 1.75rem;
}

.scroll-py-8 {
  scroll-padding-top: 2rem;
  scroll-padding-bottom: 2rem;
}

.scroll-py-9 {
  scroll-padding-top: 2.25rem;
  scroll-padding-bottom: 2.25rem;
}

.scroll-py-10 {
  scroll-padding-top: 2.5rem;
  scroll-padding-bottom: 2.5rem;
}

.scroll-py-11 {
  scroll-padding-top: 2.75rem;
  scroll-padding-bottom: 2.75rem;
}

.scroll-py-12 {
  scroll-padding-top: 3rem;
  scroll-padding-bottom: 3rem;
}

.scroll-py-14 {
  scroll-padding-top: 3.5rem;
  scroll-padding-bottom: 3.5rem;
}

.scroll-py-16 {
  scroll-padding-top: 4rem;
  scroll-padding-bottom: 4rem;
}

.scroll-py-20 {
  scroll-padding-top: 5rem;
  scroll-padding-bottom: 5rem;
}

.scroll-py-24 {
  scroll-padding-top: 6rem;
  scroll-padding-bottom: 6rem;
}

.scroll-py-28 {
  scroll-padding-top: 7rem;
  scroll-padding-bottom: 7rem;
}

.scroll-py-32 {
  scroll-padding-top: 8rem;
  scroll-padding-bottom: 8rem;
}

.scroll-py-36 {
  scroll-padding-top: 9rem;
  scroll-padding-bottom: 9rem;
}

.scroll-py-40 {
  scroll-padding-top: 10rem;
  scroll-padding-bottom: 10rem;
}

.scroll-py-44 {
  scroll-padding-top: 11rem;
  scroll-padding-bottom: 11rem;
}

.scroll-py-48 {
  scroll-padding-top: 12rem;
  scroll-padding-bottom: 12rem;
}

.scroll-py-52 {
  scroll-padding-top: 13rem;
  scroll-padding-bottom: 13rem;
}

.scroll-py-56 {
  scroll-padding-top: 14rem;
  scroll-padding-bottom: 14rem;
}

.scroll-py-60 {
  scroll-padding-top: 15rem;
  scroll-padding-bottom: 15rem;
}

.scroll-py-64 {
  scroll-padding-top: 16rem;
  scroll-padding-bottom: 16rem;
}

.scroll-py-72 {
  scroll-padding-top: 18rem;
  scroll-padding-bottom: 18rem;
}

.scroll-py-80 {
  scroll-padding-top: 20rem;
  scroll-padding-bottom: 20rem;
}

.scroll-py-96 {
  scroll-padding-top: 24rem;
  scroll-padding-bottom: 24rem;
}

.scroll-py-px {
  scroll-padding-top: 1px;
  scroll-padding-bottom: 1px;
}

.scroll-px-0\.5 {
  scroll-padding-left: 0.125rem;
  scroll-padding-right: 0.125rem;
}

.scroll-px-1\.5 {
  scroll-padding-left: 0.375rem;
  scroll-padding-right: 0.375rem;
}

.scroll-px-2\.5 {
  scroll-padding-left: 0.625rem;
  scroll-padding-right: 0.625rem;
}

.scroll-px-3\.5 {
  scroll-padding-left: 0.875rem;
  scroll-padding-right: 0.875rem;
}

.scroll-py-0\.5 {
  scroll-padding-top: 0.125rem;
  scroll-padding-bottom: 0.125rem;
}

.scroll-py-1\.5 {
  scroll-padding-top: 0.375rem;
  scroll-padding-bottom: 0.375rem;
}

.scroll-py-2\.5 {
  scroll-padding-top: 0.625rem;
  scroll-padding-bottom: 0.625rem;
}

.scroll-py-3\.5 {
  scroll-padding-top: 0.875rem;
  scroll-padding-bottom: 0.875rem;
}

.scroll-pt-0 {
  scroll-padding-top: 0px;
}

.scroll-pt-1 {
  scroll-padding-top: 0.25rem;
}

.scroll-pt-2 {
  scroll-padding-top: 0.5rem;
}

.scroll-pt-3 {
  scroll-padding-top: 0.75rem;
}

.scroll-pt-4 {
  scroll-padding-top: 1rem;
}

.scroll-pt-5 {
  scroll-padding-top: 1.25rem;
}

.scroll-pt-6 {
  scroll-padding-top: 1.5rem;
}

.scroll-pt-7 {
  scroll-padding-top: 1.75rem;
}

.scroll-pt-8 {
  scroll-padding-top: 2rem;
}

.scroll-pt-9 {
  scroll-padding-top: 2.25rem;
}

.scroll-pt-10 {
  scroll-padding-top: 2.5rem;
}

.scroll-pt-11 {
  scroll-padding-top: 2.75rem;
}

.scroll-pt-12 {
  scroll-padding-top: 3rem;
}

.scroll-pt-14 {
  scroll-padding-top: 3.5rem;
}

.scroll-pt-16 {
  scroll-padding-top: 4rem;
}

.scroll-pt-20 {
  scroll-padding-top: 5rem;
}

.scroll-pt-24 {
  scroll-padding-top: 6rem;
}

.scroll-pt-28 {
  scroll-padding-top: 7rem;
}

.scroll-pt-32 {
  scroll-padding-top: 8rem;
}

.scroll-pt-36 {
  scroll-padding-top: 9rem;
}

.scroll-pt-40 {
  scroll-padding-top: 10rem;
}

.scroll-pt-44 {
  scroll-padding-top: 11rem;
}

.scroll-pt-48 {
  scroll-padding-top: 12rem;
}

.scroll-pt-52 {
  scroll-padding-top: 13rem;
}

.scroll-pt-56 {
  scroll-padding-top: 14rem;
}

.scroll-pt-60 {
  scroll-padding-top: 15rem;
}

.scroll-pt-64 {
  scroll-padding-top: 16rem;
}

.scroll-pt-72 {
  scroll-padding-top: 18rem;
}

.scroll-pt-80 {
  scroll-padding-top: 20rem;
}

.scroll-pt-96 {
  scroll-padding-top: 24rem;
}

.scroll-pt-px {
  scroll-padding-top: 1px;
}

.scroll-pr-0 {
  scroll-padding-right: 0px;
}

.scroll-pr-1 {
  scroll-padding-right: 0.25rem;
}

.scroll-pr-2 {
  scroll-padding-right: 0.5rem;
}

.scroll-pr-3 {
  scroll-padding-right: 0.75rem;
}

.scroll-pr-4 {
  scroll-padding-right: 1rem;
}

.scroll-pr-5 {
  scroll-padding-right: 1.25rem;
}

.scroll-pr-6 {
  scroll-padding-right: 1.5rem;
}

.scroll-pr-7 {
  scroll-padding-right: 1.75rem;
}

.scroll-pr-8 {
  scroll-padding-right: 2rem;
}

.scroll-pr-9 {
  scroll-padding-right: 2.25rem;
}

.scroll-pr-10 {
  scroll-padding-right: 2.5rem;
}

.scroll-pr-11 {
  scroll-padding-right: 2.75rem;
}

.scroll-pr-12 {
  scroll-padding-right: 3rem;
}

.scroll-pr-14 {
  scroll-padding-right: 3.5rem;
}

.scroll-pr-16 {
  scroll-padding-right: 4rem;
}

.scroll-pr-20 {
  scroll-padding-right: 5rem;
}

.scroll-pr-24 {
  scroll-padding-right: 6rem;
}

.scroll-pr-28 {
  scroll-padding-right: 7rem;
}

.scroll-pr-32 {
  scroll-padding-right: 8rem;
}

.scroll-pr-36 {
  scroll-padding-right: 9rem;
}

.scroll-pr-40 {
  scroll-padding-right: 10rem;
}

.scroll-pr-44 {
  scroll-padding-right: 11rem;
}

.scroll-pr-48 {
  scroll-padding-right: 12rem;
}

.scroll-pr-52 {
  scroll-padding-right: 13rem;
}

.scroll-pr-56 {
  scroll-padding-right: 14rem;
}

.scroll-pr-60 {
  scroll-padding-right: 15rem;
}

.scroll-pr-64 {
  scroll-padding-right: 16rem;
}

.scroll-pr-72 {
  scroll-padding-right: 18rem;
}

.scroll-pr-80 {
  scroll-padding-right: 20rem;
}

.scroll-pr-96 {
  scroll-padding-right: 24rem;
}

.scroll-pr-px {
  scroll-padding-right: 1px;
}

.scroll-pb-0 {
  scroll-padding-bottom: 0px;
}

.scroll-pb-1 {
  scroll-padding-bottom: 0.25rem;
}

.scroll-pb-2 {
  scroll-padding-bottom: 0.5rem;
}

.scroll-pb-3 {
  scroll-padding-bottom: 0.75rem;
}

.scroll-pb-4 {
  scroll-padding-bottom: 1rem;
}

.scroll-pb-5 {
  scroll-padding-bottom: 1.25rem;
}

.scroll-pb-6 {
  scroll-padding-bottom: 1.5rem;
}

.scroll-pb-7 {
  scroll-padding-bottom: 1.75rem;
}

.scroll-pb-8 {
  scroll-padding-bottom: 2rem;
}

.scroll-pb-9 {
  scroll-padding-bottom: 2.25rem;
}

.scroll-pb-10 {
  scroll-padding-bottom: 2.5rem;
}

.scroll-pb-11 {
  scroll-padding-bottom: 2.75rem;
}

.scroll-pb-12 {
  scroll-padding-bottom: 3rem;
}

.scroll-pb-14 {
  scroll-padding-bottom: 3.5rem;
}

.scroll-pb-16 {
  scroll-padding-bottom: 4rem;
}

.scroll-pb-20 {
  scroll-padding-bottom: 5rem;
}

.scroll-pb-24 {
  scroll-padding-bottom: 6rem;
}

.scroll-pb-28 {
  scroll-padding-bottom: 7rem;
}

.scroll-pb-32 {
  scroll-padding-bottom: 8rem;
}

.scroll-pb-36 {
  scroll-padding-bottom: 9rem;
}

.scroll-pb-40 {
  scroll-padding-bottom: 10rem;
}

.scroll-pb-44 {
  scroll-padding-bottom: 11rem;
}

.scroll-pb-48 {
  scroll-padding-bottom: 12rem;
}

.scroll-pb-52 {
  scroll-padding-bottom: 13rem;
}

.scroll-pb-56 {
  scroll-padding-bottom: 14rem;
}

.scroll-pb-60 {
  scroll-padding-bottom: 15rem;
}

.scroll-pb-64 {
  scroll-padding-bottom: 16rem;
}

.scroll-pb-72 {
  scroll-padding-bottom: 18rem;
}

.scroll-pb-80 {
  scroll-padding-bottom: 20rem;
}

.scroll-pb-96 {
  scroll-padding-bottom: 24rem;
}

.scroll-pb-px {
  scroll-padding-bottom: 1px;
}

.scroll-pl-0 {
  scroll-padding-left: 0px;
}

.scroll-pl-1 {
  scroll-padding-left: 0.25rem;
}

.scroll-pl-2 {
  scroll-padding-left: 0.5rem;
}

.scroll-pl-3 {
  scroll-padding-left: 0.75rem;
}

.scroll-pl-4 {
  scroll-padding-left: 1rem;
}

.scroll-pl-5 {
  scroll-padding-left: 1.25rem;
}

.scroll-pl-6 {
  scroll-padding-left: 1.5rem;
}

.scroll-pl-7 {
  scroll-padding-left: 1.75rem;
}

.scroll-pl-8 {
  scroll-padding-left: 2rem;
}

.scroll-pl-9 {
  scroll-padding-left: 2.25rem;
}

.scroll-pl-10 {
  scroll-padding-left: 2.5rem;
}

.scroll-pl-11 {
  scroll-padding-left: 2.75rem;
}

.scroll-pl-12 {
  scroll-padding-left: 3rem;
}

.scroll-pl-14 {
  scroll-padding-left: 3.5rem;
}

.scroll-pl-16 {
  scroll-padding-left: 4rem;
}

.scroll-pl-20 {
  scroll-padding-left: 5rem;
}

.scroll-pl-24 {
  scroll-padding-left: 6rem;
}

.scroll-pl-28 {
  scroll-padding-left: 7rem;
}

.scroll-pl-32 {
  scroll-padding-left: 8rem;
}

.scroll-pl-36 {
  scroll-padding-left: 9rem;
}

.scroll-pl-40 {
  scroll-padding-left: 10rem;
}

.scroll-pl-44 {
  scroll-padding-left: 11rem;
}

.scroll-pl-48 {
  scroll-padding-left: 12rem;
}

.scroll-pl-52 {
  scroll-padding-left: 13rem;
}

.scroll-pl-56 {
  scroll-padding-left: 14rem;
}

.scroll-pl-60 {
  scroll-padding-left: 15rem;
}

.scroll-pl-64 {
  scroll-padding-left: 16rem;
}

.scroll-pl-72 {
  scroll-padding-left: 18rem;
}

.scroll-pl-80 {
  scroll-padding-left: 20rem;
}

.scroll-pl-96 {
  scroll-padding-left: 24rem;
}

.scroll-pl-px {
  scroll-padding-left: 1px;
}

.scroll-pt-0\.5 {
  scroll-padding-top: 0.125rem;
}

.scroll-pt-1\.5 {
  scroll-padding-top: 0.375rem;
}

.scroll-pt-2\.5 {
  scroll-padding-top: 0.625rem;
}

.scroll-pt-3\.5 {
  scroll-padding-top: 0.875rem;
}

.scroll-pr-0\.5 {
  scroll-padding-right: 0.125rem;
}

.scroll-pr-1\.5 {
  scroll-padding-right: 0.375rem;
}

.scroll-pr-2\.5 {
  scroll-padding-right: 0.625rem;
}

.scroll-pr-3\.5 {
  scroll-padding-right: 0.875rem;
}

.scroll-pb-0\.5 {
  scroll-padding-bottom: 0.125rem;
}

.scroll-pb-1\.5 {
  scroll-padding-bottom: 0.375rem;
}

.scroll-pb-2\.5 {
  scroll-padding-bottom: 0.625rem;
}

.scroll-pb-3\.5 {
  scroll-padding-bottom: 0.875rem;
}

.scroll-pl-0\.5 {
  scroll-padding-left: 0.125rem;
}

.scroll-pl-1\.5 {
  scroll-padding-left: 0.375rem;
}

.scroll-pl-2\.5 {
  scroll-padding-left: 0.625rem;
}

.scroll-pl-3\.5 {
  scroll-padding-left: 0.875rem;
}

.list-inside {
  list-style-position: inside;
}

.list-outside {
  list-style-position: outside;
}

.list-decimal {
  list-style-type: decimal;
}

.list-disc {
  list-style-type: disc;
}

.list-none {
  list-style-type: none;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.columns-1 {
  -moz-columns: 1;
       columns: 1;
}

.columns-2 {
  -moz-columns: 2;
       columns: 2;
}

.columns-3 {
  -moz-columns: 3;
       columns: 3;
}

.columns-4 {
  -moz-columns: 4;
       columns: 4;
}

.columns-5 {
  -moz-columns: 5;
       columns: 5;
}

.columns-6 {
  -moz-columns: 6;
       columns: 6;
}

.columns-7 {
  -moz-columns: 7;
       columns: 7;
}

.columns-8 {
  -moz-columns: 8;
       columns: 8;
}

.columns-9 {
  -moz-columns: 9;
       columns: 9;
}

.columns-10 {
  -moz-columns: 10;
       columns: 10;
}

.columns-11 {
  -moz-columns: 11;
       columns: 11;
}

.columns-12 {
  -moz-columns: 12;
       columns: 12;
}

.columns-auto {
  -moz-columns: auto;
       columns: auto;
}

.columns-3xs {
  -moz-columns: 16rem;
       columns: 16rem;
}

.columns-2xs {
  -moz-columns: 18rem;
       columns: 18rem;
}

.columns-xs {
  -moz-columns: 20rem;
       columns: 20rem;
}

.columns-sm {
  -moz-columns: 24rem;
       columns: 24rem;
}

.columns-md {
  -moz-columns: 28rem;
       columns: 28rem;
}

.columns-lg {
  -moz-columns: 32rem;
       columns: 32rem;
}

.columns-xl {
  -moz-columns: 36rem;
       columns: 36rem;
}

.columns-2xl {
  -moz-columns: 42rem;
       columns: 42rem;
}

.columns-3xl {
  -moz-columns: 48rem;
       columns: 48rem;
}

.columns-4xl {
  -moz-columns: 56rem;
       columns: 56rem;
}

.columns-5xl {
  -moz-columns: 64rem;
       columns: 64rem;
}

.columns-6xl {
  -moz-columns: 72rem;
       columns: 72rem;
}

.columns-7xl {
  -moz-columns: 80rem;
       columns: 80rem;
}

.break-before-auto {
  -moz-column-break-before: auto;
       break-before: auto;
}

.break-before-avoid {
  -moz-column-break-before: avoid;
       break-before: avoid;
}

.break-before-all {
  -moz-column-break-before: all;
       break-before: all;
}

.break-before-avoid-page {
  -moz-column-break-before: avoid;
       break-before: avoid-page;
}

.break-before-page {
  -moz-column-break-before: page;
       break-before: page;
}

.break-before-left {
  -moz-column-break-before: left;
       break-before: left;
}

.break-before-right {
  -moz-column-break-before: right;
       break-before: right;
}

.break-before-column {
  -moz-column-break-before: column;
       break-before: column;
}

.break-inside-auto {
  -moz-column-break-inside: auto;
       break-inside: auto;
}

.break-inside-avoid {
  -moz-column-break-inside: avoid;
       break-inside: avoid;
}

.break-inside-avoid-page {
  break-inside: avoid-page;
}

.break-inside-avoid-column {
  -moz-column-break-inside: avoid;
       break-inside: avoid-column;
}

.break-after-auto {
  -moz-column-break-after: auto;
       break-after: auto;
}

.break-after-avoid {
  -moz-column-break-after: avoid;
       break-after: avoid;
}

.break-after-all {
  -moz-column-break-after: all;
       break-after: all;
}

.break-after-avoid-page {
  -moz-column-break-after: avoid;
       break-after: avoid-page;
}

.break-after-page {
  -moz-column-break-after: page;
       break-after: page;
}

.break-after-left {
  -moz-column-break-after: left;
       break-after: left;
}

.break-after-right {
  -moz-column-break-after: right;
       break-after: right;
}

.break-after-column {
  -moz-column-break-after: column;
       break-after: column;
}

.auto-cols-auto {
  grid-auto-columns: auto;
}

.auto-cols-min {
  grid-auto-columns: -webkit-min-content;
  grid-auto-columns: min-content;
}

.auto-cols-max {
  grid-auto-columns: -webkit-max-content;
  grid-auto-columns: max-content;
}

.auto-cols-fr {
  grid-auto-columns: minmax(0, 1fr);
}

.grid-flow-row {
  grid-auto-flow: row;
}

.grid-flow-col {
  grid-auto-flow: column;
}

.grid-flow-row-dense {
  grid-auto-flow: row dense;
}

.grid-flow-col-dense {
  grid-auto-flow: column dense;
}

.auto-rows-auto {
  grid-auto-rows: auto;
}

.auto-rows-min {
  grid-auto-rows: -webkit-min-content;
  grid-auto-rows: min-content;
}

.auto-rows-max {
  grid-auto-rows: -webkit-max-content;
  grid-auto-rows: max-content;
}

.auto-rows-fr {
  grid-auto-rows: minmax(0, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}

.grid-cols-9 {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}

.grid-cols-11 {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.grid-cols-none {
  grid-template-columns: none;
}

.grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

.grid-rows-4 {
  grid-template-rows: repeat(4, minmax(0, 1fr));
}

.grid-rows-5 {
  grid-template-rows: repeat(5, minmax(0, 1fr));
}

.grid-rows-6 {
  grid-template-rows: repeat(6, minmax(0, 1fr));
}

.grid-rows-none {
  grid-template-rows: none;
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.place-content-center {
  place-content: center;
}

.place-content-start {
  place-content: start;
}

.place-content-end {
  place-content: end;
}

.place-content-between {
  place-content: space-between;
}

.place-content-around {
  place-content: space-around;
}

.place-content-evenly {
  place-content: space-evenly;
}

.place-content-stretch {
  place-content: stretch;
}

.place-items-start {
  place-items: start;
}

.place-items-end {
  place-items: end;
}

.place-items-center {
  place-items: center;
}

.place-items-stretch {
  place-items: stretch;
}

.content-center {
  align-content: center;
}

.content-start {
  align-content: flex-start;
}

.content-end {
  align-content: flex-end;
}

.content-between {
  align-content: space-between;
}

.content-around {
  align-content: space-around;
}

.content-evenly {
  align-content: space-evenly;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-items-start {
  justify-items: start;
}

.justify-items-end {
  justify-items: end;
}

.justify-items-center {
  justify-items: center;
}

.justify-items-stretch {
  justify-items: stretch;
}

.gap-4 {
  gap: 1rem;
}

.gap-20 {
  gap: 5rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-0 {
  gap: 0px;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-7 {
  gap: 1.75rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-9 {
  gap: 2.25rem;
}

.gap-11 {
  gap: 2.75rem;
}

.gap-14 {
  gap: 3.5rem;
}

.gap-16 {
  gap: 4rem;
}

.gap-24 {
  gap: 6rem;
}

.gap-28 {
  gap: 7rem;
}

.gap-32 {
  gap: 8rem;
}

.gap-36 {
  gap: 9rem;
}

.gap-40 {
  gap: 10rem;
}

.gap-44 {
  gap: 11rem;
}

.gap-48 {
  gap: 12rem;
}

.gap-52 {
  gap: 13rem;
}

.gap-56 {
  gap: 14rem;
}

.gap-60 {
  gap: 15rem;
}

.gap-64 {
  gap: 16rem;
}

.gap-72 {
  gap: 18rem;
}

.gap-80 {
  gap: 20rem;
}

.gap-96 {
  gap: 24rem;
}

.gap-px {
  gap: 1px;
}

.gap-0\.5 {
  gap: 0.125rem;
}

.gap-1\.5 {
  gap: 0.375rem;
}

.gap-2\.5 {
  gap: 0.625rem;
}

.gap-3\.5 {
  gap: 0.875rem;
}

.gap-y-20 {
  row-gap: 5rem;
}

.gap-x-0 {
  -moz-column-gap: 0px;
       column-gap: 0px;
}

.gap-x-1 {
  -moz-column-gap: 0.25rem;
       column-gap: 0.25rem;
}

.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}

.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-x-5 {
  -moz-column-gap: 1.25rem;
       column-gap: 1.25rem;
}

.gap-x-6 {
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}

.gap-x-7 {
  -moz-column-gap: 1.75rem;
       column-gap: 1.75rem;
}

.gap-x-8 {
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}

.gap-x-9 {
  -moz-column-gap: 2.25rem;
       column-gap: 2.25rem;
}

.gap-x-10 {
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
}

.gap-x-11 {
  -moz-column-gap: 2.75rem;
       column-gap: 2.75rem;
}

.gap-x-12 {
  -moz-column-gap: 3rem;
       column-gap: 3rem;
}

.gap-x-14 {
  -moz-column-gap: 3.5rem;
       column-gap: 3.5rem;
}

.gap-x-16 {
  -moz-column-gap: 4rem;
       column-gap: 4rem;
}

.gap-x-20 {
  -moz-column-gap: 5rem;
       column-gap: 5rem;
}

.gap-x-24 {
  -moz-column-gap: 6rem;
       column-gap: 6rem;
}

.gap-x-28 {
  -moz-column-gap: 7rem;
       column-gap: 7rem;
}

.gap-x-32 {
  -moz-column-gap: 8rem;
       column-gap: 8rem;
}

.gap-x-36 {
  -moz-column-gap: 9rem;
       column-gap: 9rem;
}

.gap-x-40 {
  -moz-column-gap: 10rem;
       column-gap: 10rem;
}

.gap-x-44 {
  -moz-column-gap: 11rem;
       column-gap: 11rem;
}

.gap-x-48 {
  -moz-column-gap: 12rem;
       column-gap: 12rem;
}

.gap-x-52 {
  -moz-column-gap: 13rem;
       column-gap: 13rem;
}

.gap-x-56 {
  -moz-column-gap: 14rem;
       column-gap: 14rem;
}

.gap-x-60 {
  -moz-column-gap: 15rem;
       column-gap: 15rem;
}

.gap-x-64 {
  -moz-column-gap: 16rem;
       column-gap: 16rem;
}

.gap-x-72 {
  -moz-column-gap: 18rem;
       column-gap: 18rem;
}

.gap-x-80 {
  -moz-column-gap: 20rem;
       column-gap: 20rem;
}

.gap-x-96 {
  -moz-column-gap: 24rem;
       column-gap: 24rem;
}

.gap-x-px {
  -moz-column-gap: 1px;
       column-gap: 1px;
}

.gap-y-0 {
  row-gap: 0px;
}

.gap-y-1 {
  row-gap: 0.25rem;
}

.gap-y-2 {
  row-gap: 0.5rem;
}

.gap-y-3 {
  row-gap: 0.75rem;
}

.gap-y-4 {
  row-gap: 1rem;
}

.gap-y-5 {
  row-gap: 1.25rem;
}

.gap-y-6 {
  row-gap: 1.5rem;
}

.gap-y-7 {
  row-gap: 1.75rem;
}

.gap-y-8 {
  row-gap: 2rem;
}

.gap-y-9 {
  row-gap: 2.25rem;
}

.gap-y-10 {
  row-gap: 2.5rem;
}

.gap-y-11 {
  row-gap: 2.75rem;
}

.gap-y-12 {
  row-gap: 3rem;
}

.gap-y-14 {
  row-gap: 3.5rem;
}

.gap-y-16 {
  row-gap: 4rem;
}

.gap-y-24 {
  row-gap: 6rem;
}

.gap-y-28 {
  row-gap: 7rem;
}

.gap-y-32 {
  row-gap: 8rem;
}

.gap-y-36 {
  row-gap: 9rem;
}

.gap-y-40 {
  row-gap: 10rem;
}

.gap-y-44 {
  row-gap: 11rem;
}

.gap-y-48 {
  row-gap: 12rem;
}

.gap-y-52 {
  row-gap: 13rem;
}

.gap-y-56 {
  row-gap: 14rem;
}

.gap-y-60 {
  row-gap: 15rem;
}

.gap-y-64 {
  row-gap: 16rem;
}

.gap-y-72 {
  row-gap: 18rem;
}

.gap-y-80 {
  row-gap: 20rem;
}

.gap-y-96 {
  row-gap: 24rem;
}

.gap-y-px {
  row-gap: 1px;
}

.gap-x-0\.5 {
  -moz-column-gap: 0.125rem;
       column-gap: 0.125rem;
}

.gap-x-1\.5 {
  -moz-column-gap: 0.375rem;
       column-gap: 0.375rem;
}

.gap-x-2\.5 {
  -moz-column-gap: 0.625rem;
       column-gap: 0.625rem;
}

.gap-x-3\.5 {
  -moz-column-gap: 0.875rem;
       column-gap: 0.875rem;
}

.gap-y-0\.5 {
  row-gap: 0.125rem;
}

.gap-y-1\.5 {
  row-gap: 0.375rem;
}

.gap-y-2\.5 {
  row-gap: 0.625rem;
}

.gap-y-3\.5 {
  row-gap: 0.875rem;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0px * var(--tw-space-x-reverse));
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.75rem * var(--tw-space-x-reverse));
  margin-left: calc(1.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.25rem * var(--tw-space-x-reverse));
  margin-left: calc(2.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.5rem * var(--tw-space-x-reverse));
  margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-11 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.75rem * var(--tw-space-x-reverse));
  margin-left: calc(2.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(3rem * var(--tw-space-x-reverse));
  margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-14 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(3.5rem * var(--tw-space-x-reverse));
  margin-left: calc(3.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-16 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(4rem * var(--tw-space-x-reverse));
  margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-20 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(5rem * var(--tw-space-x-reverse));
  margin-left: calc(5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-24 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(6rem * var(--tw-space-x-reverse));
  margin-left: calc(6rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-28 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(7rem * var(--tw-space-x-reverse));
  margin-left: calc(7rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-32 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(8rem * var(--tw-space-x-reverse));
  margin-left: calc(8rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-36 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(9rem * var(--tw-space-x-reverse));
  margin-left: calc(9rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-40 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(10rem * var(--tw-space-x-reverse));
  margin-left: calc(10rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-44 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(11rem * var(--tw-space-x-reverse));
  margin-left: calc(11rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-48 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(12rem * var(--tw-space-x-reverse));
  margin-left: calc(12rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-52 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(13rem * var(--tw-space-x-reverse));
  margin-left: calc(13rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-56 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(14rem * var(--tw-space-x-reverse));
  margin-left: calc(14rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-60 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(15rem * var(--tw-space-x-reverse));
  margin-left: calc(15rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-64 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(16rem * var(--tw-space-x-reverse));
  margin-left: calc(16rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-72 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(18rem * var(--tw-space-x-reverse));
  margin-left: calc(18rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-80 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(20rem * var(--tw-space-x-reverse));
  margin-left: calc(20rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-96 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(24rem * var(--tw-space-x-reverse));
  margin-left: calc(24rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1px * var(--tw-space-x-reverse));
  margin-left: calc(1px * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0px * var(--tw-space-x-reverse));
  margin-left: calc(-0px * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1rem * var(--tw-space-x-reverse));
  margin-left: calc(-1rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(-1.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(-1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1.75rem * var(--tw-space-x-reverse));
  margin-left: calc(-1.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-2rem * var(--tw-space-x-reverse));
  margin-left: calc(-2rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-2.25rem * var(--tw-space-x-reverse));
  margin-left: calc(-2.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-2.5rem * var(--tw-space-x-reverse));
  margin-left: calc(-2.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-11 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-2.75rem * var(--tw-space-x-reverse));
  margin-left: calc(-2.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-3rem * var(--tw-space-x-reverse));
  margin-left: calc(-3rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-14 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-3.5rem * var(--tw-space-x-reverse));
  margin-left: calc(-3.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-16 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-4rem * var(--tw-space-x-reverse));
  margin-left: calc(-4rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-20 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-5rem * var(--tw-space-x-reverse));
  margin-left: calc(-5rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-24 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-6rem * var(--tw-space-x-reverse));
  margin-left: calc(-6rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-28 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-7rem * var(--tw-space-x-reverse));
  margin-left: calc(-7rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-32 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-8rem * var(--tw-space-x-reverse));
  margin-left: calc(-8rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-36 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-9rem * var(--tw-space-x-reverse));
  margin-left: calc(-9rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-40 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-10rem * var(--tw-space-x-reverse));
  margin-left: calc(-10rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-44 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-11rem * var(--tw-space-x-reverse));
  margin-left: calc(-11rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-48 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-12rem * var(--tw-space-x-reverse));
  margin-left: calc(-12rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-52 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-13rem * var(--tw-space-x-reverse));
  margin-left: calc(-13rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-56 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-14rem * var(--tw-space-x-reverse));
  margin-left: calc(-14rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-60 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-15rem * var(--tw-space-x-reverse));
  margin-left: calc(-15rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-64 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-16rem * var(--tw-space-x-reverse));
  margin-left: calc(-16rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-72 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-18rem * var(--tw-space-x-reverse));
  margin-left: calc(-18rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-80 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-20rem * var(--tw-space-x-reverse));
  margin-left: calc(-20rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-96 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-24rem * var(--tw-space-x-reverse));
  margin-left: calc(-24rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));
}

.space-y-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.25rem * var(--tw-space-y-reverse));
}

.space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
}

.space-y-11 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.75rem * var(--tw-space-y-reverse));
}

.space-y-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3rem * var(--tw-space-y-reverse));
}

.space-y-14 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3.5rem * var(--tw-space-y-reverse));
}

.space-y-16 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4rem * var(--tw-space-y-reverse));
}

.space-y-20 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(5rem * var(--tw-space-y-reverse));
}

.space-y-24 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6rem * var(--tw-space-y-reverse));
}

.space-y-28 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(7rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(7rem * var(--tw-space-y-reverse));
}

.space-y-32 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(8rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(8rem * var(--tw-space-y-reverse));
}

.space-y-36 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(9rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(9rem * var(--tw-space-y-reverse));
}

.space-y-40 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(10rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(10rem * var(--tw-space-y-reverse));
}

.space-y-44 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(11rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(11rem * var(--tw-space-y-reverse));
}

.space-y-48 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(12rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(12rem * var(--tw-space-y-reverse));
}

.space-y-52 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(13rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(13rem * var(--tw-space-y-reverse));
}

.space-y-56 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(14rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(14rem * var(--tw-space-y-reverse));
}

.space-y-60 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(15rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(15rem * var(--tw-space-y-reverse));
}

.space-y-64 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(16rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16rem * var(--tw-space-y-reverse));
}

.space-y-72 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(18rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(18rem * var(--tw-space-y-reverse));
}

.space-y-80 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(20rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(20rem * var(--tw-space-y-reverse));
}

.space-y-96 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(24rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24rem * var(--tw-space-y-reverse));
}

.space-y-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1px * var(--tw-space-y-reverse));
}

.-space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0px * var(--tw-space-y-reverse));
}

.-space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.25rem * var(--tw-space-y-reverse));
}

.-space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.5rem * var(--tw-space-y-reverse));
}

.-space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.75rem * var(--tw-space-y-reverse));
}

.-space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-1rem * var(--tw-space-y-reverse));
}

.-space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-1.25rem * var(--tw-space-y-reverse));
}

.-space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-1.5rem * var(--tw-space-y-reverse));
}

.-space-y-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-1.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-1.75rem * var(--tw-space-y-reverse));
}

.-space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-2rem * var(--tw-space-y-reverse));
}

.-space-y-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-2.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-2.25rem * var(--tw-space-y-reverse));
}

.-space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-2.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-2.5rem * var(--tw-space-y-reverse));
}

.-space-y-11 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-2.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-2.75rem * var(--tw-space-y-reverse));
}

.-space-y-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-3rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-3rem * var(--tw-space-y-reverse));
}

.-space-y-14 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-3.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-3.5rem * var(--tw-space-y-reverse));
}

.-space-y-16 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-4rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-4rem * var(--tw-space-y-reverse));
}

.-space-y-20 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-5rem * var(--tw-space-y-reverse));
}

.-space-y-24 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-6rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-6rem * var(--tw-space-y-reverse));
}

.-space-y-28 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-7rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-7rem * var(--tw-space-y-reverse));
}

.-space-y-32 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-8rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-8rem * var(--tw-space-y-reverse));
}

.-space-y-36 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-9rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-9rem * var(--tw-space-y-reverse));
}

.-space-y-40 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-10rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-10rem * var(--tw-space-y-reverse));
}

.-space-y-44 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-11rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-11rem * var(--tw-space-y-reverse));
}

.-space-y-48 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-12rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-12rem * var(--tw-space-y-reverse));
}

.-space-y-52 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-13rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-13rem * var(--tw-space-y-reverse));
}

.-space-y-56 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-14rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-14rem * var(--tw-space-y-reverse));
}

.-space-y-60 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-15rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-15rem * var(--tw-space-y-reverse));
}

.-space-y-64 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-16rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-16rem * var(--tw-space-y-reverse));
}

.-space-y-72 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-18rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-18rem * var(--tw-space-y-reverse));
}

.-space-y-80 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-20rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-20rem * var(--tw-space-y-reverse));
}

.-space-y-96 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-24rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-24rem * var(--tw-space-y-reverse));
}

.-space-y-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-1px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-1px * var(--tw-space-y-reverse));
}

.space-x-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.125rem * var(--tw-space-x-reverse));
  margin-left: calc(0.125rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-1\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.625rem * var(--tw-space-x-reverse));
  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-3\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.875rem * var(--tw-space-x-reverse));
  margin-left: calc(0.875rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.125rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.125rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-1\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.375rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-2\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.625rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.625rem * calc(1 - var(--tw-space-x-reverse)));
}

.-space-x-3\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-0.875rem * var(--tw-space-x-reverse));
  margin-left: calc(-0.875rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.125rem * var(--tw-space-y-reverse));
}

.space-y-1\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}

.space-y-2\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}

.space-y-3\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.875rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.875rem * var(--tw-space-y-reverse));
}

.-space-y-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.125rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.125rem * var(--tw-space-y-reverse));
}

.-space-y-1\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.375rem * var(--tw-space-y-reverse));
}

.-space-y-2\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.625rem * var(--tw-space-y-reverse));
}

.-space-y-3\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(-0.875rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(-0.875rem * var(--tw-space-y-reverse));
}

.space-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 1;
}

.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

.divide-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(0px * var(--tw-divide-x-reverse));
  border-left-width: calc(0px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(2px * var(--tw-divide-x-reverse));
  border-left-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(4px * var(--tw-divide-x-reverse));
  border-left-width: calc(4px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(8px * var(--tw-divide-x-reverse));
  border-left-width: calc(8px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
}

.divide-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));
}

.divide-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(4px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(4px * var(--tw-divide-y-reverse));
}

.divide-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(8px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(8px * var(--tw-divide-y-reverse));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 1;
}

.divide-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 1;
}

.divide-solid > :not([hidden]) ~ :not([hidden]) {
  border-style: solid;
}

.divide-dashed > :not([hidden]) ~ :not([hidden]) {
  border-style: dashed;
}

.divide-dotted > :not([hidden]) ~ :not([hidden]) {
  border-style: dotted;
}

.divide-double > :not([hidden]) ~ :not([hidden]) {
  border-style: double;
}

.divide-none > :not([hidden]) ~ :not([hidden]) {
  border-style: none;
}

.divide-inherit > :not([hidden]) ~ :not([hidden]) {
  border-color: inherit;
}

.divide-current > :not([hidden]) ~ :not([hidden]) {
  border-color: currentColor;
}

.divide-transparent > :not([hidden]) ~ :not([hidden]) {
  border-color: transparent;
}

.divide-black > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-divide-opacity));
}

.divide-white > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-divide-opacity));
}

.divide-slate-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 250 252 / var(--tw-divide-opacity));
}

.divide-slate-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-divide-opacity));
}

.divide-slate-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-divide-opacity));
}

.divide-slate-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-divide-opacity));
}

.divide-slate-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(148 163 184 / var(--tw-divide-opacity));
}

.divide-slate-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(100 116 139 / var(--tw-divide-opacity));
}

.divide-slate-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-divide-opacity));
}

.divide-slate-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-divide-opacity));
}

.divide-slate-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-divide-opacity));
}

.divide-slate-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(15 23 42 / var(--tw-divide-opacity));
}

.divide-gray-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(249 250 251 / var(--tw-divide-opacity));
}

.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}

.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}

.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}

.divide-gray-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-divide-opacity));
}

.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-divide-opacity));
}

.divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}

.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}

.divide-gray-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-divide-opacity));
}

.divide-gray-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-divide-opacity));
}

.divide-zinc-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-divide-opacity));
}

.divide-zinc-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(244 244 245 / var(--tw-divide-opacity));
}

.divide-zinc-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(228 228 231 / var(--tw-divide-opacity));
}

.divide-zinc-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(212 212 216 / var(--tw-divide-opacity));
}

.divide-zinc-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(161 161 170 / var(--tw-divide-opacity));
}

.divide-zinc-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(113 113 122 / var(--tw-divide-opacity));
}

.divide-zinc-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(82 82 91 / var(--tw-divide-opacity));
}

.divide-zinc-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(63 63 70 / var(--tw-divide-opacity));
}

.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity));
}

.divide-zinc-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-divide-opacity));
}

.divide-neutral-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-divide-opacity));
}

.divide-neutral-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-divide-opacity));
}

.divide-neutral-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-divide-opacity));
}

.divide-neutral-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-divide-opacity));
}

.divide-neutral-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(163 163 163 / var(--tw-divide-opacity));
}

.divide-neutral-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-divide-opacity));
}

.divide-neutral-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-divide-opacity));
}

.divide-neutral-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-divide-opacity));
}

.divide-neutral-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-divide-opacity));
}

.divide-neutral-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(23 23 23 / var(--tw-divide-opacity));
}

.divide-stone-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 250 249 / var(--tw-divide-opacity));
}

.divide-stone-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(245 245 244 / var(--tw-divide-opacity));
}

.divide-stone-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(231 229 228 / var(--tw-divide-opacity));
}

.divide-stone-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(214 211 209 / var(--tw-divide-opacity));
}

.divide-stone-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(168 162 158 / var(--tw-divide-opacity));
}

.divide-stone-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(120 113 108 / var(--tw-divide-opacity));
}

.divide-stone-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(87 83 78 / var(--tw-divide-opacity));
}

.divide-stone-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(68 64 60 / var(--tw-divide-opacity));
}

.divide-stone-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(41 37 36 / var(--tw-divide-opacity));
}

.divide-stone-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(28 25 23 / var(--tw-divide-opacity));
}

.divide-red-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 242 242 / var(--tw-divide-opacity));
}

.divide-red-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 226 226 / var(--tw-divide-opacity));
}

.divide-red-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-divide-opacity));
}

.divide-red-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(252 165 165 / var(--tw-divide-opacity));
}

.divide-red-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 113 113 / var(--tw-divide-opacity));
}

.divide-red-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-divide-opacity));
}

.divide-red-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-divide-opacity));
}

.divide-red-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(185 28 28 / var(--tw-divide-opacity));
}

.divide-red-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(153 27 27 / var(--tw-divide-opacity));
}

.divide-red-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(127 29 29 / var(--tw-divide-opacity));
}

.divide-orange-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 247 237 / var(--tw-divide-opacity));
}

.divide-orange-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 237 213 / var(--tw-divide-opacity));
}

.divide-orange-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 215 170 / var(--tw-divide-opacity));
}

.divide-orange-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 186 116 / var(--tw-divide-opacity));
}

.divide-orange-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(251 146 60 / var(--tw-divide-opacity));
}

.divide-orange-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(249 115 22 / var(--tw-divide-opacity));
}

.divide-orange-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(234 88 12 / var(--tw-divide-opacity));
}

.divide-orange-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(194 65 12 / var(--tw-divide-opacity));
}

.divide-orange-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(154 52 18 / var(--tw-divide-opacity));
}

.divide-orange-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(124 45 18 / var(--tw-divide-opacity));
}

.divide-amber-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 251 235 / var(--tw-divide-opacity));
}

.divide-amber-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 243 199 / var(--tw-divide-opacity));
}

.divide-amber-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 230 138 / var(--tw-divide-opacity));
}

.divide-amber-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(252 211 77 / var(--tw-divide-opacity));
}

.divide-amber-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(251 191 36 / var(--tw-divide-opacity));
}

.divide-amber-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(245 158 11 / var(--tw-divide-opacity));
}

.divide-amber-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(217 119 6 / var(--tw-divide-opacity));
}

.divide-amber-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(180 83 9 / var(--tw-divide-opacity));
}

.divide-amber-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(146 64 14 / var(--tw-divide-opacity));
}

.divide-amber-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(120 53 15 / var(--tw-divide-opacity));
}

.divide-yellow-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 252 232 / var(--tw-divide-opacity));
}

.divide-yellow-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 249 195 / var(--tw-divide-opacity));
}

.divide-yellow-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 240 138 / var(--tw-divide-opacity));
}

.divide-yellow-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 224 71 / var(--tw-divide-opacity));
}

.divide-yellow-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 204 21 / var(--tw-divide-opacity));
}

.divide-yellow-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(234 179 8 / var(--tw-divide-opacity));
}

.divide-yellow-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(202 138 4 / var(--tw-divide-opacity));
}

.divide-yellow-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(161 98 7 / var(--tw-divide-opacity));
}

.divide-yellow-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(133 77 14 / var(--tw-divide-opacity));
}

.divide-yellow-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(113 63 18 / var(--tw-divide-opacity));
}

.divide-lime-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(247 254 231 / var(--tw-divide-opacity));
}

.divide-lime-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(236 252 203 / var(--tw-divide-opacity));
}

.divide-lime-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(217 249 157 / var(--tw-divide-opacity));
}

.divide-lime-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(190 242 100 / var(--tw-divide-opacity));
}

.divide-lime-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(163 230 53 / var(--tw-divide-opacity));
}

.divide-lime-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(132 204 22 / var(--tw-divide-opacity));
}

.divide-lime-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(101 163 13 / var(--tw-divide-opacity));
}

.divide-lime-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(77 124 15 / var(--tw-divide-opacity));
}

.divide-lime-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(63 98 18 / var(--tw-divide-opacity));
}

.divide-lime-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(54 83 20 / var(--tw-divide-opacity));
}

.divide-green-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(240 253 244 / var(--tw-divide-opacity));
}

.divide-green-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(220 252 231 / var(--tw-divide-opacity));
}

.divide-green-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(187 247 208 / var(--tw-divide-opacity));
}

.divide-green-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(134 239 172 / var(--tw-divide-opacity));
}

.divide-green-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(74 222 128 / var(--tw-divide-opacity));
}

.divide-green-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-divide-opacity));
}

.divide-green-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(22 163 74 / var(--tw-divide-opacity));
}

.divide-green-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(21 128 61 / var(--tw-divide-opacity));
}

.divide-green-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(22 101 52 / var(--tw-divide-opacity));
}

.divide-green-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(20 83 45 / var(--tw-divide-opacity));
}

.divide-emerald-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(236 253 245 / var(--tw-divide-opacity));
}

.divide-emerald-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(209 250 229 / var(--tw-divide-opacity));
}

.divide-emerald-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(167 243 208 / var(--tw-divide-opacity));
}

.divide-emerald-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(110 231 183 / var(--tw-divide-opacity));
}

.divide-emerald-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(52 211 153 / var(--tw-divide-opacity));
}

.divide-emerald-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(16 185 129 / var(--tw-divide-opacity));
}

.divide-emerald-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(5 150 105 / var(--tw-divide-opacity));
}

.divide-emerald-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(4 120 87 / var(--tw-divide-opacity));
}

.divide-emerald-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(6 95 70 / var(--tw-divide-opacity));
}

.divide-emerald-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(6 78 59 / var(--tw-divide-opacity));
}

.divide-teal-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(240 253 250 / var(--tw-divide-opacity));
}

.divide-teal-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(204 251 241 / var(--tw-divide-opacity));
}

.divide-teal-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(153 246 228 / var(--tw-divide-opacity));
}

.divide-teal-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(94 234 212 / var(--tw-divide-opacity));
}

.divide-teal-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(45 212 191 / var(--tw-divide-opacity));
}

.divide-teal-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(20 184 166 / var(--tw-divide-opacity));
}

.divide-teal-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(13 148 136 / var(--tw-divide-opacity));
}

.divide-teal-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(15 118 110 / var(--tw-divide-opacity));
}

.divide-teal-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(17 94 89 / var(--tw-divide-opacity));
}

.divide-teal-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(19 78 74 / var(--tw-divide-opacity));
}

.divide-cyan-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(236 254 255 / var(--tw-divide-opacity));
}

.divide-cyan-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(207 250 254 / var(--tw-divide-opacity));
}

.divide-cyan-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(165 243 252 / var(--tw-divide-opacity));
}

.divide-cyan-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(103 232 249 / var(--tw-divide-opacity));
}

.divide-cyan-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(34 211 238 / var(--tw-divide-opacity));
}

.divide-cyan-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(6 182 212 / var(--tw-divide-opacity));
}

.divide-cyan-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(8 145 178 / var(--tw-divide-opacity));
}

.divide-cyan-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(14 116 144 / var(--tw-divide-opacity));
}

.divide-cyan-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(21 94 117 / var(--tw-divide-opacity));
}

.divide-cyan-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(22 78 99 / var(--tw-divide-opacity));
}

.divide-sky-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(240 249 255 / var(--tw-divide-opacity));
}

.divide-sky-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(224 242 254 / var(--tw-divide-opacity));
}

.divide-sky-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(186 230 253 / var(--tw-divide-opacity));
}

.divide-sky-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(125 211 252 / var(--tw-divide-opacity));
}

.divide-sky-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(56 189 248 / var(--tw-divide-opacity));
}

.divide-sky-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(14 165 233 / var(--tw-divide-opacity));
}

.divide-sky-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(2 132 199 / var(--tw-divide-opacity));
}

.divide-sky-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(3 105 161 / var(--tw-divide-opacity));
}

.divide-sky-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(7 89 133 / var(--tw-divide-opacity));
}

.divide-sky-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(12 74 110 / var(--tw-divide-opacity));
}

.divide-blue-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(239 246 255 / var(--tw-divide-opacity));
}

.divide-blue-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(219 234 254 / var(--tw-divide-opacity));
}

.divide-blue-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(191 219 254 / var(--tw-divide-opacity));
}

.divide-blue-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-divide-opacity));
}

.divide-blue-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(96 165 250 / var(--tw-divide-opacity));
}

.divide-blue-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-divide-opacity));
}

.divide-blue-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-divide-opacity));
}

.divide-blue-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(29 78 216 / var(--tw-divide-opacity));
}

.divide-blue-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(30 64 175 / var(--tw-divide-opacity));
}

.divide-blue-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(30 58 138 / var(--tw-divide-opacity));
}

.divide-indigo-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(238 242 255 / var(--tw-divide-opacity));
}

.divide-indigo-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(224 231 255 / var(--tw-divide-opacity));
}

.divide-indigo-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(199 210 254 / var(--tw-divide-opacity));
}

.divide-indigo-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(165 180 252 / var(--tw-divide-opacity));
}

.divide-indigo-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-divide-opacity));
}

.divide-indigo-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-divide-opacity));
}

.divide-indigo-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(79 70 229 / var(--tw-divide-opacity));
}

.divide-indigo-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(67 56 202 / var(--tw-divide-opacity));
}

.divide-indigo-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 48 163 / var(--tw-divide-opacity));
}

.divide-indigo-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(49 46 129 / var(--tw-divide-opacity));
}

.divide-violet-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(245 243 255 / var(--tw-divide-opacity));
}

.divide-violet-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(237 233 254 / var(--tw-divide-opacity));
}

.divide-violet-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(221 214 254 / var(--tw-divide-opacity));
}

.divide-violet-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(196 181 253 / var(--tw-divide-opacity));
}

.divide-violet-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(167 139 250 / var(--tw-divide-opacity));
}

.divide-violet-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(139 92 246 / var(--tw-divide-opacity));
}

.divide-violet-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(124 58 237 / var(--tw-divide-opacity));
}

.divide-violet-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(109 40 217 / var(--tw-divide-opacity));
}

.divide-violet-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(91 33 182 / var(--tw-divide-opacity));
}

.divide-violet-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(76 29 149 / var(--tw-divide-opacity));
}

.divide-purple-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 245 255 / var(--tw-divide-opacity));
}

.divide-purple-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 232 255 / var(--tw-divide-opacity));
}

.divide-purple-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(233 213 255 / var(--tw-divide-opacity));
}

.divide-purple-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(216 180 254 / var(--tw-divide-opacity));
}

.divide-purple-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(192 132 252 / var(--tw-divide-opacity));
}

.divide-purple-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-divide-opacity));
}

.divide-purple-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(147 51 234 / var(--tw-divide-opacity));
}

.divide-purple-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(126 34 206 / var(--tw-divide-opacity));
}

.divide-purple-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(107 33 168 / var(--tw-divide-opacity));
}

.divide-purple-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(88 28 135 / var(--tw-divide-opacity));
}

.divide-fuchsia-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 244 255 / var(--tw-divide-opacity));
}

.divide-fuchsia-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 232 255 / var(--tw-divide-opacity));
}

.divide-fuchsia-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(245 208 254 / var(--tw-divide-opacity));
}

.divide-fuchsia-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(240 171 252 / var(--tw-divide-opacity));
}

.divide-fuchsia-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(232 121 249 / var(--tw-divide-opacity));
}

.divide-fuchsia-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(217 70 239 / var(--tw-divide-opacity));
}

.divide-fuchsia-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(192 38 211 / var(--tw-divide-opacity));
}

.divide-fuchsia-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(162 28 175 / var(--tw-divide-opacity));
}

.divide-fuchsia-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(134 25 143 / var(--tw-divide-opacity));
}

.divide-fuchsia-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(112 26 117 / var(--tw-divide-opacity));
}

.divide-pink-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 242 248 / var(--tw-divide-opacity));
}

.divide-pink-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(252 231 243 / var(--tw-divide-opacity));
}

.divide-pink-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(251 207 232 / var(--tw-divide-opacity));
}

.divide-pink-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(249 168 212 / var(--tw-divide-opacity));
}

.divide-pink-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(244 114 182 / var(--tw-divide-opacity));
}

.divide-pink-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(236 72 153 / var(--tw-divide-opacity));
}

.divide-pink-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(219 39 119 / var(--tw-divide-opacity));
}

.divide-pink-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(190 24 93 / var(--tw-divide-opacity));
}

.divide-pink-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(157 23 77 / var(--tw-divide-opacity));
}

.divide-pink-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(131 24 67 / var(--tw-divide-opacity));
}

.divide-rose-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 241 242 / var(--tw-divide-opacity));
}

.divide-rose-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 228 230 / var(--tw-divide-opacity));
}

.divide-rose-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 205 211 / var(--tw-divide-opacity));
}

.divide-rose-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 164 175 / var(--tw-divide-opacity));
}

.divide-rose-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(251 113 133 / var(--tw-divide-opacity));
}

.divide-rose-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(244 63 94 / var(--tw-divide-opacity));
}

.divide-rose-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(225 29 72 / var(--tw-divide-opacity));
}

.divide-rose-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(190 18 60 / var(--tw-divide-opacity));
}

.divide-rose-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(159 18 57 / var(--tw-divide-opacity));
}

.divide-rose-900 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(136 19 55 / var(--tw-divide-opacity));
}

.divide-textLgColor > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--text-large-color);
}

.divide-textSmColor > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--text-small-color);
}

.divide-subText > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--sub-text-color);
}

.divide-navBar-linkActive > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--nav-link-active);
}

.divide-navBar-linkActiveStripe > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--nav-link-active-stripe);
}

.divide-mobileNav-text > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--mobile-text);
}

.divide-mobileNav-textHover > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--mobile-hover-text);
}

.divide-mobileNav-border > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--mobile-border);
}

.divide-aboutMe-smIconBg > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--sm-icon-bg);
}

.divide-aboutMe-aboutMeText > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--aboutme-text);
}

.divide-aboutMe-alissa > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--alissa);
}

.divide-projects-text > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--project-text-color);
}

.divide-projects-subText > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--project-sub-text);
}

.divide-projects-arrow > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--project-arrow);
}

.divide-projects-recentBg > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--recent-project-bg);
}

.divide-projects-recentHover > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--recent-project-bg-hover);
}

.divide-projects-recentShadow > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--recent-project-shadow);
}

.divide-contact-label > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--label-text);
}

.divide-contact-send > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--send-btn);
}

.divide-contact-sendHover > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--send-btn-hover);
}

.divide-blog-lgText > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--blog-lg-text);
}

.divide-blog-border > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--blog-input-border);
}

.divide-blog-tagBg > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--tag-btn-bg);
}

.divide-post-bodyText > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--text-body);
}

.divide-post-bodyTextLg > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--text-body-lg);
}

.divide-post-icon > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--icon);
}

.divide-post-iconHover > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--icon-hover);
}

.divide-post-hyperlink > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--hyperlink);
}

.divide-post-hyperlinkHover > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--hyperlink-hover);
}

.divide-post-quote > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--quote);
}

.divide-post-quoteAuthor > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--quote-author);
}

.divide-opacity-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0;
}

.divide-opacity-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.05;
}

.divide-opacity-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.1;
}

.divide-opacity-20 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.2;
}

.divide-opacity-25 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.25;
}

.divide-opacity-30 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.3;
}

.divide-opacity-40 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.4;
}

.divide-opacity-50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.5;
}

.divide-opacity-60 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.6;
}

.divide-opacity-70 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.7;
}

.divide-opacity-75 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.75;
}

.divide-opacity-80 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.8;
}

.divide-opacity-90 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.9;
}

.divide-opacity-95 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.95;
}

.divide-opacity-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
}

.place-self-auto {
  place-self: auto;
}

.place-self-start {
  place-self: start;
}

.place-self-end {
  place-self: end;
}

.place-self-center {
  place-self: center;
}

.place-self-stretch {
  place-self: stretch;
}

.self-auto {
  align-self: auto;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-stretch {
  align-self: stretch;
}

.self-baseline {
  align-self: baseline;
}

.justify-self-auto {
  justify-self: auto;
}

.justify-self-start {
  justify-self: start;
}

.justify-self-end {
  justify-self: end;
}

.justify-self-center {
  justify-self: center;
}

.justify-self-stretch {
  justify-self: stretch;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-clip {
  overflow: clip;
}

.overflow-visible {
  overflow: visible;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-x-clip {
  overflow-x: clip;
}

.overflow-y-clip {
  overflow-y: clip;
}

.overflow-x-visible {
  overflow-x: visible;
}

.overflow-y-visible {
  overflow-y: visible;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.overscroll-auto {
  -ms-scroll-chaining: chained;
      overscroll-behavior: auto;
}

.overscroll-contain {
  -ms-scroll-chaining: none;
      overscroll-behavior: contain;
}

.overscroll-none {
  -ms-scroll-chaining: none;
      overscroll-behavior: none;
}

.overscroll-y-auto {
  overscroll-behavior-y: auto;
}

.overscroll-y-contain {
  overscroll-behavior-y: contain;
}

.overscroll-y-none {
  overscroll-behavior-y: none;
}

.overscroll-x-auto {
  overscroll-behavior-x: auto;
}

.overscroll-x-contain {
  overscroll-behavior-x: contain;
}

.overscroll-x-none {
  overscroll-behavior-x: none;
}

.scroll-auto {
  scroll-behavior: auto;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.text-clip {
  text-overflow: clip;
}

.whitespace-normal {
  white-space: normal;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre {
  white-space: pre;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.break-normal {
  overflow-wrap: normal;
  word-break: normal;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.rounded-none {
  border-radius: 0px;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-\[20px\] {
  border-radius: 20px;
}

.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-r-xl {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}

.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.rounded-t-2xl {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.rounded-t-3xl {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.rounded-t-full {
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}

.rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.rounded-r-sm {
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}

.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.rounded-r-2xl {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.rounded-r-3xl {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}

.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

.rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-b-sm {
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}

.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-b-md {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-b-2xl {
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.rounded-b-3xl {
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.rounded-b-full {
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
}

.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-l-sm {
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}

.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-l-xl {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-l-2xl {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.rounded-l-3xl {
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.rounded-l-full {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}

.rounded-tl-none {
  border-top-left-radius: 0px;
}

.rounded-tl-sm {
  border-top-left-radius: 0.125rem;
}

.rounded-tl {
  border-top-left-radius: 0.25rem;
}

.rounded-tl-md {
  border-top-left-radius: 0.375rem;
}

.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}

.rounded-tl-xl {
  border-top-left-radius: 0.75rem;
}

.rounded-tl-2xl {
  border-top-left-radius: 1rem;
}

.rounded-tl-3xl {
  border-top-left-radius: 1.5rem;
}

.rounded-tl-full {
  border-top-left-radius: 9999px;
}

.rounded-tr-none {
  border-top-right-radius: 0px;
}

.rounded-tr-sm {
  border-top-right-radius: 0.125rem;
}

.rounded-tr {
  border-top-right-radius: 0.25rem;
}

.rounded-tr-md {
  border-top-right-radius: 0.375rem;
}

.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}

.rounded-tr-xl {
  border-top-right-radius: 0.75rem;
}

.rounded-tr-2xl {
  border-top-right-radius: 1rem;
}

.rounded-tr-3xl {
  border-top-right-radius: 1.5rem;
}

.rounded-tr-full {
  border-top-right-radius: 9999px;
}

.rounded-br-none {
  border-bottom-right-radius: 0px;
}

.rounded-br-sm {
  border-bottom-right-radius: 0.125rem;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem;
}

.rounded-br-md {
  border-bottom-right-radius: 0.375rem;
}

.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}

.rounded-br-xl {
  border-bottom-right-radius: 0.75rem;
}

.rounded-br-2xl {
  border-bottom-right-radius: 1rem;
}

.rounded-br-3xl {
  border-bottom-right-radius: 1.5rem;
}

.rounded-br-full {
  border-bottom-right-radius: 9999px;
}

.rounded-bl-none {
  border-bottom-left-radius: 0px;
}

.rounded-bl-sm {
  border-bottom-left-radius: 0.125rem;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}

.rounded-bl-md {
  border-bottom-left-radius: 0.375rem;
}

.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}

.rounded-bl-xl {
  border-bottom-left-radius: 0.75rem;
}

.rounded-bl-2xl {
  border-bottom-left-radius: 1rem;
}

.rounded-bl-3xl {
  border-bottom-left-radius: 1.5rem;
}

.rounded-bl-full {
  border-bottom-left-radius: 9999px;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-0 {
  border-width: 0px;
}

.border-4 {
  border-width: 4px;
}

.border-8 {
  border-width: 8px;
}

.border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}

.border-x-2 {
  border-left-width: 2px;
  border-right-width: 2px;
}

.border-x-4 {
  border-left-width: 4px;
  border-right-width: 4px;
}

.border-x-8 {
  border-left-width: 8px;
  border-right-width: 8px;
}

.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}

.border-y-0 {
  border-top-width: 0px;
  border-bottom-width: 0px;
}

.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}

.border-y-4 {
  border-top-width: 4px;
  border-bottom-width: 4px;
}

.border-y-8 {
  border-top-width: 8px;
  border-bottom-width: 8px;
}

.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.border-l-4 {
  border-left-width: 4px;
}

.border-t {
  border-top-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-t-0 {
  border-top-width: 0px;
}

.border-t-4 {
  border-top-width: 4px;
}

.border-t-8 {
  border-top-width: 8px;
}

.border-r-0 {
  border-right-width: 0px;
}

.border-r-2 {
  border-right-width: 2px;
}

.border-r-4 {
  border-right-width: 4px;
}

.border-r-8 {
  border-right-width: 8px;
}

.border-r {
  border-right-width: 1px;
}

.border-b-0 {
  border-bottom-width: 0px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-b-4 {
  border-bottom-width: 4px;
}

.border-b-8 {
  border-bottom-width: 8px;
}

.border-l-0 {
  border-left-width: 0px;
}

.border-l-2 {
  border-left-width: 2px;
}

.border-l-8 {
  border-left-width: 8px;
}

.border-l {
  border-left-width: 1px;
}

.border-t-\[1px\] {
  border-top-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-dashed {
  border-style: dashed;
}

.border-dotted {
  border-style: dotted;
}

.border-double {
  border-style: double;
}

.border-hidden {
  border-style: hidden;
}

.border-none {
  border-style: none;
}

.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-blue-800 {
  --tw-border-opacity: 1;
  border-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-mobileNav-border {
  border-color: var(--mobile-border);
}

.border-inherit {
  border-color: inherit;
}

.border-current {
  border-color: currentColor;
}

.border-transparent {
  border-color: transparent;
}

.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-slate-50 {
  --tw-border-opacity: 1;
  border-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-slate-100 {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-slate-400 {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-slate-500 {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-slate-600 {
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-slate-700 {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-slate-800 {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-slate-900 {
  --tw-border-opacity: 1;
  border-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-gray-50 {
  --tw-border-opacity: 1;
  border-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-zinc-50 {
  --tw-border-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-zinc-100 {
  --tw-border-opacity: 1;
  border-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-zinc-200 {
  --tw-border-opacity: 1;
  border-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-zinc-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-zinc-400 {
  --tw-border-opacity: 1;
  border-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-zinc-500 {
  --tw-border-opacity: 1;
  border-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-zinc-600 {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-zinc-700 {
  --tw-border-opacity: 1;
  border-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-zinc-900 {
  --tw-border-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-neutral-50 {
  --tw-border-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-neutral-100 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-neutral-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-neutral-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-neutral-400 {
  --tw-border-opacity: 1;
  border-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-neutral-500 {
  --tw-border-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-neutral-600 {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-neutral-700 {
  --tw-border-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-neutral-800 {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-neutral-900 {
  --tw-border-opacity: 1;
  border-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-stone-50 {
  --tw-border-opacity: 1;
  border-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-stone-100 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-stone-200 {
  --tw-border-opacity: 1;
  border-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-stone-300 {
  --tw-border-opacity: 1;
  border-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-stone-400 {
  --tw-border-opacity: 1;
  border-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-stone-500 {
  --tw-border-opacity: 1;
  border-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-stone-600 {
  --tw-border-opacity: 1;
  border-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-stone-700 {
  --tw-border-opacity: 1;
  border-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-stone-800 {
  --tw-border-opacity: 1;
  border-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-stone-900 {
  --tw-border-opacity: 1;
  border-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-red-50 {
  --tw-border-opacity: 1;
  border-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-red-100 {
  --tw-border-opacity: 1;
  border-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-red-800 {
  --tw-border-opacity: 1;
  border-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-red-900 {
  --tw-border-opacity: 1;
  border-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-orange-50 {
  --tw-border-opacity: 1;
  border-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-orange-100 {
  --tw-border-opacity: 1;
  border-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-orange-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-orange-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-orange-400 {
  --tw-border-opacity: 1;
  border-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-orange-500 {
  --tw-border-opacity: 1;
  border-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-orange-600 {
  --tw-border-opacity: 1;
  border-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-orange-700 {
  --tw-border-opacity: 1;
  border-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-orange-800 {
  --tw-border-opacity: 1;
  border-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-orange-900 {
  --tw-border-opacity: 1;
  border-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-amber-50 {
  --tw-border-opacity: 1;
  border-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-amber-100 {
  --tw-border-opacity: 1;
  border-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-amber-200 {
  --tw-border-opacity: 1;
  border-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-amber-300 {
  --tw-border-opacity: 1;
  border-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-amber-400 {
  --tw-border-opacity: 1;
  border-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-amber-500 {
  --tw-border-opacity: 1;
  border-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-amber-600 {
  --tw-border-opacity: 1;
  border-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-amber-700 {
  --tw-border-opacity: 1;
  border-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-amber-800 {
  --tw-border-opacity: 1;
  border-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-amber-900 {
  --tw-border-opacity: 1;
  border-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-yellow-50 {
  --tw-border-opacity: 1;
  border-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-yellow-100 {
  --tw-border-opacity: 1;
  border-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-yellow-700 {
  --tw-border-opacity: 1;
  border-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-yellow-800 {
  --tw-border-opacity: 1;
  border-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-yellow-900 {
  --tw-border-opacity: 1;
  border-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-lime-50 {
  --tw-border-opacity: 1;
  border-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-lime-100 {
  --tw-border-opacity: 1;
  border-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-lime-200 {
  --tw-border-opacity: 1;
  border-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-lime-300 {
  --tw-border-opacity: 1;
  border-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-lime-400 {
  --tw-border-opacity: 1;
  border-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-lime-500 {
  --tw-border-opacity: 1;
  border-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-lime-600 {
  --tw-border-opacity: 1;
  border-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-lime-700 {
  --tw-border-opacity: 1;
  border-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-lime-800 {
  --tw-border-opacity: 1;
  border-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-lime-900 {
  --tw-border-opacity: 1;
  border-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-green-50 {
  --tw-border-opacity: 1;
  border-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-green-100 {
  --tw-border-opacity: 1;
  border-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-green-300 {
  --tw-border-opacity: 1;
  border-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-green-400 {
  --tw-border-opacity: 1;
  border-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-green-800 {
  --tw-border-opacity: 1;
  border-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-green-900 {
  --tw-border-opacity: 1;
  border-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-emerald-50 {
  --tw-border-opacity: 1;
  border-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-emerald-100 {
  --tw-border-opacity: 1;
  border-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-emerald-200 {
  --tw-border-opacity: 1;
  border-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-emerald-300 {
  --tw-border-opacity: 1;
  border-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-emerald-400 {
  --tw-border-opacity: 1;
  border-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-emerald-500 {
  --tw-border-opacity: 1;
  border-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-emerald-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-emerald-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-emerald-800 {
  --tw-border-opacity: 1;
  border-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-emerald-900 {
  --tw-border-opacity: 1;
  border-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-teal-50 {
  --tw-border-opacity: 1;
  border-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-teal-100 {
  --tw-border-opacity: 1;
  border-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-teal-200 {
  --tw-border-opacity: 1;
  border-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-teal-300 {
  --tw-border-opacity: 1;
  border-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-teal-400 {
  --tw-border-opacity: 1;
  border-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-teal-500 {
  --tw-border-opacity: 1;
  border-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-teal-600 {
  --tw-border-opacity: 1;
  border-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-teal-700 {
  --tw-border-opacity: 1;
  border-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-teal-800 {
  --tw-border-opacity: 1;
  border-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-teal-900 {
  --tw-border-opacity: 1;
  border-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-cyan-50 {
  --tw-border-opacity: 1;
  border-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-cyan-100 {
  --tw-border-opacity: 1;
  border-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-cyan-200 {
  --tw-border-opacity: 1;
  border-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-cyan-300 {
  --tw-border-opacity: 1;
  border-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-cyan-400 {
  --tw-border-opacity: 1;
  border-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-cyan-500 {
  --tw-border-opacity: 1;
  border-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-cyan-600 {
  --tw-border-opacity: 1;
  border-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-cyan-700 {
  --tw-border-opacity: 1;
  border-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-cyan-800 {
  --tw-border-opacity: 1;
  border-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-cyan-900 {
  --tw-border-opacity: 1;
  border-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-sky-50 {
  --tw-border-opacity: 1;
  border-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-sky-100 {
  --tw-border-opacity: 1;
  border-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-sky-200 {
  --tw-border-opacity: 1;
  border-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-sky-300 {
  --tw-border-opacity: 1;
  border-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-sky-400 {
  --tw-border-opacity: 1;
  border-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-sky-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-sky-600 {
  --tw-border-opacity: 1;
  border-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-sky-700 {
  --tw-border-opacity: 1;
  border-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-sky-800 {
  --tw-border-opacity: 1;
  border-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-sky-900 {
  --tw-border-opacity: 1;
  border-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-blue-50 {
  --tw-border-opacity: 1;
  border-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-blue-100 {
  --tw-border-opacity: 1;
  border-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-blue-300 {
  --tw-border-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-blue-400 {
  --tw-border-opacity: 1;
  border-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-blue-900 {
  --tw-border-opacity: 1;
  border-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-indigo-50 {
  --tw-border-opacity: 1;
  border-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-indigo-100 {
  --tw-border-opacity: 1;
  border-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-indigo-300 {
  --tw-border-opacity: 1;
  border-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-indigo-400 {
  --tw-border-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-indigo-700 {
  --tw-border-opacity: 1;
  border-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-indigo-800 {
  --tw-border-opacity: 1;
  border-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-indigo-900 {
  --tw-border-opacity: 1;
  border-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-violet-50 {
  --tw-border-opacity: 1;
  border-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-violet-100 {
  --tw-border-opacity: 1;
  border-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-violet-200 {
  --tw-border-opacity: 1;
  border-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-violet-300 {
  --tw-border-opacity: 1;
  border-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-violet-400 {
  --tw-border-opacity: 1;
  border-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-violet-500 {
  --tw-border-opacity: 1;
  border-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-violet-600 {
  --tw-border-opacity: 1;
  border-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-violet-700 {
  --tw-border-opacity: 1;
  border-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-violet-800 {
  --tw-border-opacity: 1;
  border-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-violet-900 {
  --tw-border-opacity: 1;
  border-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-purple-50 {
  --tw-border-opacity: 1;
  border-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-purple-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-purple-300 {
  --tw-border-opacity: 1;
  border-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-purple-800 {
  --tw-border-opacity: 1;
  border-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-purple-900 {
  --tw-border-opacity: 1;
  border-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-fuchsia-50 {
  --tw-border-opacity: 1;
  border-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-fuchsia-100 {
  --tw-border-opacity: 1;
  border-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-fuchsia-200 {
  --tw-border-opacity: 1;
  border-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-fuchsia-300 {
  --tw-border-opacity: 1;
  border-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-fuchsia-400 {
  --tw-border-opacity: 1;
  border-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-fuchsia-500 {
  --tw-border-opacity: 1;
  border-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-fuchsia-600 {
  --tw-border-opacity: 1;
  border-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-fuchsia-700 {
  --tw-border-opacity: 1;
  border-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-fuchsia-800 {
  --tw-border-opacity: 1;
  border-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-fuchsia-900 {
  --tw-border-opacity: 1;
  border-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-pink-50 {
  --tw-border-opacity: 1;
  border-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-pink-100 {
  --tw-border-opacity: 1;
  border-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-pink-300 {
  --tw-border-opacity: 1;
  border-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-pink-400 {
  --tw-border-opacity: 1;
  border-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-pink-700 {
  --tw-border-opacity: 1;
  border-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-pink-800 {
  --tw-border-opacity: 1;
  border-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-pink-900 {
  --tw-border-opacity: 1;
  border-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-rose-50 {
  --tw-border-opacity: 1;
  border-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-rose-100 {
  --tw-border-opacity: 1;
  border-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-rose-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-rose-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-rose-400 {
  --tw-border-opacity: 1;
  border-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-rose-500 {
  --tw-border-opacity: 1;
  border-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-rose-600 {
  --tw-border-opacity: 1;
  border-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-rose-700 {
  --tw-border-opacity: 1;
  border-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-rose-800 {
  --tw-border-opacity: 1;
  border-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-rose-900 {
  --tw-border-opacity: 1;
  border-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-textLgColor {
  border-color: var(--text-large-color);
}

.border-textSmColor {
  border-color: var(--text-small-color);
}

.border-subText {
  border-color: var(--sub-text-color);
}

.border-navBar-linkActive {
  border-color: var(--nav-link-active);
}

.border-navBar-linkActiveStripe {
  border-color: var(--nav-link-active-stripe);
}

.border-mobileNav-text {
  border-color: var(--mobile-text);
}

.border-mobileNav-textHover {
  border-color: var(--mobile-hover-text);
}

.border-aboutMe-smIconBg {
  border-color: var(--sm-icon-bg);
}

.border-aboutMe-aboutMeText {
  border-color: var(--aboutme-text);
}

.border-aboutMe-alissa {
  border-color: var(--alissa);
}

.border-projects-text {
  border-color: var(--project-text-color);
}

.border-projects-subText {
  border-color: var(--project-sub-text);
}

.border-projects-arrow {
  border-color: var(--project-arrow);
}

.border-projects-recentBg {
  border-color: var(--recent-project-bg);
}

.border-projects-recentHover {
  border-color: var(--recent-project-bg-hover);
}

.border-projects-recentShadow {
  border-color: var(--recent-project-shadow);
}

.border-contact-label {
  border-color: var(--label-text);
}

.border-contact-send {
  border-color: var(--send-btn);
}

.border-contact-sendHover {
  border-color: var(--send-btn-hover);
}

.border-blog-lgText {
  border-color: var(--blog-lg-text);
}

.border-blog-border {
  border-color: var(--blog-input-border);
}

.border-blog-tagBg {
  border-color: var(--tag-btn-bg);
}

.border-post-bodyText {
  border-color: var(--text-body);
}

.border-post-bodyTextLg {
  border-color: var(--text-body-lg);
}

.border-post-icon {
  border-color: var(--icon);
}

.border-post-iconHover {
  border-color: var(--icon-hover);
}

.border-post-hyperlink {
  border-color: var(--hyperlink);
}

.border-post-hyperlinkHover {
  border-color: var(--hyperlink-hover);
}

.border-post-quote {
  border-color: var(--quote);
}

.border-post-quoteAuthor {
  border-color: var(--quote-author);
}

.border-x-inherit {
  border-left-color: inherit;
  border-right-color: inherit;
}

.border-x-current {
  border-left-color: currentColor;
  border-right-color: currentColor;
}

.border-x-transparent {
  border-left-color: transparent;
  border-right-color: transparent;
}

.border-x-black {
  --tw-border-opacity: 1;
  border-left-color: rgb(0 0 0 / var(--tw-border-opacity));
  border-right-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-x-white {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 255 255 / var(--tw-border-opacity));
  border-right-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-x-slate-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(248 250 252 / var(--tw-border-opacity));
  border-right-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-x-slate-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(241 245 249 / var(--tw-border-opacity));
  border-right-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-x-slate-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(226 232 240 / var(--tw-border-opacity));
  border-right-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-x-slate-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(203 213 225 / var(--tw-border-opacity));
  border-right-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-x-slate-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(148 163 184 / var(--tw-border-opacity));
  border-right-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-x-slate-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(100 116 139 / var(--tw-border-opacity));
  border-right-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-x-slate-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));
  border-right-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-x-slate-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(51 65 85 / var(--tw-border-opacity));
  border-right-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-x-slate-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 41 59 / var(--tw-border-opacity));
  border-right-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-x-slate-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(15 23 42 / var(--tw-border-opacity));
  border-right-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-x-gray-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 250 251 / var(--tw-border-opacity));
  border-right-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-x-gray-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(243 244 246 / var(--tw-border-opacity));
  border-right-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-x-gray-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(229 231 235 / var(--tw-border-opacity));
  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-x-gray-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-right-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-x-gray-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(156 163 175 / var(--tw-border-opacity));
  border-right-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-x-gray-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(107 114 128 / var(--tw-border-opacity));
  border-right-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-x-gray-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(75 85 99 / var(--tw-border-opacity));
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-x-gray-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(55 65 81 / var(--tw-border-opacity));
  border-right-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-x-gray-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(31 41 55 / var(--tw-border-opacity));
  border-right-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-x-gray-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(17 24 39 / var(--tw-border-opacity));
  border-right-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-x-zinc-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 250 / var(--tw-border-opacity));
  border-right-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-x-zinc-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 244 245 / var(--tw-border-opacity));
  border-right-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-x-zinc-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(228 228 231 / var(--tw-border-opacity));
  border-right-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-x-zinc-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(212 212 216 / var(--tw-border-opacity));
  border-right-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-x-zinc-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(161 161 170 / var(--tw-border-opacity));
  border-right-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-x-zinc-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(113 113 122 / var(--tw-border-opacity));
  border-right-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-x-zinc-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(82 82 91 / var(--tw-border-opacity));
  border-right-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-x-zinc-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(63 63 70 / var(--tw-border-opacity));
  border-right-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-x-zinc-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(39 39 42 / var(--tw-border-opacity));
  border-right-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-x-zinc-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(24 24 27 / var(--tw-border-opacity));
  border-right-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-x-neutral-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 250 / var(--tw-border-opacity));
  border-right-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-x-neutral-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 245 245 / var(--tw-border-opacity));
  border-right-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-x-neutral-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(229 229 229 / var(--tw-border-opacity));
  border-right-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-x-neutral-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(212 212 212 / var(--tw-border-opacity));
  border-right-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-x-neutral-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(163 163 163 / var(--tw-border-opacity));
  border-right-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-x-neutral-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(115 115 115 / var(--tw-border-opacity));
  border-right-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-x-neutral-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(82 82 82 / var(--tw-border-opacity));
  border-right-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-x-neutral-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(64 64 64 / var(--tw-border-opacity));
  border-right-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-x-neutral-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(38 38 38 / var(--tw-border-opacity));
  border-right-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-x-neutral-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(23 23 23 / var(--tw-border-opacity));
  border-right-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-x-stone-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 249 / var(--tw-border-opacity));
  border-right-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-x-stone-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 245 244 / var(--tw-border-opacity));
  border-right-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-x-stone-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(231 229 228 / var(--tw-border-opacity));
  border-right-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-x-stone-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(214 211 209 / var(--tw-border-opacity));
  border-right-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-x-stone-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(168 162 158 / var(--tw-border-opacity));
  border-right-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-x-stone-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(120 113 108 / var(--tw-border-opacity));
  border-right-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-x-stone-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(87 83 78 / var(--tw-border-opacity));
  border-right-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-x-stone-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(68 64 60 / var(--tw-border-opacity));
  border-right-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-x-stone-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(41 37 36 / var(--tw-border-opacity));
  border-right-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-x-stone-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(28 25 23 / var(--tw-border-opacity));
  border-right-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-x-red-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 242 242 / var(--tw-border-opacity));
  border-right-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-x-red-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 226 226 / var(--tw-border-opacity));
  border-right-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-x-red-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 202 202 / var(--tw-border-opacity));
  border-right-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-x-red-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 165 165 / var(--tw-border-opacity));
  border-right-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-x-red-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(248 113 113 / var(--tw-border-opacity));
  border-right-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-x-red-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(239 68 68 / var(--tw-border-opacity));
  border-right-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-x-red-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(220 38 38 / var(--tw-border-opacity));
  border-right-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-x-red-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(185 28 28 / var(--tw-border-opacity));
  border-right-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-x-red-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(153 27 27 / var(--tw-border-opacity));
  border-right-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-x-red-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(127 29 29 / var(--tw-border-opacity));
  border-right-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-x-orange-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 247 237 / var(--tw-border-opacity));
  border-right-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-x-orange-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 237 213 / var(--tw-border-opacity));
  border-right-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-x-orange-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 215 170 / var(--tw-border-opacity));
  border-right-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-x-orange-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 186 116 / var(--tw-border-opacity));
  border-right-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-x-orange-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 146 60 / var(--tw-border-opacity));
  border-right-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-x-orange-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 115 22 / var(--tw-border-opacity));
  border-right-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-x-orange-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(234 88 12 / var(--tw-border-opacity));
  border-right-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-x-orange-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(194 65 12 / var(--tw-border-opacity));
  border-right-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-x-orange-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(154 52 18 / var(--tw-border-opacity));
  border-right-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-x-orange-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(124 45 18 / var(--tw-border-opacity));
  border-right-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-x-amber-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 251 235 / var(--tw-border-opacity));
  border-right-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-x-amber-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 243 199 / var(--tw-border-opacity));
  border-right-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-x-amber-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 230 138 / var(--tw-border-opacity));
  border-right-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-x-amber-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 211 77 / var(--tw-border-opacity));
  border-right-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-x-amber-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 191 36 / var(--tw-border-opacity));
  border-right-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-x-amber-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 158 11 / var(--tw-border-opacity));
  border-right-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-x-amber-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 119 6 / var(--tw-border-opacity));
  border-right-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-x-amber-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(180 83 9 / var(--tw-border-opacity));
  border-right-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-x-amber-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(146 64 14 / var(--tw-border-opacity));
  border-right-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-x-amber-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(120 53 15 / var(--tw-border-opacity));
  border-right-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-x-yellow-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 252 232 / var(--tw-border-opacity));
  border-right-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-x-yellow-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 249 195 / var(--tw-border-opacity));
  border-right-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-x-yellow-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 240 138 / var(--tw-border-opacity));
  border-right-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-x-yellow-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 224 71 / var(--tw-border-opacity));
  border-right-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-x-yellow-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 204 21 / var(--tw-border-opacity));
  border-right-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-x-yellow-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(234 179 8 / var(--tw-border-opacity));
  border-right-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-x-yellow-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(202 138 4 / var(--tw-border-opacity));
  border-right-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-x-yellow-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(161 98 7 / var(--tw-border-opacity));
  border-right-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-x-yellow-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(133 77 14 / var(--tw-border-opacity));
  border-right-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-x-yellow-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(113 63 18 / var(--tw-border-opacity));
  border-right-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-x-lime-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(247 254 231 / var(--tw-border-opacity));
  border-right-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-x-lime-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 252 203 / var(--tw-border-opacity));
  border-right-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-x-lime-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 249 157 / var(--tw-border-opacity));
  border-right-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-x-lime-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 242 100 / var(--tw-border-opacity));
  border-right-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-x-lime-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(163 230 53 / var(--tw-border-opacity));
  border-right-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-x-lime-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(132 204 22 / var(--tw-border-opacity));
  border-right-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-x-lime-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(101 163 13 / var(--tw-border-opacity));
  border-right-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-x-lime-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(77 124 15 / var(--tw-border-opacity));
  border-right-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-x-lime-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(63 98 18 / var(--tw-border-opacity));
  border-right-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-x-lime-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(54 83 20 / var(--tw-border-opacity));
  border-right-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-x-green-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 253 244 / var(--tw-border-opacity));
  border-right-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-x-green-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(220 252 231 / var(--tw-border-opacity));
  border-right-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-x-green-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(187 247 208 / var(--tw-border-opacity));
  border-right-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-x-green-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(134 239 172 / var(--tw-border-opacity));
  border-right-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-x-green-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(74 222 128 / var(--tw-border-opacity));
  border-right-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-x-green-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(34 197 94 / var(--tw-border-opacity));
  border-right-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-x-green-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 163 74 / var(--tw-border-opacity));
  border-right-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-x-green-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(21 128 61 / var(--tw-border-opacity));
  border-right-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-x-green-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 101 52 / var(--tw-border-opacity));
  border-right-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-x-green-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(20 83 45 / var(--tw-border-opacity));
  border-right-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-x-emerald-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 253 245 / var(--tw-border-opacity));
  border-right-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-x-emerald-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(209 250 229 / var(--tw-border-opacity));
  border-right-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-x-emerald-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(167 243 208 / var(--tw-border-opacity));
  border-right-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-x-emerald-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(110 231 183 / var(--tw-border-opacity));
  border-right-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-x-emerald-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(52 211 153 / var(--tw-border-opacity));
  border-right-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-x-emerald-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(16 185 129 / var(--tw-border-opacity));
  border-right-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-x-emerald-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(5 150 105 / var(--tw-border-opacity));
  border-right-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-x-emerald-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(4 120 87 / var(--tw-border-opacity));
  border-right-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-x-emerald-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 95 70 / var(--tw-border-opacity));
  border-right-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-x-emerald-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 78 59 / var(--tw-border-opacity));
  border-right-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-x-teal-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 253 250 / var(--tw-border-opacity));
  border-right-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-x-teal-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(204 251 241 / var(--tw-border-opacity));
  border-right-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-x-teal-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(153 246 228 / var(--tw-border-opacity));
  border-right-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-x-teal-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(94 234 212 / var(--tw-border-opacity));
  border-right-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-x-teal-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(45 212 191 / var(--tw-border-opacity));
  border-right-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-x-teal-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(20 184 166 / var(--tw-border-opacity));
  border-right-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-x-teal-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(13 148 136 / var(--tw-border-opacity));
  border-right-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-x-teal-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(15 118 110 / var(--tw-border-opacity));
  border-right-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-x-teal-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(17 94 89 / var(--tw-border-opacity));
  border-right-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-x-teal-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(19 78 74 / var(--tw-border-opacity));
  border-right-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-x-cyan-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 254 255 / var(--tw-border-opacity));
  border-right-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-x-cyan-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(207 250 254 / var(--tw-border-opacity));
  border-right-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-x-cyan-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(165 243 252 / var(--tw-border-opacity));
  border-right-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-x-cyan-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(103 232 249 / var(--tw-border-opacity));
  border-right-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-x-cyan-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(34 211 238 / var(--tw-border-opacity));
  border-right-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-x-cyan-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 182 212 / var(--tw-border-opacity));
  border-right-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-x-cyan-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(8 145 178 / var(--tw-border-opacity));
  border-right-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-x-cyan-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(14 116 144 / var(--tw-border-opacity));
  border-right-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-x-cyan-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(21 94 117 / var(--tw-border-opacity));
  border-right-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-x-cyan-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 78 99 / var(--tw-border-opacity));
  border-right-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-x-sky-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 249 255 / var(--tw-border-opacity));
  border-right-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-x-sky-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(224 242 254 / var(--tw-border-opacity));
  border-right-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-x-sky-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(186 230 253 / var(--tw-border-opacity));
  border-right-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-x-sky-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(125 211 252 / var(--tw-border-opacity));
  border-right-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-x-sky-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(56 189 248 / var(--tw-border-opacity));
  border-right-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-x-sky-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(14 165 233 / var(--tw-border-opacity));
  border-right-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-x-sky-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(2 132 199 / var(--tw-border-opacity));
  border-right-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-x-sky-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(3 105 161 / var(--tw-border-opacity));
  border-right-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-x-sky-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(7 89 133 / var(--tw-border-opacity));
  border-right-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-x-sky-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(12 74 110 / var(--tw-border-opacity));
  border-right-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-x-blue-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(239 246 255 / var(--tw-border-opacity));
  border-right-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-x-blue-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(219 234 254 / var(--tw-border-opacity));
  border-right-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-x-blue-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(191 219 254 / var(--tw-border-opacity));
  border-right-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-x-blue-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(147 197 253 / var(--tw-border-opacity));
  border-right-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-x-blue-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(96 165 250 / var(--tw-border-opacity));
  border-right-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-x-blue-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(59 130 246 / var(--tw-border-opacity));
  border-right-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-x-blue-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(37 99 235 / var(--tw-border-opacity));
  border-right-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-x-blue-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(29 78 216 / var(--tw-border-opacity));
  border-right-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-x-blue-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 64 175 / var(--tw-border-opacity));
  border-right-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-x-blue-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 58 138 / var(--tw-border-opacity));
  border-right-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-x-indigo-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(238 242 255 / var(--tw-border-opacity));
  border-right-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-x-indigo-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(224 231 255 / var(--tw-border-opacity));
  border-right-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-x-indigo-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(199 210 254 / var(--tw-border-opacity));
  border-right-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-x-indigo-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(165 180 252 / var(--tw-border-opacity));
  border-right-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-x-indigo-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(129 140 248 / var(--tw-border-opacity));
  border-right-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-x-indigo-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(99 102 241 / var(--tw-border-opacity));
  border-right-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-x-indigo-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(79 70 229 / var(--tw-border-opacity));
  border-right-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-x-indigo-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(67 56 202 / var(--tw-border-opacity));
  border-right-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-x-indigo-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(55 48 163 / var(--tw-border-opacity));
  border-right-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-x-indigo-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(49 46 129 / var(--tw-border-opacity));
  border-right-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-x-violet-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 243 255 / var(--tw-border-opacity));
  border-right-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-x-violet-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(237 233 254 / var(--tw-border-opacity));
  border-right-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-x-violet-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(221 214 254 / var(--tw-border-opacity));
  border-right-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-x-violet-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(196 181 253 / var(--tw-border-opacity));
  border-right-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-x-violet-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(167 139 250 / var(--tw-border-opacity));
  border-right-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-x-violet-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(139 92 246 / var(--tw-border-opacity));
  border-right-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-x-violet-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(124 58 237 / var(--tw-border-opacity));
  border-right-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-x-violet-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(109 40 217 / var(--tw-border-opacity));
  border-right-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-x-violet-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(91 33 182 / var(--tw-border-opacity));
  border-right-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-x-violet-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(76 29 149 / var(--tw-border-opacity));
  border-right-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-x-purple-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 245 255 / var(--tw-border-opacity));
  border-right-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-x-purple-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(243 232 255 / var(--tw-border-opacity));
  border-right-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-x-purple-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(233 213 255 / var(--tw-border-opacity));
  border-right-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-x-purple-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(216 180 254 / var(--tw-border-opacity));
  border-right-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-x-purple-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(192 132 252 / var(--tw-border-opacity));
  border-right-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-x-purple-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(168 85 247 / var(--tw-border-opacity));
  border-right-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-x-purple-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(147 51 234 / var(--tw-border-opacity));
  border-right-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-x-purple-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(126 34 206 / var(--tw-border-opacity));
  border-right-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-x-purple-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(107 33 168 / var(--tw-border-opacity));
  border-right-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-x-purple-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(88 28 135 / var(--tw-border-opacity));
  border-right-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-x-fuchsia-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 244 255 / var(--tw-border-opacity));
  border-right-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-x-fuchsia-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 232 255 / var(--tw-border-opacity));
  border-right-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-x-fuchsia-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 208 254 / var(--tw-border-opacity));
  border-right-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-x-fuchsia-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 171 252 / var(--tw-border-opacity));
  border-right-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-x-fuchsia-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(232 121 249 / var(--tw-border-opacity));
  border-right-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-x-fuchsia-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 70 239 / var(--tw-border-opacity));
  border-right-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-x-fuchsia-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(192 38 211 / var(--tw-border-opacity));
  border-right-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-x-fuchsia-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(162 28 175 / var(--tw-border-opacity));
  border-right-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-x-fuchsia-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(134 25 143 / var(--tw-border-opacity));
  border-right-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-x-fuchsia-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(112 26 117 / var(--tw-border-opacity));
  border-right-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-x-pink-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 242 248 / var(--tw-border-opacity));
  border-right-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-x-pink-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 231 243 / var(--tw-border-opacity));
  border-right-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-x-pink-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 207 232 / var(--tw-border-opacity));
  border-right-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-x-pink-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 168 212 / var(--tw-border-opacity));
  border-right-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-x-pink-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 114 182 / var(--tw-border-opacity));
  border-right-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-x-pink-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 72 153 / var(--tw-border-opacity));
  border-right-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-x-pink-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(219 39 119 / var(--tw-border-opacity));
  border-right-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-x-pink-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 24 93 / var(--tw-border-opacity));
  border-right-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-x-pink-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(157 23 77 / var(--tw-border-opacity));
  border-right-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-x-pink-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(131 24 67 / var(--tw-border-opacity));
  border-right-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-x-rose-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 241 242 / var(--tw-border-opacity));
  border-right-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-x-rose-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 228 230 / var(--tw-border-opacity));
  border-right-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-x-rose-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 205 211 / var(--tw-border-opacity));
  border-right-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-x-rose-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 164 175 / var(--tw-border-opacity));
  border-right-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-x-rose-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 113 133 / var(--tw-border-opacity));
  border-right-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-x-rose-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 63 94 / var(--tw-border-opacity));
  border-right-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-x-rose-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(225 29 72 / var(--tw-border-opacity));
  border-right-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-x-rose-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 18 60 / var(--tw-border-opacity));
  border-right-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-x-rose-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(159 18 57 / var(--tw-border-opacity));
  border-right-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-x-rose-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(136 19 55 / var(--tw-border-opacity));
  border-right-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-x-textLgColor {
  border-left-color: var(--text-large-color);
  border-right-color: var(--text-large-color);
}

.border-x-textSmColor {
  border-left-color: var(--text-small-color);
  border-right-color: var(--text-small-color);
}

.border-x-subText {
  border-left-color: var(--sub-text-color);
  border-right-color: var(--sub-text-color);
}

.border-x-navBar-linkActive {
  border-left-color: var(--nav-link-active);
  border-right-color: var(--nav-link-active);
}

.border-x-navBar-linkActiveStripe {
  border-left-color: var(--nav-link-active-stripe);
  border-right-color: var(--nav-link-active-stripe);
}

.border-x-mobileNav-text {
  border-left-color: var(--mobile-text);
  border-right-color: var(--mobile-text);
}

.border-x-mobileNav-textHover {
  border-left-color: var(--mobile-hover-text);
  border-right-color: var(--mobile-hover-text);
}

.border-x-mobileNav-border {
  border-left-color: var(--mobile-border);
  border-right-color: var(--mobile-border);
}

.border-x-aboutMe-smIconBg {
  border-left-color: var(--sm-icon-bg);
  border-right-color: var(--sm-icon-bg);
}

.border-x-aboutMe-aboutMeText {
  border-left-color: var(--aboutme-text);
  border-right-color: var(--aboutme-text);
}

.border-x-aboutMe-alissa {
  border-left-color: var(--alissa);
  border-right-color: var(--alissa);
}

.border-x-projects-text {
  border-left-color: var(--project-text-color);
  border-right-color: var(--project-text-color);
}

.border-x-projects-subText {
  border-left-color: var(--project-sub-text);
  border-right-color: var(--project-sub-text);
}

.border-x-projects-arrow {
  border-left-color: var(--project-arrow);
  border-right-color: var(--project-arrow);
}

.border-x-projects-recentBg {
  border-left-color: var(--recent-project-bg);
  border-right-color: var(--recent-project-bg);
}

.border-x-projects-recentHover {
  border-left-color: var(--recent-project-bg-hover);
  border-right-color: var(--recent-project-bg-hover);
}

.border-x-projects-recentShadow {
  border-left-color: var(--recent-project-shadow);
  border-right-color: var(--recent-project-shadow);
}

.border-x-contact-label {
  border-left-color: var(--label-text);
  border-right-color: var(--label-text);
}

.border-x-contact-send {
  border-left-color: var(--send-btn);
  border-right-color: var(--send-btn);
}

.border-x-contact-sendHover {
  border-left-color: var(--send-btn-hover);
  border-right-color: var(--send-btn-hover);
}

.border-x-blog-lgText {
  border-left-color: var(--blog-lg-text);
  border-right-color: var(--blog-lg-text);
}

.border-x-blog-border {
  border-left-color: var(--blog-input-border);
  border-right-color: var(--blog-input-border);
}

.border-x-blog-tagBg {
  border-left-color: var(--tag-btn-bg);
  border-right-color: var(--tag-btn-bg);
}

.border-x-post-bodyText {
  border-left-color: var(--text-body);
  border-right-color: var(--text-body);
}

.border-x-post-bodyTextLg {
  border-left-color: var(--text-body-lg);
  border-right-color: var(--text-body-lg);
}

.border-x-post-icon {
  border-left-color: var(--icon);
  border-right-color: var(--icon);
}

.border-x-post-iconHover {
  border-left-color: var(--icon-hover);
  border-right-color: var(--icon-hover);
}

.border-x-post-hyperlink {
  border-left-color: var(--hyperlink);
  border-right-color: var(--hyperlink);
}

.border-x-post-hyperlinkHover {
  border-left-color: var(--hyperlink-hover);
  border-right-color: var(--hyperlink-hover);
}

.border-x-post-quote {
  border-left-color: var(--quote);
  border-right-color: var(--quote);
}

.border-x-post-quoteAuthor {
  border-left-color: var(--quote-author);
  border-right-color: var(--quote-author);
}

.border-y-inherit {
  border-top-color: inherit;
  border-bottom-color: inherit;
}

.border-y-current {
  border-top-color: currentColor;
  border-bottom-color: currentColor;
}

.border-y-transparent {
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.border-y-black {
  --tw-border-opacity: 1;
  border-top-color: rgb(0 0 0 / var(--tw-border-opacity));
  border-bottom-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-y-white {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-y-slate-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(248 250 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-y-slate-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(241 245 249 / var(--tw-border-opacity));
  border-bottom-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-y-slate-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(226 232 240 / var(--tw-border-opacity));
  border-bottom-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-y-slate-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(203 213 225 / var(--tw-border-opacity));
  border-bottom-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-y-slate-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(148 163 184 / var(--tw-border-opacity));
  border-bottom-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-y-slate-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(100 116 139 / var(--tw-border-opacity));
  border-bottom-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-y-slate-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(71 85 105 / var(--tw-border-opacity));
  border-bottom-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-y-slate-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(51 65 85 / var(--tw-border-opacity));
  border-bottom-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-y-slate-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 41 59 / var(--tw-border-opacity));
  border-bottom-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-y-slate-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(15 23 42 / var(--tw-border-opacity));
  border-bottom-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-y-gray-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 250 251 / var(--tw-border-opacity));
  border-bottom-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-y-gray-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(243 244 246 / var(--tw-border-opacity));
  border-bottom-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-y-gray-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(229 231 235 / var(--tw-border-opacity));
  border-bottom-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-y-gray-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-bottom-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-y-gray-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(156 163 175 / var(--tw-border-opacity));
  border-bottom-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-y-gray-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(107 114 128 / var(--tw-border-opacity));
  border-bottom-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-y-gray-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(75 85 99 / var(--tw-border-opacity));
  border-bottom-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-y-gray-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(55 65 81 / var(--tw-border-opacity));
  border-bottom-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-y-gray-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(31 41 55 / var(--tw-border-opacity));
  border-bottom-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-y-gray-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(17 24 39 / var(--tw-border-opacity));
  border-bottom-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-y-zinc-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 250 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-y-zinc-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 244 245 / var(--tw-border-opacity));
  border-bottom-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-y-zinc-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(228 228 231 / var(--tw-border-opacity));
  border-bottom-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-y-zinc-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(212 212 216 / var(--tw-border-opacity));
  border-bottom-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-y-zinc-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(161 161 170 / var(--tw-border-opacity));
  border-bottom-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-y-zinc-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(113 113 122 / var(--tw-border-opacity));
  border-bottom-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-y-zinc-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(82 82 91 / var(--tw-border-opacity));
  border-bottom-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-y-zinc-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(63 63 70 / var(--tw-border-opacity));
  border-bottom-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-y-zinc-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(39 39 42 / var(--tw-border-opacity));
  border-bottom-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-y-zinc-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(24 24 27 / var(--tw-border-opacity));
  border-bottom-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-y-neutral-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 250 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-y-neutral-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 245 245 / var(--tw-border-opacity));
  border-bottom-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-y-neutral-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(229 229 229 / var(--tw-border-opacity));
  border-bottom-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-y-neutral-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(212 212 212 / var(--tw-border-opacity));
  border-bottom-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-y-neutral-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(163 163 163 / var(--tw-border-opacity));
  border-bottom-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-y-neutral-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(115 115 115 / var(--tw-border-opacity));
  border-bottom-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-y-neutral-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(82 82 82 / var(--tw-border-opacity));
  border-bottom-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-y-neutral-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(64 64 64 / var(--tw-border-opacity));
  border-bottom-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-y-neutral-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(38 38 38 / var(--tw-border-opacity));
  border-bottom-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-y-neutral-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(23 23 23 / var(--tw-border-opacity));
  border-bottom-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-y-stone-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 249 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-y-stone-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 245 244 / var(--tw-border-opacity));
  border-bottom-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-y-stone-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(231 229 228 / var(--tw-border-opacity));
  border-bottom-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-y-stone-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(214 211 209 / var(--tw-border-opacity));
  border-bottom-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-y-stone-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(168 162 158 / var(--tw-border-opacity));
  border-bottom-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-y-stone-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(120 113 108 / var(--tw-border-opacity));
  border-bottom-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-y-stone-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(87 83 78 / var(--tw-border-opacity));
  border-bottom-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-y-stone-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(68 64 60 / var(--tw-border-opacity));
  border-bottom-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-y-stone-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(41 37 36 / var(--tw-border-opacity));
  border-bottom-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-y-stone-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(28 25 23 / var(--tw-border-opacity));
  border-bottom-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-y-red-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 242 242 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-y-red-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 226 226 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-y-red-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 202 202 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-y-red-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 165 165 / var(--tw-border-opacity));
  border-bottom-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-y-red-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(248 113 113 / var(--tw-border-opacity));
  border-bottom-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-y-red-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(239 68 68 / var(--tw-border-opacity));
  border-bottom-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-y-red-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(220 38 38 / var(--tw-border-opacity));
  border-bottom-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-y-red-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(185 28 28 / var(--tw-border-opacity));
  border-bottom-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-y-red-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(153 27 27 / var(--tw-border-opacity));
  border-bottom-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-y-red-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(127 29 29 / var(--tw-border-opacity));
  border-bottom-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-y-orange-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 247 237 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-y-orange-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 237 213 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-y-orange-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 215 170 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-y-orange-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 186 116 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-y-orange-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 146 60 / var(--tw-border-opacity));
  border-bottom-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-y-orange-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 115 22 / var(--tw-border-opacity));
  border-bottom-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-y-orange-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(234 88 12 / var(--tw-border-opacity));
  border-bottom-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-y-orange-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(194 65 12 / var(--tw-border-opacity));
  border-bottom-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-y-orange-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(154 52 18 / var(--tw-border-opacity));
  border-bottom-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-y-orange-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(124 45 18 / var(--tw-border-opacity));
  border-bottom-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-y-amber-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 251 235 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-y-amber-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 243 199 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-y-amber-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 230 138 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-y-amber-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 211 77 / var(--tw-border-opacity));
  border-bottom-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-y-amber-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 191 36 / var(--tw-border-opacity));
  border-bottom-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-y-amber-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 158 11 / var(--tw-border-opacity));
  border-bottom-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-y-amber-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 119 6 / var(--tw-border-opacity));
  border-bottom-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-y-amber-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(180 83 9 / var(--tw-border-opacity));
  border-bottom-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-y-amber-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(146 64 14 / var(--tw-border-opacity));
  border-bottom-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-y-amber-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(120 53 15 / var(--tw-border-opacity));
  border-bottom-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-y-yellow-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 252 232 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-y-yellow-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 249 195 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-y-yellow-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 240 138 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-y-yellow-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 224 71 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-y-yellow-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 204 21 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-y-yellow-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(234 179 8 / var(--tw-border-opacity));
  border-bottom-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-y-yellow-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(202 138 4 / var(--tw-border-opacity));
  border-bottom-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-y-yellow-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(161 98 7 / var(--tw-border-opacity));
  border-bottom-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-y-yellow-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(133 77 14 / var(--tw-border-opacity));
  border-bottom-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-y-yellow-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(113 63 18 / var(--tw-border-opacity));
  border-bottom-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-y-lime-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(247 254 231 / var(--tw-border-opacity));
  border-bottom-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-y-lime-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 252 203 / var(--tw-border-opacity));
  border-bottom-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-y-lime-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 249 157 / var(--tw-border-opacity));
  border-bottom-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-y-lime-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 242 100 / var(--tw-border-opacity));
  border-bottom-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-y-lime-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(163 230 53 / var(--tw-border-opacity));
  border-bottom-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-y-lime-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(132 204 22 / var(--tw-border-opacity));
  border-bottom-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-y-lime-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(101 163 13 / var(--tw-border-opacity));
  border-bottom-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-y-lime-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(77 124 15 / var(--tw-border-opacity));
  border-bottom-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-y-lime-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(63 98 18 / var(--tw-border-opacity));
  border-bottom-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-y-lime-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(54 83 20 / var(--tw-border-opacity));
  border-bottom-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-y-green-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 253 244 / var(--tw-border-opacity));
  border-bottom-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-y-green-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(220 252 231 / var(--tw-border-opacity));
  border-bottom-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-y-green-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(187 247 208 / var(--tw-border-opacity));
  border-bottom-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-y-green-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(134 239 172 / var(--tw-border-opacity));
  border-bottom-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-y-green-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(74 222 128 / var(--tw-border-opacity));
  border-bottom-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-y-green-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(34 197 94 / var(--tw-border-opacity));
  border-bottom-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-y-green-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 163 74 / var(--tw-border-opacity));
  border-bottom-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-y-green-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(21 128 61 / var(--tw-border-opacity));
  border-bottom-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-y-green-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 101 52 / var(--tw-border-opacity));
  border-bottom-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-y-green-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(20 83 45 / var(--tw-border-opacity));
  border-bottom-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-y-emerald-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 253 245 / var(--tw-border-opacity));
  border-bottom-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-y-emerald-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(209 250 229 / var(--tw-border-opacity));
  border-bottom-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-y-emerald-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(167 243 208 / var(--tw-border-opacity));
  border-bottom-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-y-emerald-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(110 231 183 / var(--tw-border-opacity));
  border-bottom-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-y-emerald-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(52 211 153 / var(--tw-border-opacity));
  border-bottom-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-y-emerald-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(16 185 129 / var(--tw-border-opacity));
  border-bottom-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-y-emerald-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(5 150 105 / var(--tw-border-opacity));
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-y-emerald-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(4 120 87 / var(--tw-border-opacity));
  border-bottom-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-y-emerald-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 95 70 / var(--tw-border-opacity));
  border-bottom-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-y-emerald-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 78 59 / var(--tw-border-opacity));
  border-bottom-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-y-teal-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 253 250 / var(--tw-border-opacity));
  border-bottom-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-y-teal-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(204 251 241 / var(--tw-border-opacity));
  border-bottom-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-y-teal-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(153 246 228 / var(--tw-border-opacity));
  border-bottom-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-y-teal-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(94 234 212 / var(--tw-border-opacity));
  border-bottom-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-y-teal-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(45 212 191 / var(--tw-border-opacity));
  border-bottom-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-y-teal-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(20 184 166 / var(--tw-border-opacity));
  border-bottom-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-y-teal-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(13 148 136 / var(--tw-border-opacity));
  border-bottom-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-y-teal-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(15 118 110 / var(--tw-border-opacity));
  border-bottom-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-y-teal-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(17 94 89 / var(--tw-border-opacity));
  border-bottom-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-y-teal-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(19 78 74 / var(--tw-border-opacity));
  border-bottom-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-y-cyan-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 254 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-y-cyan-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(207 250 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-y-cyan-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(165 243 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-y-cyan-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(103 232 249 / var(--tw-border-opacity));
  border-bottom-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-y-cyan-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(34 211 238 / var(--tw-border-opacity));
  border-bottom-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-y-cyan-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 182 212 / var(--tw-border-opacity));
  border-bottom-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-y-cyan-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(8 145 178 / var(--tw-border-opacity));
  border-bottom-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-y-cyan-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(14 116 144 / var(--tw-border-opacity));
  border-bottom-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-y-cyan-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(21 94 117 / var(--tw-border-opacity));
  border-bottom-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-y-cyan-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 78 99 / var(--tw-border-opacity));
  border-bottom-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-y-sky-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 249 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-y-sky-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(224 242 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-y-sky-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(186 230 253 / var(--tw-border-opacity));
  border-bottom-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-y-sky-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(125 211 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-y-sky-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(56 189 248 / var(--tw-border-opacity));
  border-bottom-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-y-sky-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(14 165 233 / var(--tw-border-opacity));
  border-bottom-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-y-sky-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(2 132 199 / var(--tw-border-opacity));
  border-bottom-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-y-sky-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(3 105 161 / var(--tw-border-opacity));
  border-bottom-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-y-sky-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(7 89 133 / var(--tw-border-opacity));
  border-bottom-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-y-sky-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(12 74 110 / var(--tw-border-opacity));
  border-bottom-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-y-blue-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(239 246 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-y-blue-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(219 234 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-y-blue-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(191 219 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-y-blue-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(147 197 253 / var(--tw-border-opacity));
  border-bottom-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-y-blue-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(96 165 250 / var(--tw-border-opacity));
  border-bottom-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-y-blue-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(59 130 246 / var(--tw-border-opacity));
  border-bottom-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-y-blue-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(37 99 235 / var(--tw-border-opacity));
  border-bottom-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-y-blue-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(29 78 216 / var(--tw-border-opacity));
  border-bottom-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-y-blue-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 64 175 / var(--tw-border-opacity));
  border-bottom-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-y-blue-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 58 138 / var(--tw-border-opacity));
  border-bottom-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-y-indigo-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(238 242 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-y-indigo-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(224 231 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-y-indigo-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(199 210 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-y-indigo-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(165 180 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-y-indigo-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(129 140 248 / var(--tw-border-opacity));
  border-bottom-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-y-indigo-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(99 102 241 / var(--tw-border-opacity));
  border-bottom-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-y-indigo-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(79 70 229 / var(--tw-border-opacity));
  border-bottom-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-y-indigo-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(67 56 202 / var(--tw-border-opacity));
  border-bottom-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-y-indigo-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(55 48 163 / var(--tw-border-opacity));
  border-bottom-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-y-indigo-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(49 46 129 / var(--tw-border-opacity));
  border-bottom-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-y-violet-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 243 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-y-violet-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(237 233 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-y-violet-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(221 214 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-y-violet-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(196 181 253 / var(--tw-border-opacity));
  border-bottom-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-y-violet-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(167 139 250 / var(--tw-border-opacity));
  border-bottom-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-y-violet-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(139 92 246 / var(--tw-border-opacity));
  border-bottom-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-y-violet-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(124 58 237 / var(--tw-border-opacity));
  border-bottom-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-y-violet-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(109 40 217 / var(--tw-border-opacity));
  border-bottom-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-y-violet-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(91 33 182 / var(--tw-border-opacity));
  border-bottom-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-y-violet-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(76 29 149 / var(--tw-border-opacity));
  border-bottom-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-y-purple-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 245 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-y-purple-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(243 232 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-y-purple-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(233 213 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-y-purple-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(216 180 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-y-purple-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(192 132 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-y-purple-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(168 85 247 / var(--tw-border-opacity));
  border-bottom-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-y-purple-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(147 51 234 / var(--tw-border-opacity));
  border-bottom-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-y-purple-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(126 34 206 / var(--tw-border-opacity));
  border-bottom-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-y-purple-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(107 33 168 / var(--tw-border-opacity));
  border-bottom-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-y-purple-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(88 28 135 / var(--tw-border-opacity));
  border-bottom-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-y-fuchsia-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 244 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-y-fuchsia-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 232 255 / var(--tw-border-opacity));
  border-bottom-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-y-fuchsia-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 208 254 / var(--tw-border-opacity));
  border-bottom-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-y-fuchsia-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 171 252 / var(--tw-border-opacity));
  border-bottom-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-y-fuchsia-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(232 121 249 / var(--tw-border-opacity));
  border-bottom-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-y-fuchsia-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 70 239 / var(--tw-border-opacity));
  border-bottom-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-y-fuchsia-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(192 38 211 / var(--tw-border-opacity));
  border-bottom-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-y-fuchsia-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(162 28 175 / var(--tw-border-opacity));
  border-bottom-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-y-fuchsia-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(134 25 143 / var(--tw-border-opacity));
  border-bottom-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-y-fuchsia-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(112 26 117 / var(--tw-border-opacity));
  border-bottom-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-y-pink-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 242 248 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-y-pink-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 231 243 / var(--tw-border-opacity));
  border-bottom-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-y-pink-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 207 232 / var(--tw-border-opacity));
  border-bottom-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-y-pink-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 168 212 / var(--tw-border-opacity));
  border-bottom-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-y-pink-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 114 182 / var(--tw-border-opacity));
  border-bottom-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-y-pink-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 72 153 / var(--tw-border-opacity));
  border-bottom-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-y-pink-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(219 39 119 / var(--tw-border-opacity));
  border-bottom-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-y-pink-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 24 93 / var(--tw-border-opacity));
  border-bottom-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-y-pink-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(157 23 77 / var(--tw-border-opacity));
  border-bottom-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-y-pink-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(131 24 67 / var(--tw-border-opacity));
  border-bottom-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-y-rose-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 241 242 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-y-rose-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 228 230 / var(--tw-border-opacity));
  border-bottom-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-y-rose-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 205 211 / var(--tw-border-opacity));
  border-bottom-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-y-rose-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 164 175 / var(--tw-border-opacity));
  border-bottom-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-y-rose-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 113 133 / var(--tw-border-opacity));
  border-bottom-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-y-rose-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 63 94 / var(--tw-border-opacity));
  border-bottom-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-y-rose-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(225 29 72 / var(--tw-border-opacity));
  border-bottom-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-y-rose-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 18 60 / var(--tw-border-opacity));
  border-bottom-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-y-rose-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(159 18 57 / var(--tw-border-opacity));
  border-bottom-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-y-rose-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(136 19 55 / var(--tw-border-opacity));
  border-bottom-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-y-textLgColor {
  border-top-color: var(--text-large-color);
  border-bottom-color: var(--text-large-color);
}

.border-y-textSmColor {
  border-top-color: var(--text-small-color);
  border-bottom-color: var(--text-small-color);
}

.border-y-subText {
  border-top-color: var(--sub-text-color);
  border-bottom-color: var(--sub-text-color);
}

.border-y-navBar-linkActive {
  border-top-color: var(--nav-link-active);
  border-bottom-color: var(--nav-link-active);
}

.border-y-navBar-linkActiveStripe {
  border-top-color: var(--nav-link-active-stripe);
  border-bottom-color: var(--nav-link-active-stripe);
}

.border-y-mobileNav-text {
  border-top-color: var(--mobile-text);
  border-bottom-color: var(--mobile-text);
}

.border-y-mobileNav-textHover {
  border-top-color: var(--mobile-hover-text);
  border-bottom-color: var(--mobile-hover-text);
}

.border-y-mobileNav-border {
  border-top-color: var(--mobile-border);
  border-bottom-color: var(--mobile-border);
}

.border-y-aboutMe-smIconBg {
  border-top-color: var(--sm-icon-bg);
  border-bottom-color: var(--sm-icon-bg);
}

.border-y-aboutMe-aboutMeText {
  border-top-color: var(--aboutme-text);
  border-bottom-color: var(--aboutme-text);
}

.border-y-aboutMe-alissa {
  border-top-color: var(--alissa);
  border-bottom-color: var(--alissa);
}

.border-y-projects-text {
  border-top-color: var(--project-text-color);
  border-bottom-color: var(--project-text-color);
}

.border-y-projects-subText {
  border-top-color: var(--project-sub-text);
  border-bottom-color: var(--project-sub-text);
}

.border-y-projects-arrow {
  border-top-color: var(--project-arrow);
  border-bottom-color: var(--project-arrow);
}

.border-y-projects-recentBg {
  border-top-color: var(--recent-project-bg);
  border-bottom-color: var(--recent-project-bg);
}

.border-y-projects-recentHover {
  border-top-color: var(--recent-project-bg-hover);
  border-bottom-color: var(--recent-project-bg-hover);
}

.border-y-projects-recentShadow {
  border-top-color: var(--recent-project-shadow);
  border-bottom-color: var(--recent-project-shadow);
}

.border-y-contact-label {
  border-top-color: var(--label-text);
  border-bottom-color: var(--label-text);
}

.border-y-contact-send {
  border-top-color: var(--send-btn);
  border-bottom-color: var(--send-btn);
}

.border-y-contact-sendHover {
  border-top-color: var(--send-btn-hover);
  border-bottom-color: var(--send-btn-hover);
}

.border-y-blog-lgText {
  border-top-color: var(--blog-lg-text);
  border-bottom-color: var(--blog-lg-text);
}

.border-y-blog-border {
  border-top-color: var(--blog-input-border);
  border-bottom-color: var(--blog-input-border);
}

.border-y-blog-tagBg {
  border-top-color: var(--tag-btn-bg);
  border-bottom-color: var(--tag-btn-bg);
}

.border-y-post-bodyText {
  border-top-color: var(--text-body);
  border-bottom-color: var(--text-body);
}

.border-y-post-bodyTextLg {
  border-top-color: var(--text-body-lg);
  border-bottom-color: var(--text-body-lg);
}

.border-y-post-icon {
  border-top-color: var(--icon);
  border-bottom-color: var(--icon);
}

.border-y-post-iconHover {
  border-top-color: var(--icon-hover);
  border-bottom-color: var(--icon-hover);
}

.border-y-post-hyperlink {
  border-top-color: var(--hyperlink);
  border-bottom-color: var(--hyperlink);
}

.border-y-post-hyperlinkHover {
  border-top-color: var(--hyperlink-hover);
  border-bottom-color: var(--hyperlink-hover);
}

.border-y-post-quote {
  border-top-color: var(--quote);
  border-bottom-color: var(--quote);
}

.border-y-post-quoteAuthor {
  border-top-color: var(--quote-author);
  border-bottom-color: var(--quote-author);
}

.border-t-gray-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-t-inherit {
  border-top-color: inherit;
}

.border-t-current {
  border-top-color: currentColor;
}

.border-t-transparent {
  border-top-color: transparent;
}

.border-t-black {
  --tw-border-opacity: 1;
  border-top-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-t-white {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-t-slate-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-t-slate-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-t-slate-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-t-slate-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-t-slate-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-t-slate-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-t-slate-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-t-slate-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-t-slate-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-t-slate-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-t-gray-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-t-gray-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-t-gray-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-t-gray-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-t-gray-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-t-gray-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-t-gray-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-t-gray-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-t-gray-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-t-zinc-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-t-zinc-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-t-zinc-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-t-zinc-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-t-zinc-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-t-zinc-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-t-zinc-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-t-zinc-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-t-zinc-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-t-zinc-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-t-neutral-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-t-neutral-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-t-neutral-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-t-neutral-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-t-neutral-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-t-neutral-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-t-neutral-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-t-neutral-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-t-neutral-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-t-neutral-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-t-stone-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-t-stone-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-t-stone-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-t-stone-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-t-stone-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-t-stone-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-t-stone-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-t-stone-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-t-stone-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-t-stone-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-t-red-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-t-red-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-t-red-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-t-red-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-t-red-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-t-red-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-t-red-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-t-red-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-t-red-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-t-red-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-t-orange-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-t-orange-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-t-orange-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-t-orange-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-t-orange-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-t-orange-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-t-orange-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-t-orange-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-t-orange-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-t-orange-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-t-amber-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-t-amber-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-t-amber-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-t-amber-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-t-amber-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-t-amber-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-t-amber-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-t-amber-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-t-amber-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-t-amber-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-t-yellow-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-t-yellow-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-t-yellow-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-t-yellow-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-t-yellow-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-t-yellow-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-t-yellow-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-t-yellow-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-t-yellow-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-t-yellow-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-t-lime-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-t-lime-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-t-lime-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-t-lime-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-t-lime-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-t-lime-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-t-lime-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-t-lime-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-t-lime-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-t-lime-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-t-green-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-t-green-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-t-green-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-t-green-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-t-green-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-t-green-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-t-green-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-t-green-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-t-green-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-t-green-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-t-emerald-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-t-emerald-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-t-emerald-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-t-emerald-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-t-emerald-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-t-emerald-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-t-emerald-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-t-emerald-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-t-emerald-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-t-emerald-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-t-teal-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-t-teal-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-t-teal-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-t-teal-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-t-teal-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-t-teal-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-t-teal-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-t-teal-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-t-teal-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-t-teal-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-t-cyan-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-t-cyan-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-t-cyan-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-t-cyan-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-t-cyan-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-t-cyan-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-t-cyan-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-t-cyan-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-t-cyan-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-t-cyan-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-t-sky-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-t-sky-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-t-sky-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-t-sky-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-t-sky-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-t-sky-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-t-sky-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-t-sky-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-t-sky-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-t-sky-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-t-blue-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-t-blue-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-t-blue-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-t-blue-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-t-blue-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-t-blue-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-t-blue-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-t-blue-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-t-blue-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-t-blue-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-t-indigo-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-t-indigo-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-t-indigo-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-t-indigo-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-t-indigo-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-t-indigo-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-t-indigo-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-t-indigo-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-t-indigo-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-t-indigo-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-t-violet-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-t-violet-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-t-violet-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-t-violet-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-t-violet-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-t-violet-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-t-violet-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-t-violet-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-t-violet-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-t-violet-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-t-purple-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-t-purple-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-t-purple-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-t-purple-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-t-purple-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-t-purple-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-t-purple-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-t-purple-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-t-purple-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-t-purple-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-t-fuchsia-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-t-fuchsia-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-t-fuchsia-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-t-fuchsia-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-t-fuchsia-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-t-fuchsia-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-t-fuchsia-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-t-fuchsia-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-t-fuchsia-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-t-fuchsia-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-t-pink-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-t-pink-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-t-pink-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-t-pink-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-t-pink-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-t-pink-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-t-pink-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-t-pink-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-t-pink-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-t-pink-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-t-rose-50 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-t-rose-100 {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-t-rose-200 {
  --tw-border-opacity: 1;
  border-top-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-t-rose-300 {
  --tw-border-opacity: 1;
  border-top-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-t-rose-400 {
  --tw-border-opacity: 1;
  border-top-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-t-rose-500 {
  --tw-border-opacity: 1;
  border-top-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-t-rose-600 {
  --tw-border-opacity: 1;
  border-top-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-t-rose-700 {
  --tw-border-opacity: 1;
  border-top-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-t-rose-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-t-rose-900 {
  --tw-border-opacity: 1;
  border-top-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-t-textLgColor {
  border-top-color: var(--text-large-color);
}

.border-t-textSmColor {
  border-top-color: var(--text-small-color);
}

.border-t-subText {
  border-top-color: var(--sub-text-color);
}

.border-t-navBar-linkActive {
  border-top-color: var(--nav-link-active);
}

.border-t-navBar-linkActiveStripe {
  border-top-color: var(--nav-link-active-stripe);
}

.border-t-mobileNav-text {
  border-top-color: var(--mobile-text);
}

.border-t-mobileNav-textHover {
  border-top-color: var(--mobile-hover-text);
}

.border-t-mobileNav-border {
  border-top-color: var(--mobile-border);
}

.border-t-aboutMe-smIconBg {
  border-top-color: var(--sm-icon-bg);
}

.border-t-aboutMe-aboutMeText {
  border-top-color: var(--aboutme-text);
}

.border-t-aboutMe-alissa {
  border-top-color: var(--alissa);
}

.border-t-projects-text {
  border-top-color: var(--project-text-color);
}

.border-t-projects-subText {
  border-top-color: var(--project-sub-text);
}

.border-t-projects-arrow {
  border-top-color: var(--project-arrow);
}

.border-t-projects-recentBg {
  border-top-color: var(--recent-project-bg);
}

.border-t-projects-recentHover {
  border-top-color: var(--recent-project-bg-hover);
}

.border-t-projects-recentShadow {
  border-top-color: var(--recent-project-shadow);
}

.border-t-contact-label {
  border-top-color: var(--label-text);
}

.border-t-contact-send {
  border-top-color: var(--send-btn);
}

.border-t-contact-sendHover {
  border-top-color: var(--send-btn-hover);
}

.border-t-blog-lgText {
  border-top-color: var(--blog-lg-text);
}

.border-t-blog-border {
  border-top-color: var(--blog-input-border);
}

.border-t-blog-tagBg {
  border-top-color: var(--tag-btn-bg);
}

.border-t-post-bodyText {
  border-top-color: var(--text-body);
}

.border-t-post-bodyTextLg {
  border-top-color: var(--text-body-lg);
}

.border-t-post-icon {
  border-top-color: var(--icon);
}

.border-t-post-iconHover {
  border-top-color: var(--icon-hover);
}

.border-t-post-hyperlink {
  border-top-color: var(--hyperlink);
}

.border-t-post-hyperlinkHover {
  border-top-color: var(--hyperlink-hover);
}

.border-t-post-quote {
  border-top-color: var(--quote);
}

.border-t-post-quoteAuthor {
  border-top-color: var(--quote-author);
}

.border-r-inherit {
  border-right-color: inherit;
}

.border-r-current {
  border-right-color: currentColor;
}

.border-r-transparent {
  border-right-color: transparent;
}

.border-r-black {
  --tw-border-opacity: 1;
  border-right-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-r-white {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-r-slate-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-r-slate-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-r-slate-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-r-slate-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-r-slate-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-r-slate-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-r-slate-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-r-slate-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-r-slate-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-r-slate-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-r-gray-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-r-gray-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-r-gray-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-r-gray-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-r-gray-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-r-gray-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-r-gray-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-r-gray-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-r-gray-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-r-gray-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-r-zinc-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-r-zinc-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-r-zinc-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-r-zinc-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-r-zinc-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-r-zinc-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-r-zinc-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-r-zinc-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-r-zinc-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-r-zinc-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-r-neutral-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-r-neutral-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-r-neutral-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-r-neutral-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-r-neutral-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-r-neutral-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-r-neutral-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-r-neutral-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-r-neutral-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-r-neutral-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-r-stone-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-r-stone-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-r-stone-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-r-stone-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-r-stone-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-r-stone-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-r-stone-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-r-stone-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-r-stone-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-r-stone-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-r-red-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-r-red-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-r-red-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-r-red-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-r-red-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-r-red-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-r-red-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-r-red-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-r-red-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-r-red-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-r-orange-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-r-orange-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-r-orange-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-r-orange-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-r-orange-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-r-orange-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-r-orange-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-r-orange-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-r-orange-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-r-orange-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-r-amber-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-r-amber-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-r-amber-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-r-amber-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-r-amber-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-r-amber-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-r-amber-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-r-amber-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-r-amber-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-r-amber-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-r-yellow-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-r-yellow-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-r-yellow-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-r-yellow-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-r-yellow-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-r-yellow-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-r-yellow-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-r-yellow-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-r-yellow-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-r-yellow-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-r-lime-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-r-lime-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-r-lime-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-r-lime-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-r-lime-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-r-lime-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-r-lime-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-r-lime-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-r-lime-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-r-lime-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-r-green-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-r-green-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-r-green-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-r-green-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-r-green-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-r-green-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-r-green-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-r-green-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-r-green-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-r-green-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-r-emerald-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-r-emerald-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-r-emerald-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-r-emerald-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-r-emerald-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-r-emerald-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-r-emerald-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-r-emerald-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-r-emerald-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-r-emerald-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-r-teal-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-r-teal-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-r-teal-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-r-teal-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-r-teal-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-r-teal-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-r-teal-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-r-teal-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-r-teal-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-r-teal-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-r-cyan-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-r-cyan-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-r-cyan-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-r-cyan-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-r-cyan-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-r-cyan-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-r-cyan-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-r-cyan-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-r-cyan-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-r-cyan-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-r-sky-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-r-sky-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-r-sky-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-r-sky-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-r-sky-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-r-sky-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-r-sky-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-r-sky-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-r-sky-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-r-sky-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-r-blue-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-r-blue-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-r-blue-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-r-blue-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-r-blue-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-r-blue-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-r-blue-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-r-blue-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-r-blue-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-r-blue-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-r-indigo-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-r-indigo-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-r-indigo-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-r-indigo-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-r-indigo-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-r-indigo-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-r-indigo-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-r-indigo-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-r-indigo-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-r-indigo-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-r-violet-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-r-violet-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-r-violet-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-r-violet-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-r-violet-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-r-violet-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-r-violet-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-r-violet-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-r-violet-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-r-violet-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-r-purple-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-r-purple-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-r-purple-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-r-purple-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-r-purple-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-r-purple-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-r-purple-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-r-purple-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-r-purple-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-r-purple-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-r-fuchsia-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-r-fuchsia-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-r-fuchsia-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-r-fuchsia-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-r-fuchsia-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-r-fuchsia-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-r-fuchsia-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-r-fuchsia-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-r-fuchsia-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-r-fuchsia-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-r-pink-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-r-pink-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-r-pink-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-r-pink-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-r-pink-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-r-pink-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-r-pink-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-r-pink-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-r-pink-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-r-pink-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-r-rose-50 {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-r-rose-100 {
  --tw-border-opacity: 1;
  border-right-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-r-rose-200 {
  --tw-border-opacity: 1;
  border-right-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-r-rose-300 {
  --tw-border-opacity: 1;
  border-right-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-r-rose-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-r-rose-500 {
  --tw-border-opacity: 1;
  border-right-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-r-rose-600 {
  --tw-border-opacity: 1;
  border-right-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-r-rose-700 {
  --tw-border-opacity: 1;
  border-right-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-r-rose-800 {
  --tw-border-opacity: 1;
  border-right-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-r-rose-900 {
  --tw-border-opacity: 1;
  border-right-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-r-textLgColor {
  border-right-color: var(--text-large-color);
}

.border-r-textSmColor {
  border-right-color: var(--text-small-color);
}

.border-r-subText {
  border-right-color: var(--sub-text-color);
}

.border-r-navBar-linkActive {
  border-right-color: var(--nav-link-active);
}

.border-r-navBar-linkActiveStripe {
  border-right-color: var(--nav-link-active-stripe);
}

.border-r-mobileNav-text {
  border-right-color: var(--mobile-text);
}

.border-r-mobileNav-textHover {
  border-right-color: var(--mobile-hover-text);
}

.border-r-mobileNav-border {
  border-right-color: var(--mobile-border);
}

.border-r-aboutMe-smIconBg {
  border-right-color: var(--sm-icon-bg);
}

.border-r-aboutMe-aboutMeText {
  border-right-color: var(--aboutme-text);
}

.border-r-aboutMe-alissa {
  border-right-color: var(--alissa);
}

.border-r-projects-text {
  border-right-color: var(--project-text-color);
}

.border-r-projects-subText {
  border-right-color: var(--project-sub-text);
}

.border-r-projects-arrow {
  border-right-color: var(--project-arrow);
}

.border-r-projects-recentBg {
  border-right-color: var(--recent-project-bg);
}

.border-r-projects-recentHover {
  border-right-color: var(--recent-project-bg-hover);
}

.border-r-projects-recentShadow {
  border-right-color: var(--recent-project-shadow);
}

.border-r-contact-label {
  border-right-color: var(--label-text);
}

.border-r-contact-send {
  border-right-color: var(--send-btn);
}

.border-r-contact-sendHover {
  border-right-color: var(--send-btn-hover);
}

.border-r-blog-lgText {
  border-right-color: var(--blog-lg-text);
}

.border-r-blog-border {
  border-right-color: var(--blog-input-border);
}

.border-r-blog-tagBg {
  border-right-color: var(--tag-btn-bg);
}

.border-r-post-bodyText {
  border-right-color: var(--text-body);
}

.border-r-post-bodyTextLg {
  border-right-color: var(--text-body-lg);
}

.border-r-post-icon {
  border-right-color: var(--icon);
}

.border-r-post-iconHover {
  border-right-color: var(--icon-hover);
}

.border-r-post-hyperlink {
  border-right-color: var(--hyperlink);
}

.border-r-post-hyperlinkHover {
  border-right-color: var(--hyperlink-hover);
}

.border-r-post-quote {
  border-right-color: var(--quote);
}

.border-r-post-quoteAuthor {
  border-right-color: var(--quote-author);
}

.border-b-inherit {
  border-bottom-color: inherit;
}

.border-b-current {
  border-bottom-color: currentColor;
}

.border-b-transparent {
  border-bottom-color: transparent;
}

.border-b-black {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-b-white {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-b-slate-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-b-slate-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-b-slate-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-b-slate-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-b-slate-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-b-slate-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-b-slate-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-b-slate-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-b-slate-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-b-slate-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-b-gray-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-b-gray-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-b-gray-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-b-gray-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-b-gray-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-b-gray-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-b-gray-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-b-gray-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-b-gray-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-b-gray-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-b-zinc-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-b-zinc-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-b-zinc-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-b-zinc-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-b-zinc-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-b-zinc-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-b-zinc-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-b-zinc-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-b-zinc-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-b-zinc-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-b-neutral-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-b-neutral-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-b-neutral-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-b-neutral-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-b-neutral-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-b-neutral-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-b-neutral-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-b-neutral-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-b-neutral-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-b-neutral-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-b-stone-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-b-stone-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-b-stone-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-b-stone-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-b-stone-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-b-stone-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-b-stone-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-b-stone-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-b-stone-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-b-stone-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-b-red-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-b-red-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-b-red-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-b-red-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-b-red-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-b-red-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-b-red-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-b-red-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-b-red-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-b-red-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-b-orange-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-b-orange-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-b-orange-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-b-orange-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-b-orange-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-b-orange-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-b-orange-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-b-orange-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-b-orange-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-b-orange-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-b-amber-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-b-amber-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-b-amber-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-b-amber-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-b-amber-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-b-amber-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-b-amber-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-b-amber-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-b-amber-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-b-amber-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-b-yellow-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-b-yellow-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-b-yellow-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-b-yellow-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-b-yellow-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-b-yellow-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-b-yellow-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-b-yellow-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-b-yellow-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-b-yellow-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-b-lime-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-b-lime-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-b-lime-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-b-lime-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-b-lime-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-b-lime-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-b-lime-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-b-lime-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-b-lime-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-b-lime-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-b-green-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-b-green-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-b-green-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-b-green-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-b-green-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-b-green-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-b-green-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-b-green-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-b-green-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-b-green-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-b-emerald-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-b-emerald-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-b-emerald-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-b-emerald-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-b-emerald-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-b-emerald-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-b-emerald-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-b-emerald-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-b-emerald-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-b-emerald-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-b-teal-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-b-teal-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-b-teal-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-b-teal-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-b-teal-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-b-teal-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-b-teal-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-b-teal-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-b-teal-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-b-teal-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-b-cyan-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-b-cyan-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-b-cyan-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-b-cyan-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-b-cyan-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-b-cyan-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-b-cyan-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-b-cyan-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-b-cyan-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-b-cyan-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-b-sky-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-b-sky-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-b-sky-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-b-sky-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-b-sky-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-b-sky-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-b-sky-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-b-sky-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-b-sky-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-b-sky-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-b-blue-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-b-blue-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-b-blue-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-b-blue-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-b-blue-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-b-blue-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-b-blue-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-b-blue-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-b-blue-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-b-blue-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-b-indigo-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-b-indigo-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-b-indigo-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-b-indigo-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-b-indigo-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-b-indigo-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-b-indigo-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-b-indigo-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-b-indigo-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-b-indigo-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-b-violet-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-b-violet-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-b-violet-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-b-violet-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-b-violet-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-b-violet-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-b-violet-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-b-violet-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-b-violet-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-b-violet-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-b-purple-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-b-purple-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-b-purple-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-b-purple-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-b-purple-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-b-purple-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-b-purple-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-b-purple-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-b-purple-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-b-purple-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-b-fuchsia-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-b-fuchsia-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-b-fuchsia-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-b-fuchsia-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-b-fuchsia-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-b-fuchsia-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-b-fuchsia-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-b-fuchsia-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-b-fuchsia-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-b-fuchsia-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-b-pink-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-b-pink-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-b-pink-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-b-pink-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-b-pink-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-b-pink-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-b-pink-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-b-pink-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-b-pink-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-b-pink-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-b-rose-50 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-b-rose-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-b-rose-200 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-b-rose-300 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-b-rose-400 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-b-rose-500 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-b-rose-600 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-b-rose-700 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-b-rose-800 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-b-rose-900 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-b-textLgColor {
  border-bottom-color: var(--text-large-color);
}

.border-b-textSmColor {
  border-bottom-color: var(--text-small-color);
}

.border-b-subText {
  border-bottom-color: var(--sub-text-color);
}

.border-b-navBar-linkActive {
  border-bottom-color: var(--nav-link-active);
}

.border-b-navBar-linkActiveStripe {
  border-bottom-color: var(--nav-link-active-stripe);
}

.border-b-mobileNav-text {
  border-bottom-color: var(--mobile-text);
}

.border-b-mobileNav-textHover {
  border-bottom-color: var(--mobile-hover-text);
}

.border-b-mobileNav-border {
  border-bottom-color: var(--mobile-border);
}

.border-b-aboutMe-smIconBg {
  border-bottom-color: var(--sm-icon-bg);
}

.border-b-aboutMe-aboutMeText {
  border-bottom-color: var(--aboutme-text);
}

.border-b-aboutMe-alissa {
  border-bottom-color: var(--alissa);
}

.border-b-projects-text {
  border-bottom-color: var(--project-text-color);
}

.border-b-projects-subText {
  border-bottom-color: var(--project-sub-text);
}

.border-b-projects-arrow {
  border-bottom-color: var(--project-arrow);
}

.border-b-projects-recentBg {
  border-bottom-color: var(--recent-project-bg);
}

.border-b-projects-recentHover {
  border-bottom-color: var(--recent-project-bg-hover);
}

.border-b-projects-recentShadow {
  border-bottom-color: var(--recent-project-shadow);
}

.border-b-contact-label {
  border-bottom-color: var(--label-text);
}

.border-b-contact-send {
  border-bottom-color: var(--send-btn);
}

.border-b-contact-sendHover {
  border-bottom-color: var(--send-btn-hover);
}

.border-b-blog-lgText {
  border-bottom-color: var(--blog-lg-text);
}

.border-b-blog-border {
  border-bottom-color: var(--blog-input-border);
}

.border-b-blog-tagBg {
  border-bottom-color: var(--tag-btn-bg);
}

.border-b-post-bodyText {
  border-bottom-color: var(--text-body);
}

.border-b-post-bodyTextLg {
  border-bottom-color: var(--text-body-lg);
}

.border-b-post-icon {
  border-bottom-color: var(--icon);
}

.border-b-post-iconHover {
  border-bottom-color: var(--icon-hover);
}

.border-b-post-hyperlink {
  border-bottom-color: var(--hyperlink);
}

.border-b-post-hyperlinkHover {
  border-bottom-color: var(--hyperlink-hover);
}

.border-b-post-quote {
  border-bottom-color: var(--quote);
}

.border-b-post-quoteAuthor {
  border-bottom-color: var(--quote-author);
}

.border-l-inherit {
  border-left-color: inherit;
}

.border-l-current {
  border-left-color: currentColor;
}

.border-l-transparent {
  border-left-color: transparent;
}

.border-l-black {
  --tw-border-opacity: 1;
  border-left-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-l-white {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-l-slate-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(248 250 252 / var(--tw-border-opacity));
}

.border-l-slate-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-l-slate-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-l-slate-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(203 213 225 / var(--tw-border-opacity));
}

.border-l-slate-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(148 163 184 / var(--tw-border-opacity));
}

.border-l-slate-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-l-slate-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));
}

.border-l-slate-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(51 65 85 / var(--tw-border-opacity));
}

.border-l-slate-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-l-slate-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(15 23 42 / var(--tw-border-opacity));
}

.border-l-gray-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 250 251 / var(--tw-border-opacity));
}

.border-l-gray-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-l-gray-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-l-gray-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-l-gray-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-l-gray-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-l-gray-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-l-gray-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-l-gray-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(31 41 55 / var(--tw-border-opacity));
}

.border-l-gray-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-l-zinc-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-l-zinc-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 244 245 / var(--tw-border-opacity));
}

.border-l-zinc-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(228 228 231 / var(--tw-border-opacity));
}

.border-l-zinc-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(212 212 216 / var(--tw-border-opacity));
}

.border-l-zinc-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(161 161 170 / var(--tw-border-opacity));
}

.border-l-zinc-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(113 113 122 / var(--tw-border-opacity));
}

.border-l-zinc-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(82 82 91 / var(--tw-border-opacity));
}

.border-l-zinc-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(63 63 70 / var(--tw-border-opacity));
}

.border-l-zinc-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.border-l-zinc-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(24 24 27 / var(--tw-border-opacity));
}

.border-l-neutral-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.border-l-neutral-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-l-neutral-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-l-neutral-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-l-neutral-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-l-neutral-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-l-neutral-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-l-neutral-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.border-l-neutral-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-l-neutral-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(23 23 23 / var(--tw-border-opacity));
}

.border-l-stone-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 250 249 / var(--tw-border-opacity));
}

.border-l-stone-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 245 244 / var(--tw-border-opacity));
}

.border-l-stone-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(231 229 228 / var(--tw-border-opacity));
}

.border-l-stone-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(214 211 209 / var(--tw-border-opacity));
}

.border-l-stone-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(168 162 158 / var(--tw-border-opacity));
}

.border-l-stone-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(120 113 108 / var(--tw-border-opacity));
}

.border-l-stone-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(87 83 78 / var(--tw-border-opacity));
}

.border-l-stone-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(68 64 60 / var(--tw-border-opacity));
}

.border-l-stone-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(41 37 36 / var(--tw-border-opacity));
}

.border-l-stone-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(28 25 23 / var(--tw-border-opacity));
}

.border-l-red-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-l-red-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-l-red-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.border-l-red-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 165 165 / var(--tw-border-opacity));
}

.border-l-red-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-l-red-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-l-red-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.border-l-red-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(185 28 28 / var(--tw-border-opacity));
}

.border-l-red-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.border-l-red-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(127 29 29 / var(--tw-border-opacity));
}

.border-l-orange-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 247 237 / var(--tw-border-opacity));
}

.border-l-orange-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 237 213 / var(--tw-border-opacity));
}

.border-l-orange-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 215 170 / var(--tw-border-opacity));
}

.border-l-orange-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 186 116 / var(--tw-border-opacity));
}

.border-l-orange-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 146 60 / var(--tw-border-opacity));
}

.border-l-orange-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-l-orange-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(234 88 12 / var(--tw-border-opacity));
}

.border-l-orange-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(194 65 12 / var(--tw-border-opacity));
}

.border-l-orange-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(154 52 18 / var(--tw-border-opacity));
}

.border-l-orange-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(124 45 18 / var(--tw-border-opacity));
}

.border-l-amber-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 251 235 / var(--tw-border-opacity));
}

.border-l-amber-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 243 199 / var(--tw-border-opacity));
}

.border-l-amber-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 230 138 / var(--tw-border-opacity));
}

.border-l-amber-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 211 77 / var(--tw-border-opacity));
}

.border-l-amber-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 191 36 / var(--tw-border-opacity));
}

.border-l-amber-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 158 11 / var(--tw-border-opacity));
}

.border-l-amber-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 119 6 / var(--tw-border-opacity));
}

.border-l-amber-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(180 83 9 / var(--tw-border-opacity));
}

.border-l-amber-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(146 64 14 / var(--tw-border-opacity));
}

.border-l-amber-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(120 53 15 / var(--tw-border-opacity));
}

.border-l-yellow-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 252 232 / var(--tw-border-opacity));
}

.border-l-yellow-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 249 195 / var(--tw-border-opacity));
}

.border-l-yellow-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 240 138 / var(--tw-border-opacity));
}

.border-l-yellow-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 224 71 / var(--tw-border-opacity));
}

.border-l-yellow-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-l-yellow-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(234 179 8 / var(--tw-border-opacity));
}

.border-l-yellow-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-l-yellow-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(161 98 7 / var(--tw-border-opacity));
}

.border-l-yellow-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(133 77 14 / var(--tw-border-opacity));
}

.border-l-yellow-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(113 63 18 / var(--tw-border-opacity));
}

.border-l-lime-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(247 254 231 / var(--tw-border-opacity));
}

.border-l-lime-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 252 203 / var(--tw-border-opacity));
}

.border-l-lime-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 249 157 / var(--tw-border-opacity));
}

.border-l-lime-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 242 100 / var(--tw-border-opacity));
}

.border-l-lime-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(163 230 53 / var(--tw-border-opacity));
}

.border-l-lime-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(132 204 22 / var(--tw-border-opacity));
}

.border-l-lime-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(101 163 13 / var(--tw-border-opacity));
}

.border-l-lime-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(77 124 15 / var(--tw-border-opacity));
}

.border-l-lime-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(63 98 18 / var(--tw-border-opacity));
}

.border-l-lime-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(54 83 20 / var(--tw-border-opacity));
}

.border-l-green-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 253 244 / var(--tw-border-opacity));
}

.border-l-green-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(220 252 231 / var(--tw-border-opacity));
}

.border-l-green-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(187 247 208 / var(--tw-border-opacity));
}

.border-l-green-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(134 239 172 / var(--tw-border-opacity));
}

.border-l-green-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(74 222 128 / var(--tw-border-opacity));
}

.border-l-green-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-l-green-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 163 74 / var(--tw-border-opacity));
}

.border-l-green-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-l-green-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-l-green-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(20 83 45 / var(--tw-border-opacity));
}

.border-l-emerald-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 253 245 / var(--tw-border-opacity));
}

.border-l-emerald-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(209 250 229 / var(--tw-border-opacity));
}

.border-l-emerald-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(167 243 208 / var(--tw-border-opacity));
}

.border-l-emerald-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(110 231 183 / var(--tw-border-opacity));
}

.border-l-emerald-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(52 211 153 / var(--tw-border-opacity));
}

.border-l-emerald-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(16 185 129 / var(--tw-border-opacity));
}

.border-l-emerald-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(5 150 105 / var(--tw-border-opacity));
}

.border-l-emerald-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(4 120 87 / var(--tw-border-opacity));
}

.border-l-emerald-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 95 70 / var(--tw-border-opacity));
}

.border-l-emerald-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 78 59 / var(--tw-border-opacity));
}

.border-l-teal-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 253 250 / var(--tw-border-opacity));
}

.border-l-teal-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(204 251 241 / var(--tw-border-opacity));
}

.border-l-teal-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(153 246 228 / var(--tw-border-opacity));
}

.border-l-teal-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-l-teal-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-l-teal-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(20 184 166 / var(--tw-border-opacity));
}

.border-l-teal-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(13 148 136 / var(--tw-border-opacity));
}

.border-l-teal-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(15 118 110 / var(--tw-border-opacity));
}

.border-l-teal-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(17 94 89 / var(--tw-border-opacity));
}

.border-l-teal-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(19 78 74 / var(--tw-border-opacity));
}

.border-l-cyan-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 254 255 / var(--tw-border-opacity));
}

.border-l-cyan-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(207 250 254 / var(--tw-border-opacity));
}

.border-l-cyan-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(165 243 252 / var(--tw-border-opacity));
}

.border-l-cyan-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(103 232 249 / var(--tw-border-opacity));
}

.border-l-cyan-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(34 211 238 / var(--tw-border-opacity));
}

.border-l-cyan-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(6 182 212 / var(--tw-border-opacity));
}

.border-l-cyan-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(8 145 178 / var(--tw-border-opacity));
}

.border-l-cyan-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(14 116 144 / var(--tw-border-opacity));
}

.border-l-cyan-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(21 94 117 / var(--tw-border-opacity));
}

.border-l-cyan-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(22 78 99 / var(--tw-border-opacity));
}

.border-l-sky-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 249 255 / var(--tw-border-opacity));
}

.border-l-sky-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(224 242 254 / var(--tw-border-opacity));
}

.border-l-sky-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(186 230 253 / var(--tw-border-opacity));
}

.border-l-sky-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(125 211 252 / var(--tw-border-opacity));
}

.border-l-sky-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(56 189 248 / var(--tw-border-opacity));
}

.border-l-sky-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(14 165 233 / var(--tw-border-opacity));
}

.border-l-sky-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(2 132 199 / var(--tw-border-opacity));
}

.border-l-sky-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(3 105 161 / var(--tw-border-opacity));
}

.border-l-sky-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(7 89 133 / var(--tw-border-opacity));
}

.border-l-sky-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(12 74 110 / var(--tw-border-opacity));
}

.border-l-blue-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(239 246 255 / var(--tw-border-opacity));
}

.border-l-blue-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(219 234 254 / var(--tw-border-opacity));
}

.border-l-blue-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(191 219 254 / var(--tw-border-opacity));
}

.border-l-blue-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-l-blue-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(96 165 250 / var(--tw-border-opacity));
}

.border-l-blue-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-l-blue-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.border-l-blue-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-l-blue-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-l-blue-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(30 58 138 / var(--tw-border-opacity));
}

.border-l-indigo-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(238 242 255 / var(--tw-border-opacity));
}

.border-l-indigo-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(224 231 255 / var(--tw-border-opacity));
}

.border-l-indigo-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(199 210 254 / var(--tw-border-opacity));
}

.border-l-indigo-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.border-l-indigo-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.border-l-indigo-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(99 102 241 / var(--tw-border-opacity));
}

.border-l-indigo-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(79 70 229 / var(--tw-border-opacity));
}

.border-l-indigo-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(67 56 202 / var(--tw-border-opacity));
}

.border-l-indigo-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(55 48 163 / var(--tw-border-opacity));
}

.border-l-indigo-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(49 46 129 / var(--tw-border-opacity));
}

.border-l-violet-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 243 255 / var(--tw-border-opacity));
}

.border-l-violet-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(237 233 254 / var(--tw-border-opacity));
}

.border-l-violet-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(221 214 254 / var(--tw-border-opacity));
}

.border-l-violet-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(196 181 253 / var(--tw-border-opacity));
}

.border-l-violet-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(167 139 250 / var(--tw-border-opacity));
}

.border-l-violet-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(139 92 246 / var(--tw-border-opacity));
}

.border-l-violet-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(124 58 237 / var(--tw-border-opacity));
}

.border-l-violet-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(109 40 217 / var(--tw-border-opacity));
}

.border-l-violet-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(91 33 182 / var(--tw-border-opacity));
}

.border-l-violet-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(76 29 149 / var(--tw-border-opacity));
}

.border-l-purple-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 245 255 / var(--tw-border-opacity));
}

.border-l-purple-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.border-l-purple-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(233 213 255 / var(--tw-border-opacity));
}

.border-l-purple-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(216 180 254 / var(--tw-border-opacity));
}

.border-l-purple-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.border-l-purple-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.border-l-purple-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(147 51 234 / var(--tw-border-opacity));
}

.border-l-purple-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(126 34 206 / var(--tw-border-opacity));
}

.border-l-purple-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(107 33 168 / var(--tw-border-opacity));
}

.border-l-purple-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(88 28 135 / var(--tw-border-opacity));
}

.border-l-fuchsia-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 244 255 / var(--tw-border-opacity));
}

.border-l-fuchsia-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(250 232 255 / var(--tw-border-opacity));
}

.border-l-fuchsia-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(245 208 254 / var(--tw-border-opacity));
}

.border-l-fuchsia-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(240 171 252 / var(--tw-border-opacity));
}

.border-l-fuchsia-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(232 121 249 / var(--tw-border-opacity));
}

.border-l-fuchsia-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(217 70 239 / var(--tw-border-opacity));
}

.border-l-fuchsia-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(192 38 211 / var(--tw-border-opacity));
}

.border-l-fuchsia-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(162 28 175 / var(--tw-border-opacity));
}

.border-l-fuchsia-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(134 25 143 / var(--tw-border-opacity));
}

.border-l-fuchsia-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(112 26 117 / var(--tw-border-opacity));
}

.border-l-pink-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 242 248 / var(--tw-border-opacity));
}

.border-l-pink-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(252 231 243 / var(--tw-border-opacity));
}

.border-l-pink-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 207 232 / var(--tw-border-opacity));
}

.border-l-pink-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(249 168 212 / var(--tw-border-opacity));
}

.border-l-pink-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 114 182 / var(--tw-border-opacity));
}

.border-l-pink-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(236 72 153 / var(--tw-border-opacity));
}

.border-l-pink-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(219 39 119 / var(--tw-border-opacity));
}

.border-l-pink-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-l-pink-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.border-l-pink-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-l-rose-50 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 241 242 / var(--tw-border-opacity));
}

.border-l-rose-100 {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 228 230 / var(--tw-border-opacity));
}

.border-l-rose-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 205 211 / var(--tw-border-opacity));
}

.border-l-rose-300 {
  --tw-border-opacity: 1;
  border-left-color: rgb(253 164 175 / var(--tw-border-opacity));
}

.border-l-rose-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(251 113 133 / var(--tw-border-opacity));
}

.border-l-rose-500 {
  --tw-border-opacity: 1;
  border-left-color: rgb(244 63 94 / var(--tw-border-opacity));
}

.border-l-rose-600 {
  --tw-border-opacity: 1;
  border-left-color: rgb(225 29 72 / var(--tw-border-opacity));
}

.border-l-rose-700 {
  --tw-border-opacity: 1;
  border-left-color: rgb(190 18 60 / var(--tw-border-opacity));
}

.border-l-rose-800 {
  --tw-border-opacity: 1;
  border-left-color: rgb(159 18 57 / var(--tw-border-opacity));
}

.border-l-rose-900 {
  --tw-border-opacity: 1;
  border-left-color: rgb(136 19 55 / var(--tw-border-opacity));
}

.border-l-textLgColor {
  border-left-color: var(--text-large-color);
}

.border-l-textSmColor {
  border-left-color: var(--text-small-color);
}

.border-l-subText {
  border-left-color: var(--sub-text-color);
}

.border-l-navBar-linkActive {
  border-left-color: var(--nav-link-active);
}

.border-l-navBar-linkActiveStripe {
  border-left-color: var(--nav-link-active-stripe);
}

.border-l-mobileNav-text {
  border-left-color: var(--mobile-text);
}

.border-l-mobileNav-textHover {
  border-left-color: var(--mobile-hover-text);
}

.border-l-mobileNav-border {
  border-left-color: var(--mobile-border);
}

.border-l-aboutMe-smIconBg {
  border-left-color: var(--sm-icon-bg);
}

.border-l-aboutMe-aboutMeText {
  border-left-color: var(--aboutme-text);
}

.border-l-aboutMe-alissa {
  border-left-color: var(--alissa);
}

.border-l-projects-text {
  border-left-color: var(--project-text-color);
}

.border-l-projects-subText {
  border-left-color: var(--project-sub-text);
}

.border-l-projects-arrow {
  border-left-color: var(--project-arrow);
}

.border-l-projects-recentBg {
  border-left-color: var(--recent-project-bg);
}

.border-l-projects-recentHover {
  border-left-color: var(--recent-project-bg-hover);
}

.border-l-projects-recentShadow {
  border-left-color: var(--recent-project-shadow);
}

.border-l-contact-label {
  border-left-color: var(--label-text);
}

.border-l-contact-send {
  border-left-color: var(--send-btn);
}

.border-l-contact-sendHover {
  border-left-color: var(--send-btn-hover);
}

.border-l-blog-lgText {
  border-left-color: var(--blog-lg-text);
}

.border-l-blog-border {
  border-left-color: var(--blog-input-border);
}

.border-l-blog-tagBg {
  border-left-color: var(--tag-btn-bg);
}

.border-l-post-bodyText {
  border-left-color: var(--text-body);
}

.border-l-post-bodyTextLg {
  border-left-color: var(--text-body-lg);
}

.border-l-post-icon {
  border-left-color: var(--icon);
}

.border-l-post-iconHover {
  border-left-color: var(--icon-hover);
}

.border-l-post-hyperlink {
  border-left-color: var(--hyperlink);
}

.border-l-post-hyperlinkHover {
  border-left-color: var(--hyperlink-hover);
}

.border-l-post-quote {
  border-left-color: var(--quote);
}

.border-l-post-quoteAuthor {
  border-left-color: var(--quote-author);
}

.border-opacity-0 {
  --tw-border-opacity: 0;
}

.border-opacity-5 {
  --tw-border-opacity: 0.05;
}

.border-opacity-10 {
  --tw-border-opacity: 0.1;
}

.border-opacity-20 {
  --tw-border-opacity: 0.2;
}

.border-opacity-25 {
  --tw-border-opacity: 0.25;
}

.border-opacity-30 {
  --tw-border-opacity: 0.3;
}

.border-opacity-40 {
  --tw-border-opacity: 0.4;
}

.border-opacity-50 {
  --tw-border-opacity: 0.5;
}

.border-opacity-60 {
  --tw-border-opacity: 0.6;
}

.border-opacity-70 {
  --tw-border-opacity: 0.7;
}

.border-opacity-75 {
  --tw-border-opacity: 0.75;
}

.border-opacity-80 {
  --tw-border-opacity: 0.8;
}

.border-opacity-90 {
  --tw-border-opacity: 0.9;
}

.border-opacity-95 {
  --tw-border-opacity: 0.95;
}

.border-opacity-100 {
  --tw-border-opacity: 1;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}

.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-blog-tagBg {
  background-color: var(--tag-btn-bg);
}

.bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-rose-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 63 94 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-aboutMe-smIconBg {
  background-color: var(--sm-icon-bg);
}

.bg-zinc-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}

.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-contact-send {
  background-color: var(--send-btn);
}

.bg-indigo-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(129 140 248 / var(--tw-bg-opacity));
}

.bg-projects-recentBg {
  background-color: var(--recent-project-bg);
}

.bg-inherit {
  background-color: inherit;
}

.bg-current {
  background-color: currentColor;
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}

.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}

.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}

.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}

.bg-slate-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}

.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}

.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-zinc-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.bg-zinc-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.bg-zinc-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(228 228 231 / var(--tw-bg-opacity));
}

.bg-zinc-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 216 / var(--tw-bg-opacity));
}

.bg-zinc-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 161 170 / var(--tw-bg-opacity));
}

.bg-zinc-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(113 113 122 / var(--tw-bg-opacity));
}

.bg-zinc-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}

.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.bg-zinc-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}

.bg-neutral-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-neutral-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}

.bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.bg-neutral-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(163 163 163 / var(--tw-bg-opacity));
}

.bg-neutral-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(115 115 115 / var(--tw-bg-opacity));
}

.bg-neutral-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.bg-neutral-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.bg-neutral-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}

.bg-stone-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 249 / var(--tw-bg-opacity));
}

.bg-stone-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 244 / var(--tw-bg-opacity));
}

.bg-stone-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(231 229 228 / var(--tw-bg-opacity));
}

.bg-stone-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 211 209 / var(--tw-bg-opacity));
}

.bg-stone-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 162 158 / var(--tw-bg-opacity));
}

.bg-stone-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(120 113 108 / var(--tw-bg-opacity));
}

.bg-stone-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(87 83 78 / var(--tw-bg-opacity));
}

.bg-stone-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(68 64 60 / var(--tw-bg-opacity));
}

.bg-stone-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(41 37 36 / var(--tw-bg-opacity));
}

.bg-stone-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 25 23 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}

.bg-red-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity));
}

.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}

.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}

.bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity));
}

.bg-red-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(127 29 29 / var(--tw-bg-opacity));
}

.bg-orange-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 247 237 / var(--tw-bg-opacity));
}

.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
}

.bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 215 170 / var(--tw-bg-opacity));
}

.bg-orange-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
}

.bg-orange-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 146 60 / var(--tw-bg-opacity));
}

.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
}

.bg-orange-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity));
}

.bg-orange-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 65 12 / var(--tw-bg-opacity));
}

.bg-orange-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(154 52 18 / var(--tw-bg-opacity));
}

.bg-orange-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(124 45 18 / var(--tw-bg-opacity));
}

.bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity));
}

.bg-amber-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity));
}

.bg-amber-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 230 138 / var(--tw-bg-opacity));
}

.bg-amber-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 211 77 / var(--tw-bg-opacity));
}

.bg-amber-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 191 36 / var(--tw-bg-opacity));
}

.bg-amber-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 158 11 / var(--tw-bg-opacity));
}

.bg-amber-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(217 119 6 / var(--tw-bg-opacity));
}

.bg-amber-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(180 83 9 / var(--tw-bg-opacity));
}

.bg-amber-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(146 64 14 / var(--tw-bg-opacity));
}

.bg-amber-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(120 53 15 / var(--tw-bg-opacity));
}

.bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity));
}

.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}

.bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity));
}

.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity));
}

.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}

.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}

.bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity));
}

.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 98 7 / var(--tw-bg-opacity));
}

.bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(133 77 14 / var(--tw-bg-opacity));
}

.bg-yellow-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(113 63 18 / var(--tw-bg-opacity));
}

.bg-lime-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(247 254 231 / var(--tw-bg-opacity));
}

.bg-lime-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 252 203 / var(--tw-bg-opacity));
}

.bg-lime-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(217 249 157 / var(--tw-bg-opacity));
}

.bg-lime-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(190 242 100 / var(--tw-bg-opacity));
}

.bg-lime-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(163 230 53 / var(--tw-bg-opacity));
}

.bg-lime-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(132 204 22 / var(--tw-bg-opacity));
}

.bg-lime-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(101 163 13 / var(--tw-bg-opacity));
}

.bg-lime-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(77 124 15 / var(--tw-bg-opacity));
}

.bg-lime-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 98 18 / var(--tw-bg-opacity));
}

.bg-lime-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(54 83 20 / var(--tw-bg-opacity));
}

.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 253 244 / var(--tw-bg-opacity));
}

.bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity));
}

.bg-green-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(134 239 172 / var(--tw-bg-opacity));
}

.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}

.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}

.bg-green-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 83 45 / var(--tw-bg-opacity));
}

.bg-emerald-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 253 245 / var(--tw-bg-opacity));
}

.bg-emerald-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}

.bg-emerald-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(167 243 208 / var(--tw-bg-opacity));
}

.bg-emerald-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(110 231 183 / var(--tw-bg-opacity));
}

.bg-emerald-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity));
}

.bg-emerald-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}

.bg-emerald-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 150 105 / var(--tw-bg-opacity));
}

.bg-emerald-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 120 87 / var(--tw-bg-opacity));
}

.bg-emerald-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 95 70 / var(--tw-bg-opacity));
}

.bg-emerald-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 78 59 / var(--tw-bg-opacity));
}

.bg-teal-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 253 250 / var(--tw-bg-opacity));
}

.bg-teal-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(204 251 241 / var(--tw-bg-opacity));
}

.bg-teal-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 246 228 / var(--tw-bg-opacity));
}

.bg-teal-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(94 234 212 / var(--tw-bg-opacity));
}

.bg-teal-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(45 212 191 / var(--tw-bg-opacity));
}

.bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 184 166 / var(--tw-bg-opacity));
}

.bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(13 148 136 / var(--tw-bg-opacity));
}

.bg-teal-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 118 110 / var(--tw-bg-opacity));
}

.bg-teal-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 94 89 / var(--tw-bg-opacity));
}

.bg-teal-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(19 78 74 / var(--tw-bg-opacity));
}

.bg-cyan-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 254 255 / var(--tw-bg-opacity));
}

.bg-cyan-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(207 250 254 / var(--tw-bg-opacity));
}

.bg-cyan-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(165 243 252 / var(--tw-bg-opacity));
}

.bg-cyan-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(103 232 249 / var(--tw-bg-opacity));
}

.bg-cyan-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 211 238 / var(--tw-bg-opacity));
}

.bg-cyan-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity));
}

.bg-cyan-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(8 145 178 / var(--tw-bg-opacity));
}

.bg-cyan-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 116 144 / var(--tw-bg-opacity));
}

.bg-cyan-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 94 117 / var(--tw-bg-opacity));
}

.bg-cyan-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 78 99 / var(--tw-bg-opacity));
}

.bg-sky-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 249 255 / var(--tw-bg-opacity));
}

.bg-sky-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 242 254 / var(--tw-bg-opacity));
}

.bg-sky-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(186 230 253 / var(--tw-bg-opacity));
}

.bg-sky-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(125 211 252 / var(--tw-bg-opacity));
}

.bg-sky-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-sky-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 165 233 / var(--tw-bg-opacity));
}

.bg-sky-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(2 132 199 / var(--tw-bg-opacity));
}

.bg-sky-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 105 161 / var(--tw-bg-opacity));
}

.bg-sky-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(7 89 133 / var(--tw-bg-opacity));
}

.bg-sky-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(12 74 110 / var(--tw-bg-opacity));
}

.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
}

.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}

.bg-blue-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity));
}

.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
}

.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}

.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}

.bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(199 210 254 / var(--tw-bg-opacity));
}

.bg-indigo-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(165 180 252 / var(--tw-bg-opacity));
}

.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}

.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}

.bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 48 163 / var(--tw-bg-opacity));
}

.bg-indigo-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 46 129 / var(--tw-bg-opacity));
}

.bg-violet-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 243 255 / var(--tw-bg-opacity));
}

.bg-violet-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 233 254 / var(--tw-bg-opacity));
}

.bg-violet-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(221 214 254 / var(--tw-bg-opacity));
}

.bg-violet-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(196 181 253 / var(--tw-bg-opacity));
}

.bg-violet-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(167 139 250 / var(--tw-bg-opacity));
}

.bg-violet-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(139 92 246 / var(--tw-bg-opacity));
}

.bg-violet-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(124 58 237 / var(--tw-bg-opacity));
}

.bg-violet-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(109 40 217 / var(--tw-bg-opacity));
}

.bg-violet-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(91 33 182 / var(--tw-bg-opacity));
}

.bg-violet-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(76 29 149 / var(--tw-bg-opacity));
}

.bg-purple-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 245 255 / var(--tw-bg-opacity));
}

.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 232 255 / var(--tw-bg-opacity));
}

.bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(233 213 255 / var(--tw-bg-opacity));
}

.bg-purple-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(216 180 254 / var(--tw-bg-opacity));
}

.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}

.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}

.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity));
}

.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 34 206 / var(--tw-bg-opacity));
}

.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity));
}

.bg-purple-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 28 135 / var(--tw-bg-opacity));
}

.bg-fuchsia-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 244 255 / var(--tw-bg-opacity));
}

.bg-fuchsia-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 232 255 / var(--tw-bg-opacity));
}

.bg-fuchsia-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 208 254 / var(--tw-bg-opacity));
}

.bg-fuchsia-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 171 252 / var(--tw-bg-opacity));
}

.bg-fuchsia-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(232 121 249 / var(--tw-bg-opacity));
}

.bg-fuchsia-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(217 70 239 / var(--tw-bg-opacity));
}

.bg-fuchsia-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(192 38 211 / var(--tw-bg-opacity));
}

.bg-fuchsia-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(162 28 175 / var(--tw-bg-opacity));
}

.bg-fuchsia-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(134 25 143 / var(--tw-bg-opacity));
}

.bg-fuchsia-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(112 26 117 / var(--tw-bg-opacity));
}

.bg-pink-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
}

.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 231 243 / var(--tw-bg-opacity));
}

.bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity));
}

.bg-pink-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 168 212 / var(--tw-bg-opacity));
}

.bg-pink-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 114 182 / var(--tw-bg-opacity));
}

.bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 72 153 / var(--tw-bg-opacity));
}

.bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 39 119 / var(--tw-bg-opacity));
}

.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(190 24 93 / var(--tw-bg-opacity));
}

.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

.bg-pink-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(131 24 67 / var(--tw-bg-opacity));
}

.bg-rose-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 241 242 / var(--tw-bg-opacity));
}

.bg-rose-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 230 / var(--tw-bg-opacity));
}

.bg-rose-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 205 211 / var(--tw-bg-opacity));
}

.bg-rose-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 164 175 / var(--tw-bg-opacity));
}

.bg-rose-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 113 133 / var(--tw-bg-opacity));
}

.bg-rose-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 29 72 / var(--tw-bg-opacity));
}

.bg-rose-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(190 18 60 / var(--tw-bg-opacity));
}

.bg-rose-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 18 57 / var(--tw-bg-opacity));
}

.bg-rose-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(136 19 55 / var(--tw-bg-opacity));
}

.bg-textLgColor {
  background-color: var(--text-large-color);
}

.bg-textSmColor {
  background-color: var(--text-small-color);
}

.bg-subText {
  background-color: var(--sub-text-color);
}

.bg-navBar-linkActive {
  background-color: var(--nav-link-active);
}

.bg-navBar-linkActiveStripe {
  background-color: var(--nav-link-active-stripe);
}

.bg-mobileNav-text {
  background-color: var(--mobile-text);
}

.bg-mobileNav-textHover {
  background-color: var(--mobile-hover-text);
}

.bg-mobileNav-border {
  background-color: var(--mobile-border);
}

.bg-aboutMe-aboutMeText {
  background-color: var(--aboutme-text);
}

.bg-aboutMe-alissa {
  background-color: var(--alissa);
}

.bg-projects-text {
  background-color: var(--project-text-color);
}

.bg-projects-subText {
  background-color: var(--project-sub-text);
}

.bg-projects-arrow {
  background-color: var(--project-arrow);
}

.bg-projects-recentHover {
  background-color: var(--recent-project-bg-hover);
}

.bg-projects-recentShadow {
  background-color: var(--recent-project-shadow);
}

.bg-contact-label {
  background-color: var(--label-text);
}

.bg-contact-sendHover {
  background-color: var(--send-btn-hover);
}

.bg-blog-lgText {
  background-color: var(--blog-lg-text);
}

.bg-blog-border {
  background-color: var(--blog-input-border);
}

.bg-post-bodyText {
  background-color: var(--text-body);
}

.bg-post-bodyTextLg {
  background-color: var(--text-body-lg);
}

.bg-post-icon {
  background-color: var(--icon);
}

.bg-post-iconHover {
  background-color: var(--icon-hover);
}

.bg-post-hyperlink {
  background-color: var(--hyperlink);
}

.bg-post-hyperlinkHover {
  background-color: var(--hyperlink-hover);
}

.bg-post-quote {
  background-color: var(--quote);
}

.bg-post-quoteAuthor {
  background-color: var(--quote-author);
}

.bg-opacity-0 {
  --tw-bg-opacity: 0;
}

.bg-opacity-5 {
  --tw-bg-opacity: 0.05;
}

.bg-opacity-10 {
  --tw-bg-opacity: 0.1;
}

.bg-opacity-20 {
  --tw-bg-opacity: 0.2;
}

.bg-opacity-25 {
  --tw-bg-opacity: 0.25;
}

.bg-opacity-30 {
  --tw-bg-opacity: 0.3;
}

.bg-opacity-40 {
  --tw-bg-opacity: 0.4;
}

.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

.bg-opacity-60 {
  --tw-bg-opacity: 0.6;
}

.bg-opacity-70 {
  --tw-bg-opacity: 0.7;
}

.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}

.bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}

.bg-opacity-90 {
  --tw-bg-opacity: 0.9;
}

.bg-opacity-95 {
  --tw-bg-opacity: 0.95;
}

.bg-opacity-100 {
  --tw-bg-opacity: 1;
}

.bg-none {
  background-image: none;
}

.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}

.bg-gradient-to-tr {
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.bg-gradient-to-bl {
  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
}

.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}

.bg-gradient-to-tl {
  background-image: linear-gradient(to top left, var(--tw-gradient-stops));
}

.from-inherit {
  --tw-gradient-from: inherit;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-current {
  --tw-gradient-from: currentColor;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-transparent {
  --tw-gradient-from: transparent;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(0 0 0 / 0));
}

.from-black {
  --tw-gradient-from: #000;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(0 0 0 / 0));
}

.from-white {
  --tw-gradient-from: #fff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-slate-50 {
  --tw-gradient-from: #f8fafc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(248 250 252 / 0));
}

.from-slate-100 {
  --tw-gradient-from: #f1f5f9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(241 245 249 / 0));
}

.from-slate-200 {
  --tw-gradient-from: #e2e8f0;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(226 232 240 / 0));
}

.from-slate-300 {
  --tw-gradient-from: #cbd5e1;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(203 213 225 / 0));
}

.from-slate-400 {
  --tw-gradient-from: #94a3b8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(148 163 184 / 0));
}

.from-slate-500 {
  --tw-gradient-from: #64748b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(100 116 139 / 0));
}

.from-slate-600 {
  --tw-gradient-from: #475569;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(71 85 105 / 0));
}

.from-slate-700 {
  --tw-gradient-from: #334155;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(51 65 85 / 0));
}

.from-slate-800 {
  --tw-gradient-from: #1e293b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(30 41 59 / 0));
}

.from-slate-900 {
  --tw-gradient-from: #0f172a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(15 23 42 / 0));
}

.from-gray-50 {
  --tw-gradient-from: #f9fafb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(249 250 251 / 0));
}

.from-gray-100 {
  --tw-gradient-from: #f3f4f6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(243 244 246 / 0));
}

.from-gray-200 {
  --tw-gradient-from: #e5e7eb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(229 231 235 / 0));
}

.from-gray-300 {
  --tw-gradient-from: #d1d5db;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(209 213 219 / 0));
}

.from-gray-400 {
  --tw-gradient-from: #9ca3af;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(156 163 175 / 0));
}

.from-gray-500 {
  --tw-gradient-from: #6b7280;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(107 114 128 / 0));
}

.from-gray-600 {
  --tw-gradient-from: #4b5563;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(75 85 99 / 0));
}

.from-gray-700 {
  --tw-gradient-from: #374151;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(55 65 81 / 0));
}

.from-gray-800 {
  --tw-gradient-from: #1f2937;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(31 41 55 / 0));
}

.from-gray-900 {
  --tw-gradient-from: #111827;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(17 24 39 / 0));
}

.from-zinc-50 {
  --tw-gradient-from: #fafafa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 250 250 / 0));
}

.from-zinc-100 {
  --tw-gradient-from: #f4f4f5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(244 244 245 / 0));
}

.from-zinc-200 {
  --tw-gradient-from: #e4e4e7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(228 228 231 / 0));
}

.from-zinc-300 {
  --tw-gradient-from: #d4d4d8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(212 212 216 / 0));
}

.from-zinc-400 {
  --tw-gradient-from: #a1a1aa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(161 161 170 / 0));
}

.from-zinc-500 {
  --tw-gradient-from: #71717a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(113 113 122 / 0));
}

.from-zinc-600 {
  --tw-gradient-from: #52525b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(82 82 91 / 0));
}

.from-zinc-700 {
  --tw-gradient-from: #3f3f46;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(63 63 70 / 0));
}

.from-zinc-800 {
  --tw-gradient-from: #27272a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(39 39 42 / 0));
}

.from-zinc-900 {
  --tw-gradient-from: #18181b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(24 24 27 / 0));
}

.from-neutral-50 {
  --tw-gradient-from: #fafafa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 250 250 / 0));
}

.from-neutral-100 {
  --tw-gradient-from: #f5f5f5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(245 245 245 / 0));
}

.from-neutral-200 {
  --tw-gradient-from: #e5e5e5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(229 229 229 / 0));
}

.from-neutral-300 {
  --tw-gradient-from: #d4d4d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(212 212 212 / 0));
}

.from-neutral-400 {
  --tw-gradient-from: #a3a3a3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(163 163 163 / 0));
}

.from-neutral-500 {
  --tw-gradient-from: #737373;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(115 115 115 / 0));
}

.from-neutral-600 {
  --tw-gradient-from: #525252;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(82 82 82 / 0));
}

.from-neutral-700 {
  --tw-gradient-from: #404040;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(64 64 64 / 0));
}

.from-neutral-800 {
  --tw-gradient-from: #262626;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(38 38 38 / 0));
}

.from-neutral-900 {
  --tw-gradient-from: #171717;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(23 23 23 / 0));
}

.from-stone-50 {
  --tw-gradient-from: #fafaf9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 250 249 / 0));
}

.from-stone-100 {
  --tw-gradient-from: #f5f5f4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(245 245 244 / 0));
}

.from-stone-200 {
  --tw-gradient-from: #e7e5e4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(231 229 228 / 0));
}

.from-stone-300 {
  --tw-gradient-from: #d6d3d1;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(214 211 209 / 0));
}

.from-stone-400 {
  --tw-gradient-from: #a8a29e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 162 158 / 0));
}

.from-stone-500 {
  --tw-gradient-from: #78716c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(120 113 108 / 0));
}

.from-stone-600 {
  --tw-gradient-from: #57534e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(87 83 78 / 0));
}

.from-stone-700 {
  --tw-gradient-from: #44403c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(68 64 60 / 0));
}

.from-stone-800 {
  --tw-gradient-from: #292524;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(41 37 36 / 0));
}

.from-stone-900 {
  --tw-gradient-from: #1c1917;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(28 25 23 / 0));
}

.from-red-50 {
  --tw-gradient-from: #fef2f2;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 242 242 / 0));
}

.from-red-100 {
  --tw-gradient-from: #fee2e2;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 226 226 / 0));
}

.from-red-200 {
  --tw-gradient-from: #fecaca;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 202 202 / 0));
}

.from-red-300 {
  --tw-gradient-from: #fca5a5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(252 165 165 / 0));
}

.from-red-400 {
  --tw-gradient-from: #f87171;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(248 113 113 / 0));
}

.from-red-500 {
  --tw-gradient-from: #ef4444;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(239 68 68 / 0));
}

.from-red-600 {
  --tw-gradient-from: #dc2626;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(220 38 38 / 0));
}

.from-red-700 {
  --tw-gradient-from: #b91c1c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(185 28 28 / 0));
}

.from-red-800 {
  --tw-gradient-from: #991b1b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(153 27 27 / 0));
}

.from-red-900 {
  --tw-gradient-from: #7f1d1d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(127 29 29 / 0));
}

.from-orange-50 {
  --tw-gradient-from: #fff7ed;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 247 237 / 0));
}

.from-orange-100 {
  --tw-gradient-from: #ffedd5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 237 213 / 0));
}

.from-orange-200 {
  --tw-gradient-from: #fed7aa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 215 170 / 0));
}

.from-orange-300 {
  --tw-gradient-from: #fdba74;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 186 116 / 0));
}

.from-orange-400 {
  --tw-gradient-from: #fb923c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(251 146 60 / 0));
}

.from-orange-500 {
  --tw-gradient-from: #f97316;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(249 115 22 / 0));
}

.from-orange-600 {
  --tw-gradient-from: #ea580c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(234 88 12 / 0));
}

.from-orange-700 {
  --tw-gradient-from: #c2410c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(194 65 12 / 0));
}

.from-orange-800 {
  --tw-gradient-from: #9a3412;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(154 52 18 / 0));
}

.from-orange-900 {
  --tw-gradient-from: #7c2d12;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(124 45 18 / 0));
}

.from-amber-50 {
  --tw-gradient-from: #fffbeb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 251 235 / 0));
}

.from-amber-100 {
  --tw-gradient-from: #fef3c7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 243 199 / 0));
}

.from-amber-200 {
  --tw-gradient-from: #fde68a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 230 138 / 0));
}

.from-amber-300 {
  --tw-gradient-from: #fcd34d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(252 211 77 / 0));
}

.from-amber-400 {
  --tw-gradient-from: #fbbf24;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(251 191 36 / 0));
}

.from-amber-500 {
  --tw-gradient-from: #f59e0b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(245 158 11 / 0));
}

.from-amber-600 {
  --tw-gradient-from: #d97706;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(217 119 6 / 0));
}

.from-amber-700 {
  --tw-gradient-from: #b45309;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(180 83 9 / 0));
}

.from-amber-800 {
  --tw-gradient-from: #92400e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(146 64 14 / 0));
}

.from-amber-900 {
  --tw-gradient-from: #78350f;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(120 53 15 / 0));
}

.from-yellow-50 {
  --tw-gradient-from: #fefce8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 252 232 / 0));
}

.from-yellow-100 {
  --tw-gradient-from: #fef9c3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 249 195 / 0));
}

.from-yellow-200 {
  --tw-gradient-from: #fef08a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 240 138 / 0));
}

.from-yellow-300 {
  --tw-gradient-from: #fde047;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 224 71 / 0));
}

.from-yellow-400 {
  --tw-gradient-from: #facc15;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 204 21 / 0));
}

.from-yellow-500 {
  --tw-gradient-from: #eab308;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(234 179 8 / 0));
}

.from-yellow-600 {
  --tw-gradient-from: #ca8a04;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(202 138 4 / 0));
}

.from-yellow-700 {
  --tw-gradient-from: #a16207;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(161 98 7 / 0));
}

.from-yellow-800 {
  --tw-gradient-from: #854d0e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(133 77 14 / 0));
}

.from-yellow-900 {
  --tw-gradient-from: #713f12;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(113 63 18 / 0));
}

.from-lime-50 {
  --tw-gradient-from: #f7fee7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(247 254 231 / 0));
}

.from-lime-100 {
  --tw-gradient-from: #ecfccb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 252 203 / 0));
}

.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(217 249 157 / 0));
}

.from-lime-300 {
  --tw-gradient-from: #bef264;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(190 242 100 / 0));
}

.from-lime-400 {
  --tw-gradient-from: #a3e635;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(163 230 53 / 0));
}

.from-lime-500 {
  --tw-gradient-from: #84cc16;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(132 204 22 / 0));
}

.from-lime-600 {
  --tw-gradient-from: #65a30d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(101 163 13 / 0));
}

.from-lime-700 {
  --tw-gradient-from: #4d7c0f;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(77 124 15 / 0));
}

.from-lime-800 {
  --tw-gradient-from: #3f6212;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(63 98 18 / 0));
}

.from-lime-900 {
  --tw-gradient-from: #365314;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(54 83 20 / 0));
}

.from-green-50 {
  --tw-gradient-from: #f0fdf4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(240 253 244 / 0));
}

.from-green-100 {
  --tw-gradient-from: #dcfce7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(220 252 231 / 0));
}

.from-green-200 {
  --tw-gradient-from: #bbf7d0;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(187 247 208 / 0));
}

.from-green-300 {
  --tw-gradient-from: #86efac;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(134 239 172 / 0));
}

.from-green-400 {
  --tw-gradient-from: #4ade80;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(74 222 128 / 0));
}

.from-green-500 {
  --tw-gradient-from: #22c55e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(34 197 94 / 0));
}

.from-green-600 {
  --tw-gradient-from: #16a34a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(22 163 74 / 0));
}

.from-green-700 {
  --tw-gradient-from: #15803d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(21 128 61 / 0));
}

.from-green-800 {
  --tw-gradient-from: #166534;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(22 101 52 / 0));
}

.from-green-900 {
  --tw-gradient-from: #14532d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(20 83 45 / 0));
}

.from-emerald-50 {
  --tw-gradient-from: #ecfdf5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 253 245 / 0));
}

.from-emerald-100 {
  --tw-gradient-from: #d1fae5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(209 250 229 / 0));
}

.from-emerald-200 {
  --tw-gradient-from: #a7f3d0;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(167 243 208 / 0));
}

.from-emerald-300 {
  --tw-gradient-from: #6ee7b7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(110 231 183 / 0));
}

.from-emerald-400 {
  --tw-gradient-from: #34d399;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(52 211 153 / 0));
}

.from-emerald-500 {
  --tw-gradient-from: #10b981;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(16 185 129 / 0));
}

.from-emerald-600 {
  --tw-gradient-from: #059669;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(5 150 105 / 0));
}

.from-emerald-700 {
  --tw-gradient-from: #047857;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(4 120 87 / 0));
}

.from-emerald-800 {
  --tw-gradient-from: #065f46;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 95 70 / 0));
}

.from-emerald-900 {
  --tw-gradient-from: #064e3b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 78 59 / 0));
}

.from-teal-50 {
  --tw-gradient-from: #f0fdfa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(240 253 250 / 0));
}

.from-teal-100 {
  --tw-gradient-from: #ccfbf1;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(204 251 241 / 0));
}

.from-teal-200 {
  --tw-gradient-from: #99f6e4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(153 246 228 / 0));
}

.from-teal-300 {
  --tw-gradient-from: #5eead4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(94 234 212 / 0));
}

.from-teal-400 {
  --tw-gradient-from: #2dd4bf;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(45 212 191 / 0));
}

.from-teal-500 {
  --tw-gradient-from: #14b8a6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(20 184 166 / 0));
}

.from-teal-600 {
  --tw-gradient-from: #0d9488;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(13 148 136 / 0));
}

.from-teal-700 {
  --tw-gradient-from: #0f766e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(15 118 110 / 0));
}

.from-teal-800 {
  --tw-gradient-from: #115e59;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(17 94 89 / 0));
}

.from-teal-900 {
  --tw-gradient-from: #134e4a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(19 78 74 / 0));
}

.from-cyan-50 {
  --tw-gradient-from: #ecfeff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 254 255 / 0));
}

.from-cyan-100 {
  --tw-gradient-from: #cffafe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(207 250 254 / 0));
}

.from-cyan-200 {
  --tw-gradient-from: #a5f3fc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(165 243 252 / 0));
}

.from-cyan-300 {
  --tw-gradient-from: #67e8f9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(103 232 249 / 0));
}

.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(34 211 238 / 0));
}

.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0));
}

.from-cyan-600 {
  --tw-gradient-from: #0891b2;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(8 145 178 / 0));
}

.from-cyan-700 {
  --tw-gradient-from: #0e7490;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(14 116 144 / 0));
}

.from-cyan-800 {
  --tw-gradient-from: #155e75;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(21 94 117 / 0));
}

.from-cyan-900 {
  --tw-gradient-from: #164e63;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(22 78 99 / 0));
}

.from-sky-50 {
  --tw-gradient-from: #f0f9ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(240 249 255 / 0));
}

.from-sky-100 {
  --tw-gradient-from: #e0f2fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(224 242 254 / 0));
}

.from-sky-200 {
  --tw-gradient-from: #bae6fd;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(186 230 253 / 0));
}

.from-sky-300 {
  --tw-gradient-from: #7dd3fc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(125 211 252 / 0));
}

.from-sky-400 {
  --tw-gradient-from: #38bdf8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(56 189 248 / 0));
}

.from-sky-500 {
  --tw-gradient-from: #0ea5e9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(14 165 233 / 0));
}

.from-sky-600 {
  --tw-gradient-from: #0284c7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(2 132 199 / 0));
}

.from-sky-700 {
  --tw-gradient-from: #0369a1;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(3 105 161 / 0));
}

.from-sky-800 {
  --tw-gradient-from: #075985;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(7 89 133 / 0));
}

.from-sky-900 {
  --tw-gradient-from: #0c4a6e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(12 74 110 / 0));
}

.from-blue-50 {
  --tw-gradient-from: #eff6ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(239 246 255 / 0));
}

.from-blue-100 {
  --tw-gradient-from: #dbeafe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(219 234 254 / 0));
}

.from-blue-200 {
  --tw-gradient-from: #bfdbfe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(191 219 254 / 0));
}

.from-blue-300 {
  --tw-gradient-from: #93c5fd;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(147 197 253 / 0));
}

.from-blue-400 {
  --tw-gradient-from: #60a5fa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(96 165 250 / 0));
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(59 130 246 / 0));
}

.from-blue-600 {
  --tw-gradient-from: #2563eb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(37 99 235 / 0));
}

.from-blue-700 {
  --tw-gradient-from: #1d4ed8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(29 78 216 / 0));
}

.from-blue-800 {
  --tw-gradient-from: #1e40af;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(30 64 175 / 0));
}

.from-blue-900 {
  --tw-gradient-from: #1e3a8a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(30 58 138 / 0));
}

.from-indigo-50 {
  --tw-gradient-from: #eef2ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(238 242 255 / 0));
}

.from-indigo-100 {
  --tw-gradient-from: #e0e7ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(224 231 255 / 0));
}

.from-indigo-200 {
  --tw-gradient-from: #c7d2fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(199 210 254 / 0));
}

.from-indigo-300 {
  --tw-gradient-from: #a5b4fc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(165 180 252 / 0));
}

.from-indigo-400 {
  --tw-gradient-from: #818cf8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(129 140 248 / 0));
}

.from-indigo-500 {
  --tw-gradient-from: #6366f1;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(99 102 241 / 0));
}

.from-indigo-600 {
  --tw-gradient-from: #4f46e5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(79 70 229 / 0));
}

.from-indigo-700 {
  --tw-gradient-from: #4338ca;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(67 56 202 / 0));
}

.from-indigo-800 {
  --tw-gradient-from: #3730a3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(55 48 163 / 0));
}

.from-indigo-900 {
  --tw-gradient-from: #312e81;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(49 46 129 / 0));
}

.from-violet-50 {
  --tw-gradient-from: #f5f3ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(245 243 255 / 0));
}

.from-violet-100 {
  --tw-gradient-from: #ede9fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(237 233 254 / 0));
}

.from-violet-200 {
  --tw-gradient-from: #ddd6fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(221 214 254 / 0));
}

.from-violet-300 {
  --tw-gradient-from: #c4b5fd;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(196 181 253 / 0));
}

.from-violet-400 {
  --tw-gradient-from: #a78bfa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(167 139 250 / 0));
}

.from-violet-500 {
  --tw-gradient-from: #8b5cf6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(139 92 246 / 0));
}

.from-violet-600 {
  --tw-gradient-from: #7c3aed;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(124 58 237 / 0));
}

.from-violet-700 {
  --tw-gradient-from: #6d28d9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(109 40 217 / 0));
}

.from-violet-800 {
  --tw-gradient-from: #5b21b6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(91 33 182 / 0));
}

.from-violet-900 {
  --tw-gradient-from: #4c1d95;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(76 29 149 / 0));
}

.from-purple-50 {
  --tw-gradient-from: #faf5ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 245 255 / 0));
}

.from-purple-100 {
  --tw-gradient-from: #f3e8ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(243 232 255 / 0));
}

.from-purple-200 {
  --tw-gradient-from: #e9d5ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(233 213 255 / 0));
}

.from-purple-300 {
  --tw-gradient-from: #d8b4fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(216 180 254 / 0));
}

.from-purple-400 {
  --tw-gradient-from: #c084fc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(192 132 252 / 0));
}

.from-purple-500 {
  --tw-gradient-from: #a855f7;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 85 247 / 0));
}

.from-purple-600 {
  --tw-gradient-from: #9333ea;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(147 51 234 / 0));
}

.from-purple-700 {
  --tw-gradient-from: #7e22ce;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(126 34 206 / 0));
}

.from-purple-800 {
  --tw-gradient-from: #6b21a8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(107 33 168 / 0));
}

.from-purple-900 {
  --tw-gradient-from: #581c87;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(88 28 135 / 0));
}

.from-fuchsia-50 {
  --tw-gradient-from: #fdf4ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 244 255 / 0));
}

.from-fuchsia-100 {
  --tw-gradient-from: #fae8ff;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(250 232 255 / 0));
}

.from-fuchsia-200 {
  --tw-gradient-from: #f5d0fe;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(245 208 254 / 0));
}

.from-fuchsia-300 {
  --tw-gradient-from: #f0abfc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(240 171 252 / 0));
}

.from-fuchsia-400 {
  --tw-gradient-from: #e879f9;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(232 121 249 / 0));
}

.from-fuchsia-500 {
  --tw-gradient-from: #d946ef;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(217 70 239 / 0));
}

.from-fuchsia-600 {
  --tw-gradient-from: #c026d3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(192 38 211 / 0));
}

.from-fuchsia-700 {
  --tw-gradient-from: #a21caf;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(162 28 175 / 0));
}

.from-fuchsia-800 {
  --tw-gradient-from: #86198f;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(134 25 143 / 0));
}

.from-fuchsia-900 {
  --tw-gradient-from: #701a75;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(112 26 117 / 0));
}

.from-pink-50 {
  --tw-gradient-from: #fdf2f8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 242 248 / 0));
}

.from-pink-100 {
  --tw-gradient-from: #fce7f3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(252 231 243 / 0));
}

.from-pink-200 {
  --tw-gradient-from: #fbcfe8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(251 207 232 / 0));
}

.from-pink-300 {
  --tw-gradient-from: #f9a8d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(249 168 212 / 0));
}

.from-pink-400 {
  --tw-gradient-from: #f472b6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(244 114 182 / 0));
}

.from-pink-500 {
  --tw-gradient-from: #ec4899;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 72 153 / 0));
}

.from-pink-600 {
  --tw-gradient-from: #db2777;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(219 39 119 / 0));
}

.from-pink-700 {
  --tw-gradient-from: #be185d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(190 24 93 / 0));
}

.from-pink-800 {
  --tw-gradient-from: #9d174d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(157 23 77 / 0));
}

.from-pink-900 {
  --tw-gradient-from: #831843;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(131 24 67 / 0));
}

.from-rose-50 {
  --tw-gradient-from: #fff1f2;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 241 242 / 0));
}

.from-rose-100 {
  --tw-gradient-from: #ffe4e6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 228 230 / 0));
}

.from-rose-200 {
  --tw-gradient-from: #fecdd3;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(254 205 211 / 0));
}

.from-rose-300 {
  --tw-gradient-from: #fda4af;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(253 164 175 / 0));
}

.from-rose-400 {
  --tw-gradient-from: #fb7185;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(251 113 133 / 0));
}

.from-rose-500 {
  --tw-gradient-from: #f43f5e;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(244 63 94 / 0));
}

.from-rose-600 {
  --tw-gradient-from: #e11d48;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(225 29 72 / 0));
}

.from-rose-700 {
  --tw-gradient-from: #be123c;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(190 18 60 / 0));
}

.from-rose-800 {
  --tw-gradient-from: #9f1239;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(159 18 57 / 0));
}

.from-rose-900 {
  --tw-gradient-from: #881337;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(136 19 55 / 0));
}

.from-textLgColor {
  --tw-gradient-from: var(--text-large-color);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-textSmColor {
  --tw-gradient-from: var(--text-small-color);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-subText {
  --tw-gradient-from: var(--sub-text-color);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-navBar-linkActive {
  --tw-gradient-from: var(--nav-link-active);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-navBar-linkActiveStripe {
  --tw-gradient-from: var(--nav-link-active-stripe);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-mobileNav-text {
  --tw-gradient-from: var(--mobile-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-mobileNav-textHover {
  --tw-gradient-from: var(--mobile-hover-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-mobileNav-border {
  --tw-gradient-from: var(--mobile-border);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-aboutMe-smIconBg {
  --tw-gradient-from: var(--sm-icon-bg);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-aboutMe-aboutMeText {
  --tw-gradient-from: var(--aboutme-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-aboutMe-alissa {
  --tw-gradient-from: var(--alissa);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-text {
  --tw-gradient-from: var(--project-text-color);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-subText {
  --tw-gradient-from: var(--project-sub-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-arrow {
  --tw-gradient-from: var(--project-arrow);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-recentBg {
  --tw-gradient-from: var(--recent-project-bg);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-recentHover {
  --tw-gradient-from: var(--recent-project-bg-hover);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-projects-recentShadow {
  --tw-gradient-from: var(--recent-project-shadow);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-contact-label {
  --tw-gradient-from: var(--label-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-contact-send {
  --tw-gradient-from: var(--send-btn);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-contact-sendHover {
  --tw-gradient-from: var(--send-btn-hover);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-blog-lgText {
  --tw-gradient-from: var(--blog-lg-text);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-blog-border {
  --tw-gradient-from: var(--blog-input-border);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-blog-tagBg {
  --tw-gradient-from: var(--tag-btn-bg);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-bodyText {
  --tw-gradient-from: var(--text-body);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-bodyTextLg {
  --tw-gradient-from: var(--text-body-lg);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-icon {
  --tw-gradient-from: var(--icon);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-iconHover {
  --tw-gradient-from: var(--icon-hover);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-hyperlink {
  --tw-gradient-from: var(--hyperlink);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-hyperlinkHover {
  --tw-gradient-from: var(--hyperlink-hover);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-quote {
  --tw-gradient-from: var(--quote);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.from-post-quoteAuthor {
  --tw-gradient-from: var(--quote-author);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-inherit {
  --tw-gradient-stops: var(--tw-gradient-from), inherit, var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-current {
  --tw-gradient-stops: var(--tw-gradient-from), currentColor, var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-transparent {
  --tw-gradient-stops: var(--tw-gradient-from), transparent, var(--tw-gradient-to, rgb(0 0 0 / 0));
}

.via-black {
  --tw-gradient-stops: var(--tw-gradient-from), #000, var(--tw-gradient-to, rgb(0 0 0 / 0));
}

.via-white {
  --tw-gradient-stops: var(--tw-gradient-from), #fff, var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-slate-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f8fafc, var(--tw-gradient-to, rgb(248 250 252 / 0));
}

.via-slate-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f1f5f9, var(--tw-gradient-to, rgb(241 245 249 / 0));
}

.via-slate-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e2e8f0, var(--tw-gradient-to, rgb(226 232 240 / 0));
}

.via-slate-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #cbd5e1, var(--tw-gradient-to, rgb(203 213 225 / 0));
}

.via-slate-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #94a3b8, var(--tw-gradient-to, rgb(148 163 184 / 0));
}

.via-slate-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #64748b, var(--tw-gradient-to, rgb(100 116 139 / 0));
}

.via-slate-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #475569, var(--tw-gradient-to, rgb(71 85 105 / 0));
}

.via-slate-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #334155, var(--tw-gradient-to, rgb(51 65 85 / 0));
}

.via-slate-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #1e293b, var(--tw-gradient-to, rgb(30 41 59 / 0));
}

.via-slate-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #0f172a, var(--tw-gradient-to, rgb(15 23 42 / 0));
}

.via-gray-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f9fafb, var(--tw-gradient-to, rgb(249 250 251 / 0));
}

.via-gray-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f3f4f6, var(--tw-gradient-to, rgb(243 244 246 / 0));
}

.via-gray-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e5e7eb, var(--tw-gradient-to, rgb(229 231 235 / 0));
}

.via-gray-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #d1d5db, var(--tw-gradient-to, rgb(209 213 219 / 0));
}

.via-gray-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #9ca3af, var(--tw-gradient-to, rgb(156 163 175 / 0));
}

.via-gray-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #6b7280, var(--tw-gradient-to, rgb(107 114 128 / 0));
}

.via-gray-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #4b5563, var(--tw-gradient-to, rgb(75 85 99 / 0));
}

.via-gray-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #374151, var(--tw-gradient-to, rgb(55 65 81 / 0));
}

.via-gray-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #1f2937, var(--tw-gradient-to, rgb(31 41 55 / 0));
}

.via-gray-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #111827, var(--tw-gradient-to, rgb(17 24 39 / 0));
}

.via-zinc-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fafafa, var(--tw-gradient-to, rgb(250 250 250 / 0));
}

.via-zinc-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f4f4f5, var(--tw-gradient-to, rgb(244 244 245 / 0));
}

.via-zinc-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e4e4e7, var(--tw-gradient-to, rgb(228 228 231 / 0));
}

.via-zinc-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #d4d4d8, var(--tw-gradient-to, rgb(212 212 216 / 0));
}

.via-zinc-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a1a1aa, var(--tw-gradient-to, rgb(161 161 170 / 0));
}

.via-zinc-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #71717a, var(--tw-gradient-to, rgb(113 113 122 / 0));
}

.via-zinc-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #52525b, var(--tw-gradient-to, rgb(82 82 91 / 0));
}

.via-zinc-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #3f3f46, var(--tw-gradient-to, rgb(63 63 70 / 0));
}

.via-zinc-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #27272a, var(--tw-gradient-to, rgb(39 39 42 / 0));
}

.via-zinc-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #18181b, var(--tw-gradient-to, rgb(24 24 27 / 0));
}

.via-neutral-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fafafa, var(--tw-gradient-to, rgb(250 250 250 / 0));
}

.via-neutral-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f5f5f5, var(--tw-gradient-to, rgb(245 245 245 / 0));
}

.via-neutral-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e5e5e5, var(--tw-gradient-to, rgb(229 229 229 / 0));
}

.via-neutral-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #d4d4d4, var(--tw-gradient-to, rgb(212 212 212 / 0));
}

.via-neutral-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a3a3a3, var(--tw-gradient-to, rgb(163 163 163 / 0));
}

.via-neutral-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #737373, var(--tw-gradient-to, rgb(115 115 115 / 0));
}

.via-neutral-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #525252, var(--tw-gradient-to, rgb(82 82 82 / 0));
}

.via-neutral-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #404040, var(--tw-gradient-to, rgb(64 64 64 / 0));
}

.via-neutral-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #262626, var(--tw-gradient-to, rgb(38 38 38 / 0));
}

.via-neutral-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #171717, var(--tw-gradient-to, rgb(23 23 23 / 0));
}

.via-stone-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fafaf9, var(--tw-gradient-to, rgb(250 250 249 / 0));
}

.via-stone-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f5f5f4, var(--tw-gradient-to, rgb(245 245 244 / 0));
}

.via-stone-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e7e5e4, var(--tw-gradient-to, rgb(231 229 228 / 0));
}

.via-stone-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #d6d3d1, var(--tw-gradient-to, rgb(214 211 209 / 0));
}

.via-stone-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a8a29e, var(--tw-gradient-to, rgb(168 162 158 / 0));
}

.via-stone-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #78716c, var(--tw-gradient-to, rgb(120 113 108 / 0));
}

.via-stone-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #57534e, var(--tw-gradient-to, rgb(87 83 78 / 0));
}

.via-stone-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #44403c, var(--tw-gradient-to, rgb(68 64 60 / 0));
}

.via-stone-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #292524, var(--tw-gradient-to, rgb(41 37 36 / 0));
}

.via-stone-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #1c1917, var(--tw-gradient-to, rgb(28 25 23 / 0));
}

.via-red-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fef2f2, var(--tw-gradient-to, rgb(254 242 242 / 0));
}

.via-red-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #fee2e2, var(--tw-gradient-to, rgb(254 226 226 / 0));
}

.via-red-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fecaca, var(--tw-gradient-to, rgb(254 202 202 / 0));
}

.via-red-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fca5a5, var(--tw-gradient-to, rgb(252 165 165 / 0));
}

.via-red-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #f87171, var(--tw-gradient-to, rgb(248 113 113 / 0));
}

.via-red-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgb(239 68 68 / 0));
}

.via-red-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #dc2626, var(--tw-gradient-to, rgb(220 38 38 / 0));
}

.via-red-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #b91c1c, var(--tw-gradient-to, rgb(185 28 28 / 0));
}

.via-red-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #991b1b, var(--tw-gradient-to, rgb(153 27 27 / 0));
}

.via-red-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #7f1d1d, var(--tw-gradient-to, rgb(127 29 29 / 0));
}

.via-orange-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fff7ed, var(--tw-gradient-to, rgb(255 247 237 / 0));
}

.via-orange-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #ffedd5, var(--tw-gradient-to, rgb(255 237 213 / 0));
}

.via-orange-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fed7aa, var(--tw-gradient-to, rgb(254 215 170 / 0));
}

.via-orange-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fdba74, var(--tw-gradient-to, rgb(253 186 116 / 0));
}

.via-orange-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #fb923c, var(--tw-gradient-to, rgb(251 146 60 / 0));
}

.via-orange-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #f97316, var(--tw-gradient-to, rgb(249 115 22 / 0));
}

.via-orange-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #ea580c, var(--tw-gradient-to, rgb(234 88 12 / 0));
}

.via-orange-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #c2410c, var(--tw-gradient-to, rgb(194 65 12 / 0));
}

.via-orange-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #9a3412, var(--tw-gradient-to, rgb(154 52 18 / 0));
}

.via-orange-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #7c2d12, var(--tw-gradient-to, rgb(124 45 18 / 0));
}

.via-amber-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fffbeb, var(--tw-gradient-to, rgb(255 251 235 / 0));
}

.via-amber-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #fef3c7, var(--tw-gradient-to, rgb(254 243 199 / 0));
}

.via-amber-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fde68a, var(--tw-gradient-to, rgb(253 230 138 / 0));
}

.via-amber-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fcd34d, var(--tw-gradient-to, rgb(252 211 77 / 0));
}

.via-amber-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #fbbf24, var(--tw-gradient-to, rgb(251 191 36 / 0));
}

.via-amber-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #f59e0b, var(--tw-gradient-to, rgb(245 158 11 / 0));
}

.via-amber-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #d97706, var(--tw-gradient-to, rgb(217 119 6 / 0));
}

.via-amber-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #b45309, var(--tw-gradient-to, rgb(180 83 9 / 0));
}

.via-amber-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #92400e, var(--tw-gradient-to, rgb(146 64 14 / 0));
}

.via-amber-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #78350f, var(--tw-gradient-to, rgb(120 53 15 / 0));
}

.via-yellow-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fefce8, var(--tw-gradient-to, rgb(254 252 232 / 0));
}

.via-yellow-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #fef9c3, var(--tw-gradient-to, rgb(254 249 195 / 0));
}

.via-yellow-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fef08a, var(--tw-gradient-to, rgb(254 240 138 / 0));
}

.via-yellow-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fde047, var(--tw-gradient-to, rgb(253 224 71 / 0));
}

.via-yellow-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #facc15, var(--tw-gradient-to, rgb(250 204 21 / 0));
}

.via-yellow-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #eab308, var(--tw-gradient-to, rgb(234 179 8 / 0));
}

.via-yellow-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #ca8a04, var(--tw-gradient-to, rgb(202 138 4 / 0));
}

.via-yellow-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #a16207, var(--tw-gradient-to, rgb(161 98 7 / 0));
}

.via-yellow-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #854d0e, var(--tw-gradient-to, rgb(133 77 14 / 0));
}

.via-yellow-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #713f12, var(--tw-gradient-to, rgb(113 63 18 / 0));
}

.via-lime-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f7fee7, var(--tw-gradient-to, rgb(247 254 231 / 0));
}

.via-lime-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #ecfccb, var(--tw-gradient-to, rgb(236 252 203 / 0));
}

.via-lime-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #d9f99d, var(--tw-gradient-to, rgb(217 249 157 / 0));
}

.via-lime-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #bef264, var(--tw-gradient-to, rgb(190 242 100 / 0));
}

.via-lime-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to, rgb(163 230 53 / 0));
}

.via-lime-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #84cc16, var(--tw-gradient-to, rgb(132 204 22 / 0));
}

.via-lime-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #65a30d, var(--tw-gradient-to, rgb(101 163 13 / 0));
}

.via-lime-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #4d7c0f, var(--tw-gradient-to, rgb(77 124 15 / 0));
}

.via-lime-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #3f6212, var(--tw-gradient-to, rgb(63 98 18 / 0));
}

.via-lime-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #365314, var(--tw-gradient-to, rgb(54 83 20 / 0));
}

.via-green-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f0fdf4, var(--tw-gradient-to, rgb(240 253 244 / 0));
}

.via-green-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #dcfce7, var(--tw-gradient-to, rgb(220 252 231 / 0));
}

.via-green-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #bbf7d0, var(--tw-gradient-to, rgb(187 247 208 / 0));
}

.via-green-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #86efac, var(--tw-gradient-to, rgb(134 239 172 / 0));
}

.via-green-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #4ade80, var(--tw-gradient-to, rgb(74 222 128 / 0));
}

.via-green-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #22c55e, var(--tw-gradient-to, rgb(34 197 94 / 0));
}

.via-green-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #16a34a, var(--tw-gradient-to, rgb(22 163 74 / 0));
}

.via-green-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #15803d, var(--tw-gradient-to, rgb(21 128 61 / 0));
}

.via-green-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #166534, var(--tw-gradient-to, rgb(22 101 52 / 0));
}

.via-green-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #14532d, var(--tw-gradient-to, rgb(20 83 45 / 0));
}

.via-emerald-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #ecfdf5, var(--tw-gradient-to, rgb(236 253 245 / 0));
}

.via-emerald-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #d1fae5, var(--tw-gradient-to, rgb(209 250 229 / 0));
}

.via-emerald-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #a7f3d0, var(--tw-gradient-to, rgb(167 243 208 / 0));
}

.via-emerald-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #6ee7b7, var(--tw-gradient-to, rgb(110 231 183 / 0));
}

.via-emerald-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #34d399, var(--tw-gradient-to, rgb(52 211 153 / 0));
}

.via-emerald-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #10b981, var(--tw-gradient-to, rgb(16 185 129 / 0));
}

.via-emerald-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #059669, var(--tw-gradient-to, rgb(5 150 105 / 0));
}

.via-emerald-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #047857, var(--tw-gradient-to, rgb(4 120 87 / 0));
}

.via-emerald-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #065f46, var(--tw-gradient-to, rgb(6 95 70 / 0));
}

.via-emerald-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #064e3b, var(--tw-gradient-to, rgb(6 78 59 / 0));
}

.via-teal-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f0fdfa, var(--tw-gradient-to, rgb(240 253 250 / 0));
}

.via-teal-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #ccfbf1, var(--tw-gradient-to, rgb(204 251 241 / 0));
}

.via-teal-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #99f6e4, var(--tw-gradient-to, rgb(153 246 228 / 0));
}

.via-teal-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #5eead4, var(--tw-gradient-to, rgb(94 234 212 / 0));
}

.via-teal-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #2dd4bf, var(--tw-gradient-to, rgb(45 212 191 / 0));
}

.via-teal-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #14b8a6, var(--tw-gradient-to, rgb(20 184 166 / 0));
}

.via-teal-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #0d9488, var(--tw-gradient-to, rgb(13 148 136 / 0));
}

.via-teal-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #0f766e, var(--tw-gradient-to, rgb(15 118 110 / 0));
}

.via-teal-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #115e59, var(--tw-gradient-to, rgb(17 94 89 / 0));
}

.via-teal-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #134e4a, var(--tw-gradient-to, rgb(19 78 74 / 0));
}

.via-cyan-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #ecfeff, var(--tw-gradient-to, rgb(236 254 255 / 0));
}

.via-cyan-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #cffafe, var(--tw-gradient-to, rgb(207 250 254 / 0));
}

.via-cyan-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #a5f3fc, var(--tw-gradient-to, rgb(165 243 252 / 0));
}

.via-cyan-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #67e8f9, var(--tw-gradient-to, rgb(103 232 249 / 0));
}

.via-cyan-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #22d3ee, var(--tw-gradient-to, rgb(34 211 238 / 0));
}

.via-cyan-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to, rgb(6 182 212 / 0));
}

.via-cyan-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #0891b2, var(--tw-gradient-to, rgb(8 145 178 / 0));
}

.via-cyan-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #0e7490, var(--tw-gradient-to, rgb(14 116 144 / 0));
}

.via-cyan-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #155e75, var(--tw-gradient-to, rgb(21 94 117 / 0));
}

.via-cyan-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #164e63, var(--tw-gradient-to, rgb(22 78 99 / 0));
}

.via-sky-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f0f9ff, var(--tw-gradient-to, rgb(240 249 255 / 0));
}

.via-sky-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #e0f2fe, var(--tw-gradient-to, rgb(224 242 254 / 0));
}

.via-sky-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #bae6fd, var(--tw-gradient-to, rgb(186 230 253 / 0));
}

.via-sky-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #7dd3fc, var(--tw-gradient-to, rgb(125 211 252 / 0));
}

.via-sky-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #38bdf8, var(--tw-gradient-to, rgb(56 189 248 / 0));
}

.via-sky-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #0ea5e9, var(--tw-gradient-to, rgb(14 165 233 / 0));
}

.via-sky-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #0284c7, var(--tw-gradient-to, rgb(2 132 199 / 0));
}

.via-sky-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #0369a1, var(--tw-gradient-to, rgb(3 105 161 / 0));
}

.via-sky-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #075985, var(--tw-gradient-to, rgb(7 89 133 / 0));
}

.via-sky-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #0c4a6e, var(--tw-gradient-to, rgb(12 74 110 / 0));
}

.via-blue-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #eff6ff, var(--tw-gradient-to, rgb(239 246 255 / 0));
}

.via-blue-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgb(219 234 254 / 0));
}

.via-blue-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgb(191 219 254 / 0));
}

.via-blue-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #93c5fd, var(--tw-gradient-to, rgb(147 197 253 / 0));
}

.via-blue-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgb(96 165 250 / 0));
}

.via-blue-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgb(59 130 246 / 0));
}

.via-blue-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #2563eb, var(--tw-gradient-to, rgb(37 99 235 / 0));
}

.via-blue-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #1d4ed8, var(--tw-gradient-to, rgb(29 78 216 / 0));
}

.via-blue-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #1e40af, var(--tw-gradient-to, rgb(30 64 175 / 0));
}

.via-blue-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #1e3a8a, var(--tw-gradient-to, rgb(30 58 138 / 0));
}

.via-indigo-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #eef2ff, var(--tw-gradient-to, rgb(238 242 255 / 0));
}

.via-indigo-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #e0e7ff, var(--tw-gradient-to, rgb(224 231 255 / 0));
}

.via-indigo-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #c7d2fe, var(--tw-gradient-to, rgb(199 210 254 / 0));
}

.via-indigo-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #a5b4fc, var(--tw-gradient-to, rgb(165 180 252 / 0));
}

.via-indigo-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #818cf8, var(--tw-gradient-to, rgb(129 140 248 / 0));
}

.via-indigo-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #6366f1, var(--tw-gradient-to, rgb(99 102 241 / 0));
}

.via-indigo-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #4f46e5, var(--tw-gradient-to, rgb(79 70 229 / 0));
}

.via-indigo-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #4338ca, var(--tw-gradient-to, rgb(67 56 202 / 0));
}

.via-indigo-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #3730a3, var(--tw-gradient-to, rgb(55 48 163 / 0));
}

.via-indigo-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #312e81, var(--tw-gradient-to, rgb(49 46 129 / 0));
}

.via-violet-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #f5f3ff, var(--tw-gradient-to, rgb(245 243 255 / 0));
}

.via-violet-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #ede9fe, var(--tw-gradient-to, rgb(237 233 254 / 0));
}

.via-violet-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #ddd6fe, var(--tw-gradient-to, rgb(221 214 254 / 0));
}

.via-violet-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #c4b5fd, var(--tw-gradient-to, rgb(196 181 253 / 0));
}

.via-violet-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #a78bfa, var(--tw-gradient-to, rgb(167 139 250 / 0));
}

.via-violet-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #8b5cf6, var(--tw-gradient-to, rgb(139 92 246 / 0));
}

.via-violet-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #7c3aed, var(--tw-gradient-to, rgb(124 58 237 / 0));
}

.via-violet-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #6d28d9, var(--tw-gradient-to, rgb(109 40 217 / 0));
}

.via-violet-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #5b21b6, var(--tw-gradient-to, rgb(91 33 182 / 0));
}

.via-violet-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #4c1d95, var(--tw-gradient-to, rgb(76 29 149 / 0));
}

.via-purple-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #faf5ff, var(--tw-gradient-to, rgb(250 245 255 / 0));
}

.via-purple-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #f3e8ff, var(--tw-gradient-to, rgb(243 232 255 / 0));
}

.via-purple-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #e9d5ff, var(--tw-gradient-to, rgb(233 213 255 / 0));
}

.via-purple-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #d8b4fe, var(--tw-gradient-to, rgb(216 180 254 / 0));
}

.via-purple-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #c084fc, var(--tw-gradient-to, rgb(192 132 252 / 0));
}

.via-purple-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #a855f7, var(--tw-gradient-to, rgb(168 85 247 / 0));
}

.via-purple-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #9333ea, var(--tw-gradient-to, rgb(147 51 234 / 0));
}

.via-purple-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #7e22ce, var(--tw-gradient-to, rgb(126 34 206 / 0));
}

.via-purple-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #6b21a8, var(--tw-gradient-to, rgb(107 33 168 / 0));
}

.via-purple-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to, rgb(88 28 135 / 0));
}

.via-fuchsia-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fdf4ff, var(--tw-gradient-to, rgb(253 244 255 / 0));
}

.via-fuchsia-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #fae8ff, var(--tw-gradient-to, rgb(250 232 255 / 0));
}

.via-fuchsia-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #f5d0fe, var(--tw-gradient-to, rgb(245 208 254 / 0));
}

.via-fuchsia-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #f0abfc, var(--tw-gradient-to, rgb(240 171 252 / 0));
}

.via-fuchsia-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #e879f9, var(--tw-gradient-to, rgb(232 121 249 / 0));
}

.via-fuchsia-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #d946ef, var(--tw-gradient-to, rgb(217 70 239 / 0));
}

.via-fuchsia-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #c026d3, var(--tw-gradient-to, rgb(192 38 211 / 0));
}

.via-fuchsia-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #a21caf, var(--tw-gradient-to, rgb(162 28 175 / 0));
}

.via-fuchsia-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #86198f, var(--tw-gradient-to, rgb(134 25 143 / 0));
}

.via-fuchsia-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #701a75, var(--tw-gradient-to, rgb(112 26 117 / 0));
}

.via-pink-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fdf2f8, var(--tw-gradient-to, rgb(253 242 248 / 0));
}

.via-pink-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #fce7f3, var(--tw-gradient-to, rgb(252 231 243 / 0));
}

.via-pink-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fbcfe8, var(--tw-gradient-to, rgb(251 207 232 / 0));
}

.via-pink-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #f9a8d4, var(--tw-gradient-to, rgb(249 168 212 / 0));
}

.via-pink-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #f472b6, var(--tw-gradient-to, rgb(244 114 182 / 0));
}

.via-pink-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #ec4899, var(--tw-gradient-to, rgb(236 72 153 / 0));
}

.via-pink-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #db2777, var(--tw-gradient-to, rgb(219 39 119 / 0));
}

.via-pink-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #be185d, var(--tw-gradient-to, rgb(190 24 93 / 0));
}

.via-pink-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #9d174d, var(--tw-gradient-to, rgb(157 23 77 / 0));
}

.via-pink-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #831843, var(--tw-gradient-to, rgb(131 24 67 / 0));
}

.via-rose-50 {
  --tw-gradient-stops: var(--tw-gradient-from), #fff1f2, var(--tw-gradient-to, rgb(255 241 242 / 0));
}

.via-rose-100 {
  --tw-gradient-stops: var(--tw-gradient-from), #ffe4e6, var(--tw-gradient-to, rgb(255 228 230 / 0));
}

.via-rose-200 {
  --tw-gradient-stops: var(--tw-gradient-from), #fecdd3, var(--tw-gradient-to, rgb(254 205 211 / 0));
}

.via-rose-300 {
  --tw-gradient-stops: var(--tw-gradient-from), #fda4af, var(--tw-gradient-to, rgb(253 164 175 / 0));
}

.via-rose-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #fb7185, var(--tw-gradient-to, rgb(251 113 133 / 0));
}

.via-rose-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #f43f5e, var(--tw-gradient-to, rgb(244 63 94 / 0));
}

.via-rose-600 {
  --tw-gradient-stops: var(--tw-gradient-from), #e11d48, var(--tw-gradient-to, rgb(225 29 72 / 0));
}

.via-rose-700 {
  --tw-gradient-stops: var(--tw-gradient-from), #be123c, var(--tw-gradient-to, rgb(190 18 60 / 0));
}

.via-rose-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #9f1239, var(--tw-gradient-to, rgb(159 18 57 / 0));
}

.via-rose-900 {
  --tw-gradient-stops: var(--tw-gradient-from), #881337, var(--tw-gradient-to, rgb(136 19 55 / 0));
}

.via-textLgColor {
  --tw-gradient-stops: var(--tw-gradient-from), var(--text-large-color), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-textSmColor {
  --tw-gradient-stops: var(--tw-gradient-from), var(--text-small-color), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-subText {
  --tw-gradient-stops: var(--tw-gradient-from), var(--sub-text-color), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-navBar-linkActive {
  --tw-gradient-stops: var(--tw-gradient-from), var(--nav-link-active), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-navBar-linkActiveStripe {
  --tw-gradient-stops: var(--tw-gradient-from), var(--nav-link-active-stripe), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-mobileNav-text {
  --tw-gradient-stops: var(--tw-gradient-from), var(--mobile-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-mobileNav-textHover {
  --tw-gradient-stops: var(--tw-gradient-from), var(--mobile-hover-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-mobileNav-border {
  --tw-gradient-stops: var(--tw-gradient-from), var(--mobile-border), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-aboutMe-smIconBg {
  --tw-gradient-stops: var(--tw-gradient-from), var(--sm-icon-bg), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-aboutMe-aboutMeText {
  --tw-gradient-stops: var(--tw-gradient-from), var(--aboutme-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-aboutMe-alissa {
  --tw-gradient-stops: var(--tw-gradient-from), var(--alissa), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-text {
  --tw-gradient-stops: var(--tw-gradient-from), var(--project-text-color), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-subText {
  --tw-gradient-stops: var(--tw-gradient-from), var(--project-sub-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-arrow {
  --tw-gradient-stops: var(--tw-gradient-from), var(--project-arrow), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-recentBg {
  --tw-gradient-stops: var(--tw-gradient-from), var(--recent-project-bg), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-recentHover {
  --tw-gradient-stops: var(--tw-gradient-from), var(--recent-project-bg-hover), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-projects-recentShadow {
  --tw-gradient-stops: var(--tw-gradient-from), var(--recent-project-shadow), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-contact-label {
  --tw-gradient-stops: var(--tw-gradient-from), var(--label-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-contact-send {
  --tw-gradient-stops: var(--tw-gradient-from), var(--send-btn), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-contact-sendHover {
  --tw-gradient-stops: var(--tw-gradient-from), var(--send-btn-hover), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-blog-lgText {
  --tw-gradient-stops: var(--tw-gradient-from), var(--blog-lg-text), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-blog-border {
  --tw-gradient-stops: var(--tw-gradient-from), var(--blog-input-border), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-blog-tagBg {
  --tw-gradient-stops: var(--tw-gradient-from), var(--tag-btn-bg), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-bodyText {
  --tw-gradient-stops: var(--tw-gradient-from), var(--text-body), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-bodyTextLg {
  --tw-gradient-stops: var(--tw-gradient-from), var(--text-body-lg), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-icon {
  --tw-gradient-stops: var(--tw-gradient-from), var(--icon), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-iconHover {
  --tw-gradient-stops: var(--tw-gradient-from), var(--icon-hover), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-hyperlink {
  --tw-gradient-stops: var(--tw-gradient-from), var(--hyperlink), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-hyperlinkHover {
  --tw-gradient-stops: var(--tw-gradient-from), var(--hyperlink-hover), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-quote {
  --tw-gradient-stops: var(--tw-gradient-from), var(--quote), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.via-post-quoteAuthor {
  --tw-gradient-stops: var(--tw-gradient-from), var(--quote-author), var(--tw-gradient-to, rgb(255 255 255 / 0));
}

.to-inherit {
  --tw-gradient-to: inherit;
}

.to-current {
  --tw-gradient-to: currentColor;
}

.to-transparent {
  --tw-gradient-to: transparent;
}

.to-black {
  --tw-gradient-to: #000;
}

.to-white {
  --tw-gradient-to: #fff;
}

.to-slate-50 {
  --tw-gradient-to: #f8fafc;
}

.to-slate-100 {
  --tw-gradient-to: #f1f5f9;
}

.to-slate-200 {
  --tw-gradient-to: #e2e8f0;
}

.to-slate-300 {
  --tw-gradient-to: #cbd5e1;
}

.to-slate-400 {
  --tw-gradient-to: #94a3b8;
}

.to-slate-500 {
  --tw-gradient-to: #64748b;
}

.to-slate-600 {
  --tw-gradient-to: #475569;
}

.to-slate-700 {
  --tw-gradient-to: #334155;
}

.to-slate-800 {
  --tw-gradient-to: #1e293b;
}

.to-slate-900 {
  --tw-gradient-to: #0f172a;
}

.to-gray-50 {
  --tw-gradient-to: #f9fafb;
}

.to-gray-100 {
  --tw-gradient-to: #f3f4f6;
}

.to-gray-200 {
  --tw-gradient-to: #e5e7eb;
}

.to-gray-300 {
  --tw-gradient-to: #d1d5db;
}

.to-gray-400 {
  --tw-gradient-to: #9ca3af;
}

.to-gray-500 {
  --tw-gradient-to: #6b7280;
}

.to-gray-600 {
  --tw-gradient-to: #4b5563;
}

.to-gray-700 {
  --tw-gradient-to: #374151;
}

.to-gray-800 {
  --tw-gradient-to: #1f2937;
}

.to-gray-900 {
  --tw-gradient-to: #111827;
}

.to-zinc-50 {
  --tw-gradient-to: #fafafa;
}

.to-zinc-100 {
  --tw-gradient-to: #f4f4f5;
}

.to-zinc-200 {
  --tw-gradient-to: #e4e4e7;
}

.to-zinc-300 {
  --tw-gradient-to: #d4d4d8;
}

.to-zinc-400 {
  --tw-gradient-to: #a1a1aa;
}

.to-zinc-500 {
  --tw-gradient-to: #71717a;
}

.to-zinc-600 {
  --tw-gradient-to: #52525b;
}

.to-zinc-700 {
  --tw-gradient-to: #3f3f46;
}

.to-zinc-800 {
  --tw-gradient-to: #27272a;
}

.to-zinc-900 {
  --tw-gradient-to: #18181b;
}

.to-neutral-50 {
  --tw-gradient-to: #fafafa;
}

.to-neutral-100 {
  --tw-gradient-to: #f5f5f5;
}

.to-neutral-200 {
  --tw-gradient-to: #e5e5e5;
}

.to-neutral-300 {
  --tw-gradient-to: #d4d4d4;
}

.to-neutral-400 {
  --tw-gradient-to: #a3a3a3;
}

.to-neutral-500 {
  --tw-gradient-to: #737373;
}

.to-neutral-600 {
  --tw-gradient-to: #525252;
}

.to-neutral-700 {
  --tw-gradient-to: #404040;
}

.to-neutral-800 {
  --tw-gradient-to: #262626;
}

.to-neutral-900 {
  --tw-gradient-to: #171717;
}

.to-stone-50 {
  --tw-gradient-to: #fafaf9;
}

.to-stone-100 {
  --tw-gradient-to: #f5f5f4;
}

.to-stone-200 {
  --tw-gradient-to: #e7e5e4;
}

.to-stone-300 {
  --tw-gradient-to: #d6d3d1;
}

.to-stone-400 {
  --tw-gradient-to: #a8a29e;
}

.to-stone-500 {
  --tw-gradient-to: #78716c;
}

.to-stone-600 {
  --tw-gradient-to: #57534e;
}

.to-stone-700 {
  --tw-gradient-to: #44403c;
}

.to-stone-800 {
  --tw-gradient-to: #292524;
}

.to-stone-900 {
  --tw-gradient-to: #1c1917;
}

.to-red-50 {
  --tw-gradient-to: #fef2f2;
}

.to-red-100 {
  --tw-gradient-to: #fee2e2;
}

.to-red-200 {
  --tw-gradient-to: #fecaca;
}

.to-red-300 {
  --tw-gradient-to: #fca5a5;
}

.to-red-400 {
  --tw-gradient-to: #f87171;
}

.to-red-500 {
  --tw-gradient-to: #ef4444;
}

.to-red-600 {
  --tw-gradient-to: #dc2626;
}

.to-red-700 {
  --tw-gradient-to: #b91c1c;
}

.to-red-800 {
  --tw-gradient-to: #991b1b;
}

.to-red-900 {
  --tw-gradient-to: #7f1d1d;
}

.to-orange-50 {
  --tw-gradient-to: #fff7ed;
}

.to-orange-100 {
  --tw-gradient-to: #ffedd5;
}

.to-orange-200 {
  --tw-gradient-to: #fed7aa;
}

.to-orange-300 {
  --tw-gradient-to: #fdba74;
}

.to-orange-400 {
  --tw-gradient-to: #fb923c;
}

.to-orange-500 {
  --tw-gradient-to: #f97316;
}

.to-orange-600 {
  --tw-gradient-to: #ea580c;
}

.to-orange-700 {
  --tw-gradient-to: #c2410c;
}

.to-orange-800 {
  --tw-gradient-to: #9a3412;
}

.to-orange-900 {
  --tw-gradient-to: #7c2d12;
}

.to-amber-50 {
  --tw-gradient-to: #fffbeb;
}

.to-amber-100 {
  --tw-gradient-to: #fef3c7;
}

.to-amber-200 {
  --tw-gradient-to: #fde68a;
}

.to-amber-300 {
  --tw-gradient-to: #fcd34d;
}

.to-amber-400 {
  --tw-gradient-to: #fbbf24;
}

.to-amber-500 {
  --tw-gradient-to: #f59e0b;
}

.to-amber-600 {
  --tw-gradient-to: #d97706;
}

.to-amber-700 {
  --tw-gradient-to: #b45309;
}

.to-amber-800 {
  --tw-gradient-to: #92400e;
}

.to-amber-900 {
  --tw-gradient-to: #78350f;
}

.to-yellow-50 {
  --tw-gradient-to: #fefce8;
}

.to-yellow-100 {
  --tw-gradient-to: #fef9c3;
}

.to-yellow-200 {
  --tw-gradient-to: #fef08a;
}

.to-yellow-300 {
  --tw-gradient-to: #fde047;
}

.to-yellow-400 {
  --tw-gradient-to: #facc15;
}

.to-yellow-500 {
  --tw-gradient-to: #eab308;
}

.to-yellow-600 {
  --tw-gradient-to: #ca8a04;
}

.to-yellow-700 {
  --tw-gradient-to: #a16207;
}

.to-yellow-800 {
  --tw-gradient-to: #854d0e;
}

.to-yellow-900 {
  --tw-gradient-to: #713f12;
}

.to-lime-50 {
  --tw-gradient-to: #f7fee7;
}

.to-lime-100 {
  --tw-gradient-to: #ecfccb;
}

.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}

.to-lime-300 {
  --tw-gradient-to: #bef264;
}

.to-lime-400 {
  --tw-gradient-to: #a3e635;
}

.to-lime-500 {
  --tw-gradient-to: #84cc16;
}

.to-lime-600 {
  --tw-gradient-to: #65a30d;
}

.to-lime-700 {
  --tw-gradient-to: #4d7c0f;
}

.to-lime-800 {
  --tw-gradient-to: #3f6212;
}

.to-lime-900 {
  --tw-gradient-to: #365314;
}

.to-green-50 {
  --tw-gradient-to: #f0fdf4;
}

.to-green-100 {
  --tw-gradient-to: #dcfce7;
}

.to-green-200 {
  --tw-gradient-to: #bbf7d0;
}

.to-green-300 {
  --tw-gradient-to: #86efac;
}

.to-green-400 {
  --tw-gradient-to: #4ade80;
}

.to-green-500 {
  --tw-gradient-to: #22c55e;
}

.to-green-600 {
  --tw-gradient-to: #16a34a;
}

.to-green-700 {
  --tw-gradient-to: #15803d;
}

.to-green-800 {
  --tw-gradient-to: #166534;
}

.to-green-900 {
  --tw-gradient-to: #14532d;
}

.to-emerald-50 {
  --tw-gradient-to: #ecfdf5;
}

.to-emerald-100 {
  --tw-gradient-to: #d1fae5;
}

.to-emerald-200 {
  --tw-gradient-to: #a7f3d0;
}

.to-emerald-300 {
  --tw-gradient-to: #6ee7b7;
}

.to-emerald-400 {
  --tw-gradient-to: #34d399;
}

.to-emerald-500 {
  --tw-gradient-to: #10b981;
}

.to-emerald-600 {
  --tw-gradient-to: #059669;
}

.to-emerald-700 {
  --tw-gradient-to: #047857;
}

.to-emerald-800 {
  --tw-gradient-to: #065f46;
}

.to-emerald-900 {
  --tw-gradient-to: #064e3b;
}

.to-teal-50 {
  --tw-gradient-to: #f0fdfa;
}

.to-teal-100 {
  --tw-gradient-to: #ccfbf1;
}

.to-teal-200 {
  --tw-gradient-to: #99f6e4;
}

.to-teal-300 {
  --tw-gradient-to: #5eead4;
}

.to-teal-400 {
  --tw-gradient-to: #2dd4bf;
}

.to-teal-500 {
  --tw-gradient-to: #14b8a6;
}

.to-teal-600 {
  --tw-gradient-to: #0d9488;
}

.to-teal-700 {
  --tw-gradient-to: #0f766e;
}

.to-teal-800 {
  --tw-gradient-to: #115e59;
}

.to-teal-900 {
  --tw-gradient-to: #134e4a;
}

.to-cyan-50 {
  --tw-gradient-to: #ecfeff;
}

.to-cyan-100 {
  --tw-gradient-to: #cffafe;
}

.to-cyan-200 {
  --tw-gradient-to: #a5f3fc;
}

.to-cyan-300 {
  --tw-gradient-to: #67e8f9;
}

.to-cyan-400 {
  --tw-gradient-to: #22d3ee;
}

.to-cyan-500 {
  --tw-gradient-to: #06b6d4;
}

.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}

.to-cyan-700 {
  --tw-gradient-to: #0e7490;
}

.to-cyan-800 {
  --tw-gradient-to: #155e75;
}

.to-cyan-900 {
  --tw-gradient-to: #164e63;
}

.to-sky-50 {
  --tw-gradient-to: #f0f9ff;
}

.to-sky-100 {
  --tw-gradient-to: #e0f2fe;
}

.to-sky-200 {
  --tw-gradient-to: #bae6fd;
}

.to-sky-300 {
  --tw-gradient-to: #7dd3fc;
}

.to-sky-400 {
  --tw-gradient-to: #38bdf8;
}

.to-sky-500 {
  --tw-gradient-to: #0ea5e9;
}

.to-sky-600 {
  --tw-gradient-to: #0284c7;
}

.to-sky-700 {
  --tw-gradient-to: #0369a1;
}

.to-sky-800 {
  --tw-gradient-to: #075985;
}

.to-sky-900 {
  --tw-gradient-to: #0c4a6e;
}

.to-blue-50 {
  --tw-gradient-to: #eff6ff;
}

.to-blue-100 {
  --tw-gradient-to: #dbeafe;
}

.to-blue-200 {
  --tw-gradient-to: #bfdbfe;
}

.to-blue-300 {
  --tw-gradient-to: #93c5fd;
}

.to-blue-400 {
  --tw-gradient-to: #60a5fa;
}

.to-blue-500 {
  --tw-gradient-to: #3b82f6;
}

.to-blue-600 {
  --tw-gradient-to: #2563eb;
}

.to-blue-700 {
  --tw-gradient-to: #1d4ed8;
}

.to-blue-800 {
  --tw-gradient-to: #1e40af;
}

.to-blue-900 {
  --tw-gradient-to: #1e3a8a;
}

.to-indigo-50 {
  --tw-gradient-to: #eef2ff;
}

.to-indigo-100 {
  --tw-gradient-to: #e0e7ff;
}

.to-indigo-200 {
  --tw-gradient-to: #c7d2fe;
}

.to-indigo-300 {
  --tw-gradient-to: #a5b4fc;
}

.to-indigo-400 {
  --tw-gradient-to: #818cf8;
}

.to-indigo-500 {
  --tw-gradient-to: #6366f1;
}

.to-indigo-600 {
  --tw-gradient-to: #4f46e5;
}

.to-indigo-700 {
  --tw-gradient-to: #4338ca;
}

.to-indigo-800 {
  --tw-gradient-to: #3730a3;
}

.to-indigo-900 {
  --tw-gradient-to: #312e81;
}

.to-violet-50 {
  --tw-gradient-to: #f5f3ff;
}

.to-violet-100 {
  --tw-gradient-to: #ede9fe;
}

.to-violet-200 {
  --tw-gradient-to: #ddd6fe;
}

.to-violet-300 {
  --tw-gradient-to: #c4b5fd;
}

.to-violet-400 {
  --tw-gradient-to: #a78bfa;
}

.to-violet-500 {
  --tw-gradient-to: #8b5cf6;
}

.to-violet-600 {
  --tw-gradient-to: #7c3aed;
}

.to-violet-700 {
  --tw-gradient-to: #6d28d9;
}

.to-violet-800 {
  --tw-gradient-to: #5b21b6;
}

.to-violet-900 {
  --tw-gradient-to: #4c1d95;
}

.to-purple-50 {
  --tw-gradient-to: #faf5ff;
}

.to-purple-100 {
  --tw-gradient-to: #f3e8ff;
}

.to-purple-200 {
  --tw-gradient-to: #e9d5ff;
}

.to-purple-300 {
  --tw-gradient-to: #d8b4fe;
}

.to-purple-400 {
  --tw-gradient-to: #c084fc;
}

.to-purple-500 {
  --tw-gradient-to: #a855f7;
}

.to-purple-600 {
  --tw-gradient-to: #9333ea;
}

.to-purple-700 {
  --tw-gradient-to: #7e22ce;
}

.to-purple-800 {
  --tw-gradient-to: #6b21a8;
}

.to-purple-900 {
  --tw-gradient-to: #581c87;
}

.to-fuchsia-50 {
  --tw-gradient-to: #fdf4ff;
}

.to-fuchsia-100 {
  --tw-gradient-to: #fae8ff;
}

.to-fuchsia-200 {
  --tw-gradient-to: #f5d0fe;
}

.to-fuchsia-300 {
  --tw-gradient-to: #f0abfc;
}

.to-fuchsia-400 {
  --tw-gradient-to: #e879f9;
}

.to-fuchsia-500 {
  --tw-gradient-to: #d946ef;
}

.to-fuchsia-600 {
  --tw-gradient-to: #c026d3;
}

.to-fuchsia-700 {
  --tw-gradient-to: #a21caf;
}

.to-fuchsia-800 {
  --tw-gradient-to: #86198f;
}

.to-fuchsia-900 {
  --tw-gradient-to: #701a75;
}

.to-pink-50 {
  --tw-gradient-to: #fdf2f8;
}

.to-pink-100 {
  --tw-gradient-to: #fce7f3;
}

.to-pink-200 {
  --tw-gradient-to: #fbcfe8;
}

.to-pink-300 {
  --tw-gradient-to: #f9a8d4;
}

.to-pink-400 {
  --tw-gradient-to: #f472b6;
}

.to-pink-500 {
  --tw-gradient-to: #ec4899;
}

.to-pink-600 {
  --tw-gradient-to: #db2777;
}

.to-pink-700 {
  --tw-gradient-to: #be185d;
}

.to-pink-800 {
  --tw-gradient-to: #9d174d;
}

.to-pink-900 {
  --tw-gradient-to: #831843;
}

.to-rose-50 {
  --tw-gradient-to: #fff1f2;
}

.to-rose-100 {
  --tw-gradient-to: #ffe4e6;
}

.to-rose-200 {
  --tw-gradient-to: #fecdd3;
}

.to-rose-300 {
  --tw-gradient-to: #fda4af;
}

.to-rose-400 {
  --tw-gradient-to: #fb7185;
}

.to-rose-500 {
  --tw-gradient-to: #f43f5e;
}

.to-rose-600 {
  --tw-gradient-to: #e11d48;
}

.to-rose-700 {
  --tw-gradient-to: #be123c;
}

.to-rose-800 {
  --tw-gradient-to: #9f1239;
}

.to-rose-900 {
  --tw-gradient-to: #881337;
}

.to-textLgColor {
  --tw-gradient-to: var(--text-large-color);
}

.to-textSmColor {
  --tw-gradient-to: var(--text-small-color);
}

.to-subText {
  --tw-gradient-to: var(--sub-text-color);
}

.to-navBar-linkActive {
  --tw-gradient-to: var(--nav-link-active);
}

.to-navBar-linkActiveStripe {
  --tw-gradient-to: var(--nav-link-active-stripe);
}

.to-mobileNav-text {
  --tw-gradient-to: var(--mobile-text);
}

.to-mobileNav-textHover {
  --tw-gradient-to: var(--mobile-hover-text);
}

.to-mobileNav-border {
  --tw-gradient-to: var(--mobile-border);
}

.to-aboutMe-smIconBg {
  --tw-gradient-to: var(--sm-icon-bg);
}

.to-aboutMe-aboutMeText {
  --tw-gradient-to: var(--aboutme-text);
}

.to-aboutMe-alissa {
  --tw-gradient-to: var(--alissa);
}

.to-projects-text {
  --tw-gradient-to: var(--project-text-color);
}

.to-projects-subText {
  --tw-gradient-to: var(--project-sub-text);
}

.to-projects-arrow {
  --tw-gradient-to: var(--project-arrow);
}

.to-projects-recentBg {
  --tw-gradient-to: var(--recent-project-bg);
}

.to-projects-recentHover {
  --tw-gradient-to: var(--recent-project-bg-hover);
}

.to-projects-recentShadow {
  --tw-gradient-to: var(--recent-project-shadow);
}

.to-contact-label {
  --tw-gradient-to: var(--label-text);
}

.to-contact-send {
  --tw-gradient-to: var(--send-btn);
}

.to-contact-sendHover {
  --tw-gradient-to: var(--send-btn-hover);
}

.to-blog-lgText {
  --tw-gradient-to: var(--blog-lg-text);
}

.to-blog-border {
  --tw-gradient-to: var(--blog-input-border);
}

.to-blog-tagBg {
  --tw-gradient-to: var(--tag-btn-bg);
}

.to-post-bodyText {
  --tw-gradient-to: var(--text-body);
}

.to-post-bodyTextLg {
  --tw-gradient-to: var(--text-body-lg);
}

.to-post-icon {
  --tw-gradient-to: var(--icon);
}

.to-post-iconHover {
  --tw-gradient-to: var(--icon-hover);
}

.to-post-hyperlink {
  --tw-gradient-to: var(--hyperlink);
}

.to-post-hyperlinkHover {
  --tw-gradient-to: var(--hyperlink-hover);
}

.to-post-quote {
  --tw-gradient-to: var(--quote);
}

.to-post-quoteAuthor {
  --tw-gradient-to: var(--quote-author);
}

.decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}

.decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}

.box-decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}

.box-decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}

.bg-cover {
  background-size: cover;
}

.bg-auto {
  background-size: auto;
}

.bg-contain {
  background-size: contain;
}

.bg-fixed {
  background-attachment: fixed;
}

.bg-local {
  background-attachment: local;
}

.bg-scroll {
  background-attachment: scroll;
}

.bg-clip-border {
  background-clip: border-box;
}

.bg-clip-padding {
  background-clip: padding-box;
}

.bg-clip-content {
  background-clip: content-box;
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.bg-center {
  background-position: center;
}

.bg-bottom {
  background-position: bottom;
}

.bg-left {
  background-position: left;
}

.bg-left-bottom {
  background-position: left bottom;
}

.bg-left-top {
  background-position: left top;
}

.bg-right {
  background-position: right;
}

.bg-right-bottom {
  background-position: right bottom;
}

.bg-right-top {
  background-position: right top;
}

.bg-top {
  background-position: top;
}

.bg-repeat {
  background-repeat: repeat;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.bg-repeat-x {
  background-repeat: repeat-x;
}

.bg-repeat-y {
  background-repeat: repeat-y;
}

.bg-repeat-round {
  background-repeat: round;
}

.bg-repeat-space {
  background-repeat: space;
}

.bg-origin-border {
  background-origin: border-box;
}

.bg-origin-padding {
  background-origin: padding-box;
}

.bg-origin-content {
  background-origin: content-box;
}

.fill-current {
  fill: currentColor;
}

.fill-inherit {
  fill: inherit;
}

.fill-transparent {
  fill: transparent;
}

.fill-black {
  fill: #000;
}

.fill-white {
  fill: #fff;
}

.fill-slate-50 {
  fill: #f8fafc;
}

.fill-slate-100 {
  fill: #f1f5f9;
}

.fill-slate-200 {
  fill: #e2e8f0;
}

.fill-slate-300 {
  fill: #cbd5e1;
}

.fill-slate-400 {
  fill: #94a3b8;
}

.fill-slate-500 {
  fill: #64748b;
}

.fill-slate-600 {
  fill: #475569;
}

.fill-slate-700 {
  fill: #334155;
}

.fill-slate-800 {
  fill: #1e293b;
}

.fill-slate-900 {
  fill: #0f172a;
}

.fill-gray-50 {
  fill: #f9fafb;
}

.fill-gray-100 {
  fill: #f3f4f6;
}

.fill-gray-200 {
  fill: #e5e7eb;
}

.fill-gray-300 {
  fill: #d1d5db;
}

.fill-gray-400 {
  fill: #9ca3af;
}

.fill-gray-500 {
  fill: #6b7280;
}

.fill-gray-600 {
  fill: #4b5563;
}

.fill-gray-700 {
  fill: #374151;
}

.fill-gray-800 {
  fill: #1f2937;
}

.fill-gray-900 {
  fill: #111827;
}

.fill-zinc-50 {
  fill: #fafafa;
}

.fill-zinc-100 {
  fill: #f4f4f5;
}

.fill-zinc-200 {
  fill: #e4e4e7;
}

.fill-zinc-300 {
  fill: #d4d4d8;
}

.fill-zinc-400 {
  fill: #a1a1aa;
}

.fill-zinc-500 {
  fill: #71717a;
}

.fill-zinc-600 {
  fill: #52525b;
}

.fill-zinc-700 {
  fill: #3f3f46;
}

.fill-zinc-800 {
  fill: #27272a;
}

.fill-zinc-900 {
  fill: #18181b;
}

.fill-neutral-50 {
  fill: #fafafa;
}

.fill-neutral-100 {
  fill: #f5f5f5;
}

.fill-neutral-200 {
  fill: #e5e5e5;
}

.fill-neutral-300 {
  fill: #d4d4d4;
}

.fill-neutral-400 {
  fill: #a3a3a3;
}

.fill-neutral-500 {
  fill: #737373;
}

.fill-neutral-600 {
  fill: #525252;
}

.fill-neutral-700 {
  fill: #404040;
}

.fill-neutral-800 {
  fill: #262626;
}

.fill-neutral-900 {
  fill: #171717;
}

.fill-stone-50 {
  fill: #fafaf9;
}

.fill-stone-100 {
  fill: #f5f5f4;
}

.fill-stone-200 {
  fill: #e7e5e4;
}

.fill-stone-300 {
  fill: #d6d3d1;
}

.fill-stone-400 {
  fill: #a8a29e;
}

.fill-stone-500 {
  fill: #78716c;
}

.fill-stone-600 {
  fill: #57534e;
}

.fill-stone-700 {
  fill: #44403c;
}

.fill-stone-800 {
  fill: #292524;
}

.fill-stone-900 {
  fill: #1c1917;
}

.fill-red-50 {
  fill: #fef2f2;
}

.fill-red-100 {
  fill: #fee2e2;
}

.fill-red-200 {
  fill: #fecaca;
}

.fill-red-300 {
  fill: #fca5a5;
}

.fill-red-400 {
  fill: #f87171;
}

.fill-red-500 {
  fill: #ef4444;
}

.fill-red-600 {
  fill: #dc2626;
}

.fill-red-700 {
  fill: #b91c1c;
}

.fill-red-800 {
  fill: #991b1b;
}

.fill-red-900 {
  fill: #7f1d1d;
}

.fill-orange-50 {
  fill: #fff7ed;
}

.fill-orange-100 {
  fill: #ffedd5;
}

.fill-orange-200 {
  fill: #fed7aa;
}

.fill-orange-300 {
  fill: #fdba74;
}

.fill-orange-400 {
  fill: #fb923c;
}

.fill-orange-500 {
  fill: #f97316;
}

.fill-orange-600 {
  fill: #ea580c;
}

.fill-orange-700 {
  fill: #c2410c;
}

.fill-orange-800 {
  fill: #9a3412;
}

.fill-orange-900 {
  fill: #7c2d12;
}

.fill-amber-50 {
  fill: #fffbeb;
}

.fill-amber-100 {
  fill: #fef3c7;
}

.fill-amber-200 {
  fill: #fde68a;
}

.fill-amber-300 {
  fill: #fcd34d;
}

.fill-amber-400 {
  fill: #fbbf24;
}

.fill-amber-500 {
  fill: #f59e0b;
}

.fill-amber-600 {
  fill: #d97706;
}

.fill-amber-700 {
  fill: #b45309;
}

.fill-amber-800 {
  fill: #92400e;
}

.fill-amber-900 {
  fill: #78350f;
}

.fill-yellow-50 {
  fill: #fefce8;
}

.fill-yellow-100 {
  fill: #fef9c3;
}

.fill-yellow-200 {
  fill: #fef08a;
}

.fill-yellow-300 {
  fill: #fde047;
}

.fill-yellow-400 {
  fill: #facc15;
}

.fill-yellow-500 {
  fill: #eab308;
}

.fill-yellow-600 {
  fill: #ca8a04;
}

.fill-yellow-700 {
  fill: #a16207;
}

.fill-yellow-800 {
  fill: #854d0e;
}

.fill-yellow-900 {
  fill: #713f12;
}

.fill-lime-50 {
  fill: #f7fee7;
}

.fill-lime-100 {
  fill: #ecfccb;
}

.fill-lime-200 {
  fill: #d9f99d;
}

.fill-lime-300 {
  fill: #bef264;
}

.fill-lime-400 {
  fill: #a3e635;
}

.fill-lime-500 {
  fill: #84cc16;
}

.fill-lime-600 {
  fill: #65a30d;
}

.fill-lime-700 {
  fill: #4d7c0f;
}

.fill-lime-800 {
  fill: #3f6212;
}

.fill-lime-900 {
  fill: #365314;
}

.fill-green-50 {
  fill: #f0fdf4;
}

.fill-green-100 {
  fill: #dcfce7;
}

.fill-green-200 {
  fill: #bbf7d0;
}

.fill-green-300 {
  fill: #86efac;
}

.fill-green-400 {
  fill: #4ade80;
}

.fill-green-500 {
  fill: #22c55e;
}

.fill-green-600 {
  fill: #16a34a;
}

.fill-green-700 {
  fill: #15803d;
}

.fill-green-800 {
  fill: #166534;
}

.fill-green-900 {
  fill: #14532d;
}

.fill-emerald-50 {
  fill: #ecfdf5;
}

.fill-emerald-100 {
  fill: #d1fae5;
}

.fill-emerald-200 {
  fill: #a7f3d0;
}

.fill-emerald-300 {
  fill: #6ee7b7;
}

.fill-emerald-400 {
  fill: #34d399;
}

.fill-emerald-500 {
  fill: #10b981;
}

.fill-emerald-600 {
  fill: #059669;
}

.fill-emerald-700 {
  fill: #047857;
}

.fill-emerald-800 {
  fill: #065f46;
}

.fill-emerald-900 {
  fill: #064e3b;
}

.fill-teal-50 {
  fill: #f0fdfa;
}

.fill-teal-100 {
  fill: #ccfbf1;
}

.fill-teal-200 {
  fill: #99f6e4;
}

.fill-teal-300 {
  fill: #5eead4;
}

.fill-teal-400 {
  fill: #2dd4bf;
}

.fill-teal-500 {
  fill: #14b8a6;
}

.fill-teal-600 {
  fill: #0d9488;
}

.fill-teal-700 {
  fill: #0f766e;
}

.fill-teal-800 {
  fill: #115e59;
}

.fill-teal-900 {
  fill: #134e4a;
}

.fill-cyan-50 {
  fill: #ecfeff;
}

.fill-cyan-100 {
  fill: #cffafe;
}

.fill-cyan-200 {
  fill: #a5f3fc;
}

.fill-cyan-300 {
  fill: #67e8f9;
}

.fill-cyan-400 {
  fill: #22d3ee;
}

.fill-cyan-500 {
  fill: #06b6d4;
}

.fill-cyan-600 {
  fill: #0891b2;
}

.fill-cyan-700 {
  fill: #0e7490;
}

.fill-cyan-800 {
  fill: #155e75;
}

.fill-cyan-900 {
  fill: #164e63;
}

.fill-sky-50 {
  fill: #f0f9ff;
}

.fill-sky-100 {
  fill: #e0f2fe;
}

.fill-sky-200 {
  fill: #bae6fd;
}

.fill-sky-300 {
  fill: #7dd3fc;
}

.fill-sky-400 {
  fill: #38bdf8;
}

.fill-sky-500 {
  fill: #0ea5e9;
}

.fill-sky-600 {
  fill: #0284c7;
}

.fill-sky-700 {
  fill: #0369a1;
}

.fill-sky-800 {
  fill: #075985;
}

.fill-sky-900 {
  fill: #0c4a6e;
}

.fill-blue-50 {
  fill: #eff6ff;
}

.fill-blue-100 {
  fill: #dbeafe;
}

.fill-blue-200 {
  fill: #bfdbfe;
}

.fill-blue-300 {
  fill: #93c5fd;
}

.fill-blue-400 {
  fill: #60a5fa;
}

.fill-blue-500 {
  fill: #3b82f6;
}

.fill-blue-600 {
  fill: #2563eb;
}

.fill-blue-700 {
  fill: #1d4ed8;
}

.fill-blue-800 {
  fill: #1e40af;
}

.fill-blue-900 {
  fill: #1e3a8a;
}

.fill-indigo-50 {
  fill: #eef2ff;
}

.fill-indigo-100 {
  fill: #e0e7ff;
}

.fill-indigo-200 {
  fill: #c7d2fe;
}

.fill-indigo-300 {
  fill: #a5b4fc;
}

.fill-indigo-400 {
  fill: #818cf8;
}

.fill-indigo-500 {
  fill: #6366f1;
}

.fill-indigo-600 {
  fill: #4f46e5;
}

.fill-indigo-700 {
  fill: #4338ca;
}

.fill-indigo-800 {
  fill: #3730a3;
}

.fill-indigo-900 {
  fill: #312e81;
}

.fill-violet-50 {
  fill: #f5f3ff;
}

.fill-violet-100 {
  fill: #ede9fe;
}

.fill-violet-200 {
  fill: #ddd6fe;
}

.fill-violet-300 {
  fill: #c4b5fd;
}

.fill-violet-400 {
  fill: #a78bfa;
}

.fill-violet-500 {
  fill: #8b5cf6;
}

.fill-violet-600 {
  fill: #7c3aed;
}

.fill-violet-700 {
  fill: #6d28d9;
}

.fill-violet-800 {
  fill: #5b21b6;
}

.fill-violet-900 {
  fill: #4c1d95;
}

.fill-purple-50 {
  fill: #faf5ff;
}

.fill-purple-100 {
  fill: #f3e8ff;
}

.fill-purple-200 {
  fill: #e9d5ff;
}

.fill-purple-300 {
  fill: #d8b4fe;
}

.fill-purple-400 {
  fill: #c084fc;
}

.fill-purple-500 {
  fill: #a855f7;
}

.fill-purple-600 {
  fill: #9333ea;
}

.fill-purple-700 {
  fill: #7e22ce;
}

.fill-purple-800 {
  fill: #6b21a8;
}

.fill-purple-900 {
  fill: #581c87;
}

.fill-fuchsia-50 {
  fill: #fdf4ff;
}

.fill-fuchsia-100 {
  fill: #fae8ff;
}

.fill-fuchsia-200 {
  fill: #f5d0fe;
}

.fill-fuchsia-300 {
  fill: #f0abfc;
}

.fill-fuchsia-400 {
  fill: #e879f9;
}

.fill-fuchsia-500 {
  fill: #d946ef;
}

.fill-fuchsia-600 {
  fill: #c026d3;
}

.fill-fuchsia-700 {
  fill: #a21caf;
}

.fill-fuchsia-800 {
  fill: #86198f;
}

.fill-fuchsia-900 {
  fill: #701a75;
}

.fill-pink-50 {
  fill: #fdf2f8;
}

.fill-pink-100 {
  fill: #fce7f3;
}

.fill-pink-200 {
  fill: #fbcfe8;
}

.fill-pink-300 {
  fill: #f9a8d4;
}

.fill-pink-400 {
  fill: #f472b6;
}

.fill-pink-500 {
  fill: #ec4899;
}

.fill-pink-600 {
  fill: #db2777;
}

.fill-pink-700 {
  fill: #be185d;
}

.fill-pink-800 {
  fill: #9d174d;
}

.fill-pink-900 {
  fill: #831843;
}

.fill-rose-50 {
  fill: #fff1f2;
}

.fill-rose-100 {
  fill: #ffe4e6;
}

.fill-rose-200 {
  fill: #fecdd3;
}

.fill-rose-300 {
  fill: #fda4af;
}

.fill-rose-400 {
  fill: #fb7185;
}

.fill-rose-500 {
  fill: #f43f5e;
}

.fill-rose-600 {
  fill: #e11d48;
}

.fill-rose-700 {
  fill: #be123c;
}

.fill-rose-800 {
  fill: #9f1239;
}

.fill-rose-900 {
  fill: #881337;
}

.fill-textLgColor {
  fill: var(--text-large-color);
}

.fill-textSmColor {
  fill: var(--text-small-color);
}

.fill-subText {
  fill: var(--sub-text-color);
}

.fill-navBar-linkActive {
  fill: var(--nav-link-active);
}

.fill-navBar-linkActiveStripe {
  fill: var(--nav-link-active-stripe);
}

.fill-mobileNav-text {
  fill: var(--mobile-text);
}

.fill-mobileNav-textHover {
  fill: var(--mobile-hover-text);
}

.fill-mobileNav-border {
  fill: var(--mobile-border);
}

.fill-aboutMe-smIconBg {
  fill: var(--sm-icon-bg);
}

.fill-aboutMe-aboutMeText {
  fill: var(--aboutme-text);
}

.fill-aboutMe-alissa {
  fill: var(--alissa);
}

.fill-projects-text {
  fill: var(--project-text-color);
}

.fill-projects-subText {
  fill: var(--project-sub-text);
}

.fill-projects-arrow {
  fill: var(--project-arrow);
}

.fill-projects-recentBg {
  fill: var(--recent-project-bg);
}

.fill-projects-recentHover {
  fill: var(--recent-project-bg-hover);
}

.fill-projects-recentShadow {
  fill: var(--recent-project-shadow);
}

.fill-contact-label {
  fill: var(--label-text);
}

.fill-contact-send {
  fill: var(--send-btn);
}

.fill-contact-sendHover {
  fill: var(--send-btn-hover);
}

.fill-blog-lgText {
  fill: var(--blog-lg-text);
}

.fill-blog-border {
  fill: var(--blog-input-border);
}

.fill-blog-tagBg {
  fill: var(--tag-btn-bg);
}

.fill-post-bodyText {
  fill: var(--text-body);
}

.fill-post-bodyTextLg {
  fill: var(--text-body-lg);
}

.fill-post-icon {
  fill: var(--icon);
}

.fill-post-iconHover {
  fill: var(--icon-hover);
}

.fill-post-hyperlink {
  fill: var(--hyperlink);
}

.fill-post-hyperlinkHover {
  fill: var(--hyperlink-hover);
}

.fill-post-quote {
  fill: var(--quote);
}

.fill-post-quoteAuthor {
  fill: var(--quote-author);
}

.stroke-inherit {
  stroke: inherit;
}

.stroke-current {
  stroke: currentColor;
}

.stroke-transparent {
  stroke: transparent;
}

.stroke-black {
  stroke: #000;
}

.stroke-white {
  stroke: #fff;
}

.stroke-slate-50 {
  stroke: #f8fafc;
}

.stroke-slate-100 {
  stroke: #f1f5f9;
}

.stroke-slate-200 {
  stroke: #e2e8f0;
}

.stroke-slate-300 {
  stroke: #cbd5e1;
}

.stroke-slate-400 {
  stroke: #94a3b8;
}

.stroke-slate-500 {
  stroke: #64748b;
}

.stroke-slate-600 {
  stroke: #475569;
}

.stroke-slate-700 {
  stroke: #334155;
}

.stroke-slate-800 {
  stroke: #1e293b;
}

.stroke-slate-900 {
  stroke: #0f172a;
}

.stroke-gray-50 {
  stroke: #f9fafb;
}

.stroke-gray-100 {
  stroke: #f3f4f6;
}

.stroke-gray-200 {
  stroke: #e5e7eb;
}

.stroke-gray-300 {
  stroke: #d1d5db;
}

.stroke-gray-400 {
  stroke: #9ca3af;
}

.stroke-gray-500 {
  stroke: #6b7280;
}

.stroke-gray-600 {
  stroke: #4b5563;
}

.stroke-gray-700 {
  stroke: #374151;
}

.stroke-gray-800 {
  stroke: #1f2937;
}

.stroke-gray-900 {
  stroke: #111827;
}

.stroke-zinc-50 {
  stroke: #fafafa;
}

.stroke-zinc-100 {
  stroke: #f4f4f5;
}

.stroke-zinc-200 {
  stroke: #e4e4e7;
}

.stroke-zinc-300 {
  stroke: #d4d4d8;
}

.stroke-zinc-400 {
  stroke: #a1a1aa;
}

.stroke-zinc-500 {
  stroke: #71717a;
}

.stroke-zinc-600 {
  stroke: #52525b;
}

.stroke-zinc-700 {
  stroke: #3f3f46;
}

.stroke-zinc-800 {
  stroke: #27272a;
}

.stroke-zinc-900 {
  stroke: #18181b;
}

.stroke-neutral-50 {
  stroke: #fafafa;
}

.stroke-neutral-100 {
  stroke: #f5f5f5;
}

.stroke-neutral-200 {
  stroke: #e5e5e5;
}

.stroke-neutral-300 {
  stroke: #d4d4d4;
}

.stroke-neutral-400 {
  stroke: #a3a3a3;
}

.stroke-neutral-500 {
  stroke: #737373;
}

.stroke-neutral-600 {
  stroke: #525252;
}

.stroke-neutral-700 {
  stroke: #404040;
}

.stroke-neutral-800 {
  stroke: #262626;
}

.stroke-neutral-900 {
  stroke: #171717;
}

.stroke-stone-50 {
  stroke: #fafaf9;
}

.stroke-stone-100 {
  stroke: #f5f5f4;
}

.stroke-stone-200 {
  stroke: #e7e5e4;
}

.stroke-stone-300 {
  stroke: #d6d3d1;
}

.stroke-stone-400 {
  stroke: #a8a29e;
}

.stroke-stone-500 {
  stroke: #78716c;
}

.stroke-stone-600 {
  stroke: #57534e;
}

.stroke-stone-700 {
  stroke: #44403c;
}

.stroke-stone-800 {
  stroke: #292524;
}

.stroke-stone-900 {
  stroke: #1c1917;
}

.stroke-red-50 {
  stroke: #fef2f2;
}

.stroke-red-100 {
  stroke: #fee2e2;
}

.stroke-red-200 {
  stroke: #fecaca;
}

.stroke-red-300 {
  stroke: #fca5a5;
}

.stroke-red-400 {
  stroke: #f87171;
}

.stroke-red-500 {
  stroke: #ef4444;
}

.stroke-red-600 {
  stroke: #dc2626;
}

.stroke-red-700 {
  stroke: #b91c1c;
}

.stroke-red-800 {
  stroke: #991b1b;
}

.stroke-red-900 {
  stroke: #7f1d1d;
}

.stroke-orange-50 {
  stroke: #fff7ed;
}

.stroke-orange-100 {
  stroke: #ffedd5;
}

.stroke-orange-200 {
  stroke: #fed7aa;
}

.stroke-orange-300 {
  stroke: #fdba74;
}

.stroke-orange-400 {
  stroke: #fb923c;
}

.stroke-orange-500 {
  stroke: #f97316;
}

.stroke-orange-600 {
  stroke: #ea580c;
}

.stroke-orange-700 {
  stroke: #c2410c;
}

.stroke-orange-800 {
  stroke: #9a3412;
}

.stroke-orange-900 {
  stroke: #7c2d12;
}

.stroke-amber-50 {
  stroke: #fffbeb;
}

.stroke-amber-100 {
  stroke: #fef3c7;
}

.stroke-amber-200 {
  stroke: #fde68a;
}

.stroke-amber-300 {
  stroke: #fcd34d;
}

.stroke-amber-400 {
  stroke: #fbbf24;
}

.stroke-amber-500 {
  stroke: #f59e0b;
}

.stroke-amber-600 {
  stroke: #d97706;
}

.stroke-amber-700 {
  stroke: #b45309;
}

.stroke-amber-800 {
  stroke: #92400e;
}

.stroke-amber-900 {
  stroke: #78350f;
}

.stroke-yellow-50 {
  stroke: #fefce8;
}

.stroke-yellow-100 {
  stroke: #fef9c3;
}

.stroke-yellow-200 {
  stroke: #fef08a;
}

.stroke-yellow-300 {
  stroke: #fde047;
}

.stroke-yellow-400 {
  stroke: #facc15;
}

.stroke-yellow-500 {
  stroke: #eab308;
}

.stroke-yellow-600 {
  stroke: #ca8a04;
}

.stroke-yellow-700 {
  stroke: #a16207;
}

.stroke-yellow-800 {
  stroke: #854d0e;
}

.stroke-yellow-900 {
  stroke: #713f12;
}

.stroke-lime-50 {
  stroke: #f7fee7;
}

.stroke-lime-100 {
  stroke: #ecfccb;
}

.stroke-lime-200 {
  stroke: #d9f99d;
}

.stroke-lime-300 {
  stroke: #bef264;
}

.stroke-lime-400 {
  stroke: #a3e635;
}

.stroke-lime-500 {
  stroke: #84cc16;
}

.stroke-lime-600 {
  stroke: #65a30d;
}

.stroke-lime-700 {
  stroke: #4d7c0f;
}

.stroke-lime-800 {
  stroke: #3f6212;
}

.stroke-lime-900 {
  stroke: #365314;
}

.stroke-green-50 {
  stroke: #f0fdf4;
}

.stroke-green-100 {
  stroke: #dcfce7;
}

.stroke-green-200 {
  stroke: #bbf7d0;
}

.stroke-green-300 {
  stroke: #86efac;
}

.stroke-green-400 {
  stroke: #4ade80;
}

.stroke-green-500 {
  stroke: #22c55e;
}

.stroke-green-600 {
  stroke: #16a34a;
}

.stroke-green-700 {
  stroke: #15803d;
}

.stroke-green-800 {
  stroke: #166534;
}

.stroke-green-900 {
  stroke: #14532d;
}

.stroke-emerald-50 {
  stroke: #ecfdf5;
}

.stroke-emerald-100 {
  stroke: #d1fae5;
}

.stroke-emerald-200 {
  stroke: #a7f3d0;
}

.stroke-emerald-300 {
  stroke: #6ee7b7;
}

.stroke-emerald-400 {
  stroke: #34d399;
}

.stroke-emerald-500 {
  stroke: #10b981;
}

.stroke-emerald-600 {
  stroke: #059669;
}

.stroke-emerald-700 {
  stroke: #047857;
}

.stroke-emerald-800 {
  stroke: #065f46;
}

.stroke-emerald-900 {
  stroke: #064e3b;
}

.stroke-teal-50 {
  stroke: #f0fdfa;
}

.stroke-teal-100 {
  stroke: #ccfbf1;
}

.stroke-teal-200 {
  stroke: #99f6e4;
}

.stroke-teal-300 {
  stroke: #5eead4;
}

.stroke-teal-400 {
  stroke: #2dd4bf;
}

.stroke-teal-500 {
  stroke: #14b8a6;
}

.stroke-teal-600 {
  stroke: #0d9488;
}

.stroke-teal-700 {
  stroke: #0f766e;
}

.stroke-teal-800 {
  stroke: #115e59;
}

.stroke-teal-900 {
  stroke: #134e4a;
}

.stroke-cyan-50 {
  stroke: #ecfeff;
}

.stroke-cyan-100 {
  stroke: #cffafe;
}

.stroke-cyan-200 {
  stroke: #a5f3fc;
}

.stroke-cyan-300 {
  stroke: #67e8f9;
}

.stroke-cyan-400 {
  stroke: #22d3ee;
}

.stroke-cyan-500 {
  stroke: #06b6d4;
}

.stroke-cyan-600 {
  stroke: #0891b2;
}

.stroke-cyan-700 {
  stroke: #0e7490;
}

.stroke-cyan-800 {
  stroke: #155e75;
}

.stroke-cyan-900 {
  stroke: #164e63;
}

.stroke-sky-50 {
  stroke: #f0f9ff;
}

.stroke-sky-100 {
  stroke: #e0f2fe;
}

.stroke-sky-200 {
  stroke: #bae6fd;
}

.stroke-sky-300 {
  stroke: #7dd3fc;
}

.stroke-sky-400 {
  stroke: #38bdf8;
}

.stroke-sky-500 {
  stroke: #0ea5e9;
}

.stroke-sky-600 {
  stroke: #0284c7;
}

.stroke-sky-700 {
  stroke: #0369a1;
}

.stroke-sky-800 {
  stroke: #075985;
}

.stroke-sky-900 {
  stroke: #0c4a6e;
}

.stroke-blue-50 {
  stroke: #eff6ff;
}

.stroke-blue-100 {
  stroke: #dbeafe;
}

.stroke-blue-200 {
  stroke: #bfdbfe;
}

.stroke-blue-300 {
  stroke: #93c5fd;
}

.stroke-blue-400 {
  stroke: #60a5fa;
}

.stroke-blue-500 {
  stroke: #3b82f6;
}

.stroke-blue-600 {
  stroke: #2563eb;
}

.stroke-blue-700 {
  stroke: #1d4ed8;
}

.stroke-blue-800 {
  stroke: #1e40af;
}

.stroke-blue-900 {
  stroke: #1e3a8a;
}

.stroke-indigo-50 {
  stroke: #eef2ff;
}

.stroke-indigo-100 {
  stroke: #e0e7ff;
}

.stroke-indigo-200 {
  stroke: #c7d2fe;
}

.stroke-indigo-300 {
  stroke: #a5b4fc;
}

.stroke-indigo-400 {
  stroke: #818cf8;
}

.stroke-indigo-500 {
  stroke: #6366f1;
}

.stroke-indigo-600 {
  stroke: #4f46e5;
}

.stroke-indigo-700 {
  stroke: #4338ca;
}

.stroke-indigo-800 {
  stroke: #3730a3;
}

.stroke-indigo-900 {
  stroke: #312e81;
}

.stroke-violet-50 {
  stroke: #f5f3ff;
}

.stroke-violet-100 {
  stroke: #ede9fe;
}

.stroke-violet-200 {
  stroke: #ddd6fe;
}

.stroke-violet-300 {
  stroke: #c4b5fd;
}

.stroke-violet-400 {
  stroke: #a78bfa;
}

.stroke-violet-500 {
  stroke: #8b5cf6;
}

.stroke-violet-600 {
  stroke: #7c3aed;
}

.stroke-violet-700 {
  stroke: #6d28d9;
}

.stroke-violet-800 {
  stroke: #5b21b6;
}

.stroke-violet-900 {
  stroke: #4c1d95;
}

.stroke-purple-50 {
  stroke: #faf5ff;
}

.stroke-purple-100 {
  stroke: #f3e8ff;
}

.stroke-purple-200 {
  stroke: #e9d5ff;
}

.stroke-purple-300 {
  stroke: #d8b4fe;
}

.stroke-purple-400 {
  stroke: #c084fc;
}

.stroke-purple-500 {
  stroke: #a855f7;
}

.stroke-purple-600 {
  stroke: #9333ea;
}

.stroke-purple-700 {
  stroke: #7e22ce;
}

.stroke-purple-800 {
  stroke: #6b21a8;
}

.stroke-purple-900 {
  stroke: #581c87;
}

.stroke-fuchsia-50 {
  stroke: #fdf4ff;
}

.stroke-fuchsia-100 {
  stroke: #fae8ff;
}

.stroke-fuchsia-200 {
  stroke: #f5d0fe;
}

.stroke-fuchsia-300 {
  stroke: #f0abfc;
}

.stroke-fuchsia-400 {
  stroke: #e879f9;
}

.stroke-fuchsia-500 {
  stroke: #d946ef;
}

.stroke-fuchsia-600 {
  stroke: #c026d3;
}

.stroke-fuchsia-700 {
  stroke: #a21caf;
}

.stroke-fuchsia-800 {
  stroke: #86198f;
}

.stroke-fuchsia-900 {
  stroke: #701a75;
}

.stroke-pink-50 {
  stroke: #fdf2f8;
}

.stroke-pink-100 {
  stroke: #fce7f3;
}

.stroke-pink-200 {
  stroke: #fbcfe8;
}

.stroke-pink-300 {
  stroke: #f9a8d4;
}

.stroke-pink-400 {
  stroke: #f472b6;
}

.stroke-pink-500 {
  stroke: #ec4899;
}

.stroke-pink-600 {
  stroke: #db2777;
}

.stroke-pink-700 {
  stroke: #be185d;
}

.stroke-pink-800 {
  stroke: #9d174d;
}

.stroke-pink-900 {
  stroke: #831843;
}

.stroke-rose-50 {
  stroke: #fff1f2;
}

.stroke-rose-100 {
  stroke: #ffe4e6;
}

.stroke-rose-200 {
  stroke: #fecdd3;
}

.stroke-rose-300 {
  stroke: #fda4af;
}

.stroke-rose-400 {
  stroke: #fb7185;
}

.stroke-rose-500 {
  stroke: #f43f5e;
}

.stroke-rose-600 {
  stroke: #e11d48;
}

.stroke-rose-700 {
  stroke: #be123c;
}

.stroke-rose-800 {
  stroke: #9f1239;
}

.stroke-rose-900 {
  stroke: #881337;
}

.stroke-textLgColor {
  stroke: var(--text-large-color);
}

.stroke-textSmColor {
  stroke: var(--text-small-color);
}

.stroke-subText {
  stroke: var(--sub-text-color);
}

.stroke-navBar-linkActive {
  stroke: var(--nav-link-active);
}

.stroke-navBar-linkActiveStripe {
  stroke: var(--nav-link-active-stripe);
}

.stroke-mobileNav-text {
  stroke: var(--mobile-text);
}

.stroke-mobileNav-textHover {
  stroke: var(--mobile-hover-text);
}

.stroke-mobileNav-border {
  stroke: var(--mobile-border);
}

.stroke-aboutMe-smIconBg {
  stroke: var(--sm-icon-bg);
}

.stroke-aboutMe-aboutMeText {
  stroke: var(--aboutme-text);
}

.stroke-aboutMe-alissa {
  stroke: var(--alissa);
}

.stroke-projects-text {
  stroke: var(--project-text-color);
}

.stroke-projects-subText {
  stroke: var(--project-sub-text);
}

.stroke-projects-arrow {
  stroke: var(--project-arrow);
}

.stroke-projects-recentBg {
  stroke: var(--recent-project-bg);
}

.stroke-projects-recentHover {
  stroke: var(--recent-project-bg-hover);
}

.stroke-projects-recentShadow {
  stroke: var(--recent-project-shadow);
}

.stroke-contact-label {
  stroke: var(--label-text);
}

.stroke-contact-send {
  stroke: var(--send-btn);
}

.stroke-contact-sendHover {
  stroke: var(--send-btn-hover);
}

.stroke-blog-lgText {
  stroke: var(--blog-lg-text);
}

.stroke-blog-border {
  stroke: var(--blog-input-border);
}

.stroke-blog-tagBg {
  stroke: var(--tag-btn-bg);
}

.stroke-post-bodyText {
  stroke: var(--text-body);
}

.stroke-post-bodyTextLg {
  stroke: var(--text-body-lg);
}

.stroke-post-icon {
  stroke: var(--icon);
}

.stroke-post-iconHover {
  stroke: var(--icon-hover);
}

.stroke-post-hyperlink {
  stroke: var(--hyperlink);
}

.stroke-post-hyperlinkHover {
  stroke: var(--hyperlink-hover);
}

.stroke-post-quote {
  stroke: var(--quote);
}

.stroke-post-quoteAuthor {
  stroke: var(--quote-author);
}

.stroke-0 {
  stroke-width: 0;
}

.stroke-1 {
  stroke-width: 1;
}

.stroke-2 {
  stroke-width: 2;
}

.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.object-fill {
  -o-object-fit: fill;
     object-fit: fill;
}

.object-none {
  -o-object-fit: none;
     object-fit: none;
}

.object-scale-down {
  -o-object-fit: scale-down;
     object-fit: scale-down;
}

.object-bottom {
  -o-object-position: bottom;
     object-position: bottom;
}

.object-center {
  -o-object-position: center;
     object-position: center;
}

.object-left {
  -o-object-position: left;
     object-position: left;
}

.object-left-bottom {
  -o-object-position: left bottom;
     object-position: left bottom;
}

.object-left-top {
  -o-object-position: left top;
     object-position: left top;
}

.object-right {
  -o-object-position: right;
     object-position: right;
}

.object-right-bottom {
  -o-object-position: right bottom;
     object-position: right bottom;
}

.object-right-top {
  -o-object-position: right top;
     object-position: right top;
}

.object-top {
  -o-object-position: top;
     object-position: top;
}

.p-5 {
  padding: 1.25rem;
}

.p-12 {
  padding: 3rem;
}

.p-4 {
  padding: 1rem;
}

.p-1 {
  padding: 0.25rem;
}

.p-0 {
  padding: 0px;
}

.p-6 {
  padding: 1.5rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-8 {
  padding: 2rem;
}

.p-7 {
  padding: 1.75rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-9 {
  padding: 2.25rem;
}

.p-11 {
  padding: 2.75rem;
}

.p-14 {
  padding: 3.5rem;
}

.p-16 {
  padding: 4rem;
}

.p-20 {
  padding: 5rem;
}

.p-24 {
  padding: 6rem;
}

.p-28 {
  padding: 7rem;
}

.p-32 {
  padding: 8rem;
}

.p-36 {
  padding: 9rem;
}

.p-40 {
  padding: 10rem;
}

.p-44 {
  padding: 11rem;
}

.p-48 {
  padding: 12rem;
}

.p-52 {
  padding: 13rem;
}

.p-56 {
  padding: 14rem;
}

.p-60 {
  padding: 15rem;
}

.p-64 {
  padding: 16rem;
}

.p-72 {
  padding: 18rem;
}

.p-80 {
  padding: 20rem;
}

.p-96 {
  padding: 24rem;
}

.p-px {
  padding: 1px;
}

.p-0\.5 {
  padding: 0.125rem;
}

.p-1\.5 {
  padding: 0.375rem;
}

.p-2\.5 {
  padding: 0.625rem;
}

.p-3\.5 {
  padding: 0.875rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.py-9 {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}

.px-11 {
  padding-left: 2.75rem;
  padding-right: 2.75rem;
}

.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}

.px-14 {
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}

.px-16 {
  padding-left: 4rem;
  padding-right: 4rem;
}

.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
}

.px-24 {
  padding-left: 6rem;
  padding-right: 6rem;
}

.px-28 {
  padding-left: 7rem;
  padding-right: 7rem;
}

.px-32 {
  padding-left: 8rem;
  padding-right: 8rem;
}

.px-36 {
  padding-left: 9rem;
  padding-right: 9rem;
}

.px-40 {
  padding-left: 10rem;
  padding-right: 10rem;
}

.px-44 {
  padding-left: 11rem;
  padding-right: 11rem;
}

.px-48 {
  padding-left: 12rem;
  padding-right: 12rem;
}

.px-52 {
  padding-left: 13rem;
  padding-right: 13rem;
}

.px-56 {
  padding-left: 14rem;
  padding-right: 14rem;
}

.px-60 {
  padding-left: 15rem;
  padding-right: 15rem;
}

.px-64 {
  padding-left: 16rem;
  padding-right: 16rem;
}

.px-72 {
  padding-left: 18rem;
  padding-right: 18rem;
}

.px-80 {
  padding-left: 20rem;
  padding-right: 20rem;
}

.px-96 {
  padding-left: 24rem;
  padding-right: 24rem;
}

.px-px {
  padding-left: 1px;
  padding-right: 1px;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.py-11 {
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.py-28 {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.py-32 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.py-36 {
  padding-top: 9rem;
  padding-bottom: 9rem;
}

.py-40 {
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.py-44 {
  padding-top: 11rem;
  padding-bottom: 11rem;
}

.py-48 {
  padding-top: 12rem;
  padding-bottom: 12rem;
}

.py-52 {
  padding-top: 13rem;
  padding-bottom: 13rem;
}

.py-56 {
  padding-top: 14rem;
  padding-bottom: 14rem;
}

.py-60 {
  padding-top: 15rem;
  padding-bottom: 15rem;
}

.py-64 {
  padding-top: 16rem;
  padding-bottom: 16rem;
}

.py-72 {
  padding-top: 18rem;
  padding-bottom: 18rem;
}

.py-80 {
  padding-top: 20rem;
  padding-bottom: 20rem;
}

.py-96 {
  padding-top: 24rem;
  padding-bottom: 24rem;
}

.py-px {
  padding-top: 1px;
  padding-bottom: 1px;
}

.px-\[5vw\] {
  padding-left: 5vw;
  padding-right: 5vw;
}

.px-0\.5 {
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}

.px-1\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}

.px-2\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

.px-3\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}

.py-0\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-2\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-3\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pb-12 {
  padding-bottom: 3rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pb-20 {
  padding-bottom: 5rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pt-0 {
  padding-top: 0px;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pt-7 {
  padding-top: 1.75rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pt-9 {
  padding-top: 2.25rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pt-11 {
  padding-top: 2.75rem;
}

.pt-12 {
  padding-top: 3rem;
}

.pt-14 {
  padding-top: 3.5rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-24 {
  padding-top: 6rem;
}

.pt-28 {
  padding-top: 7rem;
}

.pt-32 {
  padding-top: 8rem;
}

.pt-36 {
  padding-top: 9rem;
}

.pt-40 {
  padding-top: 10rem;
}

.pt-44 {
  padding-top: 11rem;
}

.pt-48 {
  padding-top: 12rem;
}

.pt-52 {
  padding-top: 13rem;
}

.pt-56 {
  padding-top: 14rem;
}

.pt-60 {
  padding-top: 15rem;
}

.pt-64 {
  padding-top: 16rem;
}

.pt-72 {
  padding-top: 18rem;
}

.pt-80 {
  padding-top: 20rem;
}

.pt-96 {
  padding-top: 24rem;
}

.pt-px {
  padding-top: 1px;
}

.pr-0 {
  padding-right: 0px;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pr-7 {
  padding-right: 1.75rem;
}

.pr-8 {
  padding-right: 2rem;
}

.pr-9 {
  padding-right: 2.25rem;
}

.pr-10 {
  padding-right: 2.5rem;
}

.pr-11 {
  padding-right: 2.75rem;
}

.pr-12 {
  padding-right: 3rem;
}

.pr-14 {
  padding-right: 3.5rem;
}

.pr-16 {
  padding-right: 4rem;
}

.pr-20 {
  padding-right: 5rem;
}

.pr-24 {
  padding-right: 6rem;
}

.pr-28 {
  padding-right: 7rem;
}

.pr-32 {
  padding-right: 8rem;
}

.pr-36 {
  padding-right: 9rem;
}

.pr-40 {
  padding-right: 10rem;
}

.pr-44 {
  padding-right: 11rem;
}

.pr-48 {
  padding-right: 12rem;
}

.pr-52 {
  padding-right: 13rem;
}

.pr-56 {
  padding-right: 14rem;
}

.pr-60 {
  padding-right: 15rem;
}

.pr-64 {
  padding-right: 16rem;
}

.pr-72 {
  padding-right: 18rem;
}

.pr-80 {
  padding-right: 20rem;
}

.pr-96 {
  padding-right: 24rem;
}

.pr-px {
  padding-right: 1px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-7 {
  padding-bottom: 1.75rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pb-9 {
  padding-bottom: 2.25rem;
}

.pb-11 {
  padding-bottom: 2.75rem;
}

.pb-14 {
  padding-bottom: 3.5rem;
}

.pb-16 {
  padding-bottom: 4rem;
}

.pb-24 {
  padding-bottom: 6rem;
}

.pb-28 {
  padding-bottom: 7rem;
}

.pb-32 {
  padding-bottom: 8rem;
}

.pb-36 {
  padding-bottom: 9rem;
}

.pb-40 {
  padding-bottom: 10rem;
}

.pb-44 {
  padding-bottom: 11rem;
}

.pb-48 {
  padding-bottom: 12rem;
}

.pb-52 {
  padding-bottom: 13rem;
}

.pb-56 {
  padding-bottom: 14rem;
}

.pb-60 {
  padding-bottom: 15rem;
}

.pb-64 {
  padding-bottom: 16rem;
}

.pb-72 {
  padding-bottom: 18rem;
}

.pb-80 {
  padding-bottom: 20rem;
}

.pb-96 {
  padding-bottom: 24rem;
}

.pb-px {
  padding-bottom: 1px;
}

.pl-0 {
  padding-left: 0px;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.pl-8 {
  padding-left: 2rem;
}

.pl-9 {
  padding-left: 2.25rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.pl-11 {
  padding-left: 2.75rem;
}

.pl-12 {
  padding-left: 3rem;
}

.pl-14 {
  padding-left: 3.5rem;
}

.pl-16 {
  padding-left: 4rem;
}

.pl-20 {
  padding-left: 5rem;
}

.pl-24 {
  padding-left: 6rem;
}

.pl-28 {
  padding-left: 7rem;
}

.pl-32 {
  padding-left: 8rem;
}

.pl-36 {
  padding-left: 9rem;
}

.pl-40 {
  padding-left: 10rem;
}

.pl-44 {
  padding-left: 11rem;
}

.pl-48 {
  padding-left: 12rem;
}

.pl-52 {
  padding-left: 13rem;
}

.pl-56 {
  padding-left: 14rem;
}

.pl-60 {
  padding-left: 15rem;
}

.pl-64 {
  padding-left: 16rem;
}

.pl-72 {
  padding-left: 18rem;
}

.pl-80 {
  padding-left: 20rem;
}

.pl-96 {
  padding-left: 24rem;
}

.pl-px {
  padding-left: 1px;
}

.pt-0\.5 {
  padding-top: 0.125rem;
}

.pt-1\.5 {
  padding-top: 0.375rem;
}

.pt-2\.5 {
  padding-top: 0.625rem;
}

.pt-3\.5 {
  padding-top: 0.875rem;
}

.pr-0\.5 {
  padding-right: 0.125rem;
}

.pr-1\.5 {
  padding-right: 0.375rem;
}

.pr-2\.5 {
  padding-right: 0.625rem;
}

.pr-3\.5 {
  padding-right: 0.875rem;
}

.pb-0\.5 {
  padding-bottom: 0.125rem;
}

.pb-1\.5 {
  padding-bottom: 0.375rem;
}

.pb-2\.5 {
  padding-bottom: 0.625rem;
}

.pb-3\.5 {
  padding-bottom: 0.875rem;
}

.pl-0\.5 {
  padding-left: 0.125rem;
}

.pl-1\.5 {
  padding-left: 0.375rem;
}

.pl-2\.5 {
  padding-left: 0.625rem;
}

.pl-3\.5 {
  padding-left: 0.875rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

.indent-0 {
  text-indent: 0px;
}

.indent-1 {
  text-indent: 0.25rem;
}

.indent-2 {
  text-indent: 0.5rem;
}

.indent-3 {
  text-indent: 0.75rem;
}

.indent-4 {
  text-indent: 1rem;
}

.indent-5 {
  text-indent: 1.25rem;
}

.indent-6 {
  text-indent: 1.5rem;
}

.indent-7 {
  text-indent: 1.75rem;
}

.indent-8 {
  text-indent: 2rem;
}

.indent-9 {
  text-indent: 2.25rem;
}

.indent-10 {
  text-indent: 2.5rem;
}

.indent-11 {
  text-indent: 2.75rem;
}

.indent-12 {
  text-indent: 3rem;
}

.indent-14 {
  text-indent: 3.5rem;
}

.indent-16 {
  text-indent: 4rem;
}

.indent-20 {
  text-indent: 5rem;
}

.indent-24 {
  text-indent: 6rem;
}

.indent-28 {
  text-indent: 7rem;
}

.indent-32 {
  text-indent: 8rem;
}

.indent-36 {
  text-indent: 9rem;
}

.indent-40 {
  text-indent: 10rem;
}

.indent-44 {
  text-indent: 11rem;
}

.indent-48 {
  text-indent: 12rem;
}

.indent-52 {
  text-indent: 13rem;
}

.indent-56 {
  text-indent: 14rem;
}

.indent-60 {
  text-indent: 15rem;
}

.indent-64 {
  text-indent: 16rem;
}

.indent-72 {
  text-indent: 18rem;
}

.indent-80 {
  text-indent: 20rem;
}

.indent-96 {
  text-indent: 24rem;
}

.indent-px {
  text-indent: 1px;
}

.-indent-0 {
  text-indent: -0px;
}

.-indent-1 {
  text-indent: -0.25rem;
}

.-indent-2 {
  text-indent: -0.5rem;
}

.-indent-3 {
  text-indent: -0.75rem;
}

.-indent-4 {
  text-indent: -1rem;
}

.-indent-5 {
  text-indent: -1.25rem;
}

.-indent-6 {
  text-indent: -1.5rem;
}

.-indent-7 {
  text-indent: -1.75rem;
}

.-indent-8 {
  text-indent: -2rem;
}

.-indent-9 {
  text-indent: -2.25rem;
}

.-indent-10 {
  text-indent: -2.5rem;
}

.-indent-11 {
  text-indent: -2.75rem;
}

.-indent-12 {
  text-indent: -3rem;
}

.-indent-14 {
  text-indent: -3.5rem;
}

.-indent-16 {
  text-indent: -4rem;
}

.-indent-20 {
  text-indent: -5rem;
}

.-indent-24 {
  text-indent: -6rem;
}

.-indent-28 {
  text-indent: -7rem;
}

.-indent-32 {
  text-indent: -8rem;
}

.-indent-36 {
  text-indent: -9rem;
}

.-indent-40 {
  text-indent: -10rem;
}

.-indent-44 {
  text-indent: -11rem;
}

.-indent-48 {
  text-indent: -12rem;
}

.-indent-52 {
  text-indent: -13rem;
}

.-indent-56 {
  text-indent: -14rem;
}

.-indent-60 {
  text-indent: -15rem;
}

.-indent-64 {
  text-indent: -16rem;
}

.-indent-72 {
  text-indent: -18rem;
}

.-indent-80 {
  text-indent: -20rem;
}

.-indent-96 {
  text-indent: -24rem;
}

.-indent-px {
  text-indent: -1px;
}

.indent-0\.5 {
  text-indent: 0.125rem;
}

.indent-1\.5 {
  text-indent: 0.375rem;
}

.indent-2\.5 {
  text-indent: 0.625rem;
}

.indent-3\.5 {
  text-indent: 0.875rem;
}

.-indent-0\.5 {
  text-indent: -0.125rem;
}

.-indent-1\.5 {
  text-indent: -0.375rem;
}

.-indent-2\.5 {
  text-indent: -0.625rem;
}

.-indent-3\.5 {
  text-indent: -0.875rem;
}

.align-baseline {
  vertical-align: baseline;
}

.align-top {
  vertical-align: top;
}

.align-middle {
  vertical-align: middle;
}

.align-bottom {
  vertical-align: bottom;
}

.align-text-top {
  vertical-align: text-top;
}

.align-text-bottom {
  vertical-align: text-bottom;
}

.align-sub {
  vertical-align: sub;
}

.align-super {
  vertical-align: super;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.font-serif {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-8xl {
  font-size: 6rem;
  line-height: 1;
}

.text-9xl {
  font-size: 8rem;
  line-height: 1;
}

.text-\[15px\] {
  font-size: 15px;
}

.text-\[16rem\] {
  font-size: 16rem;
}

.text-\[2\.5rem\] {
  font-size: 2.5rem;
}

.font-medium {
  font-weight: 500;
}

.font-extrabold {
  font-weight: 800;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-normal {
  font-weight: 400;
}

.font-light {
  font-weight: 300;
}

.font-thin {
  font-weight: 100;
}

.font-extralight {
  font-weight: 200;
}

.font-black {
  font-weight: 900;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

.normal-case {
  text-transform: none;
}

.italic {
  font-style: italic;
}

.not-italic {
  font-style: normal;
}

.normal-nums {
  font-variant-numeric: normal;
}

.ordinal {
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.slashed-zero {
  --tw-slashed-zero: slashed-zero;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.lining-nums {
  --tw-numeric-figure: lining-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.oldstyle-nums {
  --tw-numeric-figure: oldstyle-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.proportional-nums {
  --tw-numeric-spacing: proportional-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.diagonal-fractions {
  --tw-numeric-fraction: diagonal-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.stacked-fractions {
  --tw-numeric-fraction: stacked-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.leading-tight {
  line-height: 1.25;
}

.leading-snug {
  line-height: 1.375;
}

.leading-8 {
  line-height: 2rem;
}

.leading-normal {
  line-height: 1.5;
}

.leading-9 {
  line-height: 2.25rem;
}

.leading-10 {
  line-height: 2.5rem;
}

.leading-none {
  line-height: 1;
}

.leading-7 {
  line-height: 1.75rem;
}

.leading-3 {
  line-height: .75rem;
}

.leading-4 {
  line-height: 1rem;
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-relaxed {
  line-height: 1.625;
}

.leading-loose {
  line-height: 2;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.tracking-tighter {
  letter-spacing: -0.05em;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-normal {
  letter-spacing: 0em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.-tracking-tighter {
  letter-spacing: 0.05em;
}

.-tracking-tight {
  letter-spacing: 0.025em;
}

.-tracking-normal {
  letter-spacing: -0em;
}

.-tracking-wide {
  letter-spacing: -0.025em;
}

.-tracking-wider {
  letter-spacing: -0.05em;
}

.-tracking-widest {
  letter-spacing: -0.1em;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.text-textSmColor {
  color: var(--text-small-color);
}

.text-post-bodyTextLg {
  color: var(--text-body-lg);
}

.text-blog-lgText {
  color: var(--blog-lg-text);
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-rose-500 {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-cyan-200 {
  --tw-text-opacity: 1;
  color: rgb(165 243 252 / var(--tw-text-opacity));
}

.text-cyan-700 {
  --tw-text-opacity: 1;
  color: rgb(14 116 144 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-post-bodyText {
  color: var(--text-body);
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-textLgColor {
  color: var(--text-large-color);
}

.text-projects-text {
  color: var(--project-text-color);
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}

.text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity));
}

.text-cyan-100 {
  --tw-text-opacity: 1;
  color: rgb(207 250 254 / var(--tw-text-opacity));
}

.text-cyan-300 {
  --tw-text-opacity: 1;
  color: rgb(103 232 249 / var(--tw-text-opacity));
}

.text-navBar-linkActive {
  color: var(--nav-link-active);
}

.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-aboutMe-aboutMeText {
  color: var(--aboutme-text);
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-subText {
  color: var(--sub-text-color);
}

.text-contact-label {
  color: var(--label-text);
}

.text-teal-300 {
  --tw-text-opacity: 1;
  color: rgb(94 234 212 / var(--tw-text-opacity));
}

.text-projects-subText {
  color: var(--project-sub-text);
}

.text-transparent {
  color: transparent;
}

.text-post-quote {
  color: var(--quote);
}

.text-post-quoteAuthor {
  color: var(--quote-author);
}

.text-post-hyperlink {
  color: var(--hyperlink);
}

.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity));
}

.text-fuchsia-400 {
  --tw-text-opacity: 1;
  color: rgb(232 121 249 / var(--tw-text-opacity));
}

.text-emerald-500 {
  --tw-text-opacity: 1;
  color: rgb(16 185 129 / var(--tw-text-opacity));
}

.text-teal-400 {
  --tw-text-opacity: 1;
  color: rgb(45 212 191 / var(--tw-text-opacity));
}

.text-sky-600 {
  --tw-text-opacity: 1;
  color: rgb(2 132 199 / var(--tw-text-opacity));
}

.text-sky-400 {
  --tw-text-opacity: 1;
  color: rgb(56 189 248 / var(--tw-text-opacity));
}

.text-cyan-400 {
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity));
}

.text-inherit {
  color: inherit;
}

.text-current {
  color: currentColor;
}

.text-slate-50 {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.text-slate-200 {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}

.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-gray-50 {
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-zinc-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.text-zinc-100 {
  --tw-text-opacity: 1;
  color: rgb(244 244 245 / var(--tw-text-opacity));
}

.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}

.text-zinc-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}

.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}

.text-zinc-700 {
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
}

.text-zinc-800 {
  --tw-text-opacity: 1;
  color: rgb(39 39 42 / var(--tw-text-opacity));
}

.text-zinc-900 {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.text-neutral-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.text-neutral-100 {
  --tw-text-opacity: 1;
  color: rgb(245 245 245 / var(--tw-text-opacity));
}

.text-neutral-200 {
  --tw-text-opacity: 1;
  color: rgb(229 229 229 / var(--tw-text-opacity));
}

.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}

.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}

.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.text-neutral-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}

.text-neutral-700 {
  --tw-text-opacity: 1;
  color: rgb(64 64 64 / var(--tw-text-opacity));
}

.text-neutral-800 {
  --tw-text-opacity: 1;
  color: rgb(38 38 38 / var(--tw-text-opacity));
}

.text-neutral-900 {
  --tw-text-opacity: 1;
  color: rgb(23 23 23 / var(--tw-text-opacity));
}

.text-stone-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 249 / var(--tw-text-opacity));
}

.text-stone-100 {
  --tw-text-opacity: 1;
  color: rgb(245 245 244 / var(--tw-text-opacity));
}

.text-stone-200 {
  --tw-text-opacity: 1;
  color: rgb(231 229 228 / var(--tw-text-opacity));
}

.text-stone-300 {
  --tw-text-opacity: 1;
  color: rgb(214 211 209 / var(--tw-text-opacity));
}

.text-stone-400 {
  --tw-text-opacity: 1;
  color: rgb(168 162 158 / var(--tw-text-opacity));
}

.text-stone-500 {
  --tw-text-opacity: 1;
  color: rgb(120 113 108 / var(--tw-text-opacity));
}

.text-stone-600 {
  --tw-text-opacity: 1;
  color: rgb(87 83 78 / var(--tw-text-opacity));
}

.text-stone-700 {
  --tw-text-opacity: 1;
  color: rgb(68 64 60 / var(--tw-text-opacity));
}

.text-stone-800 {
  --tw-text-opacity: 1;
  color: rgb(41 37 36 / var(--tw-text-opacity));
}

.text-stone-900 {
  --tw-text-opacity: 1;
  color: rgb(28 25 23 / var(--tw-text-opacity));
}

.text-red-50 {
  --tw-text-opacity: 1;
  color: rgb(254 242 242 / var(--tw-text-opacity));
}

.text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(254 226 226 / var(--tw-text-opacity));
}

.text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(254 202 202 / var(--tw-text-opacity));
}

.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}

.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}

.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(127 29 29 / var(--tw-text-opacity));
}

.text-orange-50 {
  --tw-text-opacity: 1;
  color: rgb(255 247 237 / var(--tw-text-opacity));
}

.text-orange-100 {
  --tw-text-opacity: 1;
  color: rgb(255 237 213 / var(--tw-text-opacity));
}

.text-orange-200 {
  --tw-text-opacity: 1;
  color: rgb(254 215 170 / var(--tw-text-opacity));
}

.text-orange-300 {
  --tw-text-opacity: 1;
  color: rgb(253 186 116 / var(--tw-text-opacity));
}

.text-orange-400 {
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}

.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.text-orange-600 {
  --tw-text-opacity: 1;
  color: rgb(234 88 12 / var(--tw-text-opacity));
}

.text-orange-700 {
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}

.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(154 52 18 / var(--tw-text-opacity));
}

.text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(124 45 18 / var(--tw-text-opacity));
}

.text-amber-50 {
  --tw-text-opacity: 1;
  color: rgb(255 251 235 / var(--tw-text-opacity));
}

.text-amber-100 {
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
}

.text-amber-200 {
  --tw-text-opacity: 1;
  color: rgb(253 230 138 / var(--tw-text-opacity));
}

.text-amber-300 {
  --tw-text-opacity: 1;
  color: rgb(252 211 77 / var(--tw-text-opacity));
}

.text-amber-400 {
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}

.text-amber-500 {
  --tw-text-opacity: 1;
  color: rgb(245 158 11 / var(--tw-text-opacity));
}

.text-amber-600 {
  --tw-text-opacity: 1;
  color: rgb(217 119 6 / var(--tw-text-opacity));
}

.text-amber-700 {
  --tw-text-opacity: 1;
  color: rgb(180 83 9 / var(--tw-text-opacity));
}

.text-amber-800 {
  --tw-text-opacity: 1;
  color: rgb(146 64 14 / var(--tw-text-opacity));
}

.text-amber-900 {
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity));
}

.text-yellow-50 {
  --tw-text-opacity: 1;
  color: rgb(254 252 232 / var(--tw-text-opacity));
}

.text-yellow-100 {
  --tw-text-opacity: 1;
  color: rgb(254 249 195 / var(--tw-text-opacity));
}

.text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(254 240 138 / var(--tw-text-opacity));
}

.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity));
}

.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}

.text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(202 138 4 / var(--tw-text-opacity));
}

.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(161 98 7 / var(--tw-text-opacity));
}

.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(133 77 14 / var(--tw-text-opacity));
}

.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}

.text-lime-50 {
  --tw-text-opacity: 1;
  color: rgb(247 254 231 / var(--tw-text-opacity));
}

.text-lime-100 {
  --tw-text-opacity: 1;
  color: rgb(236 252 203 / var(--tw-text-opacity));
}

.text-lime-200 {
  --tw-text-opacity: 1;
  color: rgb(217 249 157 / var(--tw-text-opacity));
}

.text-lime-300 {
  --tw-text-opacity: 1;
  color: rgb(190 242 100 / var(--tw-text-opacity));
}

.text-lime-400 {
  --tw-text-opacity: 1;
  color: rgb(163 230 53 / var(--tw-text-opacity));
}

.text-lime-500 {
  --tw-text-opacity: 1;
  color: rgb(132 204 22 / var(--tw-text-opacity));
}

.text-lime-600 {
  --tw-text-opacity: 1;
  color: rgb(101 163 13 / var(--tw-text-opacity));
}

.text-lime-700 {
  --tw-text-opacity: 1;
  color: rgb(77 124 15 / var(--tw-text-opacity));
}

.text-lime-800 {
  --tw-text-opacity: 1;
  color: rgb(63 98 18 / var(--tw-text-opacity));
}

.text-lime-900 {
  --tw-text-opacity: 1;
  color: rgb(54 83 20 / var(--tw-text-opacity));
}

.text-green-50 {
  --tw-text-opacity: 1;
  color: rgb(240 253 244 / var(--tw-text-opacity));
}

.text-green-100 {
  --tw-text-opacity: 1;
  color: rgb(220 252 231 / var(--tw-text-opacity));
}

.text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(187 247 208 / var(--tw-text-opacity));
}

.text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(134 239 172 / var(--tw-text-opacity));
}

.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}

.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}

.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(20 83 45 / var(--tw-text-opacity));
}

.text-emerald-50 {
  --tw-text-opacity: 1;
  color: rgb(236 253 245 / var(--tw-text-opacity));
}

.text-emerald-100 {
  --tw-text-opacity: 1;
  color: rgb(209 250 229 / var(--tw-text-opacity));
}

.text-emerald-200 {
  --tw-text-opacity: 1;
  color: rgb(167 243 208 / var(--tw-text-opacity));
}

.text-emerald-300 {
  --tw-text-opacity: 1;
  color: rgb(110 231 183 / var(--tw-text-opacity));
}

.text-emerald-400 {
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity));
}

.text-emerald-600 {
  --tw-text-opacity: 1;
  color: rgb(5 150 105 / var(--tw-text-opacity));
}

.text-emerald-700 {
  --tw-text-opacity: 1;
  color: rgb(4 120 87 / var(--tw-text-opacity));
}

.text-emerald-800 {
  --tw-text-opacity: 1;
  color: rgb(6 95 70 / var(--tw-text-opacity));
}

.text-emerald-900 {
  --tw-text-opacity: 1;
  color: rgb(6 78 59 / var(--tw-text-opacity));
}

.text-teal-50 {
  --tw-text-opacity: 1;
  color: rgb(240 253 250 / var(--tw-text-opacity));
}

.text-teal-100 {
  --tw-text-opacity: 1;
  color: rgb(204 251 241 / var(--tw-text-opacity));
}

.text-teal-200 {
  --tw-text-opacity: 1;
  color: rgb(153 246 228 / var(--tw-text-opacity));
}

.text-teal-500 {
  --tw-text-opacity: 1;
  color: rgb(20 184 166 / var(--tw-text-opacity));
}

.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(13 148 136 / var(--tw-text-opacity));
}

.text-teal-700 {
  --tw-text-opacity: 1;
  color: rgb(15 118 110 / var(--tw-text-opacity));
}

.text-teal-800 {
  --tw-text-opacity: 1;
  color: rgb(17 94 89 / var(--tw-text-opacity));
}

.text-teal-900 {
  --tw-text-opacity: 1;
  color: rgb(19 78 74 / var(--tw-text-opacity));
}

.text-cyan-50 {
  --tw-text-opacity: 1;
  color: rgb(236 254 255 / var(--tw-text-opacity));
}

.text-cyan-500 {
  --tw-text-opacity: 1;
  color: rgb(6 182 212 / var(--tw-text-opacity));
}

.text-cyan-600 {
  --tw-text-opacity: 1;
  color: rgb(8 145 178 / var(--tw-text-opacity));
}

.text-cyan-800 {
  --tw-text-opacity: 1;
  color: rgb(21 94 117 / var(--tw-text-opacity));
}

.text-cyan-900 {
  --tw-text-opacity: 1;
  color: rgb(22 78 99 / var(--tw-text-opacity));
}

.text-sky-50 {
  --tw-text-opacity: 1;
  color: rgb(240 249 255 / var(--tw-text-opacity));
}

.text-sky-100 {
  --tw-text-opacity: 1;
  color: rgb(224 242 254 / var(--tw-text-opacity));
}

.text-sky-200 {
  --tw-text-opacity: 1;
  color: rgb(186 230 253 / var(--tw-text-opacity));
}

.text-sky-300 {
  --tw-text-opacity: 1;
  color: rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.text-sky-800 {
  --tw-text-opacity: 1;
  color: rgb(7 89 133 / var(--tw-text-opacity));
}

.text-sky-900 {
  --tw-text-opacity: 1;
  color: rgb(12 74 110 / var(--tw-text-opacity));
}

.text-blue-50 {
  --tw-text-opacity: 1;
  color: rgb(239 246 255 / var(--tw-text-opacity));
}

.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity));
}

.text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(30 58 138 / var(--tw-text-opacity));
}

.text-indigo-50 {
  --tw-text-opacity: 1;
  color: rgb(238 242 255 / var(--tw-text-opacity));
}

.text-indigo-100 {
  --tw-text-opacity: 1;
  color: rgb(224 231 255 / var(--tw-text-opacity));
}

.text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(199 210 254 / var(--tw-text-opacity));
}

.text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity));
}

.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(129 140 248 / var(--tw-text-opacity));
}

.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(67 56 202 / var(--tw-text-opacity));
}

.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
}

.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(49 46 129 / var(--tw-text-opacity));
}

.text-violet-50 {
  --tw-text-opacity: 1;
  color: rgb(245 243 255 / var(--tw-text-opacity));
}

.text-violet-100 {
  --tw-text-opacity: 1;
  color: rgb(237 233 254 / var(--tw-text-opacity));
}

.text-violet-200 {
  --tw-text-opacity: 1;
  color: rgb(221 214 254 / var(--tw-text-opacity));
}

.text-violet-300 {
  --tw-text-opacity: 1;
  color: rgb(196 181 253 / var(--tw-text-opacity));
}

.text-violet-400 {
  --tw-text-opacity: 1;
  color: rgb(167 139 250 / var(--tw-text-opacity));
}

.text-violet-500 {
  --tw-text-opacity: 1;
  color: rgb(139 92 246 / var(--tw-text-opacity));
}

.text-violet-600 {
  --tw-text-opacity: 1;
  color: rgb(124 58 237 / var(--tw-text-opacity));
}

.text-violet-700 {
  --tw-text-opacity: 1;
  color: rgb(109 40 217 / var(--tw-text-opacity));
}

.text-violet-800 {
  --tw-text-opacity: 1;
  color: rgb(91 33 182 / var(--tw-text-opacity));
}

.text-violet-900 {
  --tw-text-opacity: 1;
  color: rgb(76 29 149 / var(--tw-text-opacity));
}

.text-purple-50 {
  --tw-text-opacity: 1;
  color: rgb(250 245 255 / var(--tw-text-opacity));
}

.text-purple-100 {
  --tw-text-opacity: 1;
  color: rgb(243 232 255 / var(--tw-text-opacity));
}

.text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(233 213 255 / var(--tw-text-opacity));
}

.text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}

.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}

.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(147 51 234 / var(--tw-text-opacity));
}

.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(126 34 206 / var(--tw-text-opacity));
}

.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(107 33 168 / var(--tw-text-opacity));
}

.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(88 28 135 / var(--tw-text-opacity));
}

.text-fuchsia-50 {
  --tw-text-opacity: 1;
  color: rgb(253 244 255 / var(--tw-text-opacity));
}

.text-fuchsia-100 {
  --tw-text-opacity: 1;
  color: rgb(250 232 255 / var(--tw-text-opacity));
}

.text-fuchsia-200 {
  --tw-text-opacity: 1;
  color: rgb(245 208 254 / var(--tw-text-opacity));
}

.text-fuchsia-300 {
  --tw-text-opacity: 1;
  color: rgb(240 171 252 / var(--tw-text-opacity));
}

.text-fuchsia-500 {
  --tw-text-opacity: 1;
  color: rgb(217 70 239 / var(--tw-text-opacity));
}

.text-fuchsia-600 {
  --tw-text-opacity: 1;
  color: rgb(192 38 211 / var(--tw-text-opacity));
}

.text-fuchsia-700 {
  --tw-text-opacity: 1;
  color: rgb(162 28 175 / var(--tw-text-opacity));
}

.text-fuchsia-800 {
  --tw-text-opacity: 1;
  color: rgb(134 25 143 / var(--tw-text-opacity));
}

.text-fuchsia-900 {
  --tw-text-opacity: 1;
  color: rgb(112 26 117 / var(--tw-text-opacity));
}

.text-pink-50 {
  --tw-text-opacity: 1;
  color: rgb(253 242 248 / var(--tw-text-opacity));
}

.text-pink-100 {
  --tw-text-opacity: 1;
  color: rgb(252 231 243 / var(--tw-text-opacity));
}

.text-pink-200 {
  --tw-text-opacity: 1;
  color: rgb(251 207 232 / var(--tw-text-opacity));
}

.text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(249 168 212 / var(--tw-text-opacity));
}

.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(244 114 182 / var(--tw-text-opacity));
}

.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(236 72 153 / var(--tw-text-opacity));
}

.text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(219 39 119 / var(--tw-text-opacity));
}

.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(190 24 93 / var(--tw-text-opacity));
}

.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(157 23 77 / var(--tw-text-opacity));
}

.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(131 24 67 / var(--tw-text-opacity));
}

.text-rose-50 {
  --tw-text-opacity: 1;
  color: rgb(255 241 242 / var(--tw-text-opacity));
}

.text-rose-100 {
  --tw-text-opacity: 1;
  color: rgb(255 228 230 / var(--tw-text-opacity));
}

.text-rose-200 {
  --tw-text-opacity: 1;
  color: rgb(254 205 211 / var(--tw-text-opacity));
}

.text-rose-300 {
  --tw-text-opacity: 1;
  color: rgb(253 164 175 / var(--tw-text-opacity));
}

.text-rose-400 {
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity));
}

.text-rose-600 {
  --tw-text-opacity: 1;
  color: rgb(225 29 72 / var(--tw-text-opacity));
}

.text-rose-700 {
  --tw-text-opacity: 1;
  color: rgb(190 18 60 / var(--tw-text-opacity));
}

.text-rose-800 {
  --tw-text-opacity: 1;
  color: rgb(159 18 57 / var(--tw-text-opacity));
}

.text-rose-900 {
  --tw-text-opacity: 1;
  color: rgb(136 19 55 / var(--tw-text-opacity));
}

.text-navBar-linkActiveStripe {
  color: var(--nav-link-active-stripe);
}

.text-mobileNav-text {
  color: var(--mobile-text);
}

.text-mobileNav-textHover {
  color: var(--mobile-hover-text);
}

.text-mobileNav-border {
  color: var(--mobile-border);
}

.text-aboutMe-smIconBg {
  color: var(--sm-icon-bg);
}

.text-aboutMe-alissa {
  color: var(--alissa);
}

.text-projects-arrow {
  color: var(--project-arrow);
}

.text-projects-recentBg {
  color: var(--recent-project-bg);
}

.text-projects-recentHover {
  color: var(--recent-project-bg-hover);
}

.text-projects-recentShadow {
  color: var(--recent-project-shadow);
}

.text-contact-send {
  color: var(--send-btn);
}

.text-contact-sendHover {
  color: var(--send-btn-hover);
}

.text-blog-border {
  color: var(--blog-input-border);
}

.text-blog-tagBg {
  color: var(--tag-btn-bg);
}

.text-post-icon {
  color: var(--icon);
}

.text-post-iconHover {
  color: var(--icon-hover);
}

.text-post-hyperlinkHover {
  color: var(--hyperlink-hover);
}

.text-opacity-0 {
  --tw-text-opacity: 0;
}

.text-opacity-5 {
  --tw-text-opacity: 0.05;
}

.text-opacity-10 {
  --tw-text-opacity: 0.1;
}

.text-opacity-20 {
  --tw-text-opacity: 0.2;
}

.text-opacity-25 {
  --tw-text-opacity: 0.25;
}

.text-opacity-30 {
  --tw-text-opacity: 0.3;
}

.text-opacity-40 {
  --tw-text-opacity: 0.4;
}

.text-opacity-50 {
  --tw-text-opacity: 0.5;
}

.text-opacity-60 {
  --tw-text-opacity: 0.6;
}

.text-opacity-70 {
  --tw-text-opacity: 0.7;
}

.text-opacity-75 {
  --tw-text-opacity: 0.75;
}

.text-opacity-80 {
  --tw-text-opacity: 0.8;
}

.text-opacity-90 {
  --tw-text-opacity: 0.9;
}

.text-opacity-95 {
  --tw-text-opacity: 0.95;
}

.text-opacity-100 {
  --tw-text-opacity: 1;
}

.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.overline {
  -webkit-text-decoration-line: overline;
          text-decoration-line: overline;
}

.line-through {
  -webkit-text-decoration-line: line-through;
          text-decoration-line: line-through;
}

.no-underline {
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}

.decoration-inherit {
  -webkit-text-decoration-color: inherit;
          text-decoration-color: inherit;
}

.decoration-current {
  -webkit-text-decoration-color: currentColor;
          text-decoration-color: currentColor;
}

.decoration-transparent {
  -webkit-text-decoration-color: transparent;
          text-decoration-color: transparent;
}

.decoration-black {
  -webkit-text-decoration-color: #000;
          text-decoration-color: #000;
}

.decoration-white {
  -webkit-text-decoration-color: #fff;
          text-decoration-color: #fff;
}

.decoration-slate-50 {
  -webkit-text-decoration-color: #f8fafc;
          text-decoration-color: #f8fafc;
}

.decoration-slate-100 {
  -webkit-text-decoration-color: #f1f5f9;
          text-decoration-color: #f1f5f9;
}

.decoration-slate-200 {
  -webkit-text-decoration-color: #e2e8f0;
          text-decoration-color: #e2e8f0;
}

.decoration-slate-300 {
  -webkit-text-decoration-color: #cbd5e1;
          text-decoration-color: #cbd5e1;
}

.decoration-slate-400 {
  -webkit-text-decoration-color: #94a3b8;
          text-decoration-color: #94a3b8;
}

.decoration-slate-500 {
  -webkit-text-decoration-color: #64748b;
          text-decoration-color: #64748b;
}

.decoration-slate-600 {
  -webkit-text-decoration-color: #475569;
          text-decoration-color: #475569;
}

.decoration-slate-700 {
  -webkit-text-decoration-color: #334155;
          text-decoration-color: #334155;
}

.decoration-slate-800 {
  -webkit-text-decoration-color: #1e293b;
          text-decoration-color: #1e293b;
}

.decoration-slate-900 {
  -webkit-text-decoration-color: #0f172a;
          text-decoration-color: #0f172a;
}

.decoration-gray-50 {
  -webkit-text-decoration-color: #f9fafb;
          text-decoration-color: #f9fafb;
}

.decoration-gray-100 {
  -webkit-text-decoration-color: #f3f4f6;
          text-decoration-color: #f3f4f6;
}

.decoration-gray-200 {
  -webkit-text-decoration-color: #e5e7eb;
          text-decoration-color: #e5e7eb;
}

.decoration-gray-300 {
  -webkit-text-decoration-color: #d1d5db;
          text-decoration-color: #d1d5db;
}

.decoration-gray-400 {
  -webkit-text-decoration-color: #9ca3af;
          text-decoration-color: #9ca3af;
}

.decoration-gray-500 {
  -webkit-text-decoration-color: #6b7280;
          text-decoration-color: #6b7280;
}

.decoration-gray-600 {
  -webkit-text-decoration-color: #4b5563;
          text-decoration-color: #4b5563;
}

.decoration-gray-700 {
  -webkit-text-decoration-color: #374151;
          text-decoration-color: #374151;
}

.decoration-gray-800 {
  -webkit-text-decoration-color: #1f2937;
          text-decoration-color: #1f2937;
}

.decoration-gray-900 {
  -webkit-text-decoration-color: #111827;
          text-decoration-color: #111827;
}

.decoration-zinc-50 {
  -webkit-text-decoration-color: #fafafa;
          text-decoration-color: #fafafa;
}

.decoration-zinc-100 {
  -webkit-text-decoration-color: #f4f4f5;
          text-decoration-color: #f4f4f5;
}

.decoration-zinc-200 {
  -webkit-text-decoration-color: #e4e4e7;
          text-decoration-color: #e4e4e7;
}

.decoration-zinc-300 {
  -webkit-text-decoration-color: #d4d4d8;
          text-decoration-color: #d4d4d8;
}

.decoration-zinc-400 {
  -webkit-text-decoration-color: #a1a1aa;
          text-decoration-color: #a1a1aa;
}

.decoration-zinc-500 {
  -webkit-text-decoration-color: #71717a;
          text-decoration-color: #71717a;
}

.decoration-zinc-600 {
  -webkit-text-decoration-color: #52525b;
          text-decoration-color: #52525b;
}

.decoration-zinc-700 {
  -webkit-text-decoration-color: #3f3f46;
          text-decoration-color: #3f3f46;
}

.decoration-zinc-800 {
  -webkit-text-decoration-color: #27272a;
          text-decoration-color: #27272a;
}

.decoration-zinc-900 {
  -webkit-text-decoration-color: #18181b;
          text-decoration-color: #18181b;
}

.decoration-neutral-50 {
  -webkit-text-decoration-color: #fafafa;
          text-decoration-color: #fafafa;
}

.decoration-neutral-100 {
  -webkit-text-decoration-color: #f5f5f5;
          text-decoration-color: #f5f5f5;
}

.decoration-neutral-200 {
  -webkit-text-decoration-color: #e5e5e5;
          text-decoration-color: #e5e5e5;
}

.decoration-neutral-300 {
  -webkit-text-decoration-color: #d4d4d4;
          text-decoration-color: #d4d4d4;
}

.decoration-neutral-400 {
  -webkit-text-decoration-color: #a3a3a3;
          text-decoration-color: #a3a3a3;
}

.decoration-neutral-500 {
  -webkit-text-decoration-color: #737373;
          text-decoration-color: #737373;
}

.decoration-neutral-600 {
  -webkit-text-decoration-color: #525252;
          text-decoration-color: #525252;
}

.decoration-neutral-700 {
  -webkit-text-decoration-color: #404040;
          text-decoration-color: #404040;
}

.decoration-neutral-800 {
  -webkit-text-decoration-color: #262626;
          text-decoration-color: #262626;
}

.decoration-neutral-900 {
  -webkit-text-decoration-color: #171717;
          text-decoration-color: #171717;
}

.decoration-stone-50 {
  -webkit-text-decoration-color: #fafaf9;
          text-decoration-color: #fafaf9;
}

.decoration-stone-100 {
  -webkit-text-decoration-color: #f5f5f4;
          text-decoration-color: #f5f5f4;
}

.decoration-stone-200 {
  -webkit-text-decoration-color: #e7e5e4;
          text-decoration-color: #e7e5e4;
}

.decoration-stone-300 {
  -webkit-text-decoration-color: #d6d3d1;
          text-decoration-color: #d6d3d1;
}

.decoration-stone-400 {
  -webkit-text-decoration-color: #a8a29e;
          text-decoration-color: #a8a29e;
}

.decoration-stone-500 {
  -webkit-text-decoration-color: #78716c;
          text-decoration-color: #78716c;
}

.decoration-stone-600 {
  -webkit-text-decoration-color: #57534e;
          text-decoration-color: #57534e;
}

.decoration-stone-700 {
  -webkit-text-decoration-color: #44403c;
          text-decoration-color: #44403c;
}

.decoration-stone-800 {
  -webkit-text-decoration-color: #292524;
          text-decoration-color: #292524;
}

.decoration-stone-900 {
  -webkit-text-decoration-color: #1c1917;
          text-decoration-color: #1c1917;
}

.decoration-red-50 {
  -webkit-text-decoration-color: #fef2f2;
          text-decoration-color: #fef2f2;
}

.decoration-red-100 {
  -webkit-text-decoration-color: #fee2e2;
          text-decoration-color: #fee2e2;
}

.decoration-red-200 {
  -webkit-text-decoration-color: #fecaca;
          text-decoration-color: #fecaca;
}

.decoration-red-300 {
  -webkit-text-decoration-color: #fca5a5;
          text-decoration-color: #fca5a5;
}

.decoration-red-400 {
  -webkit-text-decoration-color: #f87171;
          text-decoration-color: #f87171;
}

.decoration-red-500 {
  -webkit-text-decoration-color: #ef4444;
          text-decoration-color: #ef4444;
}

.decoration-red-600 {
  -webkit-text-decoration-color: #dc2626;
          text-decoration-color: #dc2626;
}

.decoration-red-700 {
  -webkit-text-decoration-color: #b91c1c;
          text-decoration-color: #b91c1c;
}

.decoration-red-800 {
  -webkit-text-decoration-color: #991b1b;
          text-decoration-color: #991b1b;
}

.decoration-red-900 {
  -webkit-text-decoration-color: #7f1d1d;
          text-decoration-color: #7f1d1d;
}

.decoration-orange-50 {
  -webkit-text-decoration-color: #fff7ed;
          text-decoration-color: #fff7ed;
}

.decoration-orange-100 {
  -webkit-text-decoration-color: #ffedd5;
          text-decoration-color: #ffedd5;
}

.decoration-orange-200 {
  -webkit-text-decoration-color: #fed7aa;
          text-decoration-color: #fed7aa;
}

.decoration-orange-300 {
  -webkit-text-decoration-color: #fdba74;
          text-decoration-color: #fdba74;
}

.decoration-orange-400 {
  -webkit-text-decoration-color: #fb923c;
          text-decoration-color: #fb923c;
}

.decoration-orange-500 {
  -webkit-text-decoration-color: #f97316;
          text-decoration-color: #f97316;
}

.decoration-orange-600 {
  -webkit-text-decoration-color: #ea580c;
          text-decoration-color: #ea580c;
}

.decoration-orange-700 {
  -webkit-text-decoration-color: #c2410c;
          text-decoration-color: #c2410c;
}

.decoration-orange-800 {
  -webkit-text-decoration-color: #9a3412;
          text-decoration-color: #9a3412;
}

.decoration-orange-900 {
  -webkit-text-decoration-color: #7c2d12;
          text-decoration-color: #7c2d12;
}

.decoration-amber-50 {
  -webkit-text-decoration-color: #fffbeb;
          text-decoration-color: #fffbeb;
}

.decoration-amber-100 {
  -webkit-text-decoration-color: #fef3c7;
          text-decoration-color: #fef3c7;
}

.decoration-amber-200 {
  -webkit-text-decoration-color: #fde68a;
          text-decoration-color: #fde68a;
}

.decoration-amber-300 {
  -webkit-text-decoration-color: #fcd34d;
          text-decoration-color: #fcd34d;
}

.decoration-amber-400 {
  -webkit-text-decoration-color: #fbbf24;
          text-decoration-color: #fbbf24;
}

.decoration-amber-500 {
  -webkit-text-decoration-color: #f59e0b;
          text-decoration-color: #f59e0b;
}

.decoration-amber-600 {
  -webkit-text-decoration-color: #d97706;
          text-decoration-color: #d97706;
}

.decoration-amber-700 {
  -webkit-text-decoration-color: #b45309;
          text-decoration-color: #b45309;
}

.decoration-amber-800 {
  -webkit-text-decoration-color: #92400e;
          text-decoration-color: #92400e;
}

.decoration-amber-900 {
  -webkit-text-decoration-color: #78350f;
          text-decoration-color: #78350f;
}

.decoration-yellow-50 {
  -webkit-text-decoration-color: #fefce8;
          text-decoration-color: #fefce8;
}

.decoration-yellow-100 {
  -webkit-text-decoration-color: #fef9c3;
          text-decoration-color: #fef9c3;
}

.decoration-yellow-200 {
  -webkit-text-decoration-color: #fef08a;
          text-decoration-color: #fef08a;
}

.decoration-yellow-300 {
  -webkit-text-decoration-color: #fde047;
          text-decoration-color: #fde047;
}

.decoration-yellow-400 {
  -webkit-text-decoration-color: #facc15;
          text-decoration-color: #facc15;
}

.decoration-yellow-500 {
  -webkit-text-decoration-color: #eab308;
          text-decoration-color: #eab308;
}

.decoration-yellow-600 {
  -webkit-text-decoration-color: #ca8a04;
          text-decoration-color: #ca8a04;
}

.decoration-yellow-700 {
  -webkit-text-decoration-color: #a16207;
          text-decoration-color: #a16207;
}

.decoration-yellow-800 {
  -webkit-text-decoration-color: #854d0e;
          text-decoration-color: #854d0e;
}

.decoration-yellow-900 {
  -webkit-text-decoration-color: #713f12;
          text-decoration-color: #713f12;
}

.decoration-lime-50 {
  -webkit-text-decoration-color: #f7fee7;
          text-decoration-color: #f7fee7;
}

.decoration-lime-100 {
  -webkit-text-decoration-color: #ecfccb;
          text-decoration-color: #ecfccb;
}

.decoration-lime-200 {
  -webkit-text-decoration-color: #d9f99d;
          text-decoration-color: #d9f99d;
}

.decoration-lime-300 {
  -webkit-text-decoration-color: #bef264;
          text-decoration-color: #bef264;
}

.decoration-lime-400 {
  -webkit-text-decoration-color: #a3e635;
          text-decoration-color: #a3e635;
}

.decoration-lime-500 {
  -webkit-text-decoration-color: #84cc16;
          text-decoration-color: #84cc16;
}

.decoration-lime-600 {
  -webkit-text-decoration-color: #65a30d;
          text-decoration-color: #65a30d;
}

.decoration-lime-700 {
  -webkit-text-decoration-color: #4d7c0f;
          text-decoration-color: #4d7c0f;
}

.decoration-lime-800 {
  -webkit-text-decoration-color: #3f6212;
          text-decoration-color: #3f6212;
}

.decoration-lime-900 {
  -webkit-text-decoration-color: #365314;
          text-decoration-color: #365314;
}

.decoration-green-50 {
  -webkit-text-decoration-color: #f0fdf4;
          text-decoration-color: #f0fdf4;
}

.decoration-green-100 {
  -webkit-text-decoration-color: #dcfce7;
          text-decoration-color: #dcfce7;
}

.decoration-green-200 {
  -webkit-text-decoration-color: #bbf7d0;
          text-decoration-color: #bbf7d0;
}

.decoration-green-300 {
  -webkit-text-decoration-color: #86efac;
          text-decoration-color: #86efac;
}

.decoration-green-400 {
  -webkit-text-decoration-color: #4ade80;
          text-decoration-color: #4ade80;
}

.decoration-green-500 {
  -webkit-text-decoration-color: #22c55e;
          text-decoration-color: #22c55e;
}

.decoration-green-600 {
  -webkit-text-decoration-color: #16a34a;
          text-decoration-color: #16a34a;
}

.decoration-green-700 {
  -webkit-text-decoration-color: #15803d;
          text-decoration-color: #15803d;
}

.decoration-green-800 {
  -webkit-text-decoration-color: #166534;
          text-decoration-color: #166534;
}

.decoration-green-900 {
  -webkit-text-decoration-color: #14532d;
          text-decoration-color: #14532d;
}

.decoration-emerald-50 {
  -webkit-text-decoration-color: #ecfdf5;
          text-decoration-color: #ecfdf5;
}

.decoration-emerald-100 {
  -webkit-text-decoration-color: #d1fae5;
          text-decoration-color: #d1fae5;
}

.decoration-emerald-200 {
  -webkit-text-decoration-color: #a7f3d0;
          text-decoration-color: #a7f3d0;
}

.decoration-emerald-300 {
  -webkit-text-decoration-color: #6ee7b7;
          text-decoration-color: #6ee7b7;
}

.decoration-emerald-400 {
  -webkit-text-decoration-color: #34d399;
          text-decoration-color: #34d399;
}

.decoration-emerald-500 {
  -webkit-text-decoration-color: #10b981;
          text-decoration-color: #10b981;
}

.decoration-emerald-600 {
  -webkit-text-decoration-color: #059669;
          text-decoration-color: #059669;
}

.decoration-emerald-700 {
  -webkit-text-decoration-color: #047857;
          text-decoration-color: #047857;
}

.decoration-emerald-800 {
  -webkit-text-decoration-color: #065f46;
          text-decoration-color: #065f46;
}

.decoration-emerald-900 {
  -webkit-text-decoration-color: #064e3b;
          text-decoration-color: #064e3b;
}

.decoration-teal-50 {
  -webkit-text-decoration-color: #f0fdfa;
          text-decoration-color: #f0fdfa;
}

.decoration-teal-100 {
  -webkit-text-decoration-color: #ccfbf1;
          text-decoration-color: #ccfbf1;
}

.decoration-teal-200 {
  -webkit-text-decoration-color: #99f6e4;
          text-decoration-color: #99f6e4;
}

.decoration-teal-300 {
  -webkit-text-decoration-color: #5eead4;
          text-decoration-color: #5eead4;
}

.decoration-teal-400 {
  -webkit-text-decoration-color: #2dd4bf;
          text-decoration-color: #2dd4bf;
}

.decoration-teal-500 {
  -webkit-text-decoration-color: #14b8a6;
          text-decoration-color: #14b8a6;
}

.decoration-teal-600 {
  -webkit-text-decoration-color: #0d9488;
          text-decoration-color: #0d9488;
}

.decoration-teal-700 {
  -webkit-text-decoration-color: #0f766e;
          text-decoration-color: #0f766e;
}

.decoration-teal-800 {
  -webkit-text-decoration-color: #115e59;
          text-decoration-color: #115e59;
}

.decoration-teal-900 {
  -webkit-text-decoration-color: #134e4a;
          text-decoration-color: #134e4a;
}

.decoration-cyan-50 {
  -webkit-text-decoration-color: #ecfeff;
          text-decoration-color: #ecfeff;
}

.decoration-cyan-100 {
  -webkit-text-decoration-color: #cffafe;
          text-decoration-color: #cffafe;
}

.decoration-cyan-200 {
  -webkit-text-decoration-color: #a5f3fc;
          text-decoration-color: #a5f3fc;
}

.decoration-cyan-300 {
  -webkit-text-decoration-color: #67e8f9;
          text-decoration-color: #67e8f9;
}

.decoration-cyan-400 {
  -webkit-text-decoration-color: #22d3ee;
          text-decoration-color: #22d3ee;
}

.decoration-cyan-500 {
  -webkit-text-decoration-color: #06b6d4;
          text-decoration-color: #06b6d4;
}

.decoration-cyan-600 {
  -webkit-text-decoration-color: #0891b2;
          text-decoration-color: #0891b2;
}

.decoration-cyan-700 {
  -webkit-text-decoration-color: #0e7490;
          text-decoration-color: #0e7490;
}

.decoration-cyan-800 {
  -webkit-text-decoration-color: #155e75;
          text-decoration-color: #155e75;
}

.decoration-cyan-900 {
  -webkit-text-decoration-color: #164e63;
          text-decoration-color: #164e63;
}

.decoration-sky-50 {
  -webkit-text-decoration-color: #f0f9ff;
          text-decoration-color: #f0f9ff;
}

.decoration-sky-100 {
  -webkit-text-decoration-color: #e0f2fe;
          text-decoration-color: #e0f2fe;
}

.decoration-sky-200 {
  -webkit-text-decoration-color: #bae6fd;
          text-decoration-color: #bae6fd;
}

.decoration-sky-300 {
  -webkit-text-decoration-color: #7dd3fc;
          text-decoration-color: #7dd3fc;
}

.decoration-sky-400 {
  -webkit-text-decoration-color: #38bdf8;
          text-decoration-color: #38bdf8;
}

.decoration-sky-500 {
  -webkit-text-decoration-color: #0ea5e9;
          text-decoration-color: #0ea5e9;
}

.decoration-sky-600 {
  -webkit-text-decoration-color: #0284c7;
          text-decoration-color: #0284c7;
}

.decoration-sky-700 {
  -webkit-text-decoration-color: #0369a1;
          text-decoration-color: #0369a1;
}

.decoration-sky-800 {
  -webkit-text-decoration-color: #075985;
          text-decoration-color: #075985;
}

.decoration-sky-900 {
  -webkit-text-decoration-color: #0c4a6e;
          text-decoration-color: #0c4a6e;
}

.decoration-blue-50 {
  -webkit-text-decoration-color: #eff6ff;
          text-decoration-color: #eff6ff;
}

.decoration-blue-100 {
  -webkit-text-decoration-color: #dbeafe;
          text-decoration-color: #dbeafe;
}

.decoration-blue-200 {
  -webkit-text-decoration-color: #bfdbfe;
          text-decoration-color: #bfdbfe;
}

.decoration-blue-300 {
  -webkit-text-decoration-color: #93c5fd;
          text-decoration-color: #93c5fd;
}

.decoration-blue-400 {
  -webkit-text-decoration-color: #60a5fa;
          text-decoration-color: #60a5fa;
}

.decoration-blue-500 {
  -webkit-text-decoration-color: #3b82f6;
          text-decoration-color: #3b82f6;
}

.decoration-blue-600 {
  -webkit-text-decoration-color: #2563eb;
          text-decoration-color: #2563eb;
}

.decoration-blue-700 {
  -webkit-text-decoration-color: #1d4ed8;
          text-decoration-color: #1d4ed8;
}

.decoration-blue-800 {
  -webkit-text-decoration-color: #1e40af;
          text-decoration-color: #1e40af;
}

.decoration-blue-900 {
  -webkit-text-decoration-color: #1e3a8a;
          text-decoration-color: #1e3a8a;
}

.decoration-indigo-50 {
  -webkit-text-decoration-color: #eef2ff;
          text-decoration-color: #eef2ff;
}

.decoration-indigo-100 {
  -webkit-text-decoration-color: #e0e7ff;
          text-decoration-color: #e0e7ff;
}

.decoration-indigo-200 {
  -webkit-text-decoration-color: #c7d2fe;
          text-decoration-color: #c7d2fe;
}

.decoration-indigo-300 {
  -webkit-text-decoration-color: #a5b4fc;
          text-decoration-color: #a5b4fc;
}

.decoration-indigo-400 {
  -webkit-text-decoration-color: #818cf8;
          text-decoration-color: #818cf8;
}

.decoration-indigo-500 {
  -webkit-text-decoration-color: #6366f1;
          text-decoration-color: #6366f1;
}

.decoration-indigo-600 {
  -webkit-text-decoration-color: #4f46e5;
          text-decoration-color: #4f46e5;
}

.decoration-indigo-700 {
  -webkit-text-decoration-color: #4338ca;
          text-decoration-color: #4338ca;
}

.decoration-indigo-800 {
  -webkit-text-decoration-color: #3730a3;
          text-decoration-color: #3730a3;
}

.decoration-indigo-900 {
  -webkit-text-decoration-color: #312e81;
          text-decoration-color: #312e81;
}

.decoration-violet-50 {
  -webkit-text-decoration-color: #f5f3ff;
          text-decoration-color: #f5f3ff;
}

.decoration-violet-100 {
  -webkit-text-decoration-color: #ede9fe;
          text-decoration-color: #ede9fe;
}

.decoration-violet-200 {
  -webkit-text-decoration-color: #ddd6fe;
          text-decoration-color: #ddd6fe;
}

.decoration-violet-300 {
  -webkit-text-decoration-color: #c4b5fd;
          text-decoration-color: #c4b5fd;
}

.decoration-violet-400 {
  -webkit-text-decoration-color: #a78bfa;
          text-decoration-color: #a78bfa;
}

.decoration-violet-500 {
  -webkit-text-decoration-color: #8b5cf6;
          text-decoration-color: #8b5cf6;
}

.decoration-violet-600 {
  -webkit-text-decoration-color: #7c3aed;
          text-decoration-color: #7c3aed;
}

.decoration-violet-700 {
  -webkit-text-decoration-color: #6d28d9;
          text-decoration-color: #6d28d9;
}

.decoration-violet-800 {
  -webkit-text-decoration-color: #5b21b6;
          text-decoration-color: #5b21b6;
}

.decoration-violet-900 {
  -webkit-text-decoration-color: #4c1d95;
          text-decoration-color: #4c1d95;
}

.decoration-purple-50 {
  -webkit-text-decoration-color: #faf5ff;
          text-decoration-color: #faf5ff;
}

.decoration-purple-100 {
  -webkit-text-decoration-color: #f3e8ff;
          text-decoration-color: #f3e8ff;
}

.decoration-purple-200 {
  -webkit-text-decoration-color: #e9d5ff;
          text-decoration-color: #e9d5ff;
}

.decoration-purple-300 {
  -webkit-text-decoration-color: #d8b4fe;
          text-decoration-color: #d8b4fe;
}

.decoration-purple-400 {
  -webkit-text-decoration-color: #c084fc;
          text-decoration-color: #c084fc;
}

.decoration-purple-500 {
  -webkit-text-decoration-color: #a855f7;
          text-decoration-color: #a855f7;
}

.decoration-purple-600 {
  -webkit-text-decoration-color: #9333ea;
          text-decoration-color: #9333ea;
}

.decoration-purple-700 {
  -webkit-text-decoration-color: #7e22ce;
          text-decoration-color: #7e22ce;
}

.decoration-purple-800 {
  -webkit-text-decoration-color: #6b21a8;
          text-decoration-color: #6b21a8;
}

.decoration-purple-900 {
  -webkit-text-decoration-color: #581c87;
          text-decoration-color: #581c87;
}

.decoration-fuchsia-50 {
  -webkit-text-decoration-color: #fdf4ff;
          text-decoration-color: #fdf4ff;
}

.decoration-fuchsia-100 {
  -webkit-text-decoration-color: #fae8ff;
          text-decoration-color: #fae8ff;
}

.decoration-fuchsia-200 {
  -webkit-text-decoration-color: #f5d0fe;
          text-decoration-color: #f5d0fe;
}

.decoration-fuchsia-300 {
  -webkit-text-decoration-color: #f0abfc;
          text-decoration-color: #f0abfc;
}

.decoration-fuchsia-400 {
  -webkit-text-decoration-color: #e879f9;
          text-decoration-color: #e879f9;
}

.decoration-fuchsia-500 {
  -webkit-text-decoration-color: #d946ef;
          text-decoration-color: #d946ef;
}

.decoration-fuchsia-600 {
  -webkit-text-decoration-color: #c026d3;
          text-decoration-color: #c026d3;
}

.decoration-fuchsia-700 {
  -webkit-text-decoration-color: #a21caf;
          text-decoration-color: #a21caf;
}

.decoration-fuchsia-800 {
  -webkit-text-decoration-color: #86198f;
          text-decoration-color: #86198f;
}

.decoration-fuchsia-900 {
  -webkit-text-decoration-color: #701a75;
          text-decoration-color: #701a75;
}

.decoration-pink-50 {
  -webkit-text-decoration-color: #fdf2f8;
          text-decoration-color: #fdf2f8;
}

.decoration-pink-100 {
  -webkit-text-decoration-color: #fce7f3;
          text-decoration-color: #fce7f3;
}

.decoration-pink-200 {
  -webkit-text-decoration-color: #fbcfe8;
          text-decoration-color: #fbcfe8;
}

.decoration-pink-300 {
  -webkit-text-decoration-color: #f9a8d4;
          text-decoration-color: #f9a8d4;
}

.decoration-pink-400 {
  -webkit-text-decoration-color: #f472b6;
          text-decoration-color: #f472b6;
}

.decoration-pink-500 {
  -webkit-text-decoration-color: #ec4899;
          text-decoration-color: #ec4899;
}

.decoration-pink-600 {
  -webkit-text-decoration-color: #db2777;
          text-decoration-color: #db2777;
}

.decoration-pink-700 {
  -webkit-text-decoration-color: #be185d;
          text-decoration-color: #be185d;
}

.decoration-pink-800 {
  -webkit-text-decoration-color: #9d174d;
          text-decoration-color: #9d174d;
}

.decoration-pink-900 {
  -webkit-text-decoration-color: #831843;
          text-decoration-color: #831843;
}

.decoration-rose-50 {
  -webkit-text-decoration-color: #fff1f2;
          text-decoration-color: #fff1f2;
}

.decoration-rose-100 {
  -webkit-text-decoration-color: #ffe4e6;
          text-decoration-color: #ffe4e6;
}

.decoration-rose-200 {
  -webkit-text-decoration-color: #fecdd3;
          text-decoration-color: #fecdd3;
}

.decoration-rose-300 {
  -webkit-text-decoration-color: #fda4af;
          text-decoration-color: #fda4af;
}

.decoration-rose-400 {
  -webkit-text-decoration-color: #fb7185;
          text-decoration-color: #fb7185;
}

.decoration-rose-500 {
  -webkit-text-decoration-color: #f43f5e;
          text-decoration-color: #f43f5e;
}

.decoration-rose-600 {
  -webkit-text-decoration-color: #e11d48;
          text-decoration-color: #e11d48;
}

.decoration-rose-700 {
  -webkit-text-decoration-color: #be123c;
          text-decoration-color: #be123c;
}

.decoration-rose-800 {
  -webkit-text-decoration-color: #9f1239;
          text-decoration-color: #9f1239;
}

.decoration-rose-900 {
  -webkit-text-decoration-color: #881337;
          text-decoration-color: #881337;
}

.decoration-textLgColor {
  -webkit-text-decoration-color: var(--text-large-color);
          text-decoration-color: var(--text-large-color);
}

.decoration-textSmColor {
  -webkit-text-decoration-color: var(--text-small-color);
          text-decoration-color: var(--text-small-color);
}

.decoration-subText {
  -webkit-text-decoration-color: var(--sub-text-color);
          text-decoration-color: var(--sub-text-color);
}

.decoration-navBar-linkActive {
  -webkit-text-decoration-color: var(--nav-link-active);
          text-decoration-color: var(--nav-link-active);
}

.decoration-navBar-linkActiveStripe {
  -webkit-text-decoration-color: var(--nav-link-active-stripe);
          text-decoration-color: var(--nav-link-active-stripe);
}

.decoration-mobileNav-text {
  -webkit-text-decoration-color: var(--mobile-text);
          text-decoration-color: var(--mobile-text);
}

.decoration-mobileNav-textHover {
  -webkit-text-decoration-color: var(--mobile-hover-text);
          text-decoration-color: var(--mobile-hover-text);
}

.decoration-mobileNav-border {
  -webkit-text-decoration-color: var(--mobile-border);
          text-decoration-color: var(--mobile-border);
}

.decoration-aboutMe-smIconBg {
  -webkit-text-decoration-color: var(--sm-icon-bg);
          text-decoration-color: var(--sm-icon-bg);
}

.decoration-aboutMe-aboutMeText {
  -webkit-text-decoration-color: var(--aboutme-text);
          text-decoration-color: var(--aboutme-text);
}

.decoration-aboutMe-alissa {
  -webkit-text-decoration-color: var(--alissa);
          text-decoration-color: var(--alissa);
}

.decoration-projects-text {
  -webkit-text-decoration-color: var(--project-text-color);
          text-decoration-color: var(--project-text-color);
}

.decoration-projects-subText {
  -webkit-text-decoration-color: var(--project-sub-text);
          text-decoration-color: var(--project-sub-text);
}

.decoration-projects-arrow {
  -webkit-text-decoration-color: var(--project-arrow);
          text-decoration-color: var(--project-arrow);
}

.decoration-projects-recentBg {
  -webkit-text-decoration-color: var(--recent-project-bg);
          text-decoration-color: var(--recent-project-bg);
}

.decoration-projects-recentHover {
  -webkit-text-decoration-color: var(--recent-project-bg-hover);
          text-decoration-color: var(--recent-project-bg-hover);
}

.decoration-projects-recentShadow {
  -webkit-text-decoration-color: var(--recent-project-shadow);
          text-decoration-color: var(--recent-project-shadow);
}

.decoration-contact-label {
  -webkit-text-decoration-color: var(--label-text);
          text-decoration-color: var(--label-text);
}

.decoration-contact-send {
  -webkit-text-decoration-color: var(--send-btn);
          text-decoration-color: var(--send-btn);
}

.decoration-contact-sendHover {
  -webkit-text-decoration-color: var(--send-btn-hover);
          text-decoration-color: var(--send-btn-hover);
}

.decoration-blog-lgText {
  -webkit-text-decoration-color: var(--blog-lg-text);
          text-decoration-color: var(--blog-lg-text);
}

.decoration-blog-border {
  -webkit-text-decoration-color: var(--blog-input-border);
          text-decoration-color: var(--blog-input-border);
}

.decoration-blog-tagBg {
  -webkit-text-decoration-color: var(--tag-btn-bg);
          text-decoration-color: var(--tag-btn-bg);
}

.decoration-post-bodyText {
  -webkit-text-decoration-color: var(--text-body);
          text-decoration-color: var(--text-body);
}

.decoration-post-bodyTextLg {
  -webkit-text-decoration-color: var(--text-body-lg);
          text-decoration-color: var(--text-body-lg);
}

.decoration-post-icon {
  -webkit-text-decoration-color: var(--icon);
          text-decoration-color: var(--icon);
}

.decoration-post-iconHover {
  -webkit-text-decoration-color: var(--icon-hover);
          text-decoration-color: var(--icon-hover);
}

.decoration-post-hyperlink {
  -webkit-text-decoration-color: var(--hyperlink);
          text-decoration-color: var(--hyperlink);
}

.decoration-post-hyperlinkHover {
  -webkit-text-decoration-color: var(--hyperlink-hover);
          text-decoration-color: var(--hyperlink-hover);
}

.decoration-post-quote {
  -webkit-text-decoration-color: var(--quote);
          text-decoration-color: var(--quote);
}

.decoration-post-quoteAuthor {
  -webkit-text-decoration-color: var(--quote-author);
          text-decoration-color: var(--quote-author);
}

.decoration-solid {
  -webkit-text-decoration-style: solid;
          text-decoration-style: solid;
}

.decoration-double {
  -webkit-text-decoration-style: double;
          text-decoration-style: double;
}

.decoration-dotted {
  -webkit-text-decoration-style: dotted;
          text-decoration-style: dotted;
}

.decoration-dashed {
  -webkit-text-decoration-style: dashed;
          text-decoration-style: dashed;
}

.decoration-wavy {
  -webkit-text-decoration-style: wavy;
          text-decoration-style: wavy;
}

.decoration-0 {
  text-decoration-thickness: 0px;
}

.decoration-1 {
  text-decoration-thickness: 1px;
}

.decoration-2 {
  text-decoration-thickness: 2px;
}

.decoration-4 {
  text-decoration-thickness: 4px;
}

.decoration-8 {
  text-decoration-thickness: 8px;
}

.decoration-auto {
  text-decoration-thickness: auto;
}

.decoration-from-font {
  text-decoration-thickness: from-font;
}

.underline-offset-0 {
  text-underline-offset: 0px;
}

.underline-offset-1 {
  text-underline-offset: 1px;
}

.underline-offset-2 {
  text-underline-offset: 2px;
}

.underline-offset-4 {
  text-underline-offset: 4px;
}

.underline-offset-8 {
  text-underline-offset: 8px;
}

.underline-offset-auto {
  text-underline-offset: auto;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.placeholder-inherit::-moz-placeholder {
  color: inherit;
}

.placeholder-inherit:-ms-input-placeholder {
  color: inherit;
}

.placeholder-inherit::placeholder {
  color: inherit;
}

.placeholder-current::-moz-placeholder {
  color: currentColor;
}

.placeholder-current:-ms-input-placeholder {
  color: currentColor;
}

.placeholder-current::placeholder {
  color: currentColor;
}

.placeholder-transparent::-moz-placeholder {
  color: transparent;
}

.placeholder-transparent:-ms-input-placeholder {
  color: transparent;
}

.placeholder-transparent::placeholder {
  color: transparent;
}

.placeholder-black::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(0 0 0 / var(--tw-placeholder-opacity));
}

.placeholder-black:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(0 0 0 / var(--tw-placeholder-opacity));
}

.placeholder-black::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(0 0 0 / var(--tw-placeholder-opacity));
}

.placeholder-white::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255 / var(--tw-placeholder-opacity));
}

.placeholder-white:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255 / var(--tw-placeholder-opacity));
}

.placeholder-white::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255 / var(--tw-placeholder-opacity));
}

.placeholder-slate-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 250 252 / var(--tw-placeholder-opacity));
}

.placeholder-slate-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 250 252 / var(--tw-placeholder-opacity));
}

.placeholder-slate-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 250 252 / var(--tw-placeholder-opacity));
}

.placeholder-slate-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(241 245 249 / var(--tw-placeholder-opacity));
}

.placeholder-slate-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(241 245 249 / var(--tw-placeholder-opacity));
}

.placeholder-slate-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(241 245 249 / var(--tw-placeholder-opacity));
}

.placeholder-slate-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(226 232 240 / var(--tw-placeholder-opacity));
}

.placeholder-slate-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(226 232 240 / var(--tw-placeholder-opacity));
}

.placeholder-slate-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(226 232 240 / var(--tw-placeholder-opacity));
}

.placeholder-slate-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(203 213 225 / var(--tw-placeholder-opacity));
}

.placeholder-slate-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(203 213 225 / var(--tw-placeholder-opacity));
}

.placeholder-slate-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(203 213 225 / var(--tw-placeholder-opacity));
}

.placeholder-slate-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity));
}

.placeholder-slate-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity));
}

.placeholder-slate-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity));
}

.placeholder-slate-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(100 116 139 / var(--tw-placeholder-opacity));
}

.placeholder-slate-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(100 116 139 / var(--tw-placeholder-opacity));
}

.placeholder-slate-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(100 116 139 / var(--tw-placeholder-opacity));
}

.placeholder-slate-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(71 85 105 / var(--tw-placeholder-opacity));
}

.placeholder-slate-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(71 85 105 / var(--tw-placeholder-opacity));
}

.placeholder-slate-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(71 85 105 / var(--tw-placeholder-opacity));
}

.placeholder-slate-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(51 65 85 / var(--tw-placeholder-opacity));
}

.placeholder-slate-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(51 65 85 / var(--tw-placeholder-opacity));
}

.placeholder-slate-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(51 65 85 / var(--tw-placeholder-opacity));
}

.placeholder-slate-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 41 59 / var(--tw-placeholder-opacity));
}

.placeholder-slate-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 41 59 / var(--tw-placeholder-opacity));
}

.placeholder-slate-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 41 59 / var(--tw-placeholder-opacity));
}

.placeholder-slate-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 23 42 / var(--tw-placeholder-opacity));
}

.placeholder-slate-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 23 42 / var(--tw-placeholder-opacity));
}

.placeholder-slate-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 23 42 / var(--tw-placeholder-opacity));
}

.placeholder-gray-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 250 251 / var(--tw-placeholder-opacity));
}

.placeholder-gray-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 250 251 / var(--tw-placeholder-opacity));
}

.placeholder-gray-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 250 251 / var(--tw-placeholder-opacity));
}

.placeholder-gray-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 244 246 / var(--tw-placeholder-opacity));
}

.placeholder-gray-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 244 246 / var(--tw-placeholder-opacity));
}

.placeholder-gray-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 244 246 / var(--tw-placeholder-opacity));
}

.placeholder-gray-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 231 235 / var(--tw-placeholder-opacity));
}

.placeholder-gray-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 231 235 / var(--tw-placeholder-opacity));
}

.placeholder-gray-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 231 235 / var(--tw-placeholder-opacity));
}

.placeholder-gray-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 213 219 / var(--tw-placeholder-opacity));
}

.placeholder-gray-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 213 219 / var(--tw-placeholder-opacity));
}

.placeholder-gray-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 213 219 / var(--tw-placeholder-opacity));
}

.placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.placeholder-gray-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 114 128 / var(--tw-placeholder-opacity));
}

.placeholder-gray-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 114 128 / var(--tw-placeholder-opacity));
}

.placeholder-gray-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 114 128 / var(--tw-placeholder-opacity));
}

.placeholder-gray-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(75 85 99 / var(--tw-placeholder-opacity));
}

.placeholder-gray-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(75 85 99 / var(--tw-placeholder-opacity));
}

.placeholder-gray-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(75 85 99 / var(--tw-placeholder-opacity));
}

.placeholder-gray-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 65 81 / var(--tw-placeholder-opacity));
}

.placeholder-gray-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 65 81 / var(--tw-placeholder-opacity));
}

.placeholder-gray-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 65 81 / var(--tw-placeholder-opacity));
}

.placeholder-gray-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(31 41 55 / var(--tw-placeholder-opacity));
}

.placeholder-gray-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(31 41 55 / var(--tw-placeholder-opacity));
}

.placeholder-gray-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(31 41 55 / var(--tw-placeholder-opacity));
}

.placeholder-gray-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 24 39 / var(--tw-placeholder-opacity));
}

.placeholder-gray-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 24 39 / var(--tw-placeholder-opacity));
}

.placeholder-gray-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 24 39 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 244 245 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 244 245 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 244 245 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(228 228 231 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(228 228 231 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(228 228 231 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 216 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 216 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 216 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 161 170 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 161 170 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 161 170 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 91 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 91 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 91 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 63 70 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 63 70 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 63 70 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(39 39 42 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(39 39 42 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(39 39 42 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(24 24 27 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(24 24 27 / var(--tw-placeholder-opacity));
}

.placeholder-zinc-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(24 24 27 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 250 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 245 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 245 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 245 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 229 229 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 229 229 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(229 229 229 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 212 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 212 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(212 212 212 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(115 115 115 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(115 115 115 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(115 115 115 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(64 64 64 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(64 64 64 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(64 64 64 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(38 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(38 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(38 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(23 23 23 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(23 23 23 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(23 23 23 / var(--tw-placeholder-opacity));
}

.placeholder-stone-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 249 / var(--tw-placeholder-opacity));
}

.placeholder-stone-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 249 / var(--tw-placeholder-opacity));
}

.placeholder-stone-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 250 249 / var(--tw-placeholder-opacity));
}

.placeholder-stone-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 244 / var(--tw-placeholder-opacity));
}

.placeholder-stone-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 244 / var(--tw-placeholder-opacity));
}

.placeholder-stone-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 245 244 / var(--tw-placeholder-opacity));
}

.placeholder-stone-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(231 229 228 / var(--tw-placeholder-opacity));
}

.placeholder-stone-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(231 229 228 / var(--tw-placeholder-opacity));
}

.placeholder-stone-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(231 229 228 / var(--tw-placeholder-opacity));
}

.placeholder-stone-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(214 211 209 / var(--tw-placeholder-opacity));
}

.placeholder-stone-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(214 211 209 / var(--tw-placeholder-opacity));
}

.placeholder-stone-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(214 211 209 / var(--tw-placeholder-opacity));
}

.placeholder-stone-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 162 158 / var(--tw-placeholder-opacity));
}

.placeholder-stone-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 162 158 / var(--tw-placeholder-opacity));
}

.placeholder-stone-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 162 158 / var(--tw-placeholder-opacity));
}

.placeholder-stone-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 113 108 / var(--tw-placeholder-opacity));
}

.placeholder-stone-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 113 108 / var(--tw-placeholder-opacity));
}

.placeholder-stone-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 113 108 / var(--tw-placeholder-opacity));
}

.placeholder-stone-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(87 83 78 / var(--tw-placeholder-opacity));
}

.placeholder-stone-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(87 83 78 / var(--tw-placeholder-opacity));
}

.placeholder-stone-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(87 83 78 / var(--tw-placeholder-opacity));
}

.placeholder-stone-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(68 64 60 / var(--tw-placeholder-opacity));
}

.placeholder-stone-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(68 64 60 / var(--tw-placeholder-opacity));
}

.placeholder-stone-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(68 64 60 / var(--tw-placeholder-opacity));
}

.placeholder-stone-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(41 37 36 / var(--tw-placeholder-opacity));
}

.placeholder-stone-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(41 37 36 / var(--tw-placeholder-opacity));
}

.placeholder-stone-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(41 37 36 / var(--tw-placeholder-opacity));
}

.placeholder-stone-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(28 25 23 / var(--tw-placeholder-opacity));
}

.placeholder-stone-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(28 25 23 / var(--tw-placeholder-opacity));
}

.placeholder-stone-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(28 25 23 / var(--tw-placeholder-opacity));
}

.placeholder-red-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 242 242 / var(--tw-placeholder-opacity));
}

.placeholder-red-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 242 242 / var(--tw-placeholder-opacity));
}

.placeholder-red-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 242 242 / var(--tw-placeholder-opacity));
}

.placeholder-red-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 226 226 / var(--tw-placeholder-opacity));
}

.placeholder-red-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 226 226 / var(--tw-placeholder-opacity));
}

.placeholder-red-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 226 226 / var(--tw-placeholder-opacity));
}

.placeholder-red-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 202 202 / var(--tw-placeholder-opacity));
}

.placeholder-red-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 202 202 / var(--tw-placeholder-opacity));
}

.placeholder-red-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 202 202 / var(--tw-placeholder-opacity));
}

.placeholder-red-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 165 165 / var(--tw-placeholder-opacity));
}

.placeholder-red-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 165 165 / var(--tw-placeholder-opacity));
}

.placeholder-red-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 165 165 / var(--tw-placeholder-opacity));
}

.placeholder-red-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 113 113 / var(--tw-placeholder-opacity));
}

.placeholder-red-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 113 113 / var(--tw-placeholder-opacity));
}

.placeholder-red-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(248 113 113 / var(--tw-placeholder-opacity));
}

.placeholder-red-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 68 68 / var(--tw-placeholder-opacity));
}

.placeholder-red-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 68 68 / var(--tw-placeholder-opacity));
}

.placeholder-red-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 68 68 / var(--tw-placeholder-opacity));
}

.placeholder-red-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-red-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-red-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 38 38 / var(--tw-placeholder-opacity));
}

.placeholder-red-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity));
}

.placeholder-red-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity));
}

.placeholder-red-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(185 28 28 / var(--tw-placeholder-opacity));
}

.placeholder-red-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 27 27 / var(--tw-placeholder-opacity));
}

.placeholder-red-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 27 27 / var(--tw-placeholder-opacity));
}

.placeholder-red-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 27 27 / var(--tw-placeholder-opacity));
}

.placeholder-red-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(127 29 29 / var(--tw-placeholder-opacity));
}

.placeholder-red-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(127 29 29 / var(--tw-placeholder-opacity));
}

.placeholder-red-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(127 29 29 / var(--tw-placeholder-opacity));
}

.placeholder-orange-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 247 237 / var(--tw-placeholder-opacity));
}

.placeholder-orange-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 247 237 / var(--tw-placeholder-opacity));
}

.placeholder-orange-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 247 237 / var(--tw-placeholder-opacity));
}

.placeholder-orange-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 237 213 / var(--tw-placeholder-opacity));
}

.placeholder-orange-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 237 213 / var(--tw-placeholder-opacity));
}

.placeholder-orange-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 237 213 / var(--tw-placeholder-opacity));
}

.placeholder-orange-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 215 170 / var(--tw-placeholder-opacity));
}

.placeholder-orange-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 215 170 / var(--tw-placeholder-opacity));
}

.placeholder-orange-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 215 170 / var(--tw-placeholder-opacity));
}

.placeholder-orange-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 186 116 / var(--tw-placeholder-opacity));
}

.placeholder-orange-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 186 116 / var(--tw-placeholder-opacity));
}

.placeholder-orange-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 186 116 / var(--tw-placeholder-opacity));
}

.placeholder-orange-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 146 60 / var(--tw-placeholder-opacity));
}

.placeholder-orange-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 146 60 / var(--tw-placeholder-opacity));
}

.placeholder-orange-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 146 60 / var(--tw-placeholder-opacity));
}

.placeholder-orange-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 115 22 / var(--tw-placeholder-opacity));
}

.placeholder-orange-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 115 22 / var(--tw-placeholder-opacity));
}

.placeholder-orange-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 115 22 / var(--tw-placeholder-opacity));
}

.placeholder-orange-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 88 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 88 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 88 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(194 65 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(194 65 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(194 65 12 / var(--tw-placeholder-opacity));
}

.placeholder-orange-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(154 52 18 / var(--tw-placeholder-opacity));
}

.placeholder-orange-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(154 52 18 / var(--tw-placeholder-opacity));
}

.placeholder-orange-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(154 52 18 / var(--tw-placeholder-opacity));
}

.placeholder-orange-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 45 18 / var(--tw-placeholder-opacity));
}

.placeholder-orange-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 45 18 / var(--tw-placeholder-opacity));
}

.placeholder-orange-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 45 18 / var(--tw-placeholder-opacity));
}

.placeholder-amber-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 251 235 / var(--tw-placeholder-opacity));
}

.placeholder-amber-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 251 235 / var(--tw-placeholder-opacity));
}

.placeholder-amber-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 251 235 / var(--tw-placeholder-opacity));
}

.placeholder-amber-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 243 199 / var(--tw-placeholder-opacity));
}

.placeholder-amber-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 243 199 / var(--tw-placeholder-opacity));
}

.placeholder-amber-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 243 199 / var(--tw-placeholder-opacity));
}

.placeholder-amber-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 230 138 / var(--tw-placeholder-opacity));
}

.placeholder-amber-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 230 138 / var(--tw-placeholder-opacity));
}

.placeholder-amber-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 230 138 / var(--tw-placeholder-opacity));
}

.placeholder-amber-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 211 77 / var(--tw-placeholder-opacity));
}

.placeholder-amber-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 211 77 / var(--tw-placeholder-opacity));
}

.placeholder-amber-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 211 77 / var(--tw-placeholder-opacity));
}

.placeholder-amber-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 191 36 / var(--tw-placeholder-opacity));
}

.placeholder-amber-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 191 36 / var(--tw-placeholder-opacity));
}

.placeholder-amber-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 191 36 / var(--tw-placeholder-opacity));
}

.placeholder-amber-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 158 11 / var(--tw-placeholder-opacity));
}

.placeholder-amber-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 158 11 / var(--tw-placeholder-opacity));
}

.placeholder-amber-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 158 11 / var(--tw-placeholder-opacity));
}

.placeholder-amber-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 119 6 / var(--tw-placeholder-opacity));
}

.placeholder-amber-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 119 6 / var(--tw-placeholder-opacity));
}

.placeholder-amber-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 119 6 / var(--tw-placeholder-opacity));
}

.placeholder-amber-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(180 83 9 / var(--tw-placeholder-opacity));
}

.placeholder-amber-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(180 83 9 / var(--tw-placeholder-opacity));
}

.placeholder-amber-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(180 83 9 / var(--tw-placeholder-opacity));
}

.placeholder-amber-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(146 64 14 / var(--tw-placeholder-opacity));
}

.placeholder-amber-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(146 64 14 / var(--tw-placeholder-opacity));
}

.placeholder-amber-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(146 64 14 / var(--tw-placeholder-opacity));
}

.placeholder-amber-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 53 15 / var(--tw-placeholder-opacity));
}

.placeholder-amber-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 53 15 / var(--tw-placeholder-opacity));
}

.placeholder-amber-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(120 53 15 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 252 232 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 252 232 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 252 232 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 249 195 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 249 195 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 249 195 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 240 138 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 240 138 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 240 138 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 224 71 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 224 71 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 224 71 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 204 21 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 204 21 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 204 21 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 179 8 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 179 8 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(234 179 8 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(202 138 4 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(202 138 4 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(202 138 4 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 98 7 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 98 7 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(161 98 7 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(133 77 14 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(133 77 14 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(133 77 14 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 63 18 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 63 18 / var(--tw-placeholder-opacity));
}

.placeholder-yellow-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(113 63 18 / var(--tw-placeholder-opacity));
}

.placeholder-lime-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(247 254 231 / var(--tw-placeholder-opacity));
}

.placeholder-lime-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(247 254 231 / var(--tw-placeholder-opacity));
}

.placeholder-lime-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(247 254 231 / var(--tw-placeholder-opacity));
}

.placeholder-lime-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 252 203 / var(--tw-placeholder-opacity));
}

.placeholder-lime-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 252 203 / var(--tw-placeholder-opacity));
}

.placeholder-lime-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 252 203 / var(--tw-placeholder-opacity));
}

.placeholder-lime-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 249 157 / var(--tw-placeholder-opacity));
}

.placeholder-lime-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 249 157 / var(--tw-placeholder-opacity));
}

.placeholder-lime-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 249 157 / var(--tw-placeholder-opacity));
}

.placeholder-lime-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 242 100 / var(--tw-placeholder-opacity));
}

.placeholder-lime-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 242 100 / var(--tw-placeholder-opacity));
}

.placeholder-lime-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 242 100 / var(--tw-placeholder-opacity));
}

.placeholder-lime-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 230 53 / var(--tw-placeholder-opacity));
}

.placeholder-lime-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 230 53 / var(--tw-placeholder-opacity));
}

.placeholder-lime-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 230 53 / var(--tw-placeholder-opacity));
}

.placeholder-lime-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(132 204 22 / var(--tw-placeholder-opacity));
}

.placeholder-lime-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(132 204 22 / var(--tw-placeholder-opacity));
}

.placeholder-lime-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(132 204 22 / var(--tw-placeholder-opacity));
}

.placeholder-lime-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(101 163 13 / var(--tw-placeholder-opacity));
}

.placeholder-lime-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(101 163 13 / var(--tw-placeholder-opacity));
}

.placeholder-lime-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(101 163 13 / var(--tw-placeholder-opacity));
}

.placeholder-lime-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(77 124 15 / var(--tw-placeholder-opacity));
}

.placeholder-lime-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(77 124 15 / var(--tw-placeholder-opacity));
}

.placeholder-lime-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(77 124 15 / var(--tw-placeholder-opacity));
}

.placeholder-lime-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 98 18 / var(--tw-placeholder-opacity));
}

.placeholder-lime-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 98 18 / var(--tw-placeholder-opacity));
}

.placeholder-lime-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(63 98 18 / var(--tw-placeholder-opacity));
}

.placeholder-lime-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(54 83 20 / var(--tw-placeholder-opacity));
}

.placeholder-lime-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(54 83 20 / var(--tw-placeholder-opacity));
}

.placeholder-lime-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(54 83 20 / var(--tw-placeholder-opacity));
}

.placeholder-green-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 244 / var(--tw-placeholder-opacity));
}

.placeholder-green-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 244 / var(--tw-placeholder-opacity));
}

.placeholder-green-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 244 / var(--tw-placeholder-opacity));
}

.placeholder-green-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 252 231 / var(--tw-placeholder-opacity));
}

.placeholder-green-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 252 231 / var(--tw-placeholder-opacity));
}

.placeholder-green-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(220 252 231 / var(--tw-placeholder-opacity));
}

.placeholder-green-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(187 247 208 / var(--tw-placeholder-opacity));
}

.placeholder-green-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(187 247 208 / var(--tw-placeholder-opacity));
}

.placeholder-green-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(187 247 208 / var(--tw-placeholder-opacity));
}

.placeholder-green-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 239 172 / var(--tw-placeholder-opacity));
}

.placeholder-green-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 239 172 / var(--tw-placeholder-opacity));
}

.placeholder-green-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 239 172 / var(--tw-placeholder-opacity));
}

.placeholder-green-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(74 222 128 / var(--tw-placeholder-opacity));
}

.placeholder-green-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(74 222 128 / var(--tw-placeholder-opacity));
}

.placeholder-green-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(74 222 128 / var(--tw-placeholder-opacity));
}

.placeholder-green-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 197 94 / var(--tw-placeholder-opacity));
}

.placeholder-green-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 197 94 / var(--tw-placeholder-opacity));
}

.placeholder-green-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 197 94 / var(--tw-placeholder-opacity));
}

.placeholder-green-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 163 74 / var(--tw-placeholder-opacity));
}

.placeholder-green-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 163 74 / var(--tw-placeholder-opacity));
}

.placeholder-green-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 163 74 / var(--tw-placeholder-opacity));
}

.placeholder-green-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity));
}

.placeholder-green-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity));
}

.placeholder-green-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 128 61 / var(--tw-placeholder-opacity));
}

.placeholder-green-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 101 52 / var(--tw-placeholder-opacity));
}

.placeholder-green-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 101 52 / var(--tw-placeholder-opacity));
}

.placeholder-green-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 101 52 / var(--tw-placeholder-opacity));
}

.placeholder-green-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 83 45 / var(--tw-placeholder-opacity));
}

.placeholder-green-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 83 45 / var(--tw-placeholder-opacity));
}

.placeholder-green-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 83 45 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 253 245 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 253 245 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 253 245 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 250 229 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 250 229 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(209 250 229 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 243 208 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 243 208 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 243 208 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(110 231 183 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(110 231 183 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(110 231 183 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(52 211 153 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(52 211 153 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(52 211 153 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(16 185 129 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(16 185 129 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(16 185 129 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(5 150 105 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(5 150 105 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(5 150 105 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 120 87 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 120 87 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 120 87 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 95 70 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 95 70 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 95 70 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 78 59 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 78 59 / var(--tw-placeholder-opacity));
}

.placeholder-emerald-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 78 59 / var(--tw-placeholder-opacity));
}

.placeholder-teal-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 250 / var(--tw-placeholder-opacity));
}

.placeholder-teal-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 250 / var(--tw-placeholder-opacity));
}

.placeholder-teal-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 253 250 / var(--tw-placeholder-opacity));
}

.placeholder-teal-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(204 251 241 / var(--tw-placeholder-opacity));
}

.placeholder-teal-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(204 251 241 / var(--tw-placeholder-opacity));
}

.placeholder-teal-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(204 251 241 / var(--tw-placeholder-opacity));
}

.placeholder-teal-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 246 228 / var(--tw-placeholder-opacity));
}

.placeholder-teal-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 246 228 / var(--tw-placeholder-opacity));
}

.placeholder-teal-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(153 246 228 / var(--tw-placeholder-opacity));
}

.placeholder-teal-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(94 234 212 / var(--tw-placeholder-opacity));
}

.placeholder-teal-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(94 234 212 / var(--tw-placeholder-opacity));
}

.placeholder-teal-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(94 234 212 / var(--tw-placeholder-opacity));
}

.placeholder-teal-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(45 212 191 / var(--tw-placeholder-opacity));
}

.placeholder-teal-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(45 212 191 / var(--tw-placeholder-opacity));
}

.placeholder-teal-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(45 212 191 / var(--tw-placeholder-opacity));
}

.placeholder-teal-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 184 166 / var(--tw-placeholder-opacity));
}

.placeholder-teal-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 184 166 / var(--tw-placeholder-opacity));
}

.placeholder-teal-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(20 184 166 / var(--tw-placeholder-opacity));
}

.placeholder-teal-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(13 148 136 / var(--tw-placeholder-opacity));
}

.placeholder-teal-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(13 148 136 / var(--tw-placeholder-opacity));
}

.placeholder-teal-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(13 148 136 / var(--tw-placeholder-opacity));
}

.placeholder-teal-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 118 110 / var(--tw-placeholder-opacity));
}

.placeholder-teal-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 118 110 / var(--tw-placeholder-opacity));
}

.placeholder-teal-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(15 118 110 / var(--tw-placeholder-opacity));
}

.placeholder-teal-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 94 89 / var(--tw-placeholder-opacity));
}

.placeholder-teal-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 94 89 / var(--tw-placeholder-opacity));
}

.placeholder-teal-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(17 94 89 / var(--tw-placeholder-opacity));
}

.placeholder-teal-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(19 78 74 / var(--tw-placeholder-opacity));
}

.placeholder-teal-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(19 78 74 / var(--tw-placeholder-opacity));
}

.placeholder-teal-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(19 78 74 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 254 255 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 254 255 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 254 255 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(207 250 254 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(207 250 254 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(207 250 254 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 243 252 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 243 252 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 243 252 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(103 232 249 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(103 232 249 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(103 232 249 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 211 238 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 211 238 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(34 211 238 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 182 212 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 182 212 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(6 182 212 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(8 145 178 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(8 145 178 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(8 145 178 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 116 144 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 116 144 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 116 144 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 94 117 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 94 117 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(21 94 117 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 78 99 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 78 99 / var(--tw-placeholder-opacity));
}

.placeholder-cyan-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(22 78 99 / var(--tw-placeholder-opacity));
}

.placeholder-sky-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 249 255 / var(--tw-placeholder-opacity));
}

.placeholder-sky-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 249 255 / var(--tw-placeholder-opacity));
}

.placeholder-sky-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 249 255 / var(--tw-placeholder-opacity));
}

.placeholder-sky-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 242 254 / var(--tw-placeholder-opacity));
}

.placeholder-sky-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 242 254 / var(--tw-placeholder-opacity));
}

.placeholder-sky-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 242 254 / var(--tw-placeholder-opacity));
}

.placeholder-sky-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(186 230 253 / var(--tw-placeholder-opacity));
}

.placeholder-sky-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(186 230 253 / var(--tw-placeholder-opacity));
}

.placeholder-sky-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(186 230 253 / var(--tw-placeholder-opacity));
}

.placeholder-sky-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(125 211 252 / var(--tw-placeholder-opacity));
}

.placeholder-sky-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(125 211 252 / var(--tw-placeholder-opacity));
}

.placeholder-sky-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(125 211 252 / var(--tw-placeholder-opacity));
}

.placeholder-sky-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(56 189 248 / var(--tw-placeholder-opacity));
}

.placeholder-sky-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(56 189 248 / var(--tw-placeholder-opacity));
}

.placeholder-sky-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(56 189 248 / var(--tw-placeholder-opacity));
}

.placeholder-sky-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 165 233 / var(--tw-placeholder-opacity));
}

.placeholder-sky-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 165 233 / var(--tw-placeholder-opacity));
}

.placeholder-sky-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 165 233 / var(--tw-placeholder-opacity));
}

.placeholder-sky-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(2 132 199 / var(--tw-placeholder-opacity));
}

.placeholder-sky-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(2 132 199 / var(--tw-placeholder-opacity));
}

.placeholder-sky-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(2 132 199 / var(--tw-placeholder-opacity));
}

.placeholder-sky-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(3 105 161 / var(--tw-placeholder-opacity));
}

.placeholder-sky-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(3 105 161 / var(--tw-placeholder-opacity));
}

.placeholder-sky-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(3 105 161 / var(--tw-placeholder-opacity));
}

.placeholder-sky-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(7 89 133 / var(--tw-placeholder-opacity));
}

.placeholder-sky-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(7 89 133 / var(--tw-placeholder-opacity));
}

.placeholder-sky-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(7 89 133 / var(--tw-placeholder-opacity));
}

.placeholder-sky-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(12 74 110 / var(--tw-placeholder-opacity));
}

.placeholder-sky-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(12 74 110 / var(--tw-placeholder-opacity));
}

.placeholder-sky-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(12 74 110 / var(--tw-placeholder-opacity));
}

.placeholder-blue-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 246 255 / var(--tw-placeholder-opacity));
}

.placeholder-blue-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 246 255 / var(--tw-placeholder-opacity));
}

.placeholder-blue-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(239 246 255 / var(--tw-placeholder-opacity));
}

.placeholder-blue-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 234 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 234 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 234 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(191 219 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(191 219 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(191 219 254 / var(--tw-placeholder-opacity));
}

.placeholder-blue-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 197 253 / var(--tw-placeholder-opacity));
}

.placeholder-blue-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 197 253 / var(--tw-placeholder-opacity));
}

.placeholder-blue-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 197 253 / var(--tw-placeholder-opacity));
}

.placeholder-blue-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(96 165 250 / var(--tw-placeholder-opacity));
}

.placeholder-blue-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(96 165 250 / var(--tw-placeholder-opacity));
}

.placeholder-blue-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(96 165 250 / var(--tw-placeholder-opacity));
}

.placeholder-blue-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(59 130 246 / var(--tw-placeholder-opacity));
}

.placeholder-blue-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(59 130 246 / var(--tw-placeholder-opacity));
}

.placeholder-blue-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(59 130 246 / var(--tw-placeholder-opacity));
}

.placeholder-blue-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(37 99 235 / var(--tw-placeholder-opacity));
}

.placeholder-blue-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(37 99 235 / var(--tw-placeholder-opacity));
}

.placeholder-blue-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(37 99 235 / var(--tw-placeholder-opacity));
}

.placeholder-blue-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(29 78 216 / var(--tw-placeholder-opacity));
}

.placeholder-blue-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(29 78 216 / var(--tw-placeholder-opacity));
}

.placeholder-blue-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(29 78 216 / var(--tw-placeholder-opacity));
}

.placeholder-blue-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 64 175 / var(--tw-placeholder-opacity));
}

.placeholder-blue-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 64 175 / var(--tw-placeholder-opacity));
}

.placeholder-blue-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 64 175 / var(--tw-placeholder-opacity));
}

.placeholder-blue-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 58 138 / var(--tw-placeholder-opacity));
}

.placeholder-blue-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 58 138 / var(--tw-placeholder-opacity));
}

.placeholder-blue-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(30 58 138 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(238 242 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(238 242 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(238 242 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 231 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 231 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(224 231 255 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(199 210 254 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(199 210 254 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(199 210 254 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 180 252 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 180 252 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(165 180 252 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(129 140 248 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(129 140 248 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(129 140 248 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(99 102 241 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(99 102 241 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(99 102 241 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(79 70 229 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(79 70 229 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(79 70 229 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(67 56 202 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(67 56 202 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(67 56 202 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 48 163 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 48 163 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(55 48 163 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(49 46 129 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(49 46 129 / var(--tw-placeholder-opacity));
}

.placeholder-indigo-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(49 46 129 / var(--tw-placeholder-opacity));
}

.placeholder-violet-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 243 255 / var(--tw-placeholder-opacity));
}

.placeholder-violet-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 243 255 / var(--tw-placeholder-opacity));
}

.placeholder-violet-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 243 255 / var(--tw-placeholder-opacity));
}

.placeholder-violet-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(237 233 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(237 233 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(237 233 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(221 214 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(221 214 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(221 214 254 / var(--tw-placeholder-opacity));
}

.placeholder-violet-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(196 181 253 / var(--tw-placeholder-opacity));
}

.placeholder-violet-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(196 181 253 / var(--tw-placeholder-opacity));
}

.placeholder-violet-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(196 181 253 / var(--tw-placeholder-opacity));
}

.placeholder-violet-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 139 250 / var(--tw-placeholder-opacity));
}

.placeholder-violet-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 139 250 / var(--tw-placeholder-opacity));
}

.placeholder-violet-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(167 139 250 / var(--tw-placeholder-opacity));
}

.placeholder-violet-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(139 92 246 / var(--tw-placeholder-opacity));
}

.placeholder-violet-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(139 92 246 / var(--tw-placeholder-opacity));
}

.placeholder-violet-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(139 92 246 / var(--tw-placeholder-opacity));
}

.placeholder-violet-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 58 237 / var(--tw-placeholder-opacity));
}

.placeholder-violet-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 58 237 / var(--tw-placeholder-opacity));
}

.placeholder-violet-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(124 58 237 / var(--tw-placeholder-opacity));
}

.placeholder-violet-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(109 40 217 / var(--tw-placeholder-opacity));
}

.placeholder-violet-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(109 40 217 / var(--tw-placeholder-opacity));
}

.placeholder-violet-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(109 40 217 / var(--tw-placeholder-opacity));
}

.placeholder-violet-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(91 33 182 / var(--tw-placeholder-opacity));
}

.placeholder-violet-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(91 33 182 / var(--tw-placeholder-opacity));
}

.placeholder-violet-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(91 33 182 / var(--tw-placeholder-opacity));
}

.placeholder-violet-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(76 29 149 / var(--tw-placeholder-opacity));
}

.placeholder-violet-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(76 29 149 / var(--tw-placeholder-opacity));
}

.placeholder-violet-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(76 29 149 / var(--tw-placeholder-opacity));
}

.placeholder-purple-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 245 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 245 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 245 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(243 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(233 213 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(233 213 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(233 213 255 / var(--tw-placeholder-opacity));
}

.placeholder-purple-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(216 180 254 / var(--tw-placeholder-opacity));
}

.placeholder-purple-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(216 180 254 / var(--tw-placeholder-opacity));
}

.placeholder-purple-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(216 180 254 / var(--tw-placeholder-opacity));
}

.placeholder-purple-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 132 252 / var(--tw-placeholder-opacity));
}

.placeholder-purple-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 132 252 / var(--tw-placeholder-opacity));
}

.placeholder-purple-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 132 252 / var(--tw-placeholder-opacity));
}

.placeholder-purple-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 85 247 / var(--tw-placeholder-opacity));
}

.placeholder-purple-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 85 247 / var(--tw-placeholder-opacity));
}

.placeholder-purple-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(168 85 247 / var(--tw-placeholder-opacity));
}

.placeholder-purple-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 51 234 / var(--tw-placeholder-opacity));
}

.placeholder-purple-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 51 234 / var(--tw-placeholder-opacity));
}

.placeholder-purple-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(147 51 234 / var(--tw-placeholder-opacity));
}

.placeholder-purple-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(126 34 206 / var(--tw-placeholder-opacity));
}

.placeholder-purple-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(126 34 206 / var(--tw-placeholder-opacity));
}

.placeholder-purple-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(126 34 206 / var(--tw-placeholder-opacity));
}

.placeholder-purple-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 33 168 / var(--tw-placeholder-opacity));
}

.placeholder-purple-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 33 168 / var(--tw-placeholder-opacity));
}

.placeholder-purple-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(107 33 168 / var(--tw-placeholder-opacity));
}

.placeholder-purple-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(88 28 135 / var(--tw-placeholder-opacity));
}

.placeholder-purple-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(88 28 135 / var(--tw-placeholder-opacity));
}

.placeholder-purple-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(88 28 135 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 244 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 244 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 244 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(250 232 255 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 208 254 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 208 254 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(245 208 254 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 171 252 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 171 252 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 171 252 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(232 121 249 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(232 121 249 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(232 121 249 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 70 239 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 70 239 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(217 70 239 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 38 211 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 38 211 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(192 38 211 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(162 28 175 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(162 28 175 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(162 28 175 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 25 143 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 25 143 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(134 25 143 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(112 26 117 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(112 26 117 / var(--tw-placeholder-opacity));
}

.placeholder-fuchsia-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(112 26 117 / var(--tw-placeholder-opacity));
}

.placeholder-pink-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 242 248 / var(--tw-placeholder-opacity));
}

.placeholder-pink-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 242 248 / var(--tw-placeholder-opacity));
}

.placeholder-pink-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 242 248 / var(--tw-placeholder-opacity));
}

.placeholder-pink-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 231 243 / var(--tw-placeholder-opacity));
}

.placeholder-pink-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 231 243 / var(--tw-placeholder-opacity));
}

.placeholder-pink-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(252 231 243 / var(--tw-placeholder-opacity));
}

.placeholder-pink-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 207 232 / var(--tw-placeholder-opacity));
}

.placeholder-pink-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 207 232 / var(--tw-placeholder-opacity));
}

.placeholder-pink-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 207 232 / var(--tw-placeholder-opacity));
}

.placeholder-pink-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 168 212 / var(--tw-placeholder-opacity));
}

.placeholder-pink-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 168 212 / var(--tw-placeholder-opacity));
}

.placeholder-pink-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(249 168 212 / var(--tw-placeholder-opacity));
}

.placeholder-pink-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 114 182 / var(--tw-placeholder-opacity));
}

.placeholder-pink-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 114 182 / var(--tw-placeholder-opacity));
}

.placeholder-pink-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 114 182 / var(--tw-placeholder-opacity));
}

.placeholder-pink-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 72 153 / var(--tw-placeholder-opacity));
}

.placeholder-pink-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 72 153 / var(--tw-placeholder-opacity));
}

.placeholder-pink-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(236 72 153 / var(--tw-placeholder-opacity));
}

.placeholder-pink-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 39 119 / var(--tw-placeholder-opacity));
}

.placeholder-pink-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 39 119 / var(--tw-placeholder-opacity));
}

.placeholder-pink-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(219 39 119 / var(--tw-placeholder-opacity));
}

.placeholder-pink-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 24 93 / var(--tw-placeholder-opacity));
}

.placeholder-pink-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 24 93 / var(--tw-placeholder-opacity));
}

.placeholder-pink-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 24 93 / var(--tw-placeholder-opacity));
}

.placeholder-pink-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(157 23 77 / var(--tw-placeholder-opacity));
}

.placeholder-pink-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(157 23 77 / var(--tw-placeholder-opacity));
}

.placeholder-pink-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(157 23 77 / var(--tw-placeholder-opacity));
}

.placeholder-pink-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(131 24 67 / var(--tw-placeholder-opacity));
}

.placeholder-pink-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(131 24 67 / var(--tw-placeholder-opacity));
}

.placeholder-pink-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(131 24 67 / var(--tw-placeholder-opacity));
}

.placeholder-rose-50::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 241 242 / var(--tw-placeholder-opacity));
}

.placeholder-rose-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 241 242 / var(--tw-placeholder-opacity));
}

.placeholder-rose-50::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 241 242 / var(--tw-placeholder-opacity));
}

.placeholder-rose-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 228 230 / var(--tw-placeholder-opacity));
}

.placeholder-rose-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 228 230 / var(--tw-placeholder-opacity));
}

.placeholder-rose-100::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 228 230 / var(--tw-placeholder-opacity));
}

.placeholder-rose-200::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 205 211 / var(--tw-placeholder-opacity));
}

.placeholder-rose-200:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 205 211 / var(--tw-placeholder-opacity));
}

.placeholder-rose-200::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(254 205 211 / var(--tw-placeholder-opacity));
}

.placeholder-rose-300::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 164 175 / var(--tw-placeholder-opacity));
}

.placeholder-rose-300:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 164 175 / var(--tw-placeholder-opacity));
}

.placeholder-rose-300::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(253 164 175 / var(--tw-placeholder-opacity));
}

.placeholder-rose-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 113 133 / var(--tw-placeholder-opacity));
}

.placeholder-rose-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 113 133 / var(--tw-placeholder-opacity));
}

.placeholder-rose-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(251 113 133 / var(--tw-placeholder-opacity));
}

.placeholder-rose-500::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 63 94 / var(--tw-placeholder-opacity));
}

.placeholder-rose-500:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 63 94 / var(--tw-placeholder-opacity));
}

.placeholder-rose-500::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(244 63 94 / var(--tw-placeholder-opacity));
}

.placeholder-rose-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(225 29 72 / var(--tw-placeholder-opacity));
}

.placeholder-rose-600:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(225 29 72 / var(--tw-placeholder-opacity));
}

.placeholder-rose-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(225 29 72 / var(--tw-placeholder-opacity));
}

.placeholder-rose-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 18 60 / var(--tw-placeholder-opacity));
}

.placeholder-rose-700:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 18 60 / var(--tw-placeholder-opacity));
}

.placeholder-rose-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(190 18 60 / var(--tw-placeholder-opacity));
}

.placeholder-rose-800::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(159 18 57 / var(--tw-placeholder-opacity));
}

.placeholder-rose-800:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(159 18 57 / var(--tw-placeholder-opacity));
}

.placeholder-rose-800::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(159 18 57 / var(--tw-placeholder-opacity));
}

.placeholder-rose-900::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(136 19 55 / var(--tw-placeholder-opacity));
}

.placeholder-rose-900:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(136 19 55 / var(--tw-placeholder-opacity));
}

.placeholder-rose-900::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(136 19 55 / var(--tw-placeholder-opacity));
}

.placeholder-textLgColor::-moz-placeholder {
  color: var(--text-large-color);
}

.placeholder-textLgColor:-ms-input-placeholder {
  color: var(--text-large-color);
}

.placeholder-textLgColor::placeholder {
  color: var(--text-large-color);
}

.placeholder-textSmColor::-moz-placeholder {
  color: var(--text-small-color);
}

.placeholder-textSmColor:-ms-input-placeholder {
  color: var(--text-small-color);
}

.placeholder-textSmColor::placeholder {
  color: var(--text-small-color);
}

.placeholder-subText::-moz-placeholder {
  color: var(--sub-text-color);
}

.placeholder-subText:-ms-input-placeholder {
  color: var(--sub-text-color);
}

.placeholder-subText::placeholder {
  color: var(--sub-text-color);
}

.placeholder-navBar-linkActive::-moz-placeholder {
  color: var(--nav-link-active);
}

.placeholder-navBar-linkActive:-ms-input-placeholder {
  color: var(--nav-link-active);
}

.placeholder-navBar-linkActive::placeholder {
  color: var(--nav-link-active);
}

.placeholder-navBar-linkActiveStripe::-moz-placeholder {
  color: var(--nav-link-active-stripe);
}

.placeholder-navBar-linkActiveStripe:-ms-input-placeholder {
  color: var(--nav-link-active-stripe);
}

.placeholder-navBar-linkActiveStripe::placeholder {
  color: var(--nav-link-active-stripe);
}

.placeholder-mobileNav-text::-moz-placeholder {
  color: var(--mobile-text);
}

.placeholder-mobileNav-text:-ms-input-placeholder {
  color: var(--mobile-text);
}

.placeholder-mobileNav-text::placeholder {
  color: var(--mobile-text);
}

.placeholder-mobileNav-textHover::-moz-placeholder {
  color: var(--mobile-hover-text);
}

.placeholder-mobileNav-textHover:-ms-input-placeholder {
  color: var(--mobile-hover-text);
}

.placeholder-mobileNav-textHover::placeholder {
  color: var(--mobile-hover-text);
}

.placeholder-mobileNav-border::-moz-placeholder {
  color: var(--mobile-border);
}

.placeholder-mobileNav-border:-ms-input-placeholder {
  color: var(--mobile-border);
}

.placeholder-mobileNav-border::placeholder {
  color: var(--mobile-border);
}

.placeholder-aboutMe-smIconBg::-moz-placeholder {
  color: var(--sm-icon-bg);
}

.placeholder-aboutMe-smIconBg:-ms-input-placeholder {
  color: var(--sm-icon-bg);
}

.placeholder-aboutMe-smIconBg::placeholder {
  color: var(--sm-icon-bg);
}

.placeholder-aboutMe-aboutMeText::-moz-placeholder {
  color: var(--aboutme-text);
}

.placeholder-aboutMe-aboutMeText:-ms-input-placeholder {
  color: var(--aboutme-text);
}

.placeholder-aboutMe-aboutMeText::placeholder {
  color: var(--aboutme-text);
}

.placeholder-aboutMe-alissa::-moz-placeholder {
  color: var(--alissa);
}

.placeholder-aboutMe-alissa:-ms-input-placeholder {
  color: var(--alissa);
}

.placeholder-aboutMe-alissa::placeholder {
  color: var(--alissa);
}

.placeholder-projects-text::-moz-placeholder {
  color: var(--project-text-color);
}

.placeholder-projects-text:-ms-input-placeholder {
  color: var(--project-text-color);
}

.placeholder-projects-text::placeholder {
  color: var(--project-text-color);
}

.placeholder-projects-subText::-moz-placeholder {
  color: var(--project-sub-text);
}

.placeholder-projects-subText:-ms-input-placeholder {
  color: var(--project-sub-text);
}

.placeholder-projects-subText::placeholder {
  color: var(--project-sub-text);
}

.placeholder-projects-arrow::-moz-placeholder {
  color: var(--project-arrow);
}

.placeholder-projects-arrow:-ms-input-placeholder {
  color: var(--project-arrow);
}

.placeholder-projects-arrow::placeholder {
  color: var(--project-arrow);
}

.placeholder-projects-recentBg::-moz-placeholder {
  color: var(--recent-project-bg);
}

.placeholder-projects-recentBg:-ms-input-placeholder {
  color: var(--recent-project-bg);
}

.placeholder-projects-recentBg::placeholder {
  color: var(--recent-project-bg);
}

.placeholder-projects-recentHover::-moz-placeholder {
  color: var(--recent-project-bg-hover);
}

.placeholder-projects-recentHover:-ms-input-placeholder {
  color: var(--recent-project-bg-hover);
}

.placeholder-projects-recentHover::placeholder {
  color: var(--recent-project-bg-hover);
}

.placeholder-projects-recentShadow::-moz-placeholder {
  color: var(--recent-project-shadow);
}

.placeholder-projects-recentShadow:-ms-input-placeholder {
  color: var(--recent-project-shadow);
}

.placeholder-projects-recentShadow::placeholder {
  color: var(--recent-project-shadow);
}

.placeholder-contact-label::-moz-placeholder {
  color: var(--label-text);
}

.placeholder-contact-label:-ms-input-placeholder {
  color: var(--label-text);
}

.placeholder-contact-label::placeholder {
  color: var(--label-text);
}

.placeholder-contact-send::-moz-placeholder {
  color: var(--send-btn);
}

.placeholder-contact-send:-ms-input-placeholder {
  color: var(--send-btn);
}

.placeholder-contact-send::placeholder {
  color: var(--send-btn);
}

.placeholder-contact-sendHover::-moz-placeholder {
  color: var(--send-btn-hover);
}

.placeholder-contact-sendHover:-ms-input-placeholder {
  color: var(--send-btn-hover);
}

.placeholder-contact-sendHover::placeholder {
  color: var(--send-btn-hover);
}

.placeholder-blog-lgText::-moz-placeholder {
  color: var(--blog-lg-text);
}

.placeholder-blog-lgText:-ms-input-placeholder {
  color: var(--blog-lg-text);
}

.placeholder-blog-lgText::placeholder {
  color: var(--blog-lg-text);
}

.placeholder-blog-border::-moz-placeholder {
  color: var(--blog-input-border);
}

.placeholder-blog-border:-ms-input-placeholder {
  color: var(--blog-input-border);
}

.placeholder-blog-border::placeholder {
  color: var(--blog-input-border);
}

.placeholder-blog-tagBg::-moz-placeholder {
  color: var(--tag-btn-bg);
}

.placeholder-blog-tagBg:-ms-input-placeholder {
  color: var(--tag-btn-bg);
}

.placeholder-blog-tagBg::placeholder {
  color: var(--tag-btn-bg);
}

.placeholder-post-bodyText::-moz-placeholder {
  color: var(--text-body);
}

.placeholder-post-bodyText:-ms-input-placeholder {
  color: var(--text-body);
}

.placeholder-post-bodyText::placeholder {
  color: var(--text-body);
}

.placeholder-post-bodyTextLg::-moz-placeholder {
  color: var(--text-body-lg);
}

.placeholder-post-bodyTextLg:-ms-input-placeholder {
  color: var(--text-body-lg);
}

.placeholder-post-bodyTextLg::placeholder {
  color: var(--text-body-lg);
}

.placeholder-post-icon::-moz-placeholder {
  color: var(--icon);
}

.placeholder-post-icon:-ms-input-placeholder {
  color: var(--icon);
}

.placeholder-post-icon::placeholder {
  color: var(--icon);
}

.placeholder-post-iconHover::-moz-placeholder {
  color: var(--icon-hover);
}

.placeholder-post-iconHover:-ms-input-placeholder {
  color: var(--icon-hover);
}

.placeholder-post-iconHover::placeholder {
  color: var(--icon-hover);
}

.placeholder-post-hyperlink::-moz-placeholder {
  color: var(--hyperlink);
}

.placeholder-post-hyperlink:-ms-input-placeholder {
  color: var(--hyperlink);
}

.placeholder-post-hyperlink::placeholder {
  color: var(--hyperlink);
}

.placeholder-post-hyperlinkHover::-moz-placeholder {
  color: var(--hyperlink-hover);
}

.placeholder-post-hyperlinkHover:-ms-input-placeholder {
  color: var(--hyperlink-hover);
}

.placeholder-post-hyperlinkHover::placeholder {
  color: var(--hyperlink-hover);
}

.placeholder-post-quote::-moz-placeholder {
  color: var(--quote);
}

.placeholder-post-quote:-ms-input-placeholder {
  color: var(--quote);
}

.placeholder-post-quote::placeholder {
  color: var(--quote);
}

.placeholder-post-quoteAuthor::-moz-placeholder {
  color: var(--quote-author);
}

.placeholder-post-quoteAuthor:-ms-input-placeholder {
  color: var(--quote-author);
}

.placeholder-post-quoteAuthor::placeholder {
  color: var(--quote-author);
}

.placeholder-opacity-0::-moz-placeholder {
  --tw-placeholder-opacity: 0;
}

.placeholder-opacity-0:-ms-input-placeholder {
  --tw-placeholder-opacity: 0;
}

.placeholder-opacity-0::placeholder {
  --tw-placeholder-opacity: 0;
}

.placeholder-opacity-5::-moz-placeholder {
  --tw-placeholder-opacity: 0.05;
}

.placeholder-opacity-5:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.05;
}

.placeholder-opacity-5::placeholder {
  --tw-placeholder-opacity: 0.05;
}

.placeholder-opacity-10::-moz-placeholder {
  --tw-placeholder-opacity: 0.1;
}

.placeholder-opacity-10:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.1;
}

.placeholder-opacity-10::placeholder {
  --tw-placeholder-opacity: 0.1;
}

.placeholder-opacity-20::-moz-placeholder {
  --tw-placeholder-opacity: 0.2;
}

.placeholder-opacity-20:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.2;
}

.placeholder-opacity-20::placeholder {
  --tw-placeholder-opacity: 0.2;
}

.placeholder-opacity-25::-moz-placeholder {
  --tw-placeholder-opacity: 0.25;
}

.placeholder-opacity-25:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.25;
}

.placeholder-opacity-25::placeholder {
  --tw-placeholder-opacity: 0.25;
}

.placeholder-opacity-30::-moz-placeholder {
  --tw-placeholder-opacity: 0.3;
}

.placeholder-opacity-30:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.3;
}

.placeholder-opacity-30::placeholder {
  --tw-placeholder-opacity: 0.3;
}

.placeholder-opacity-40::-moz-placeholder {
  --tw-placeholder-opacity: 0.4;
}

.placeholder-opacity-40:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.4;
}

.placeholder-opacity-40::placeholder {
  --tw-placeholder-opacity: 0.4;
}

.placeholder-opacity-50::-moz-placeholder {
  --tw-placeholder-opacity: 0.5;
}

.placeholder-opacity-50:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.5;
}

.placeholder-opacity-50::placeholder {
  --tw-placeholder-opacity: 0.5;
}

.placeholder-opacity-60::-moz-placeholder {
  --tw-placeholder-opacity: 0.6;
}

.placeholder-opacity-60:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.6;
}

.placeholder-opacity-60::placeholder {
  --tw-placeholder-opacity: 0.6;
}

.placeholder-opacity-70::-moz-placeholder {
  --tw-placeholder-opacity: 0.7;
}

.placeholder-opacity-70:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.7;
}

.placeholder-opacity-70::placeholder {
  --tw-placeholder-opacity: 0.7;
}

.placeholder-opacity-75::-moz-placeholder {
  --tw-placeholder-opacity: 0.75;
}

.placeholder-opacity-75:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.75;
}

.placeholder-opacity-75::placeholder {
  --tw-placeholder-opacity: 0.75;
}

.placeholder-opacity-80::-moz-placeholder {
  --tw-placeholder-opacity: 0.8;
}

.placeholder-opacity-80:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.8;
}

.placeholder-opacity-80::placeholder {
  --tw-placeholder-opacity: 0.8;
}

.placeholder-opacity-90::-moz-placeholder {
  --tw-placeholder-opacity: 0.9;
}

.placeholder-opacity-90:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.9;
}

.placeholder-opacity-90::placeholder {
  --tw-placeholder-opacity: 0.9;
}

.placeholder-opacity-95::-moz-placeholder {
  --tw-placeholder-opacity: 0.95;
}

.placeholder-opacity-95:-ms-input-placeholder {
  --tw-placeholder-opacity: 0.95;
}

.placeholder-opacity-95::placeholder {
  --tw-placeholder-opacity: 0.95;
}

.placeholder-opacity-100::-moz-placeholder {
  --tw-placeholder-opacity: 1;
}

.placeholder-opacity-100:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
}

.placeholder-opacity-100::placeholder {
  --tw-placeholder-opacity: 1;
}

.caret-inherit {
  caret-color: inherit;
}

.caret-current {
  caret-color: currentColor;
}

.caret-transparent {
  caret-color: transparent;
}

.caret-black {
  caret-color: #000;
}

.caret-white {
  caret-color: #fff;
}

.caret-slate-50 {
  caret-color: #f8fafc;
}

.caret-slate-100 {
  caret-color: #f1f5f9;
}

.caret-slate-200 {
  caret-color: #e2e8f0;
}

.caret-slate-300 {
  caret-color: #cbd5e1;
}

.caret-slate-400 {
  caret-color: #94a3b8;
}

.caret-slate-500 {
  caret-color: #64748b;
}

.caret-slate-600 {
  caret-color: #475569;
}

.caret-slate-700 {
  caret-color: #334155;
}

.caret-slate-800 {
  caret-color: #1e293b;
}

.caret-slate-900 {
  caret-color: #0f172a;
}

.caret-gray-50 {
  caret-color: #f9fafb;
}

.caret-gray-100 {
  caret-color: #f3f4f6;
}

.caret-gray-200 {
  caret-color: #e5e7eb;
}

.caret-gray-300 {
  caret-color: #d1d5db;
}

.caret-gray-400 {
  caret-color: #9ca3af;
}

.caret-gray-500 {
  caret-color: #6b7280;
}

.caret-gray-600 {
  caret-color: #4b5563;
}

.caret-gray-700 {
  caret-color: #374151;
}

.caret-gray-800 {
  caret-color: #1f2937;
}

.caret-gray-900 {
  caret-color: #111827;
}

.caret-zinc-50 {
  caret-color: #fafafa;
}

.caret-zinc-100 {
  caret-color: #f4f4f5;
}

.caret-zinc-200 {
  caret-color: #e4e4e7;
}

.caret-zinc-300 {
  caret-color: #d4d4d8;
}

.caret-zinc-400 {
  caret-color: #a1a1aa;
}

.caret-zinc-500 {
  caret-color: #71717a;
}

.caret-zinc-600 {
  caret-color: #52525b;
}

.caret-zinc-700 {
  caret-color: #3f3f46;
}

.caret-zinc-800 {
  caret-color: #27272a;
}

.caret-zinc-900 {
  caret-color: #18181b;
}

.caret-neutral-50 {
  caret-color: #fafafa;
}

.caret-neutral-100 {
  caret-color: #f5f5f5;
}

.caret-neutral-200 {
  caret-color: #e5e5e5;
}

.caret-neutral-300 {
  caret-color: #d4d4d4;
}

.caret-neutral-400 {
  caret-color: #a3a3a3;
}

.caret-neutral-500 {
  caret-color: #737373;
}

.caret-neutral-600 {
  caret-color: #525252;
}

.caret-neutral-700 {
  caret-color: #404040;
}

.caret-neutral-800 {
  caret-color: #262626;
}

.caret-neutral-900 {
  caret-color: #171717;
}

.caret-stone-50 {
  caret-color: #fafaf9;
}

.caret-stone-100 {
  caret-color: #f5f5f4;
}

.caret-stone-200 {
  caret-color: #e7e5e4;
}

.caret-stone-300 {
  caret-color: #d6d3d1;
}

.caret-stone-400 {
  caret-color: #a8a29e;
}

.caret-stone-500 {
  caret-color: #78716c;
}

.caret-stone-600 {
  caret-color: #57534e;
}

.caret-stone-700 {
  caret-color: #44403c;
}

.caret-stone-800 {
  caret-color: #292524;
}

.caret-stone-900 {
  caret-color: #1c1917;
}

.caret-red-50 {
  caret-color: #fef2f2;
}

.caret-red-100 {
  caret-color: #fee2e2;
}

.caret-red-200 {
  caret-color: #fecaca;
}

.caret-red-300 {
  caret-color: #fca5a5;
}

.caret-red-400 {
  caret-color: #f87171;
}

.caret-red-500 {
  caret-color: #ef4444;
}

.caret-red-600 {
  caret-color: #dc2626;
}

.caret-red-700 {
  caret-color: #b91c1c;
}

.caret-red-800 {
  caret-color: #991b1b;
}

.caret-red-900 {
  caret-color: #7f1d1d;
}

.caret-orange-50 {
  caret-color: #fff7ed;
}

.caret-orange-100 {
  caret-color: #ffedd5;
}

.caret-orange-200 {
  caret-color: #fed7aa;
}

.caret-orange-300 {
  caret-color: #fdba74;
}

.caret-orange-400 {
  caret-color: #fb923c;
}

.caret-orange-500 {
  caret-color: #f97316;
}

.caret-orange-600 {
  caret-color: #ea580c;
}

.caret-orange-700 {
  caret-color: #c2410c;
}

.caret-orange-800 {
  caret-color: #9a3412;
}

.caret-orange-900 {
  caret-color: #7c2d12;
}

.caret-amber-50 {
  caret-color: #fffbeb;
}

.caret-amber-100 {
  caret-color: #fef3c7;
}

.caret-amber-200 {
  caret-color: #fde68a;
}

.caret-amber-300 {
  caret-color: #fcd34d;
}

.caret-amber-400 {
  caret-color: #fbbf24;
}

.caret-amber-500 {
  caret-color: #f59e0b;
}

.caret-amber-600 {
  caret-color: #d97706;
}

.caret-amber-700 {
  caret-color: #b45309;
}

.caret-amber-800 {
  caret-color: #92400e;
}

.caret-amber-900 {
  caret-color: #78350f;
}

.caret-yellow-50 {
  caret-color: #fefce8;
}

.caret-yellow-100 {
  caret-color: #fef9c3;
}

.caret-yellow-200 {
  caret-color: #fef08a;
}

.caret-yellow-300 {
  caret-color: #fde047;
}

.caret-yellow-400 {
  caret-color: #facc15;
}

.caret-yellow-500 {
  caret-color: #eab308;
}

.caret-yellow-600 {
  caret-color: #ca8a04;
}

.caret-yellow-700 {
  caret-color: #a16207;
}

.caret-yellow-800 {
  caret-color: #854d0e;
}

.caret-yellow-900 {
  caret-color: #713f12;
}

.caret-lime-50 {
  caret-color: #f7fee7;
}

.caret-lime-100 {
  caret-color: #ecfccb;
}

.caret-lime-200 {
  caret-color: #d9f99d;
}

.caret-lime-300 {
  caret-color: #bef264;
}

.caret-lime-400 {
  caret-color: #a3e635;
}

.caret-lime-500 {
  caret-color: #84cc16;
}

.caret-lime-600 {
  caret-color: #65a30d;
}

.caret-lime-700 {
  caret-color: #4d7c0f;
}

.caret-lime-800 {
  caret-color: #3f6212;
}

.caret-lime-900 {
  caret-color: #365314;
}

.caret-green-50 {
  caret-color: #f0fdf4;
}

.caret-green-100 {
  caret-color: #dcfce7;
}

.caret-green-200 {
  caret-color: #bbf7d0;
}

.caret-green-300 {
  caret-color: #86efac;
}

.caret-green-400 {
  caret-color: #4ade80;
}

.caret-green-500 {
  caret-color: #22c55e;
}

.caret-green-600 {
  caret-color: #16a34a;
}

.caret-green-700 {
  caret-color: #15803d;
}

.caret-green-800 {
  caret-color: #166534;
}

.caret-green-900 {
  caret-color: #14532d;
}

.caret-emerald-50 {
  caret-color: #ecfdf5;
}

.caret-emerald-100 {
  caret-color: #d1fae5;
}

.caret-emerald-200 {
  caret-color: #a7f3d0;
}

.caret-emerald-300 {
  caret-color: #6ee7b7;
}

.caret-emerald-400 {
  caret-color: #34d399;
}

.caret-emerald-500 {
  caret-color: #10b981;
}

.caret-emerald-600 {
  caret-color: #059669;
}

.caret-emerald-700 {
  caret-color: #047857;
}

.caret-emerald-800 {
  caret-color: #065f46;
}

.caret-emerald-900 {
  caret-color: #064e3b;
}

.caret-teal-50 {
  caret-color: #f0fdfa;
}

.caret-teal-100 {
  caret-color: #ccfbf1;
}

.caret-teal-200 {
  caret-color: #99f6e4;
}

.caret-teal-300 {
  caret-color: #5eead4;
}

.caret-teal-400 {
  caret-color: #2dd4bf;
}

.caret-teal-500 {
  caret-color: #14b8a6;
}

.caret-teal-600 {
  caret-color: #0d9488;
}

.caret-teal-700 {
  caret-color: #0f766e;
}

.caret-teal-800 {
  caret-color: #115e59;
}

.caret-teal-900 {
  caret-color: #134e4a;
}

.caret-cyan-50 {
  caret-color: #ecfeff;
}

.caret-cyan-100 {
  caret-color: #cffafe;
}

.caret-cyan-200 {
  caret-color: #a5f3fc;
}

.caret-cyan-300 {
  caret-color: #67e8f9;
}

.caret-cyan-400 {
  caret-color: #22d3ee;
}

.caret-cyan-500 {
  caret-color: #06b6d4;
}

.caret-cyan-600 {
  caret-color: #0891b2;
}

.caret-cyan-700 {
  caret-color: #0e7490;
}

.caret-cyan-800 {
  caret-color: #155e75;
}

.caret-cyan-900 {
  caret-color: #164e63;
}

.caret-sky-50 {
  caret-color: #f0f9ff;
}

.caret-sky-100 {
  caret-color: #e0f2fe;
}

.caret-sky-200 {
  caret-color: #bae6fd;
}

.caret-sky-300 {
  caret-color: #7dd3fc;
}

.caret-sky-400 {
  caret-color: #38bdf8;
}

.caret-sky-500 {
  caret-color: #0ea5e9;
}

.caret-sky-600 {
  caret-color: #0284c7;
}

.caret-sky-700 {
  caret-color: #0369a1;
}

.caret-sky-800 {
  caret-color: #075985;
}

.caret-sky-900 {
  caret-color: #0c4a6e;
}

.caret-blue-50 {
  caret-color: #eff6ff;
}

.caret-blue-100 {
  caret-color: #dbeafe;
}

.caret-blue-200 {
  caret-color: #bfdbfe;
}

.caret-blue-300 {
  caret-color: #93c5fd;
}

.caret-blue-400 {
  caret-color: #60a5fa;
}

.caret-blue-500 {
  caret-color: #3b82f6;
}

.caret-blue-600 {
  caret-color: #2563eb;
}

.caret-blue-700 {
  caret-color: #1d4ed8;
}

.caret-blue-800 {
  caret-color: #1e40af;
}

.caret-blue-900 {
  caret-color: #1e3a8a;
}

.caret-indigo-50 {
  caret-color: #eef2ff;
}

.caret-indigo-100 {
  caret-color: #e0e7ff;
}

.caret-indigo-200 {
  caret-color: #c7d2fe;
}

.caret-indigo-300 {
  caret-color: #a5b4fc;
}

.caret-indigo-400 {
  caret-color: #818cf8;
}

.caret-indigo-500 {
  caret-color: #6366f1;
}

.caret-indigo-600 {
  caret-color: #4f46e5;
}

.caret-indigo-700 {
  caret-color: #4338ca;
}

.caret-indigo-800 {
  caret-color: #3730a3;
}

.caret-indigo-900 {
  caret-color: #312e81;
}

.caret-violet-50 {
  caret-color: #f5f3ff;
}

.caret-violet-100 {
  caret-color: #ede9fe;
}

.caret-violet-200 {
  caret-color: #ddd6fe;
}

.caret-violet-300 {
  caret-color: #c4b5fd;
}

.caret-violet-400 {
  caret-color: #a78bfa;
}

.caret-violet-500 {
  caret-color: #8b5cf6;
}

.caret-violet-600 {
  caret-color: #7c3aed;
}

.caret-violet-700 {
  caret-color: #6d28d9;
}

.caret-violet-800 {
  caret-color: #5b21b6;
}

.caret-violet-900 {
  caret-color: #4c1d95;
}

.caret-purple-50 {
  caret-color: #faf5ff;
}

.caret-purple-100 {
  caret-color: #f3e8ff;
}

.caret-purple-200 {
  caret-color: #e9d5ff;
}

.caret-purple-300 {
  caret-color: #d8b4fe;
}

.caret-purple-400 {
  caret-color: #c084fc;
}

.caret-purple-500 {
  caret-color: #a855f7;
}

.caret-purple-600 {
  caret-color: #9333ea;
}

.caret-purple-700 {
  caret-color: #7e22ce;
}

.caret-purple-800 {
  caret-color: #6b21a8;
}

.caret-purple-900 {
  caret-color: #581c87;
}

.caret-fuchsia-50 {
  caret-color: #fdf4ff;
}

.caret-fuchsia-100 {
  caret-color: #fae8ff;
}

.caret-fuchsia-200 {
  caret-color: #f5d0fe;
}

.caret-fuchsia-300 {
  caret-color: #f0abfc;
}

.caret-fuchsia-400 {
  caret-color: #e879f9;
}

.caret-fuchsia-500 {
  caret-color: #d946ef;
}

.caret-fuchsia-600 {
  caret-color: #c026d3;
}

.caret-fuchsia-700 {
  caret-color: #a21caf;
}

.caret-fuchsia-800 {
  caret-color: #86198f;
}

.caret-fuchsia-900 {
  caret-color: #701a75;
}

.caret-pink-50 {
  caret-color: #fdf2f8;
}

.caret-pink-100 {
  caret-color: #fce7f3;
}

.caret-pink-200 {
  caret-color: #fbcfe8;
}

.caret-pink-300 {
  caret-color: #f9a8d4;
}

.caret-pink-400 {
  caret-color: #f472b6;
}

.caret-pink-500 {
  caret-color: #ec4899;
}

.caret-pink-600 {
  caret-color: #db2777;
}

.caret-pink-700 {
  caret-color: #be185d;
}

.caret-pink-800 {
  caret-color: #9d174d;
}

.caret-pink-900 {
  caret-color: #831843;
}

.caret-rose-50 {
  caret-color: #fff1f2;
}

.caret-rose-100 {
  caret-color: #ffe4e6;
}

.caret-rose-200 {
  caret-color: #fecdd3;
}

.caret-rose-300 {
  caret-color: #fda4af;
}

.caret-rose-400 {
  caret-color: #fb7185;
}

.caret-rose-500 {
  caret-color: #f43f5e;
}

.caret-rose-600 {
  caret-color: #e11d48;
}

.caret-rose-700 {
  caret-color: #be123c;
}

.caret-rose-800 {
  caret-color: #9f1239;
}

.caret-rose-900 {
  caret-color: #881337;
}

.caret-textLgColor {
  caret-color: var(--text-large-color);
}

.caret-textSmColor {
  caret-color: var(--text-small-color);
}

.caret-subText {
  caret-color: var(--sub-text-color);
}

.caret-navBar-linkActive {
  caret-color: var(--nav-link-active);
}

.caret-navBar-linkActiveStripe {
  caret-color: var(--nav-link-active-stripe);
}

.caret-mobileNav-text {
  caret-color: var(--mobile-text);
}

.caret-mobileNav-textHover {
  caret-color: var(--mobile-hover-text);
}

.caret-mobileNav-border {
  caret-color: var(--mobile-border);
}

.caret-aboutMe-smIconBg {
  caret-color: var(--sm-icon-bg);
}

.caret-aboutMe-aboutMeText {
  caret-color: var(--aboutme-text);
}

.caret-aboutMe-alissa {
  caret-color: var(--alissa);
}

.caret-projects-text {
  caret-color: var(--project-text-color);
}

.caret-projects-subText {
  caret-color: var(--project-sub-text);
}

.caret-projects-arrow {
  caret-color: var(--project-arrow);
}

.caret-projects-recentBg {
  caret-color: var(--recent-project-bg);
}

.caret-projects-recentHover {
  caret-color: var(--recent-project-bg-hover);
}

.caret-projects-recentShadow {
  caret-color: var(--recent-project-shadow);
}

.caret-contact-label {
  caret-color: var(--label-text);
}

.caret-contact-send {
  caret-color: var(--send-btn);
}

.caret-contact-sendHover {
  caret-color: var(--send-btn-hover);
}

.caret-blog-lgText {
  caret-color: var(--blog-lg-text);
}

.caret-blog-border {
  caret-color: var(--blog-input-border);
}

.caret-blog-tagBg {
  caret-color: var(--tag-btn-bg);
}

.caret-post-bodyText {
  caret-color: var(--text-body);
}

.caret-post-bodyTextLg {
  caret-color: var(--text-body-lg);
}

.caret-post-icon {
  caret-color: var(--icon);
}

.caret-post-iconHover {
  caret-color: var(--icon-hover);
}

.caret-post-hyperlink {
  caret-color: var(--hyperlink);
}

.caret-post-hyperlinkHover {
  caret-color: var(--hyperlink-hover);
}

.caret-post-quote {
  caret-color: var(--quote);
}

.caret-post-quoteAuthor {
  caret-color: var(--quote-author);
}

.accent-inherit {
  accent-color: inherit;
}

.accent-current {
  accent-color: currentColor;
}

.accent-transparent {
  accent-color: transparent;
}

.accent-black {
  accent-color: #000;
}

.accent-white {
  accent-color: #fff;
}

.accent-slate-50 {
  accent-color: #f8fafc;
}

.accent-slate-100 {
  accent-color: #f1f5f9;
}

.accent-slate-200 {
  accent-color: #e2e8f0;
}

.accent-slate-300 {
  accent-color: #cbd5e1;
}

.accent-slate-400 {
  accent-color: #94a3b8;
}

.accent-slate-500 {
  accent-color: #64748b;
}

.accent-slate-600 {
  accent-color: #475569;
}

.accent-slate-700 {
  accent-color: #334155;
}

.accent-slate-800 {
  accent-color: #1e293b;
}

.accent-slate-900 {
  accent-color: #0f172a;
}

.accent-gray-50 {
  accent-color: #f9fafb;
}

.accent-gray-100 {
  accent-color: #f3f4f6;
}

.accent-gray-200 {
  accent-color: #e5e7eb;
}

.accent-gray-300 {
  accent-color: #d1d5db;
}

.accent-gray-400 {
  accent-color: #9ca3af;
}

.accent-gray-500 {
  accent-color: #6b7280;
}

.accent-gray-600 {
  accent-color: #4b5563;
}

.accent-gray-700 {
  accent-color: #374151;
}

.accent-gray-800 {
  accent-color: #1f2937;
}

.accent-gray-900 {
  accent-color: #111827;
}

.accent-zinc-50 {
  accent-color: #fafafa;
}

.accent-zinc-100 {
  accent-color: #f4f4f5;
}

.accent-zinc-200 {
  accent-color: #e4e4e7;
}

.accent-zinc-300 {
  accent-color: #d4d4d8;
}

.accent-zinc-400 {
  accent-color: #a1a1aa;
}

.accent-zinc-500 {
  accent-color: #71717a;
}

.accent-zinc-600 {
  accent-color: #52525b;
}

.accent-zinc-700 {
  accent-color: #3f3f46;
}

.accent-zinc-800 {
  accent-color: #27272a;
}

.accent-zinc-900 {
  accent-color: #18181b;
}

.accent-neutral-50 {
  accent-color: #fafafa;
}

.accent-neutral-100 {
  accent-color: #f5f5f5;
}

.accent-neutral-200 {
  accent-color: #e5e5e5;
}

.accent-neutral-300 {
  accent-color: #d4d4d4;
}

.accent-neutral-400 {
  accent-color: #a3a3a3;
}

.accent-neutral-500 {
  accent-color: #737373;
}

.accent-neutral-600 {
  accent-color: #525252;
}

.accent-neutral-700 {
  accent-color: #404040;
}

.accent-neutral-800 {
  accent-color: #262626;
}

.accent-neutral-900 {
  accent-color: #171717;
}

.accent-stone-50 {
  accent-color: #fafaf9;
}

.accent-stone-100 {
  accent-color: #f5f5f4;
}

.accent-stone-200 {
  accent-color: #e7e5e4;
}

.accent-stone-300 {
  accent-color: #d6d3d1;
}

.accent-stone-400 {
  accent-color: #a8a29e;
}

.accent-stone-500 {
  accent-color: #78716c;
}

.accent-stone-600 {
  accent-color: #57534e;
}

.accent-stone-700 {
  accent-color: #44403c;
}

.accent-stone-800 {
  accent-color: #292524;
}

.accent-stone-900 {
  accent-color: #1c1917;
}

.accent-red-50 {
  accent-color: #fef2f2;
}

.accent-red-100 {
  accent-color: #fee2e2;
}

.accent-red-200 {
  accent-color: #fecaca;
}

.accent-red-300 {
  accent-color: #fca5a5;
}

.accent-red-400 {
  accent-color: #f87171;
}

.accent-red-500 {
  accent-color: #ef4444;
}

.accent-red-600 {
  accent-color: #dc2626;
}

.accent-red-700 {
  accent-color: #b91c1c;
}

.accent-red-800 {
  accent-color: #991b1b;
}

.accent-red-900 {
  accent-color: #7f1d1d;
}

.accent-orange-50 {
  accent-color: #fff7ed;
}

.accent-orange-100 {
  accent-color: #ffedd5;
}

.accent-orange-200 {
  accent-color: #fed7aa;
}

.accent-orange-300 {
  accent-color: #fdba74;
}

.accent-orange-400 {
  accent-color: #fb923c;
}

.accent-orange-500 {
  accent-color: #f97316;
}

.accent-orange-600 {
  accent-color: #ea580c;
}

.accent-orange-700 {
  accent-color: #c2410c;
}

.accent-orange-800 {
  accent-color: #9a3412;
}

.accent-orange-900 {
  accent-color: #7c2d12;
}

.accent-amber-50 {
  accent-color: #fffbeb;
}

.accent-amber-100 {
  accent-color: #fef3c7;
}

.accent-amber-200 {
  accent-color: #fde68a;
}

.accent-amber-300 {
  accent-color: #fcd34d;
}

.accent-amber-400 {
  accent-color: #fbbf24;
}

.accent-amber-500 {
  accent-color: #f59e0b;
}

.accent-amber-600 {
  accent-color: #d97706;
}

.accent-amber-700 {
  accent-color: #b45309;
}

.accent-amber-800 {
  accent-color: #92400e;
}

.accent-amber-900 {
  accent-color: #78350f;
}

.accent-yellow-50 {
  accent-color: #fefce8;
}

.accent-yellow-100 {
  accent-color: #fef9c3;
}

.accent-yellow-200 {
  accent-color: #fef08a;
}

.accent-yellow-300 {
  accent-color: #fde047;
}

.accent-yellow-400 {
  accent-color: #facc15;
}

.accent-yellow-500 {
  accent-color: #eab308;
}

.accent-yellow-600 {
  accent-color: #ca8a04;
}

.accent-yellow-700 {
  accent-color: #a16207;
}

.accent-yellow-800 {
  accent-color: #854d0e;
}

.accent-yellow-900 {
  accent-color: #713f12;
}

.accent-lime-50 {
  accent-color: #f7fee7;
}

.accent-lime-100 {
  accent-color: #ecfccb;
}

.accent-lime-200 {
  accent-color: #d9f99d;
}

.accent-lime-300 {
  accent-color: #bef264;
}

.accent-lime-400 {
  accent-color: #a3e635;
}

.accent-lime-500 {
  accent-color: #84cc16;
}

.accent-lime-600 {
  accent-color: #65a30d;
}

.accent-lime-700 {
  accent-color: #4d7c0f;
}

.accent-lime-800 {
  accent-color: #3f6212;
}

.accent-lime-900 {
  accent-color: #365314;
}

.accent-green-50 {
  accent-color: #f0fdf4;
}

.accent-green-100 {
  accent-color: #dcfce7;
}

.accent-green-200 {
  accent-color: #bbf7d0;
}

.accent-green-300 {
  accent-color: #86efac;
}

.accent-green-400 {
  accent-color: #4ade80;
}

.accent-green-500 {
  accent-color: #22c55e;
}

.accent-green-600 {
  accent-color: #16a34a;
}

.accent-green-700 {
  accent-color: #15803d;
}

.accent-green-800 {
  accent-color: #166534;
}

.accent-green-900 {
  accent-color: #14532d;
}

.accent-emerald-50 {
  accent-color: #ecfdf5;
}

.accent-emerald-100 {
  accent-color: #d1fae5;
}

.accent-emerald-200 {
  accent-color: #a7f3d0;
}

.accent-emerald-300 {
  accent-color: #6ee7b7;
}

.accent-emerald-400 {
  accent-color: #34d399;
}

.accent-emerald-500 {
  accent-color: #10b981;
}

.accent-emerald-600 {
  accent-color: #059669;
}

.accent-emerald-700 {
  accent-color: #047857;
}

.accent-emerald-800 {
  accent-color: #065f46;
}

.accent-emerald-900 {
  accent-color: #064e3b;
}

.accent-teal-50 {
  accent-color: #f0fdfa;
}

.accent-teal-100 {
  accent-color: #ccfbf1;
}

.accent-teal-200 {
  accent-color: #99f6e4;
}

.accent-teal-300 {
  accent-color: #5eead4;
}

.accent-teal-400 {
  accent-color: #2dd4bf;
}

.accent-teal-500 {
  accent-color: #14b8a6;
}

.accent-teal-600 {
  accent-color: #0d9488;
}

.accent-teal-700 {
  accent-color: #0f766e;
}

.accent-teal-800 {
  accent-color: #115e59;
}

.accent-teal-900 {
  accent-color: #134e4a;
}

.accent-cyan-50 {
  accent-color: #ecfeff;
}

.accent-cyan-100 {
  accent-color: #cffafe;
}

.accent-cyan-200 {
  accent-color: #a5f3fc;
}

.accent-cyan-300 {
  accent-color: #67e8f9;
}

.accent-cyan-400 {
  accent-color: #22d3ee;
}

.accent-cyan-500 {
  accent-color: #06b6d4;
}

.accent-cyan-600 {
  accent-color: #0891b2;
}

.accent-cyan-700 {
  accent-color: #0e7490;
}

.accent-cyan-800 {
  accent-color: #155e75;
}

.accent-cyan-900 {
  accent-color: #164e63;
}

.accent-sky-50 {
  accent-color: #f0f9ff;
}

.accent-sky-100 {
  accent-color: #e0f2fe;
}

.accent-sky-200 {
  accent-color: #bae6fd;
}

.accent-sky-300 {
  accent-color: #7dd3fc;
}

.accent-sky-400 {
  accent-color: #38bdf8;
}

.accent-sky-500 {
  accent-color: #0ea5e9;
}

.accent-sky-600 {
  accent-color: #0284c7;
}

.accent-sky-700 {
  accent-color: #0369a1;
}

.accent-sky-800 {
  accent-color: #075985;
}

.accent-sky-900 {
  accent-color: #0c4a6e;
}

.accent-blue-50 {
  accent-color: #eff6ff;
}

.accent-blue-100 {
  accent-color: #dbeafe;
}

.accent-blue-200 {
  accent-color: #bfdbfe;
}

.accent-blue-300 {
  accent-color: #93c5fd;
}

.accent-blue-400 {
  accent-color: #60a5fa;
}

.accent-blue-500 {
  accent-color: #3b82f6;
}

.accent-blue-600 {
  accent-color: #2563eb;
}

.accent-blue-700 {
  accent-color: #1d4ed8;
}

.accent-blue-800 {
  accent-color: #1e40af;
}

.accent-blue-900 {
  accent-color: #1e3a8a;
}

.accent-indigo-50 {
  accent-color: #eef2ff;
}

.accent-indigo-100 {
  accent-color: #e0e7ff;
}

.accent-indigo-200 {
  accent-color: #c7d2fe;
}

.accent-indigo-300 {
  accent-color: #a5b4fc;
}

.accent-indigo-400 {
  accent-color: #818cf8;
}

.accent-indigo-500 {
  accent-color: #6366f1;
}

.accent-indigo-600 {
  accent-color: #4f46e5;
}

.accent-indigo-700 {
  accent-color: #4338ca;
}

.accent-indigo-800 {
  accent-color: #3730a3;
}

.accent-indigo-900 {
  accent-color: #312e81;
}

.accent-violet-50 {
  accent-color: #f5f3ff;
}

.accent-violet-100 {
  accent-color: #ede9fe;
}

.accent-violet-200 {
  accent-color: #ddd6fe;
}

.accent-violet-300 {
  accent-color: #c4b5fd;
}

.accent-violet-400 {
  accent-color: #a78bfa;
}

.accent-violet-500 {
  accent-color: #8b5cf6;
}

.accent-violet-600 {
  accent-color: #7c3aed;
}

.accent-violet-700 {
  accent-color: #6d28d9;
}

.accent-violet-800 {
  accent-color: #5b21b6;
}

.accent-violet-900 {
  accent-color: #4c1d95;
}

.accent-purple-50 {
  accent-color: #faf5ff;
}

.accent-purple-100 {
  accent-color: #f3e8ff;
}

.accent-purple-200 {
  accent-color: #e9d5ff;
}

.accent-purple-300 {
  accent-color: #d8b4fe;
}

.accent-purple-400 {
  accent-color: #c084fc;
}

.accent-purple-500 {
  accent-color: #a855f7;
}

.accent-purple-600 {
  accent-color: #9333ea;
}

.accent-purple-700 {
  accent-color: #7e22ce;
}

.accent-purple-800 {
  accent-color: #6b21a8;
}

.accent-purple-900 {
  accent-color: #581c87;
}

.accent-fuchsia-50 {
  accent-color: #fdf4ff;
}

.accent-fuchsia-100 {
  accent-color: #fae8ff;
}

.accent-fuchsia-200 {
  accent-color: #f5d0fe;
}

.accent-fuchsia-300 {
  accent-color: #f0abfc;
}

.accent-fuchsia-400 {
  accent-color: #e879f9;
}

.accent-fuchsia-500 {
  accent-color: #d946ef;
}

.accent-fuchsia-600 {
  accent-color: #c026d3;
}

.accent-fuchsia-700 {
  accent-color: #a21caf;
}

.accent-fuchsia-800 {
  accent-color: #86198f;
}

.accent-fuchsia-900 {
  accent-color: #701a75;
}

.accent-pink-50 {
  accent-color: #fdf2f8;
}

.accent-pink-100 {
  accent-color: #fce7f3;
}

.accent-pink-200 {
  accent-color: #fbcfe8;
}

.accent-pink-300 {
  accent-color: #f9a8d4;
}

.accent-pink-400 {
  accent-color: #f472b6;
}

.accent-pink-500 {
  accent-color: #ec4899;
}

.accent-pink-600 {
  accent-color: #db2777;
}

.accent-pink-700 {
  accent-color: #be185d;
}

.accent-pink-800 {
  accent-color: #9d174d;
}

.accent-pink-900 {
  accent-color: #831843;
}

.accent-rose-50 {
  accent-color: #fff1f2;
}

.accent-rose-100 {
  accent-color: #ffe4e6;
}

.accent-rose-200 {
  accent-color: #fecdd3;
}

.accent-rose-300 {
  accent-color: #fda4af;
}

.accent-rose-400 {
  accent-color: #fb7185;
}

.accent-rose-500 {
  accent-color: #f43f5e;
}

.accent-rose-600 {
  accent-color: #e11d48;
}

.accent-rose-700 {
  accent-color: #be123c;
}

.accent-rose-800 {
  accent-color: #9f1239;
}

.accent-rose-900 {
  accent-color: #881337;
}

.accent-textLgColor {
  accent-color: var(--text-large-color);
}

.accent-textSmColor {
  accent-color: var(--text-small-color);
}

.accent-subText {
  accent-color: var(--sub-text-color);
}

.accent-navBar-linkActive {
  accent-color: var(--nav-link-active);
}

.accent-navBar-linkActiveStripe {
  accent-color: var(--nav-link-active-stripe);
}

.accent-mobileNav-text {
  accent-color: var(--mobile-text);
}

.accent-mobileNav-textHover {
  accent-color: var(--mobile-hover-text);
}

.accent-mobileNav-border {
  accent-color: var(--mobile-border);
}

.accent-aboutMe-smIconBg {
  accent-color: var(--sm-icon-bg);
}

.accent-aboutMe-aboutMeText {
  accent-color: var(--aboutme-text);
}

.accent-aboutMe-alissa {
  accent-color: var(--alissa);
}

.accent-projects-text {
  accent-color: var(--project-text-color);
}

.accent-projects-subText {
  accent-color: var(--project-sub-text);
}

.accent-projects-arrow {
  accent-color: var(--project-arrow);
}

.accent-projects-recentBg {
  accent-color: var(--recent-project-bg);
}

.accent-projects-recentHover {
  accent-color: var(--recent-project-bg-hover);
}

.accent-projects-recentShadow {
  accent-color: var(--recent-project-shadow);
}

.accent-contact-label {
  accent-color: var(--label-text);
}

.accent-contact-send {
  accent-color: var(--send-btn);
}

.accent-contact-sendHover {
  accent-color: var(--send-btn-hover);
}

.accent-blog-lgText {
  accent-color: var(--blog-lg-text);
}

.accent-blog-border {
  accent-color: var(--blog-input-border);
}

.accent-blog-tagBg {
  accent-color: var(--tag-btn-bg);
}

.accent-post-bodyText {
  accent-color: var(--text-body);
}

.accent-post-bodyTextLg {
  accent-color: var(--text-body-lg);
}

.accent-post-icon {
  accent-color: var(--icon);
}

.accent-post-iconHover {
  accent-color: var(--icon-hover);
}

.accent-post-hyperlink {
  accent-color: var(--hyperlink);
}

.accent-post-hyperlinkHover {
  accent-color: var(--hyperlink-hover);
}

.accent-post-quote {
  accent-color: var(--quote);
}

.accent-post-quoteAuthor {
  accent-color: var(--quote-author);
}

.accent-auto {
  accent-color: auto;
}

.opacity-90 {
  opacity: 0.9;
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-25 {
  opacity: 0.25;
}

.opacity-0 {
  opacity: 0;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-100 {
  opacity: 1;
}

.opacity-60 {
  opacity: 0.6;
}

.opacity-5 {
  opacity: 0.05;
}

.opacity-10 {
  opacity: 0.1;
}

.opacity-20 {
  opacity: 0.2;
}

.opacity-30 {
  opacity: 0.3;
}

.opacity-40 {
  opacity: 0.4;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-70 {
  opacity: 0.7;
}

.opacity-95 {
  opacity: 0.95;
}

.bg-blend-normal {
  background-blend-mode: normal;
}

.bg-blend-multiply {
  background-blend-mode: multiply;
}

.bg-blend-screen {
  background-blend-mode: screen;
}

.bg-blend-overlay {
  background-blend-mode: overlay;
}

.bg-blend-darken {
  background-blend-mode: darken;
}

.bg-blend-lighten {
  background-blend-mode: lighten;
}

.bg-blend-color-dodge {
  background-blend-mode: color-dodge;
}

.bg-blend-color-burn {
  background-blend-mode: color-burn;
}

.bg-blend-hard-light {
  background-blend-mode: hard-light;
}

.bg-blend-soft-light {
  background-blend-mode: soft-light;
}

.bg-blend-difference {
  background-blend-mode: difference;
}

.bg-blend-exclusion {
  background-blend-mode: exclusion;
}

.bg-blend-hue {
  background-blend-mode: hue;
}

.bg-blend-saturation {
  background-blend-mode: saturation;
}

.bg-blend-color {
  background-blend-mode: color;
}

.bg-blend-luminosity {
  background-blend-mode: luminosity;
}

.mix-blend-normal {
  mix-blend-mode: normal;
}

.mix-blend-multiply {
  mix-blend-mode: multiply;
}

.mix-blend-screen {
  mix-blend-mode: screen;
}

.mix-blend-overlay {
  mix-blend-mode: overlay;
}

.mix-blend-darken {
  mix-blend-mode: darken;
}

.mix-blend-lighten {
  mix-blend-mode: lighten;
}

.mix-blend-color-dodge {
  mix-blend-mode: color-dodge;
}

.mix-blend-color-burn {
  mix-blend-mode: color-burn;
}

.mix-blend-hard-light {
  mix-blend-mode: hard-light;
}

.mix-blend-soft-light {
  mix-blend-mode: soft-light;
}

.mix-blend-difference {
  mix-blend-mode: difference;
}

.mix-blend-exclusion {
  mix-blend-mode: exclusion;
}

.mix-blend-hue {
  mix-blend-mode: hue;
}

.mix-blend-saturation {
  mix-blend-mode: saturation;
}

.mix-blend-color {
  mix-blend-mode: color;
}

.mix-blend-luminosity {
  mix-blend-mode: luminosity;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-inner {
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-projects-recentShadow {
  --tw-shadow-color: var(--recent-project-shadow);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-inherit {
  --tw-shadow-color: inherit;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-current {
  --tw-shadow-color: currentColor;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-transparent {
  --tw-shadow-color: transparent;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-black {
  --tw-shadow-color: #000;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-white {
  --tw-shadow-color: #fff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-50 {
  --tw-shadow-color: #f8fafc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-100 {
  --tw-shadow-color: #f1f5f9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-200 {
  --tw-shadow-color: #e2e8f0;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-300 {
  --tw-shadow-color: #cbd5e1;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-400 {
  --tw-shadow-color: #94a3b8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-500 {
  --tw-shadow-color: #64748b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-600 {
  --tw-shadow-color: #475569;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-700 {
  --tw-shadow-color: #334155;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-800 {
  --tw-shadow-color: #1e293b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-slate-900 {
  --tw-shadow-color: #0f172a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-50 {
  --tw-shadow-color: #f9fafb;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-100 {
  --tw-shadow-color: #f3f4f6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-200 {
  --tw-shadow-color: #e5e7eb;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-300 {
  --tw-shadow-color: #d1d5db;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-400 {
  --tw-shadow-color: #9ca3af;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-500 {
  --tw-shadow-color: #6b7280;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-600 {
  --tw-shadow-color: #4b5563;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-700 {
  --tw-shadow-color: #374151;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-800 {
  --tw-shadow-color: #1f2937;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-gray-900 {
  --tw-shadow-color: #111827;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-50 {
  --tw-shadow-color: #fafafa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-100 {
  --tw-shadow-color: #f4f4f5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-200 {
  --tw-shadow-color: #e4e4e7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-300 {
  --tw-shadow-color: #d4d4d8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-400 {
  --tw-shadow-color: #a1a1aa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-500 {
  --tw-shadow-color: #71717a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-600 {
  --tw-shadow-color: #52525b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-700 {
  --tw-shadow-color: #3f3f46;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-800 {
  --tw-shadow-color: #27272a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-zinc-900 {
  --tw-shadow-color: #18181b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-50 {
  --tw-shadow-color: #fafafa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-100 {
  --tw-shadow-color: #f5f5f5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-200 {
  --tw-shadow-color: #e5e5e5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-300 {
  --tw-shadow-color: #d4d4d4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-400 {
  --tw-shadow-color: #a3a3a3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-500 {
  --tw-shadow-color: #737373;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-600 {
  --tw-shadow-color: #525252;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-700 {
  --tw-shadow-color: #404040;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-800 {
  --tw-shadow-color: #262626;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-neutral-900 {
  --tw-shadow-color: #171717;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-50 {
  --tw-shadow-color: #fafaf9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-100 {
  --tw-shadow-color: #f5f5f4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-200 {
  --tw-shadow-color: #e7e5e4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-300 {
  --tw-shadow-color: #d6d3d1;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-400 {
  --tw-shadow-color: #a8a29e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-500 {
  --tw-shadow-color: #78716c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-600 {
  --tw-shadow-color: #57534e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-700 {
  --tw-shadow-color: #44403c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-800 {
  --tw-shadow-color: #292524;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-stone-900 {
  --tw-shadow-color: #1c1917;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-50 {
  --tw-shadow-color: #fef2f2;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-100 {
  --tw-shadow-color: #fee2e2;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-200 {
  --tw-shadow-color: #fecaca;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-300 {
  --tw-shadow-color: #fca5a5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-400 {
  --tw-shadow-color: #f87171;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-500 {
  --tw-shadow-color: #ef4444;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-600 {
  --tw-shadow-color: #dc2626;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-700 {
  --tw-shadow-color: #b91c1c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-800 {
  --tw-shadow-color: #991b1b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-red-900 {
  --tw-shadow-color: #7f1d1d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-50 {
  --tw-shadow-color: #fff7ed;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-100 {
  --tw-shadow-color: #ffedd5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-200 {
  --tw-shadow-color: #fed7aa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-300 {
  --tw-shadow-color: #fdba74;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-400 {
  --tw-shadow-color: #fb923c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-500 {
  --tw-shadow-color: #f97316;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-600 {
  --tw-shadow-color: #ea580c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-700 {
  --tw-shadow-color: #c2410c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-800 {
  --tw-shadow-color: #9a3412;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-orange-900 {
  --tw-shadow-color: #7c2d12;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-50 {
  --tw-shadow-color: #fffbeb;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-100 {
  --tw-shadow-color: #fef3c7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-200 {
  --tw-shadow-color: #fde68a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-300 {
  --tw-shadow-color: #fcd34d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-400 {
  --tw-shadow-color: #fbbf24;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-500 {
  --tw-shadow-color: #f59e0b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-600 {
  --tw-shadow-color: #d97706;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-700 {
  --tw-shadow-color: #b45309;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-800 {
  --tw-shadow-color: #92400e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-amber-900 {
  --tw-shadow-color: #78350f;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-50 {
  --tw-shadow-color: #fefce8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-100 {
  --tw-shadow-color: #fef9c3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-200 {
  --tw-shadow-color: #fef08a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-300 {
  --tw-shadow-color: #fde047;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-400 {
  --tw-shadow-color: #facc15;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-500 {
  --tw-shadow-color: #eab308;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-600 {
  --tw-shadow-color: #ca8a04;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-700 {
  --tw-shadow-color: #a16207;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-800 {
  --tw-shadow-color: #854d0e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-yellow-900 {
  --tw-shadow-color: #713f12;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-50 {
  --tw-shadow-color: #f7fee7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-100 {
  --tw-shadow-color: #ecfccb;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-200 {
  --tw-shadow-color: #d9f99d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-300 {
  --tw-shadow-color: #bef264;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-400 {
  --tw-shadow-color: #a3e635;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-500 {
  --tw-shadow-color: #84cc16;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-600 {
  --tw-shadow-color: #65a30d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-700 {
  --tw-shadow-color: #4d7c0f;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-800 {
  --tw-shadow-color: #3f6212;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-lime-900 {
  --tw-shadow-color: #365314;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-50 {
  --tw-shadow-color: #f0fdf4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-100 {
  --tw-shadow-color: #dcfce7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-200 {
  --tw-shadow-color: #bbf7d0;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-300 {
  --tw-shadow-color: #86efac;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-400 {
  --tw-shadow-color: #4ade80;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-500 {
  --tw-shadow-color: #22c55e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-600 {
  --tw-shadow-color: #16a34a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-700 {
  --tw-shadow-color: #15803d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-800 {
  --tw-shadow-color: #166534;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-900 {
  --tw-shadow-color: #14532d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-50 {
  --tw-shadow-color: #ecfdf5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-100 {
  --tw-shadow-color: #d1fae5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-200 {
  --tw-shadow-color: #a7f3d0;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-300 {
  --tw-shadow-color: #6ee7b7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-400 {
  --tw-shadow-color: #34d399;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-500 {
  --tw-shadow-color: #10b981;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-600 {
  --tw-shadow-color: #059669;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-700 {
  --tw-shadow-color: #047857;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-800 {
  --tw-shadow-color: #065f46;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-emerald-900 {
  --tw-shadow-color: #064e3b;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-50 {
  --tw-shadow-color: #f0fdfa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-100 {
  --tw-shadow-color: #ccfbf1;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-200 {
  --tw-shadow-color: #99f6e4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-300 {
  --tw-shadow-color: #5eead4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-400 {
  --tw-shadow-color: #2dd4bf;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-500 {
  --tw-shadow-color: #14b8a6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-600 {
  --tw-shadow-color: #0d9488;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-700 {
  --tw-shadow-color: #0f766e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-800 {
  --tw-shadow-color: #115e59;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-teal-900 {
  --tw-shadow-color: #134e4a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-50 {
  --tw-shadow-color: #ecfeff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-100 {
  --tw-shadow-color: #cffafe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-200 {
  --tw-shadow-color: #a5f3fc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-300 {
  --tw-shadow-color: #67e8f9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-400 {
  --tw-shadow-color: #22d3ee;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-500 {
  --tw-shadow-color: #06b6d4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-600 {
  --tw-shadow-color: #0891b2;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-700 {
  --tw-shadow-color: #0e7490;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-800 {
  --tw-shadow-color: #155e75;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-cyan-900 {
  --tw-shadow-color: #164e63;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-50 {
  --tw-shadow-color: #f0f9ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-100 {
  --tw-shadow-color: #e0f2fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-200 {
  --tw-shadow-color: #bae6fd;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-300 {
  --tw-shadow-color: #7dd3fc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-400 {
  --tw-shadow-color: #38bdf8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-500 {
  --tw-shadow-color: #0ea5e9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-600 {
  --tw-shadow-color: #0284c7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-700 {
  --tw-shadow-color: #0369a1;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-800 {
  --tw-shadow-color: #075985;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-sky-900 {
  --tw-shadow-color: #0c4a6e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-50 {
  --tw-shadow-color: #eff6ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-100 {
  --tw-shadow-color: #dbeafe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-200 {
  --tw-shadow-color: #bfdbfe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-300 {
  --tw-shadow-color: #93c5fd;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-400 {
  --tw-shadow-color: #60a5fa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-500 {
  --tw-shadow-color: #3b82f6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-600 {
  --tw-shadow-color: #2563eb;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-700 {
  --tw-shadow-color: #1d4ed8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-800 {
  --tw-shadow-color: #1e40af;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blue-900 {
  --tw-shadow-color: #1e3a8a;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-50 {
  --tw-shadow-color: #eef2ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-100 {
  --tw-shadow-color: #e0e7ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-200 {
  --tw-shadow-color: #c7d2fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-300 {
  --tw-shadow-color: #a5b4fc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-400 {
  --tw-shadow-color: #818cf8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-500 {
  --tw-shadow-color: #6366f1;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-600 {
  --tw-shadow-color: #4f46e5;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-700 {
  --tw-shadow-color: #4338ca;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-800 {
  --tw-shadow-color: #3730a3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-indigo-900 {
  --tw-shadow-color: #312e81;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-50 {
  --tw-shadow-color: #f5f3ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-100 {
  --tw-shadow-color: #ede9fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-200 {
  --tw-shadow-color: #ddd6fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-300 {
  --tw-shadow-color: #c4b5fd;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-400 {
  --tw-shadow-color: #a78bfa;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-500 {
  --tw-shadow-color: #8b5cf6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-600 {
  --tw-shadow-color: #7c3aed;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-700 {
  --tw-shadow-color: #6d28d9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-800 {
  --tw-shadow-color: #5b21b6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-violet-900 {
  --tw-shadow-color: #4c1d95;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-50 {
  --tw-shadow-color: #faf5ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-100 {
  --tw-shadow-color: #f3e8ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-200 {
  --tw-shadow-color: #e9d5ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-300 {
  --tw-shadow-color: #d8b4fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-400 {
  --tw-shadow-color: #c084fc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-500 {
  --tw-shadow-color: #a855f7;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-600 {
  --tw-shadow-color: #9333ea;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-700 {
  --tw-shadow-color: #7e22ce;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-800 {
  --tw-shadow-color: #6b21a8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-purple-900 {
  --tw-shadow-color: #581c87;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-50 {
  --tw-shadow-color: #fdf4ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-100 {
  --tw-shadow-color: #fae8ff;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-200 {
  --tw-shadow-color: #f5d0fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-300 {
  --tw-shadow-color: #f0abfc;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-400 {
  --tw-shadow-color: #e879f9;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-500 {
  --tw-shadow-color: #d946ef;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-600 {
  --tw-shadow-color: #c026d3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-700 {
  --tw-shadow-color: #a21caf;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-800 {
  --tw-shadow-color: #86198f;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-fuchsia-900 {
  --tw-shadow-color: #701a75;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-50 {
  --tw-shadow-color: #fdf2f8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-100 {
  --tw-shadow-color: #fce7f3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-200 {
  --tw-shadow-color: #fbcfe8;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-300 {
  --tw-shadow-color: #f9a8d4;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-400 {
  --tw-shadow-color: #f472b6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-500 {
  --tw-shadow-color: #ec4899;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-600 {
  --tw-shadow-color: #db2777;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-700 {
  --tw-shadow-color: #be185d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-800 {
  --tw-shadow-color: #9d174d;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-pink-900 {
  --tw-shadow-color: #831843;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-50 {
  --tw-shadow-color: #fff1f2;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-100 {
  --tw-shadow-color: #ffe4e6;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-200 {
  --tw-shadow-color: #fecdd3;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-300 {
  --tw-shadow-color: #fda4af;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-400 {
  --tw-shadow-color: #fb7185;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-500 {
  --tw-shadow-color: #f43f5e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-600 {
  --tw-shadow-color: #e11d48;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-700 {
  --tw-shadow-color: #be123c;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-800 {
  --tw-shadow-color: #9f1239;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-rose-900 {
  --tw-shadow-color: #881337;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-textLgColor {
  --tw-shadow-color: var(--text-large-color);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-textSmColor {
  --tw-shadow-color: var(--text-small-color);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-subText {
  --tw-shadow-color: var(--sub-text-color);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-navBar-linkActive {
  --tw-shadow-color: var(--nav-link-active);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-navBar-linkActiveStripe {
  --tw-shadow-color: var(--nav-link-active-stripe);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-mobileNav-text {
  --tw-shadow-color: var(--mobile-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-mobileNav-textHover {
  --tw-shadow-color: var(--mobile-hover-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-mobileNav-border {
  --tw-shadow-color: var(--mobile-border);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-aboutMe-smIconBg {
  --tw-shadow-color: var(--sm-icon-bg);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-aboutMe-aboutMeText {
  --tw-shadow-color: var(--aboutme-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-aboutMe-alissa {
  --tw-shadow-color: var(--alissa);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-projects-text {
  --tw-shadow-color: var(--project-text-color);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-projects-subText {
  --tw-shadow-color: var(--project-sub-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-projects-arrow {
  --tw-shadow-color: var(--project-arrow);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-projects-recentBg {
  --tw-shadow-color: var(--recent-project-bg);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-projects-recentHover {
  --tw-shadow-color: var(--recent-project-bg-hover);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-contact-label {
  --tw-shadow-color: var(--label-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-contact-send {
  --tw-shadow-color: var(--send-btn);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-contact-sendHover {
  --tw-shadow-color: var(--send-btn-hover);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blog-lgText {
  --tw-shadow-color: var(--blog-lg-text);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blog-border {
  --tw-shadow-color: var(--blog-input-border);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-blog-tagBg {
  --tw-shadow-color: var(--tag-btn-bg);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-bodyText {
  --tw-shadow-color: var(--text-body);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-bodyTextLg {
  --tw-shadow-color: var(--text-body-lg);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-icon {
  --tw-shadow-color: var(--icon);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-iconHover {
  --tw-shadow-color: var(--icon-hover);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-hyperlink {
  --tw-shadow-color: var(--hyperlink);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-hyperlinkHover {
  --tw-shadow-color: var(--hyperlink-hover);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-quote {
  --tw-shadow-color: var(--quote);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-post-quoteAuthor {
  --tw-shadow-color: var(--quote-author);
  --tw-shadow: var(--tw-shadow-colored);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.outline-dashed {
  outline-style: dashed;
}

.outline-dotted {
  outline-style: dotted;
}

.outline-double {
  outline-style: double;
}

.outline-hidden {
  outline-style: hidden;
}

.outline-1 {
  outline-width: 1px;
}

.outline-0 {
  outline-width: 0px;
}

.outline-2 {
  outline-width: 2px;
}

.outline-4 {
  outline-width: 4px;
}

.outline-8 {
  outline-width: 8px;
}

.outline-offset-0 {
  outline-offset: 0px;
}

.outline-offset-1 {
  outline-offset: 1px;
}

.outline-offset-2 {
  outline-offset: 2px;
}

.outline-offset-4 {
  outline-offset: 4px;
}

.outline-offset-8 {
  outline-offset: 8px;
}

.outline-transparent {
  outline-color: transparent;
}

.outline-inherit {
  outline-color: inherit;
}

.outline-current {
  outline-color: currentColor;
}

.outline-black {
  outline-color: #000;
}

.outline-white {
  outline-color: #fff;
}

.outline-slate-50 {
  outline-color: #f8fafc;
}

.outline-slate-100 {
  outline-color: #f1f5f9;
}

.outline-slate-200 {
  outline-color: #e2e8f0;
}

.outline-slate-300 {
  outline-color: #cbd5e1;
}

.outline-slate-400 {
  outline-color: #94a3b8;
}

.outline-slate-500 {
  outline-color: #64748b;
}

.outline-slate-600 {
  outline-color: #475569;
}

.outline-slate-700 {
  outline-color: #334155;
}

.outline-slate-800 {
  outline-color: #1e293b;
}

.outline-slate-900 {
  outline-color: #0f172a;
}

.outline-gray-50 {
  outline-color: #f9fafb;
}

.outline-gray-100 {
  outline-color: #f3f4f6;
}

.outline-gray-200 {
  outline-color: #e5e7eb;
}

.outline-gray-300 {
  outline-color: #d1d5db;
}

.outline-gray-400 {
  outline-color: #9ca3af;
}

.outline-gray-500 {
  outline-color: #6b7280;
}

.outline-gray-600 {
  outline-color: #4b5563;
}

.outline-gray-700 {
  outline-color: #374151;
}

.outline-gray-800 {
  outline-color: #1f2937;
}

.outline-gray-900 {
  outline-color: #111827;
}

.outline-zinc-50 {
  outline-color: #fafafa;
}

.outline-zinc-100 {
  outline-color: #f4f4f5;
}

.outline-zinc-200 {
  outline-color: #e4e4e7;
}

.outline-zinc-300 {
  outline-color: #d4d4d8;
}

.outline-zinc-400 {
  outline-color: #a1a1aa;
}

.outline-zinc-500 {
  outline-color: #71717a;
}

.outline-zinc-600 {
  outline-color: #52525b;
}

.outline-zinc-700 {
  outline-color: #3f3f46;
}

.outline-zinc-800 {
  outline-color: #27272a;
}

.outline-zinc-900 {
  outline-color: #18181b;
}

.outline-neutral-50 {
  outline-color: #fafafa;
}

.outline-neutral-100 {
  outline-color: #f5f5f5;
}

.outline-neutral-200 {
  outline-color: #e5e5e5;
}

.outline-neutral-300 {
  outline-color: #d4d4d4;
}

.outline-neutral-400 {
  outline-color: #a3a3a3;
}

.outline-neutral-500 {
  outline-color: #737373;
}

.outline-neutral-600 {
  outline-color: #525252;
}

.outline-neutral-700 {
  outline-color: #404040;
}

.outline-neutral-800 {
  outline-color: #262626;
}

.outline-neutral-900 {
  outline-color: #171717;
}

.outline-stone-50 {
  outline-color: #fafaf9;
}

.outline-stone-100 {
  outline-color: #f5f5f4;
}

.outline-stone-200 {
  outline-color: #e7e5e4;
}

.outline-stone-300 {
  outline-color: #d6d3d1;
}

.outline-stone-400 {
  outline-color: #a8a29e;
}

.outline-stone-500 {
  outline-color: #78716c;
}

.outline-stone-600 {
  outline-color: #57534e;
}

.outline-stone-700 {
  outline-color: #44403c;
}

.outline-stone-800 {
  outline-color: #292524;
}

.outline-stone-900 {
  outline-color: #1c1917;
}

.outline-red-50 {
  outline-color: #fef2f2;
}

.outline-red-100 {
  outline-color: #fee2e2;
}

.outline-red-200 {
  outline-color: #fecaca;
}

.outline-red-300 {
  outline-color: #fca5a5;
}

.outline-red-400 {
  outline-color: #f87171;
}

.outline-red-500 {
  outline-color: #ef4444;
}

.outline-red-600 {
  outline-color: #dc2626;
}

.outline-red-700 {
  outline-color: #b91c1c;
}

.outline-red-800 {
  outline-color: #991b1b;
}

.outline-red-900 {
  outline-color: #7f1d1d;
}

.outline-orange-50 {
  outline-color: #fff7ed;
}

.outline-orange-100 {
  outline-color: #ffedd5;
}

.outline-orange-200 {
  outline-color: #fed7aa;
}

.outline-orange-300 {
  outline-color: #fdba74;
}

.outline-orange-400 {
  outline-color: #fb923c;
}

.outline-orange-500 {
  outline-color: #f97316;
}

.outline-orange-600 {
  outline-color: #ea580c;
}

.outline-orange-700 {
  outline-color: #c2410c;
}

.outline-orange-800 {
  outline-color: #9a3412;
}

.outline-orange-900 {
  outline-color: #7c2d12;
}

.outline-amber-50 {
  outline-color: #fffbeb;
}

.outline-amber-100 {
  outline-color: #fef3c7;
}

.outline-amber-200 {
  outline-color: #fde68a;
}

.outline-amber-300 {
  outline-color: #fcd34d;
}

.outline-amber-400 {
  outline-color: #fbbf24;
}

.outline-amber-500 {
  outline-color: #f59e0b;
}

.outline-amber-600 {
  outline-color: #d97706;
}

.outline-amber-700 {
  outline-color: #b45309;
}

.outline-amber-800 {
  outline-color: #92400e;
}

.outline-amber-900 {
  outline-color: #78350f;
}

.outline-yellow-50 {
  outline-color: #fefce8;
}

.outline-yellow-100 {
  outline-color: #fef9c3;
}

.outline-yellow-200 {
  outline-color: #fef08a;
}

.outline-yellow-300 {
  outline-color: #fde047;
}

.outline-yellow-400 {
  outline-color: #facc15;
}

.outline-yellow-500 {
  outline-color: #eab308;
}

.outline-yellow-600 {
  outline-color: #ca8a04;
}

.outline-yellow-700 {
  outline-color: #a16207;
}

.outline-yellow-800 {
  outline-color: #854d0e;
}

.outline-yellow-900 {
  outline-color: #713f12;
}

.outline-lime-50 {
  outline-color: #f7fee7;
}

.outline-lime-100 {
  outline-color: #ecfccb;
}

.outline-lime-200 {
  outline-color: #d9f99d;
}

.outline-lime-300 {
  outline-color: #bef264;
}

.outline-lime-400 {
  outline-color: #a3e635;
}

.outline-lime-500 {
  outline-color: #84cc16;
}

.outline-lime-600 {
  outline-color: #65a30d;
}

.outline-lime-700 {
  outline-color: #4d7c0f;
}

.outline-lime-800 {
  outline-color: #3f6212;
}

.outline-lime-900 {
  outline-color: #365314;
}

.outline-green-50 {
  outline-color: #f0fdf4;
}

.outline-green-100 {
  outline-color: #dcfce7;
}

.outline-green-200 {
  outline-color: #bbf7d0;
}

.outline-green-300 {
  outline-color: #86efac;
}

.outline-green-400 {
  outline-color: #4ade80;
}

.outline-green-500 {
  outline-color: #22c55e;
}

.outline-green-600 {
  outline-color: #16a34a;
}

.outline-green-700 {
  outline-color: #15803d;
}

.outline-green-800 {
  outline-color: #166534;
}

.outline-green-900 {
  outline-color: #14532d;
}

.outline-emerald-50 {
  outline-color: #ecfdf5;
}

.outline-emerald-100 {
  outline-color: #d1fae5;
}

.outline-emerald-200 {
  outline-color: #a7f3d0;
}

.outline-emerald-300 {
  outline-color: #6ee7b7;
}

.outline-emerald-400 {
  outline-color: #34d399;
}

.outline-emerald-500 {
  outline-color: #10b981;
}

.outline-emerald-600 {
  outline-color: #059669;
}

.outline-emerald-700 {
  outline-color: #047857;
}

.outline-emerald-800 {
  outline-color: #065f46;
}

.outline-emerald-900 {
  outline-color: #064e3b;
}

.outline-teal-50 {
  outline-color: #f0fdfa;
}

.outline-teal-100 {
  outline-color: #ccfbf1;
}

.outline-teal-200 {
  outline-color: #99f6e4;
}

.outline-teal-300 {
  outline-color: #5eead4;
}

.outline-teal-400 {
  outline-color: #2dd4bf;
}

.outline-teal-500 {
  outline-color: #14b8a6;
}

.outline-teal-600 {
  outline-color: #0d9488;
}

.outline-teal-700 {
  outline-color: #0f766e;
}

.outline-teal-800 {
  outline-color: #115e59;
}

.outline-teal-900 {
  outline-color: #134e4a;
}

.outline-cyan-50 {
  outline-color: #ecfeff;
}

.outline-cyan-100 {
  outline-color: #cffafe;
}

.outline-cyan-200 {
  outline-color: #a5f3fc;
}

.outline-cyan-300 {
  outline-color: #67e8f9;
}

.outline-cyan-400 {
  outline-color: #22d3ee;
}

.outline-cyan-500 {
  outline-color: #06b6d4;
}

.outline-cyan-600 {
  outline-color: #0891b2;
}

.outline-cyan-700 {
  outline-color: #0e7490;
}

.outline-cyan-800 {
  outline-color: #155e75;
}

.outline-cyan-900 {
  outline-color: #164e63;
}

.outline-sky-50 {
  outline-color: #f0f9ff;
}

.outline-sky-100 {
  outline-color: #e0f2fe;
}

.outline-sky-200 {
  outline-color: #bae6fd;
}

.outline-sky-300 {
  outline-color: #7dd3fc;
}

.outline-sky-400 {
  outline-color: #38bdf8;
}

.outline-sky-500 {
  outline-color: #0ea5e9;
}

.outline-sky-600 {
  outline-color: #0284c7;
}

.outline-sky-700 {
  outline-color: #0369a1;
}

.outline-sky-800 {
  outline-color: #075985;
}

.outline-sky-900 {
  outline-color: #0c4a6e;
}

.outline-blue-50 {
  outline-color: #eff6ff;
}

.outline-blue-100 {
  outline-color: #dbeafe;
}

.outline-blue-200 {
  outline-color: #bfdbfe;
}

.outline-blue-300 {
  outline-color: #93c5fd;
}

.outline-blue-400 {
  outline-color: #60a5fa;
}

.outline-blue-500 {
  outline-color: #3b82f6;
}

.outline-blue-600 {
  outline-color: #2563eb;
}

.outline-blue-700 {
  outline-color: #1d4ed8;
}

.outline-blue-800 {
  outline-color: #1e40af;
}

.outline-blue-900 {
  outline-color: #1e3a8a;
}

.outline-indigo-50 {
  outline-color: #eef2ff;
}

.outline-indigo-100 {
  outline-color: #e0e7ff;
}

.outline-indigo-200 {
  outline-color: #c7d2fe;
}

.outline-indigo-300 {
  outline-color: #a5b4fc;
}

.outline-indigo-400 {
  outline-color: #818cf8;
}

.outline-indigo-500 {
  outline-color: #6366f1;
}

.outline-indigo-600 {
  outline-color: #4f46e5;
}

.outline-indigo-700 {
  outline-color: #4338ca;
}

.outline-indigo-800 {
  outline-color: #3730a3;
}

.outline-indigo-900 {
  outline-color: #312e81;
}

.outline-violet-50 {
  outline-color: #f5f3ff;
}

.outline-violet-100 {
  outline-color: #ede9fe;
}

.outline-violet-200 {
  outline-color: #ddd6fe;
}

.outline-violet-300 {
  outline-color: #c4b5fd;
}

.outline-violet-400 {
  outline-color: #a78bfa;
}

.outline-violet-500 {
  outline-color: #8b5cf6;
}

.outline-violet-600 {
  outline-color: #7c3aed;
}

.outline-violet-700 {
  outline-color: #6d28d9;
}

.outline-violet-800 {
  outline-color: #5b21b6;
}

.outline-violet-900 {
  outline-color: #4c1d95;
}

.outline-purple-50 {
  outline-color: #faf5ff;
}

.outline-purple-100 {
  outline-color: #f3e8ff;
}

.outline-purple-200 {
  outline-color: #e9d5ff;
}

.outline-purple-300 {
  outline-color: #d8b4fe;
}

.outline-purple-400 {
  outline-color: #c084fc;
}

.outline-purple-500 {
  outline-color: #a855f7;
}

.outline-purple-600 {
  outline-color: #9333ea;
}

.outline-purple-700 {
  outline-color: #7e22ce;
}

.outline-purple-800 {
  outline-color: #6b21a8;
}

.outline-purple-900 {
  outline-color: #581c87;
}

.outline-fuchsia-50 {
  outline-color: #fdf4ff;
}

.outline-fuchsia-100 {
  outline-color: #fae8ff;
}

.outline-fuchsia-200 {
  outline-color: #f5d0fe;
}

.outline-fuchsia-300 {
  outline-color: #f0abfc;
}

.outline-fuchsia-400 {
  outline-color: #e879f9;
}

.outline-fuchsia-500 {
  outline-color: #d946ef;
}

.outline-fuchsia-600 {
  outline-color: #c026d3;
}

.outline-fuchsia-700 {
  outline-color: #a21caf;
}

.outline-fuchsia-800 {
  outline-color: #86198f;
}

.outline-fuchsia-900 {
  outline-color: #701a75;
}

.outline-pink-50 {
  outline-color: #fdf2f8;
}

.outline-pink-100 {
  outline-color: #fce7f3;
}

.outline-pink-200 {
  outline-color: #fbcfe8;
}

.outline-pink-300 {
  outline-color: #f9a8d4;
}

.outline-pink-400 {
  outline-color: #f472b6;
}

.outline-pink-500 {
  outline-color: #ec4899;
}

.outline-pink-600 {
  outline-color: #db2777;
}

.outline-pink-700 {
  outline-color: #be185d;
}

.outline-pink-800 {
  outline-color: #9d174d;
}

.outline-pink-900 {
  outline-color: #831843;
}

.outline-rose-50 {
  outline-color: #fff1f2;
}

.outline-rose-100 {
  outline-color: #ffe4e6;
}

.outline-rose-200 {
  outline-color: #fecdd3;
}

.outline-rose-300 {
  outline-color: #fda4af;
}

.outline-rose-400 {
  outline-color: #fb7185;
}

.outline-rose-500 {
  outline-color: #f43f5e;
}

.outline-rose-600 {
  outline-color: #e11d48;
}

.outline-rose-700 {
  outline-color: #be123c;
}

.outline-rose-800 {
  outline-color: #9f1239;
}

.outline-rose-900 {
  outline-color: #881337;
}

.outline-textLgColor {
  outline-color: var(--text-large-color);
}

.outline-textSmColor {
  outline-color: var(--text-small-color);
}

.outline-subText {
  outline-color: var(--sub-text-color);
}

.outline-navBar-linkActive {
  outline-color: var(--nav-link-active);
}

.outline-navBar-linkActiveStripe {
  outline-color: var(--nav-link-active-stripe);
}

.outline-mobileNav-text {
  outline-color: var(--mobile-text);
}

.outline-mobileNav-textHover {
  outline-color: var(--mobile-hover-text);
}

.outline-mobileNav-border {
  outline-color: var(--mobile-border);
}

.outline-aboutMe-smIconBg {
  outline-color: var(--sm-icon-bg);
}

.outline-aboutMe-aboutMeText {
  outline-color: var(--aboutme-text);
}

.outline-aboutMe-alissa {
  outline-color: var(--alissa);
}

.outline-projects-text {
  outline-color: var(--project-text-color);
}

.outline-projects-subText {
  outline-color: var(--project-sub-text);
}

.outline-projects-arrow {
  outline-color: var(--project-arrow);
}

.outline-projects-recentBg {
  outline-color: var(--recent-project-bg);
}

.outline-projects-recentHover {
  outline-color: var(--recent-project-bg-hover);
}

.outline-projects-recentShadow {
  outline-color: var(--recent-project-shadow);
}

.outline-contact-label {
  outline-color: var(--label-text);
}

.outline-contact-send {
  outline-color: var(--send-btn);
}

.outline-contact-sendHover {
  outline-color: var(--send-btn-hover);
}

.outline-blog-lgText {
  outline-color: var(--blog-lg-text);
}

.outline-blog-border {
  outline-color: var(--blog-input-border);
}

.outline-blog-tagBg {
  outline-color: var(--tag-btn-bg);
}

.outline-post-bodyText {
  outline-color: var(--text-body);
}

.outline-post-bodyTextLg {
  outline-color: var(--text-body-lg);
}

.outline-post-icon {
  outline-color: var(--icon);
}

.outline-post-iconHover {
  outline-color: var(--icon-hover);
}

.outline-post-hyperlink {
  outline-color: var(--hyperlink);
}

.outline-post-hyperlinkHover {
  outline-color: var(--hyperlink-hover);
}

.outline-post-quote {
  outline-color: var(--quote);
}

.outline-post-quoteAuthor {
  outline-color: var(--quote-author);
}

.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-inherit {
  --tw-ring-color: inherit;
}

.ring-current {
  --tw-ring-color: currentColor;
}

.ring-transparent {
  --tw-ring-color: transparent;
}

.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}

.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}

.ring-slate-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 250 252 / var(--tw-ring-opacity));
}

.ring-slate-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 245 249 / var(--tw-ring-opacity));
}

.ring-slate-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(226 232 240 / var(--tw-ring-opacity));
}

.ring-slate-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(203 213 225 / var(--tw-ring-opacity));
}

.ring-slate-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(148 163 184 / var(--tw-ring-opacity));
}

.ring-slate-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(100 116 139 / var(--tw-ring-opacity));
}

.ring-slate-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(71 85 105 / var(--tw-ring-opacity));
}

.ring-slate-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(51 65 85 / var(--tw-ring-opacity));
}

.ring-slate-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 41 59 / var(--tw-ring-opacity));
}

.ring-slate-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(15 23 42 / var(--tw-ring-opacity));
}

.ring-gray-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 250 251 / var(--tw-ring-opacity));
}

.ring-gray-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));
}

.ring-gray-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}

.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.ring-gray-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}

.ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}

.ring-gray-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}

.ring-gray-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}

.ring-gray-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}

.ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}

.ring-zinc-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 250 250 / var(--tw-ring-opacity));
}

.ring-zinc-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(244 244 245 / var(--tw-ring-opacity));
}

.ring-zinc-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(228 228 231 / var(--tw-ring-opacity));
}

.ring-zinc-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(212 212 216 / var(--tw-ring-opacity));
}

.ring-zinc-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(161 161 170 / var(--tw-ring-opacity));
}

.ring-zinc-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(113 113 122 / var(--tw-ring-opacity));
}

.ring-zinc-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(82 82 91 / var(--tw-ring-opacity));
}

.ring-zinc-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 63 70 / var(--tw-ring-opacity));
}

.ring-zinc-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(39 39 42 / var(--tw-ring-opacity));
}

.ring-zinc-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(24 24 27 / var(--tw-ring-opacity));
}

.ring-neutral-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 250 250 / var(--tw-ring-opacity));
}

.ring-neutral-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(245 245 245 / var(--tw-ring-opacity));
}

.ring-neutral-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 229 229 / var(--tw-ring-opacity));
}

.ring-neutral-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(212 212 212 / var(--tw-ring-opacity));
}

.ring-neutral-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(163 163 163 / var(--tw-ring-opacity));
}

.ring-neutral-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(115 115 115 / var(--tw-ring-opacity));
}

.ring-neutral-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(82 82 82 / var(--tw-ring-opacity));
}

.ring-neutral-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(64 64 64 / var(--tw-ring-opacity));
}

.ring-neutral-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(38 38 38 / var(--tw-ring-opacity));
}

.ring-neutral-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(23 23 23 / var(--tw-ring-opacity));
}

.ring-stone-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 250 249 / var(--tw-ring-opacity));
}

.ring-stone-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(245 245 244 / var(--tw-ring-opacity));
}

.ring-stone-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(231 229 228 / var(--tw-ring-opacity));
}

.ring-stone-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(214 211 209 / var(--tw-ring-opacity));
}

.ring-stone-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(168 162 158 / var(--tw-ring-opacity));
}

.ring-stone-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(120 113 108 / var(--tw-ring-opacity));
}

.ring-stone-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(87 83 78 / var(--tw-ring-opacity));
}

.ring-stone-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(68 64 60 / var(--tw-ring-opacity));
}

.ring-stone-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(41 37 36 / var(--tw-ring-opacity));
}

.ring-stone-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 25 23 / var(--tw-ring-opacity));
}

.ring-red-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 242 242 / var(--tw-ring-opacity));
}

.ring-red-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 226 226 / var(--tw-ring-opacity));
}

.ring-red-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 202 202 / var(--tw-ring-opacity));
}

.ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(252 165 165 / var(--tw-ring-opacity));
}

.ring-red-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity));
}

.ring-red-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity));
}

.ring-red-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 38 38 / var(--tw-ring-opacity));
}

.ring-red-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(185 28 28 / var(--tw-ring-opacity));
}

.ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 27 27 / var(--tw-ring-opacity));
}

.ring-red-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(127 29 29 / var(--tw-ring-opacity));
}

.ring-orange-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 247 237 / var(--tw-ring-opacity));
}

.ring-orange-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 237 213 / var(--tw-ring-opacity));
}

.ring-orange-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 215 170 / var(--tw-ring-opacity));
}

.ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 116 / var(--tw-ring-opacity));
}

.ring-orange-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(251 146 60 / var(--tw-ring-opacity));
}

.ring-orange-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 115 22 / var(--tw-ring-opacity));
}

.ring-orange-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(234 88 12 / var(--tw-ring-opacity));
}

.ring-orange-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 65 12 / var(--tw-ring-opacity));
}

.ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(154 52 18 / var(--tw-ring-opacity));
}

.ring-orange-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(124 45 18 / var(--tw-ring-opacity));
}

.ring-amber-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 251 235 / var(--tw-ring-opacity));
}

.ring-amber-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 243 199 / var(--tw-ring-opacity));
}

.ring-amber-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 230 138 / var(--tw-ring-opacity));
}

.ring-amber-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(252 211 77 / var(--tw-ring-opacity));
}

.ring-amber-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(251 191 36 / var(--tw-ring-opacity));
}

.ring-amber-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(245 158 11 / var(--tw-ring-opacity));
}

.ring-amber-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 119 6 / var(--tw-ring-opacity));
}

.ring-amber-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 83 9 / var(--tw-ring-opacity));
}

.ring-amber-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(146 64 14 / var(--tw-ring-opacity));
}

.ring-amber-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(120 53 15 / var(--tw-ring-opacity));
}

.ring-yellow-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 252 232 / var(--tw-ring-opacity));
}

.ring-yellow-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 249 195 / var(--tw-ring-opacity));
}

.ring-yellow-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 240 138 / var(--tw-ring-opacity));
}

.ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 224 71 / var(--tw-ring-opacity));
}

.ring-yellow-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 204 21 / var(--tw-ring-opacity));
}

.ring-yellow-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(234 179 8 / var(--tw-ring-opacity));
}

.ring-yellow-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 138 4 / var(--tw-ring-opacity));
}

.ring-yellow-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(161 98 7 / var(--tw-ring-opacity));
}

.ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(133 77 14 / var(--tw-ring-opacity));
}

.ring-yellow-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(113 63 18 / var(--tw-ring-opacity));
}

.ring-lime-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(247 254 231 / var(--tw-ring-opacity));
}

.ring-lime-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 252 203 / var(--tw-ring-opacity));
}

.ring-lime-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}

.ring-lime-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}

.ring-lime-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(163 230 53 / var(--tw-ring-opacity));
}

.ring-lime-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 204 22 / var(--tw-ring-opacity));
}

.ring-lime-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(101 163 13 / var(--tw-ring-opacity));
}

.ring-lime-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(77 124 15 / var(--tw-ring-opacity));
}

.ring-lime-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}

.ring-lime-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(54 83 20 / var(--tw-ring-opacity));
}

.ring-green-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 253 244 / var(--tw-ring-opacity));
}

.ring-green-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 252 231 / var(--tw-ring-opacity));
}

.ring-green-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(187 247 208 / var(--tw-ring-opacity));
}

.ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(134 239 172 / var(--tw-ring-opacity));
}

.ring-green-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 222 128 / var(--tw-ring-opacity));
}

.ring-green-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity));
}

.ring-green-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(22 163 74 / var(--tw-ring-opacity));
}

.ring-green-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 128 61 / var(--tw-ring-opacity));
}

.ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(22 101 52 / var(--tw-ring-opacity));
}

.ring-green-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(20 83 45 / var(--tw-ring-opacity));
}

.ring-emerald-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 253 245 / var(--tw-ring-opacity));
}

.ring-emerald-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 250 229 / var(--tw-ring-opacity));
}

.ring-emerald-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(167 243 208 / var(--tw-ring-opacity));
}

.ring-emerald-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(110 231 183 / var(--tw-ring-opacity));
}

.ring-emerald-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(52 211 153 / var(--tw-ring-opacity));
}

.ring-emerald-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
}

.ring-emerald-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 150 105 / var(--tw-ring-opacity));
}

.ring-emerald-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 120 87 / var(--tw-ring-opacity));
}

.ring-emerald-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 95 70 / var(--tw-ring-opacity));
}

.ring-emerald-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 78 59 / var(--tw-ring-opacity));
}

.ring-teal-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 253 250 / var(--tw-ring-opacity));
}

.ring-teal-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(204 251 241 / var(--tw-ring-opacity));
}

.ring-teal-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 246 228 / var(--tw-ring-opacity));
}

.ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(94 234 212 / var(--tw-ring-opacity));
}

.ring-teal-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(45 212 191 / var(--tw-ring-opacity));
}

.ring-teal-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(20 184 166 / var(--tw-ring-opacity));
}

.ring-teal-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(13 148 136 / var(--tw-ring-opacity));
}

.ring-teal-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(15 118 110 / var(--tw-ring-opacity));
}

.ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 94 89 / var(--tw-ring-opacity));
}

.ring-teal-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(19 78 74 / var(--tw-ring-opacity));
}

.ring-cyan-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 254 255 / var(--tw-ring-opacity));
}

.ring-cyan-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(207 250 254 / var(--tw-ring-opacity));
}

.ring-cyan-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}

.ring-cyan-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}

.ring-cyan-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(34 211 238 / var(--tw-ring-opacity));
}

.ring-cyan-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 182 212 / var(--tw-ring-opacity));
}

.ring-cyan-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(8 145 178 / var(--tw-ring-opacity));
}

.ring-cyan-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 116 144 / var(--tw-ring-opacity));
}

.ring-cyan-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}

.ring-cyan-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(22 78 99 / var(--tw-ring-opacity));
}

.ring-sky-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 249 255 / var(--tw-ring-opacity));
}

.ring-sky-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 242 254 / var(--tw-ring-opacity));
}

.ring-sky-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(186 230 253 / var(--tw-ring-opacity));
}

.ring-sky-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(125 211 252 / var(--tw-ring-opacity));
}

.ring-sky-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(56 189 248 / var(--tw-ring-opacity));
}

.ring-sky-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 165 233 / var(--tw-ring-opacity));
}

.ring-sky-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(2 132 199 / var(--tw-ring-opacity));
}

.ring-sky-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 105 161 / var(--tw-ring-opacity));
}

.ring-sky-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(7 89 133 / var(--tw-ring-opacity));
}

.ring-sky-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(12 74 110 / var(--tw-ring-opacity));
}

.ring-blue-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 246 255 / var(--tw-ring-opacity));
}

.ring-blue-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity));
}

.ring-blue-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));
}

.ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.ring-blue-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));
}

.ring-blue-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

.ring-blue-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));
}

.ring-blue-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(29 78 216 / var(--tw-ring-opacity));
}

.ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
}

.ring-blue-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 58 138 / var(--tw-ring-opacity));
}

.ring-indigo-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(238 242 255 / var(--tw-ring-opacity));
}

.ring-indigo-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 231 255 / var(--tw-ring-opacity));
}

.ring-indigo-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));
}

.ring-indigo-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity));
}

.ring-indigo-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(129 140 248 / var(--tw-ring-opacity));
}

.ring-indigo-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}

.ring-indigo-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}

.ring-indigo-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(67 56 202 / var(--tw-ring-opacity));
}

.ring-indigo-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 48 163 / var(--tw-ring-opacity));
}

.ring-indigo-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 46 129 / var(--tw-ring-opacity));
}

.ring-violet-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(245 243 255 / var(--tw-ring-opacity));
}

.ring-violet-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(237 233 254 / var(--tw-ring-opacity));
}

.ring-violet-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(221 214 254 / var(--tw-ring-opacity));
}

.ring-violet-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(196 181 253 / var(--tw-ring-opacity));
}

.ring-violet-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(167 139 250 / var(--tw-ring-opacity));
}

.ring-violet-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(139 92 246 / var(--tw-ring-opacity));
}

.ring-violet-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(124 58 237 / var(--tw-ring-opacity));
}

.ring-violet-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(109 40 217 / var(--tw-ring-opacity));
}

.ring-violet-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(91 33 182 / var(--tw-ring-opacity));
}

.ring-violet-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(76 29 149 / var(--tw-ring-opacity));
}

.ring-purple-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 245 255 / var(--tw-ring-opacity));
}

.ring-purple-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(243 232 255 / var(--tw-ring-opacity));
}

.ring-purple-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(233 213 255 / var(--tw-ring-opacity));
}

.ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(216 180 254 / var(--tw-ring-opacity));
}

.ring-purple-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(192 132 252 / var(--tw-ring-opacity));
}

.ring-purple-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(168 85 247 / var(--tw-ring-opacity));
}

.ring-purple-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 51 234 / var(--tw-ring-opacity));
}

.ring-purple-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 34 206 / var(--tw-ring-opacity));
}

.ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 33 168 / var(--tw-ring-opacity));
}

.ring-purple-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(88 28 135 / var(--tw-ring-opacity));
}

.ring-fuchsia-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 244 255 / var(--tw-ring-opacity));
}

.ring-fuchsia-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 232 255 / var(--tw-ring-opacity));
}

.ring-fuchsia-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(245 208 254 / var(--tw-ring-opacity));
}

.ring-fuchsia-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 171 252 / var(--tw-ring-opacity));
}

.ring-fuchsia-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(232 121 249 / var(--tw-ring-opacity));
}

.ring-fuchsia-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 70 239 / var(--tw-ring-opacity));
}

.ring-fuchsia-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(192 38 211 / var(--tw-ring-opacity));
}

.ring-fuchsia-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(162 28 175 / var(--tw-ring-opacity));
}

.ring-fuchsia-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(134 25 143 / var(--tw-ring-opacity));
}

.ring-fuchsia-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(112 26 117 / var(--tw-ring-opacity));
}

.ring-pink-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 242 248 / var(--tw-ring-opacity));
}

.ring-pink-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(252 231 243 / var(--tw-ring-opacity));
}

.ring-pink-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(251 207 232 / var(--tw-ring-opacity));
}

.ring-pink-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 168 212 / var(--tw-ring-opacity));
}

.ring-pink-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(244 114 182 / var(--tw-ring-opacity));
}

.ring-pink-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 72 153 / var(--tw-ring-opacity));
}

.ring-pink-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(219 39 119 / var(--tw-ring-opacity));
}

.ring-pink-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 24 93 / var(--tw-ring-opacity));
}

.ring-pink-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(157 23 77 / var(--tw-ring-opacity));
}

.ring-pink-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(131 24 67 / var(--tw-ring-opacity));
}

.ring-rose-50 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 241 242 / var(--tw-ring-opacity));
}

.ring-rose-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 228 230 / var(--tw-ring-opacity));
}

.ring-rose-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 205 211 / var(--tw-ring-opacity));
}

.ring-rose-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 164 175 / var(--tw-ring-opacity));
}

.ring-rose-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(251 113 133 / var(--tw-ring-opacity));
}

.ring-rose-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(244 63 94 / var(--tw-ring-opacity));
}

.ring-rose-600 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(225 29 72 / var(--tw-ring-opacity));
}

.ring-rose-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 18 60 / var(--tw-ring-opacity));
}

.ring-rose-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 18 57 / var(--tw-ring-opacity));
}

.ring-rose-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(136 19 55 / var(--tw-ring-opacity));
}

.ring-textLgColor {
  --tw-ring-color: var(--text-large-color);
}

.ring-textSmColor {
  --tw-ring-color: var(--text-small-color);
}

.ring-subText {
  --tw-ring-color: var(--sub-text-color);
}

.ring-navBar-linkActive {
  --tw-ring-color: var(--nav-link-active);
}

.ring-navBar-linkActiveStripe {
  --tw-ring-color: var(--nav-link-active-stripe);
}

.ring-mobileNav-text {
  --tw-ring-color: var(--mobile-text);
}

.ring-mobileNav-textHover {
  --tw-ring-color: var(--mobile-hover-text);
}

.ring-mobileNav-border {
  --tw-ring-color: var(--mobile-border);
}

.ring-aboutMe-smIconBg {
  --tw-ring-color: var(--sm-icon-bg);
}

.ring-aboutMe-aboutMeText {
  --tw-ring-color: var(--aboutme-text);
}

.ring-aboutMe-alissa {
  --tw-ring-color: var(--alissa);
}

.ring-projects-text {
  --tw-ring-color: var(--project-text-color);
}

.ring-projects-subText {
  --tw-ring-color: var(--project-sub-text);
}

.ring-projects-arrow {
  --tw-ring-color: var(--project-arrow);
}

.ring-projects-recentBg {
  --tw-ring-color: var(--recent-project-bg);
}

.ring-projects-recentHover {
  --tw-ring-color: var(--recent-project-bg-hover);
}

.ring-projects-recentShadow {
  --tw-ring-color: var(--recent-project-shadow);
}

.ring-contact-label {
  --tw-ring-color: var(--label-text);
}

.ring-contact-send {
  --tw-ring-color: var(--send-btn);
}

.ring-contact-sendHover {
  --tw-ring-color: var(--send-btn-hover);
}

.ring-blog-lgText {
  --tw-ring-color: var(--blog-lg-text);
}

.ring-blog-border {
  --tw-ring-color: var(--blog-input-border);
}

.ring-blog-tagBg {
  --tw-ring-color: var(--tag-btn-bg);
}

.ring-post-bodyText {
  --tw-ring-color: var(--text-body);
}

.ring-post-bodyTextLg {
  --tw-ring-color: var(--text-body-lg);
}

.ring-post-icon {
  --tw-ring-color: var(--icon);
}

.ring-post-iconHover {
  --tw-ring-color: var(--icon-hover);
}

.ring-post-hyperlink {
  --tw-ring-color: var(--hyperlink);
}

.ring-post-hyperlinkHover {
  --tw-ring-color: var(--hyperlink-hover);
}

.ring-post-quote {
  --tw-ring-color: var(--quote);
}

.ring-post-quoteAuthor {
  --tw-ring-color: var(--quote-author);
}

.ring-opacity-0 {
  --tw-ring-opacity: 0;
}

.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}

.ring-opacity-10 {
  --tw-ring-opacity: 0.1;
}

.ring-opacity-20 {
  --tw-ring-opacity: 0.2;
}

.ring-opacity-25 {
  --tw-ring-opacity: 0.25;
}

.ring-opacity-30 {
  --tw-ring-opacity: 0.3;
}

.ring-opacity-40 {
  --tw-ring-opacity: 0.4;
}

.ring-opacity-50 {
  --tw-ring-opacity: 0.5;
}

.ring-opacity-60 {
  --tw-ring-opacity: 0.6;
}

.ring-opacity-70 {
  --tw-ring-opacity: 0.7;
}

.ring-opacity-75 {
  --tw-ring-opacity: 0.75;
}

.ring-opacity-80 {
  --tw-ring-opacity: 0.8;
}

.ring-opacity-90 {
  --tw-ring-opacity: 0.9;
}

.ring-opacity-95 {
  --tw-ring-opacity: 0.95;
}

.ring-opacity-100 {
  --tw-ring-opacity: 1;
}

.ring-offset-0 {
  --tw-ring-offset-width: 0px;
}

.ring-offset-1 {
  --tw-ring-offset-width: 1px;
}

.ring-offset-2 {
  --tw-ring-offset-width: 2px;
}

.ring-offset-4 {
  --tw-ring-offset-width: 4px;
}

.ring-offset-8 {
  --tw-ring-offset-width: 8px;
}

.ring-offset-inherit {
  --tw-ring-offset-color: inherit;
}

.ring-offset-current {
  --tw-ring-offset-color: currentColor;
}

.ring-offset-transparent {
  --tw-ring-offset-color: transparent;
}

.ring-offset-black {
  --tw-ring-offset-color: #000;
}

.ring-offset-white {
  --tw-ring-offset-color: #fff;
}

.ring-offset-slate-50 {
  --tw-ring-offset-color: #f8fafc;
}

.ring-offset-slate-100 {
  --tw-ring-offset-color: #f1f5f9;
}

.ring-offset-slate-200 {
  --tw-ring-offset-color: #e2e8f0;
}

.ring-offset-slate-300 {
  --tw-ring-offset-color: #cbd5e1;
}

.ring-offset-slate-400 {
  --tw-ring-offset-color: #94a3b8;
}

.ring-offset-slate-500 {
  --tw-ring-offset-color: #64748b;
}

.ring-offset-slate-600 {
  --tw-ring-offset-color: #475569;
}

.ring-offset-slate-700 {
  --tw-ring-offset-color: #334155;
}

.ring-offset-slate-800 {
  --tw-ring-offset-color: #1e293b;
}

.ring-offset-slate-900 {
  --tw-ring-offset-color: #0f172a;
}

.ring-offset-gray-50 {
  --tw-ring-offset-color: #f9fafb;
}

.ring-offset-gray-100 {
  --tw-ring-offset-color: #f3f4f6;
}

.ring-offset-gray-200 {
  --tw-ring-offset-color: #e5e7eb;
}

.ring-offset-gray-300 {
  --tw-ring-offset-color: #d1d5db;
}

.ring-offset-gray-400 {
  --tw-ring-offset-color: #9ca3af;
}

.ring-offset-gray-500 {
  --tw-ring-offset-color: #6b7280;
}

.ring-offset-gray-600 {
  --tw-ring-offset-color: #4b5563;
}

.ring-offset-gray-700 {
  --tw-ring-offset-color: #374151;
}

.ring-offset-gray-800 {
  --tw-ring-offset-color: #1f2937;
}

.ring-offset-gray-900 {
  --tw-ring-offset-color: #111827;
}

.ring-offset-zinc-50 {
  --tw-ring-offset-color: #fafafa;
}

.ring-offset-zinc-100 {
  --tw-ring-offset-color: #f4f4f5;
}

.ring-offset-zinc-200 {
  --tw-ring-offset-color: #e4e4e7;
}

.ring-offset-zinc-300 {
  --tw-ring-offset-color: #d4d4d8;
}

.ring-offset-zinc-400 {
  --tw-ring-offset-color: #a1a1aa;
}

.ring-offset-zinc-500 {
  --tw-ring-offset-color: #71717a;
}

.ring-offset-zinc-600 {
  --tw-ring-offset-color: #52525b;
}

.ring-offset-zinc-700 {
  --tw-ring-offset-color: #3f3f46;
}

.ring-offset-zinc-800 {
  --tw-ring-offset-color: #27272a;
}

.ring-offset-zinc-900 {
  --tw-ring-offset-color: #18181b;
}

.ring-offset-neutral-50 {
  --tw-ring-offset-color: #fafafa;
}

.ring-offset-neutral-100 {
  --tw-ring-offset-color: #f5f5f5;
}

.ring-offset-neutral-200 {
  --tw-ring-offset-color: #e5e5e5;
}

.ring-offset-neutral-300 {
  --tw-ring-offset-color: #d4d4d4;
}

.ring-offset-neutral-400 {
  --tw-ring-offset-color: #a3a3a3;
}

.ring-offset-neutral-500 {
  --tw-ring-offset-color: #737373;
}

.ring-offset-neutral-600 {
  --tw-ring-offset-color: #525252;
}

.ring-offset-neutral-700 {
  --tw-ring-offset-color: #404040;
}

.ring-offset-neutral-800 {
  --tw-ring-offset-color: #262626;
}

.ring-offset-neutral-900 {
  --tw-ring-offset-color: #171717;
}

.ring-offset-stone-50 {
  --tw-ring-offset-color: #fafaf9;
}

.ring-offset-stone-100 {
  --tw-ring-offset-color: #f5f5f4;
}

.ring-offset-stone-200 {
  --tw-ring-offset-color: #e7e5e4;
}

.ring-offset-stone-300 {
  --tw-ring-offset-color: #d6d3d1;
}

.ring-offset-stone-400 {
  --tw-ring-offset-color: #a8a29e;
}

.ring-offset-stone-500 {
  --tw-ring-offset-color: #78716c;
}

.ring-offset-stone-600 {
  --tw-ring-offset-color: #57534e;
}

.ring-offset-stone-700 {
  --tw-ring-offset-color: #44403c;
}

.ring-offset-stone-800 {
  --tw-ring-offset-color: #292524;
}

.ring-offset-stone-900 {
  --tw-ring-offset-color: #1c1917;
}

.ring-offset-red-50 {
  --tw-ring-offset-color: #fef2f2;
}

.ring-offset-red-100 {
  --tw-ring-offset-color: #fee2e2;
}

.ring-offset-red-200 {
  --tw-ring-offset-color: #fecaca;
}

.ring-offset-red-300 {
  --tw-ring-offset-color: #fca5a5;
}

.ring-offset-red-400 {
  --tw-ring-offset-color: #f87171;
}

.ring-offset-red-500 {
  --tw-ring-offset-color: #ef4444;
}

.ring-offset-red-600 {
  --tw-ring-offset-color: #dc2626;
}

.ring-offset-red-700 {
  --tw-ring-offset-color: #b91c1c;
}

.ring-offset-red-800 {
  --tw-ring-offset-color: #991b1b;
}

.ring-offset-red-900 {
  --tw-ring-offset-color: #7f1d1d;
}

.ring-offset-orange-50 {
  --tw-ring-offset-color: #fff7ed;
}

.ring-offset-orange-100 {
  --tw-ring-offset-color: #ffedd5;
}

.ring-offset-orange-200 {
  --tw-ring-offset-color: #fed7aa;
}

.ring-offset-orange-300 {
  --tw-ring-offset-color: #fdba74;
}

.ring-offset-orange-400 {
  --tw-ring-offset-color: #fb923c;
}

.ring-offset-orange-500 {
  --tw-ring-offset-color: #f97316;
}

.ring-offset-orange-600 {
  --tw-ring-offset-color: #ea580c;
}

.ring-offset-orange-700 {
  --tw-ring-offset-color: #c2410c;
}

.ring-offset-orange-800 {
  --tw-ring-offset-color: #9a3412;
}

.ring-offset-orange-900 {
  --tw-ring-offset-color: #7c2d12;
}

.ring-offset-amber-50 {
  --tw-ring-offset-color: #fffbeb;
}

.ring-offset-amber-100 {
  --tw-ring-offset-color: #fef3c7;
}

.ring-offset-amber-200 {
  --tw-ring-offset-color: #fde68a;
}

.ring-offset-amber-300 {
  --tw-ring-offset-color: #fcd34d;
}

.ring-offset-amber-400 {
  --tw-ring-offset-color: #fbbf24;
}

.ring-offset-amber-500 {
  --tw-ring-offset-color: #f59e0b;
}

.ring-offset-amber-600 {
  --tw-ring-offset-color: #d97706;
}

.ring-offset-amber-700 {
  --tw-ring-offset-color: #b45309;
}

.ring-offset-amber-800 {
  --tw-ring-offset-color: #92400e;
}

.ring-offset-amber-900 {
  --tw-ring-offset-color: #78350f;
}

.ring-offset-yellow-50 {
  --tw-ring-offset-color: #fefce8;
}

.ring-offset-yellow-100 {
  --tw-ring-offset-color: #fef9c3;
}

.ring-offset-yellow-200 {
  --tw-ring-offset-color: #fef08a;
}

.ring-offset-yellow-300 {
  --tw-ring-offset-color: #fde047;
}

.ring-offset-yellow-400 {
  --tw-ring-offset-color: #facc15;
}

.ring-offset-yellow-500 {
  --tw-ring-offset-color: #eab308;
}

.ring-offset-yellow-600 {
  --tw-ring-offset-color: #ca8a04;
}

.ring-offset-yellow-700 {
  --tw-ring-offset-color: #a16207;
}

.ring-offset-yellow-800 {
  --tw-ring-offset-color: #854d0e;
}

.ring-offset-yellow-900 {
  --tw-ring-offset-color: #713f12;
}

.ring-offset-lime-50 {
  --tw-ring-offset-color: #f7fee7;
}

.ring-offset-lime-100 {
  --tw-ring-offset-color: #ecfccb;
}

.ring-offset-lime-200 {
  --tw-ring-offset-color: #d9f99d;
}

.ring-offset-lime-300 {
  --tw-ring-offset-color: #bef264;
}

.ring-offset-lime-400 {
  --tw-ring-offset-color: #a3e635;
}

.ring-offset-lime-500 {
  --tw-ring-offset-color: #84cc16;
}

.ring-offset-lime-600 {
  --tw-ring-offset-color: #65a30d;
}

.ring-offset-lime-700 {
  --tw-ring-offset-color: #4d7c0f;
}

.ring-offset-lime-800 {
  --tw-ring-offset-color: #3f6212;
}

.ring-offset-lime-900 {
  --tw-ring-offset-color: #365314;
}

.ring-offset-green-50 {
  --tw-ring-offset-color: #f0fdf4;
}

.ring-offset-green-100 {
  --tw-ring-offset-color: #dcfce7;
}

.ring-offset-green-200 {
  --tw-ring-offset-color: #bbf7d0;
}

.ring-offset-green-300 {
  --tw-ring-offset-color: #86efac;
}

.ring-offset-green-400 {
  --tw-ring-offset-color: #4ade80;
}

.ring-offset-green-500 {
  --tw-ring-offset-color: #22c55e;
}

.ring-offset-green-600 {
  --tw-ring-offset-color: #16a34a;
}

.ring-offset-green-700 {
  --tw-ring-offset-color: #15803d;
}

.ring-offset-green-800 {
  --tw-ring-offset-color: #166534;
}

.ring-offset-green-900 {
  --tw-ring-offset-color: #14532d;
}

.ring-offset-emerald-50 {
  --tw-ring-offset-color: #ecfdf5;
}

.ring-offset-emerald-100 {
  --tw-ring-offset-color: #d1fae5;
}

.ring-offset-emerald-200 {
  --tw-ring-offset-color: #a7f3d0;
}

.ring-offset-emerald-300 {
  --tw-ring-offset-color: #6ee7b7;
}

.ring-offset-emerald-400 {
  --tw-ring-offset-color: #34d399;
}

.ring-offset-emerald-500 {
  --tw-ring-offset-color: #10b981;
}

.ring-offset-emerald-600 {
  --tw-ring-offset-color: #059669;
}

.ring-offset-emerald-700 {
  --tw-ring-offset-color: #047857;
}

.ring-offset-emerald-800 {
  --tw-ring-offset-color: #065f46;
}

.ring-offset-emerald-900 {
  --tw-ring-offset-color: #064e3b;
}

.ring-offset-teal-50 {
  --tw-ring-offset-color: #f0fdfa;
}

.ring-offset-teal-100 {
  --tw-ring-offset-color: #ccfbf1;
}

.ring-offset-teal-200 {
  --tw-ring-offset-color: #99f6e4;
}

.ring-offset-teal-300 {
  --tw-ring-offset-color: #5eead4;
}

.ring-offset-teal-400 {
  --tw-ring-offset-color: #2dd4bf;
}

.ring-offset-teal-500 {
  --tw-ring-offset-color: #14b8a6;
}

.ring-offset-teal-600 {
  --tw-ring-offset-color: #0d9488;
}

.ring-offset-teal-700 {
  --tw-ring-offset-color: #0f766e;
}

.ring-offset-teal-800 {
  --tw-ring-offset-color: #115e59;
}

.ring-offset-teal-900 {
  --tw-ring-offset-color: #134e4a;
}

.ring-offset-cyan-50 {
  --tw-ring-offset-color: #ecfeff;
}

.ring-offset-cyan-100 {
  --tw-ring-offset-color: #cffafe;
}

.ring-offset-cyan-200 {
  --tw-ring-offset-color: #a5f3fc;
}

.ring-offset-cyan-300 {
  --tw-ring-offset-color: #67e8f9;
}

.ring-offset-cyan-400 {
  --tw-ring-offset-color: #22d3ee;
}

.ring-offset-cyan-500 {
  --tw-ring-offset-color: #06b6d4;
}

.ring-offset-cyan-600 {
  --tw-ring-offset-color: #0891b2;
}

.ring-offset-cyan-700 {
  --tw-ring-offset-color: #0e7490;
}

.ring-offset-cyan-800 {
  --tw-ring-offset-color: #155e75;
}

.ring-offset-cyan-900 {
  --tw-ring-offset-color: #164e63;
}

.ring-offset-sky-50 {
  --tw-ring-offset-color: #f0f9ff;
}

.ring-offset-sky-100 {
  --tw-ring-offset-color: #e0f2fe;
}

.ring-offset-sky-200 {
  --tw-ring-offset-color: #bae6fd;
}

.ring-offset-sky-300 {
  --tw-ring-offset-color: #7dd3fc;
}

.ring-offset-sky-400 {
  --tw-ring-offset-color: #38bdf8;
}

.ring-offset-sky-500 {
  --tw-ring-offset-color: #0ea5e9;
}

.ring-offset-sky-600 {
  --tw-ring-offset-color: #0284c7;
}

.ring-offset-sky-700 {
  --tw-ring-offset-color: #0369a1;
}

.ring-offset-sky-800 {
  --tw-ring-offset-color: #075985;
}

.ring-offset-sky-900 {
  --tw-ring-offset-color: #0c4a6e;
}

.ring-offset-blue-50 {
  --tw-ring-offset-color: #eff6ff;
}

.ring-offset-blue-100 {
  --tw-ring-offset-color: #dbeafe;
}

.ring-offset-blue-200 {
  --tw-ring-offset-color: #bfdbfe;
}

.ring-offset-blue-300 {
  --tw-ring-offset-color: #93c5fd;
}

.ring-offset-blue-400 {
  --tw-ring-offset-color: #60a5fa;
}

.ring-offset-blue-500 {
  --tw-ring-offset-color: #3b82f6;
}

.ring-offset-blue-600 {
  --tw-ring-offset-color: #2563eb;
}

.ring-offset-blue-700 {
  --tw-ring-offset-color: #1d4ed8;
}

.ring-offset-blue-800 {
  --tw-ring-offset-color: #1e40af;
}

.ring-offset-blue-900 {
  --tw-ring-offset-color: #1e3a8a;
}

.ring-offset-indigo-50 {
  --tw-ring-offset-color: #eef2ff;
}

.ring-offset-indigo-100 {
  --tw-ring-offset-color: #e0e7ff;
}

.ring-offset-indigo-200 {
  --tw-ring-offset-color: #c7d2fe;
}

.ring-offset-indigo-300 {
  --tw-ring-offset-color: #a5b4fc;
}

.ring-offset-indigo-400 {
  --tw-ring-offset-color: #818cf8;
}

.ring-offset-indigo-500 {
  --tw-ring-offset-color: #6366f1;
}

.ring-offset-indigo-600 {
  --tw-ring-offset-color: #4f46e5;
}

.ring-offset-indigo-700 {
  --tw-ring-offset-color: #4338ca;
}

.ring-offset-indigo-800 {
  --tw-ring-offset-color: #3730a3;
}

.ring-offset-indigo-900 {
  --tw-ring-offset-color: #312e81;
}

.ring-offset-violet-50 {
  --tw-ring-offset-color: #f5f3ff;
}

.ring-offset-violet-100 {
  --tw-ring-offset-color: #ede9fe;
}

.ring-offset-violet-200 {
  --tw-ring-offset-color: #ddd6fe;
}

.ring-offset-violet-300 {
  --tw-ring-offset-color: #c4b5fd;
}

.ring-offset-violet-400 {
  --tw-ring-offset-color: #a78bfa;
}

.ring-offset-violet-500 {
  --tw-ring-offset-color: #8b5cf6;
}

.ring-offset-violet-600 {
  --tw-ring-offset-color: #7c3aed;
}

.ring-offset-violet-700 {
  --tw-ring-offset-color: #6d28d9;
}

.ring-offset-violet-800 {
  --tw-ring-offset-color: #5b21b6;
}

.ring-offset-violet-900 {
  --tw-ring-offset-color: #4c1d95;
}

.ring-offset-purple-50 {
  --tw-ring-offset-color: #faf5ff;
}

.ring-offset-purple-100 {
  --tw-ring-offset-color: #f3e8ff;
}

.ring-offset-purple-200 {
  --tw-ring-offset-color: #e9d5ff;
}

.ring-offset-purple-300 {
  --tw-ring-offset-color: #d8b4fe;
}

.ring-offset-purple-400 {
  --tw-ring-offset-color: #c084fc;
}

.ring-offset-purple-500 {
  --tw-ring-offset-color: #a855f7;
}

.ring-offset-purple-600 {
  --tw-ring-offset-color: #9333ea;
}

.ring-offset-purple-700 {
  --tw-ring-offset-color: #7e22ce;
}

.ring-offset-purple-800 {
  --tw-ring-offset-color: #6b21a8;
}

.ring-offset-purple-900 {
  --tw-ring-offset-color: #581c87;
}

.ring-offset-fuchsia-50 {
  --tw-ring-offset-color: #fdf4ff;
}

.ring-offset-fuchsia-100 {
  --tw-ring-offset-color: #fae8ff;
}

.ring-offset-fuchsia-200 {
  --tw-ring-offset-color: #f5d0fe;
}

.ring-offset-fuchsia-300 {
  --tw-ring-offset-color: #f0abfc;
}

.ring-offset-fuchsia-400 {
  --tw-ring-offset-color: #e879f9;
}

.ring-offset-fuchsia-500 {
  --tw-ring-offset-color: #d946ef;
}

.ring-offset-fuchsia-600 {
  --tw-ring-offset-color: #c026d3;
}

.ring-offset-fuchsia-700 {
  --tw-ring-offset-color: #a21caf;
}

.ring-offset-fuchsia-800 {
  --tw-ring-offset-color: #86198f;
}

.ring-offset-fuchsia-900 {
  --tw-ring-offset-color: #701a75;
}

.ring-offset-pink-50 {
  --tw-ring-offset-color: #fdf2f8;
}

.ring-offset-pink-100 {
  --tw-ring-offset-color: #fce7f3;
}

.ring-offset-pink-200 {
  --tw-ring-offset-color: #fbcfe8;
}

.ring-offset-pink-300 {
  --tw-ring-offset-color: #f9a8d4;
}

.ring-offset-pink-400 {
  --tw-ring-offset-color: #f472b6;
}

.ring-offset-pink-500 {
  --tw-ring-offset-color: #ec4899;
}

.ring-offset-pink-600 {
  --tw-ring-offset-color: #db2777;
}

.ring-offset-pink-700 {
  --tw-ring-offset-color: #be185d;
}

.ring-offset-pink-800 {
  --tw-ring-offset-color: #9d174d;
}

.ring-offset-pink-900 {
  --tw-ring-offset-color: #831843;
}

.ring-offset-rose-50 {
  --tw-ring-offset-color: #fff1f2;
}

.ring-offset-rose-100 {
  --tw-ring-offset-color: #ffe4e6;
}

.ring-offset-rose-200 {
  --tw-ring-offset-color: #fecdd3;
}

.ring-offset-rose-300 {
  --tw-ring-offset-color: #fda4af;
}

.ring-offset-rose-400 {
  --tw-ring-offset-color: #fb7185;
}

.ring-offset-rose-500 {
  --tw-ring-offset-color: #f43f5e;
}

.ring-offset-rose-600 {
  --tw-ring-offset-color: #e11d48;
}

.ring-offset-rose-700 {
  --tw-ring-offset-color: #be123c;
}

.ring-offset-rose-800 {
  --tw-ring-offset-color: #9f1239;
}

.ring-offset-rose-900 {
  --tw-ring-offset-color: #881337;
}

.ring-offset-textLgColor {
  --tw-ring-offset-color: var(--text-large-color);
}

.ring-offset-textSmColor {
  --tw-ring-offset-color: var(--text-small-color);
}

.ring-offset-subText {
  --tw-ring-offset-color: var(--sub-text-color);
}

.ring-offset-navBar-linkActive {
  --tw-ring-offset-color: var(--nav-link-active);
}

.ring-offset-navBar-linkActiveStripe {
  --tw-ring-offset-color: var(--nav-link-active-stripe);
}

.ring-offset-mobileNav-text {
  --tw-ring-offset-color: var(--mobile-text);
}

.ring-offset-mobileNav-textHover {
  --tw-ring-offset-color: var(--mobile-hover-text);
}

.ring-offset-mobileNav-border {
  --tw-ring-offset-color: var(--mobile-border);
}

.ring-offset-aboutMe-smIconBg {
  --tw-ring-offset-color: var(--sm-icon-bg);
}

.ring-offset-aboutMe-aboutMeText {
  --tw-ring-offset-color: var(--aboutme-text);
}

.ring-offset-aboutMe-alissa {
  --tw-ring-offset-color: var(--alissa);
}

.ring-offset-projects-text {
  --tw-ring-offset-color: var(--project-text-color);
}

.ring-offset-projects-subText {
  --tw-ring-offset-color: var(--project-sub-text);
}

.ring-offset-projects-arrow {
  --tw-ring-offset-color: var(--project-arrow);
}

.ring-offset-projects-recentBg {
  --tw-ring-offset-color: var(--recent-project-bg);
}

.ring-offset-projects-recentHover {
  --tw-ring-offset-color: var(--recent-project-bg-hover);
}

.ring-offset-projects-recentShadow {
  --tw-ring-offset-color: var(--recent-project-shadow);
}

.ring-offset-contact-label {
  --tw-ring-offset-color: var(--label-text);
}

.ring-offset-contact-send {
  --tw-ring-offset-color: var(--send-btn);
}

.ring-offset-contact-sendHover {
  --tw-ring-offset-color: var(--send-btn-hover);
}

.ring-offset-blog-lgText {
  --tw-ring-offset-color: var(--blog-lg-text);
}

.ring-offset-blog-border {
  --tw-ring-offset-color: var(--blog-input-border);
}

.ring-offset-blog-tagBg {
  --tw-ring-offset-color: var(--tag-btn-bg);
}

.ring-offset-post-bodyText {
  --tw-ring-offset-color: var(--text-body);
}

.ring-offset-post-bodyTextLg {
  --tw-ring-offset-color: var(--text-body-lg);
}

.ring-offset-post-icon {
  --tw-ring-offset-color: var(--icon);
}

.ring-offset-post-iconHover {
  --tw-ring-offset-color: var(--icon-hover);
}

.ring-offset-post-hyperlink {
  --tw-ring-offset-color: var(--hyperlink);
}

.ring-offset-post-hyperlinkHover {
  --tw-ring-offset-color: var(--hyperlink-hover);
}

.ring-offset-post-quote {
  --tw-ring-offset-color: var(--quote);
}

.ring-offset-post-quoteAuthor {
  --tw-ring-offset-color: var(--quote-author);
}

.blur-0 {
  --tw-blur: blur(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-none {
  --tw-blur: blur(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-sm {
  --tw-blur: blur(4px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-md {
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-lg {
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-xl {
  --tw-blur: blur(24px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-2xl {
  --tw-blur: blur(40px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-3xl {
  --tw-blur: blur(64px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-0 {
  --tw-brightness: brightness(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-50 {
  --tw-brightness: brightness(.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-75 {
  --tw-brightness: brightness(.75);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-90 {
  --tw-brightness: brightness(.9);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-95 {
  --tw-brightness: brightness(.95);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-100 {
  --tw-brightness: brightness(1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-105 {
  --tw-brightness: brightness(1.05);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-110 {
  --tw-brightness: brightness(1.1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-125 {
  --tw-brightness: brightness(1.25);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-150 {
  --tw-brightness: brightness(1.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.brightness-200 {
  --tw-brightness: brightness(2);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-0 {
  --tw-contrast: contrast(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-50 {
  --tw-contrast: contrast(.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-75 {
  --tw-contrast: contrast(.75);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-100 {
  --tw-contrast: contrast(1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-125 {
  --tw-contrast: contrast(1.25);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-150 {
  --tw-contrast: contrast(1.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.contrast-200 {
  --tw-contrast: contrast(2);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-2xl {
  --tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-sm {
  --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-md {
  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-lg {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-xl {
  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow-none {
  --tw-drop-shadow: drop-shadow(0 0 #0000);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale-0 {
  --tw-grayscale: grayscale(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-0 {
  --tw-hue-rotate: hue-rotate(0deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-15 {
  --tw-hue-rotate: hue-rotate(15deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-30 {
  --tw-hue-rotate: hue-rotate(30deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-60 {
  --tw-hue-rotate: hue-rotate(60deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-90 {
  --tw-hue-rotate: hue-rotate(90deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hue-rotate-180 {
  --tw-hue-rotate: hue-rotate(180deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-0 {
  --tw-hue-rotate: hue-rotate(-0deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-15 {
  --tw-hue-rotate: hue-rotate(-15deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-30 {
  --tw-hue-rotate: hue-rotate(-30deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-60 {
  --tw-hue-rotate: hue-rotate(-60deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-90 {
  --tw-hue-rotate: hue-rotate(-90deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.-hue-rotate-180 {
  --tw-hue-rotate: hue-rotate(-180deg);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.invert-0 {
  --tw-invert: invert(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-0 {
  --tw-saturate: saturate(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-50 {
  --tw-saturate: saturate(.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-100 {
  --tw-saturate: saturate(1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-150 {
  --tw-saturate: saturate(1.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-200 {
  --tw-saturate: saturate(2);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.sepia-0 {
  --tw-sepia: sepia(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.sepia {
  --tw-sepia: sepia(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter-none {
  filter: none;
}

.backdrop-blur-0 {
  --tw-backdrop-blur: blur(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-none {
  --tw-backdrop-blur: blur(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-xl {
  --tw-backdrop-blur: blur(24px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-2xl {
  --tw-backdrop-blur: blur(40px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-3xl {
  --tw-backdrop-blur: blur(64px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-0 {
  --tw-backdrop-brightness: brightness(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-50 {
  --tw-backdrop-brightness: brightness(.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-75 {
  --tw-backdrop-brightness: brightness(.75);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-90 {
  --tw-backdrop-brightness: brightness(.9);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-95 {
  --tw-backdrop-brightness: brightness(.95);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-100 {
  --tw-backdrop-brightness: brightness(1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-105 {
  --tw-backdrop-brightness: brightness(1.05);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-110 {
  --tw-backdrop-brightness: brightness(1.1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-125 {
  --tw-backdrop-brightness: brightness(1.25);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-150 {
  --tw-backdrop-brightness: brightness(1.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-brightness-200 {
  --tw-backdrop-brightness: brightness(2);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-0 {
  --tw-backdrop-contrast: contrast(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-50 {
  --tw-backdrop-contrast: contrast(.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-75 {
  --tw-backdrop-contrast: contrast(.75);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-100 {
  --tw-backdrop-contrast: contrast(1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-125 {
  --tw-backdrop-contrast: contrast(1.25);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-150 {
  --tw-backdrop-contrast: contrast(1.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-contrast-200 {
  --tw-backdrop-contrast: contrast(2);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-grayscale-0 {
  --tw-backdrop-grayscale: grayscale(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-grayscale {
  --tw-backdrop-grayscale: grayscale(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-0 {
  --tw-backdrop-hue-rotate: hue-rotate(0deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-15 {
  --tw-backdrop-hue-rotate: hue-rotate(15deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-30 {
  --tw-backdrop-hue-rotate: hue-rotate(30deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-60 {
  --tw-backdrop-hue-rotate: hue-rotate(60deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-90 {
  --tw-backdrop-hue-rotate: hue-rotate(90deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-hue-rotate-180 {
  --tw-backdrop-hue-rotate: hue-rotate(180deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-0 {
  --tw-backdrop-hue-rotate: hue-rotate(-0deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-15 {
  --tw-backdrop-hue-rotate: hue-rotate(-15deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-30 {
  --tw-backdrop-hue-rotate: hue-rotate(-30deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-60 {
  --tw-backdrop-hue-rotate: hue-rotate(-60deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-90 {
  --tw-backdrop-hue-rotate: hue-rotate(-90deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.-backdrop-hue-rotate-180 {
  --tw-backdrop-hue-rotate: hue-rotate(-180deg);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-invert-0 {
  --tw-backdrop-invert: invert(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-invert {
  --tw-backdrop-invert: invert(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-0 {
  --tw-backdrop-opacity: opacity(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-5 {
  --tw-backdrop-opacity: opacity(0.05);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-10 {
  --tw-backdrop-opacity: opacity(0.1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-20 {
  --tw-backdrop-opacity: opacity(0.2);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-25 {
  --tw-backdrop-opacity: opacity(0.25);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-30 {
  --tw-backdrop-opacity: opacity(0.3);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-40 {
  --tw-backdrop-opacity: opacity(0.4);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-50 {
  --tw-backdrop-opacity: opacity(0.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-60 {
  --tw-backdrop-opacity: opacity(0.6);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-70 {
  --tw-backdrop-opacity: opacity(0.7);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-75 {
  --tw-backdrop-opacity: opacity(0.75);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-80 {
  --tw-backdrop-opacity: opacity(0.8);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-90 {
  --tw-backdrop-opacity: opacity(0.9);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-95 {
  --tw-backdrop-opacity: opacity(0.95);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-100 {
  --tw-backdrop-opacity: opacity(1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-0 {
  --tw-backdrop-saturate: saturate(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-50 {
  --tw-backdrop-saturate: saturate(.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-100 {
  --tw-backdrop-saturate: saturate(1);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-150 {
  --tw-backdrop-saturate: saturate(1.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-200 {
  --tw-backdrop-saturate: saturate(2);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-sepia-0 {
  --tw-backdrop-sepia: sepia(0);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-sepia {
  --tw-backdrop-sepia: sepia(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter-none {
  -webkit-backdrop-filter: none;
          backdrop-filter: none;
}

.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-none {
  transition-property: none;
}

.transition-colors {
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.delay-75 {
  transition-delay: 75ms;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-150 {
  transition-delay: 150ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}

.delay-500 {
  transition-delay: 500ms;
}

.delay-700 {
  transition-delay: 700ms;
}

.delay-1000 {
  transition-delay: 1000ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-75 {
  transition-duration: 75ms;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

.duration-1000 {
  transition-duration: 1000ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.will-change-auto {
  will-change: auto;
}

.will-change-scroll {
  will-change: scroll-position;
}

.will-change-contents {
  will-change: contents;
}

.will-change-transform {
  will-change: transform;
}

.content-none {
  --tw-content: none;
  content: var(--tw-content);
}

.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

.line-clamp-6 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.line-clamp-none {
  -webkit-line-clamp: unset;
}

.before\:bg-gray-600::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.before\:bg-gray-300::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.after\:pointer-events-none::after {
  content: var(--tw-content);
  pointer-events: none;
}

.after\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}

.after\:left-0::after {
  content: var(--tw-content);
  left: 0px;
}

.after\:right-0::after {
  content: var(--tw-content);
  right: 0px;
}

.after\:bottom-0::after {
  content: var(--tw-content);
  bottom: 0px;
}

.after\:block::after {
  content: var(--tw-content);
  display: block;
}

.after\:inline-flex::after {
  content: var(--tw-content);
  display: inline-flex;
}

.after\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}

.after\:w-full::after {
  content: var(--tw-content);
  width: 100%;
}

.after\:items-center::after {
  content: var(--tw-content);
  align-items: center;
}

.after\:rounded-lg::after {
  content: var(--tw-content);
  border-radius: 0.5rem;
}

.after\:opacity-50::after {
  content: var(--tw-content);
  opacity: 0.5;
}

.hover\:border-black:hover {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.hover\:border-white:hover {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.hover\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.hover\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}

.hover\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.hover\:bg-rose-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 29 72 / var(--tw-bg-opacity));
}

.hover\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.hover\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\:bg-contact-sendHover:hover {
  background-color: var(--send-btn-hover);
}

.hover\:bg-projects-recentHover:hover {
  background-color: var(--recent-project-bg-hover);
}

.hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.hover\:text-blue-400:hover {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.hover\:text-cyan-200:hover {
  --tw-text-opacity: 1;
  color: rgb(165 243 252 / var(--tw-text-opacity));
}

.hover\:text-rose-500:hover {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}

.hover\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.hover\:text-cyan-400:hover {
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity));
}

.hover\:text-cyan-300:hover {
  --tw-text-opacity: 1;
  color: rgb(103 232 249 / var(--tw-text-opacity));
}

.hover\:text-post-bodyTextLg:hover {
  color: var(--text-body-lg);
}

.hover\:text-post-hyperlinkHover:hover {
  color: var(--hyperlink-hover);
}

.hover\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.hover\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.before\:hover\:bg-gray-900:hover::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.before\:hover\:bg-white:hover::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.focus\:border-black:focus {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.focus\:border-white:focus {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.focus\:bg-contact-sendHover:focus {
  background-color: var(--send-btn-hover);
}

.focus\:bg-projects-recentHover:focus {
  background-color: var(--recent-project-bg-hover);
}

.focus\:text-blue-400:focus {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.focus\:text-cyan-200:focus {
  --tw-text-opacity: 1;
  color: rgb(165 243 252 / var(--tw-text-opacity));
}

.focus\:text-rose-500:focus {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\:ring:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\:ring-opacity-75:focus-visible {
  --tw-ring-opacity: 0.75;
}

@media (prefers-color-scheme: dark) {
  .dark\:border-gray-700 {
    --tw-border-opacity: 1;
    border-color: rgb(55 65 81 / var(--tw-border-opacity));
  }

  .dark\:bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\:text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }

  .dark\:hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}

@media (min-width: 350px) {
  .xxs\:w-4\/5 {
    width: 80%;
  }

  .xxs\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .xxs\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .xxs\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (min-width: 420px) {
  .custom3\:mt-16 {
    margin-top: 4rem;
  }

  .custom3\:flex {
    display: flex;
  }

  .custom3\:hidden {
    display: none;
  }

  .custom3\:w-\[85\%\] {
    width: 85%;
  }

  .custom3\:flex-row {
    flex-direction: row;
  }

  .custom3\:gap-5 {
    gap: 1.25rem;
  }

  .custom3\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 480px) {
  .xs\:mt-44 {
    margin-top: 11rem;
  }

  .xs\:mt-80 {
    margin-top: 20rem;
  }

  .xs\:mb-10 {
    margin-bottom: 2.5rem;
  }

  .xs\:mb-14 {
    margin-bottom: 3.5rem;
  }

  .xs\:mb-1 {
    margin-bottom: 0.25rem;
  }

  .xs\:mb-12 {
    margin-bottom: 3rem;
  }

  .xs\:mb-2 {
    margin-bottom: 0.5rem;
  }

  .xs\:flex {
    display: flex;
  }

  .xs\:hidden {
    display: none;
  }

  .xs\:w-\[90\%\] {
    width: 90%;
  }

  .xs\:w-2\/3 {
    width: 66.666667%;
  }

  .xs\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .xs\:p-10 {
    padding: 2.5rem;
  }

  .xs\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }

  .xs\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .xs\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .xs\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .xs\:text-\[3rem\] {
    font-size: 3rem;
  }

  .xs\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .xs\:font-medium {
    font-weight: 500;
  }

  .xs\:font-normal {
    font-weight: 400;
  }

  .xs\:tracking-normal {
    letter-spacing: 0em;
  }
}

@media (min-width: 580px) {
  .custom2\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .custom2\:mb-0 {
    margin-bottom: 0px;
  }

  .custom2\:mr-5 {
    margin-right: 1.25rem;
  }

  .custom2\:mt-24 {
    margin-top: 6rem;
  }

  .custom2\:mb-14 {
    margin-bottom: 3.5rem;
  }

  .custom2\:w-4\/6 {
    width: 66.666667%;
  }

  .custom2\:w-\[90\%\] {
    width: 90%;
  }

  .custom2\:max-w-\[240px\] {
    max-width: 240px;
  }

  .custom2\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .custom2\:flex-row {
    flex-direction: row;
  }

  .custom2\:items-center {
    align-items: center;
  }

  .custom2\:justify-between {
    justify-content: space-between;
  }

  .custom2\:p-5 {
    padding: 1.25rem;
  }

  .custom2\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .custom2\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .custom2\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .custom2\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .custom2\:text-\[2\.5rem\] {
    font-size: 2.5rem;
  }
}

@media (min-width: 676px) {
  .sm\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .sm\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .sm\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .sm\:mt-96 {
    margin-top: 24rem;
  }

  .sm\:mt-0 {
    margin-top: 0px;
  }

  .sm\:mt-10 {
    margin-top: 2.5rem;
  }

  .sm\:mt-20 {
    margin-top: 5rem;
  }

  .sm\:mt-3 {
    margin-top: 0.75rem;
  }

  .sm\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\:block {
    display: block;
  }

  .sm\:flex {
    display: flex;
  }

  .sm\:grid {
    display: grid;
  }

  .sm\:h-\[20rem\] {
    height: 20rem;
  }

  .sm\:max-h-16 {
    max-height: 4rem;
  }

  .sm\:w-4\/5 {
    width: 80%;
  }

  .sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sm\:flex-row {
    flex-direction: row;
  }

  .sm\:flex-col {
    flex-direction: column;
  }

  .sm\:items-center {
    align-items: center;
  }

  .sm\:justify-center {
    justify-content: center;
  }

  .sm\:justify-between {
    justify-content: space-between;
  }

  .sm\:gap-20 {
    gap: 5rem;
  }

  .sm\:gap-5 {
    gap: 1.25rem;
  }

  .sm\:gap-10 {
    gap: 2.5rem;
  }

  .sm\:gap-x-7 {
    -moz-column-gap: 1.75rem;
         column-gap: 1.75rem;
  }

  .sm\:gap-y-10 {
    row-gap: 2.5rem;
  }

  .sm\:gap-y-20 {
    row-gap: 5rem;
  }

  .sm\:p-6 {
    padding: 1.5rem;
  }

  .sm\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .sm\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .sm\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .sm\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .sm\:pt-3 {
    padding-top: 0.75rem;
  }

  .sm\:pb-4 {
    padding-bottom: 1rem;
  }

  .sm\:pb-5 {
    padding-bottom: 1.25rem;
  }

  .sm\:pb-32 {
    padding-bottom: 8rem;
  }

  .sm\:text-center {
    text-align: center;
  }

  .sm\:text-8xl {
    font-size: 6rem;
    line-height: 1;
  }

  .sm\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .sm\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .sm\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sm\:text-\[4rem\] {
    font-size: 4rem;
  }
}

@media (min-width: 768px) {
  .md\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .md\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .md\:mt-32 {
    margin-top: 8rem;
  }

  .md\:mb-0 {
    margin-bottom: 0px;
  }

  .md\:mb-16 {
    margin-bottom: 4rem;
  }

  .md\:mt-24 {
    margin-top: 6rem;
  }

  .md\:mt-5 {
    margin-top: 1.25rem;
  }

  .md\:mt-2 {
    margin-top: 0.5rem;
  }

  .md\:mt-0 {
    margin-top: 0px;
  }

  .md\:mr-5 {
    margin-right: 1.25rem;
  }

  .md\:ml-5 {
    margin-left: 1.25rem;
  }

  .md\:flex {
    display: flex;
  }

  .md\:grid {
    display: grid;
  }

  .md\:h-\[18rem\] {
    height: 18rem;