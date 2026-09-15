// import localFont from "next/font/local";
// import "./globals.css";

// const iranYekan = localFont({
//   src: [
//     {
//       path: "./fonts/iranyekan-regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/iranyekan-medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/iranyekan-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "swap",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body className={`${iranYekan.className} min-h-full flex flex-col`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";

const iranYekan = localFont({
  src: [
    {
      path: "./fonts/iranyekan-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/iranyekan-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/iranyekan-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "فرادرس",
  description: "آموزش آنلاین فرادرس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}