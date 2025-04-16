// import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Script id='theme-switcher' strategy='beforeInteractive'>
//           {`
//           document.documentElement.classList.toggle("dark",localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// );
// `}
//         </Script>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `
    (function () {
      try {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = storedTheme || (prefersDark ? 'dark' : 'light');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (_) {}
    })();
  `;

  return (
    <Html>
      <Head />
      <body>
        {/* This script runs before the React app mounts */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
