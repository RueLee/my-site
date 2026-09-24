import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const lemonmilk = localFont({
  src: [
    {
      path: "../../public/fonts/LEMONMILK-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LEMONMILK-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/LEMONMILK-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/LEMONMILK-BoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/LEMONMILK-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/LEMONMILK-MediumItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/LEMONMILK-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/LEMONMILK-LightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-lemon-milk"
})