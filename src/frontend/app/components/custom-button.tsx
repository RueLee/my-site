"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";

export function NavBarButton({ href, name }: { href:string, name:string }) {
  return (
    <Link href={href} key={name} className="text-lg mx-2 px-6 py-3 relative rounded-lg group overflow-hidden">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-300 dark:bg-blue-950 group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-white">{name}</span>
    </Link>
  );
}

export function ResumePDFButton() {
  return (
    <Link href="/pdfs/RuleonResumeJanuary2026.pdf" target="_blank" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-xl group">
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gray-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Download PDF <FontAwesomeIcon icon={faDownload}/></span>
    </Link>
  )
}

export function StreamElementDonateButton() {
  return (
    <div className="flex justify-center">
      <Link href="https://streamelements.com/rueleerj/tip" target="_blank" className="transition ease-in-out duration-200 bg-indigo-400 dark:bg-indigo-950 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-900 px-1 mt-12">
        <div className="flex flex-row items-center justify-center">
          <p className="text-l tracking-wide font-semibold px-12">Donate on StreamElements</p>
          <Image src="/images/idsvKrMfLn_1734967029149.png" alt="Streamelement logo" width="50" height="50" className="rounded-full" />
        </div>
      </Link>
    </div>
  )
}

export function PayPalDonateButton() {
  return (
    <div className="flex justify-center">
      <Link href="https://www.paypal.com/donate/?business=BPHSTJULMM7DQ&no_recurring=0&currency_code=USD" target="_blank" className="transition ease-in-out duration-200 bg-sky-400 dark:bg-sky-950 rounded-full hover:bg-sky-600 dark:hover:bg-sky-900 px-1 mt-12">
        <div className="flex flex-row items-center justify-center">
          <p className="text-l tracking-wide font-semibold px-12">Donate on PayPal</p>
          <Image src="/images/PayPal-Monogram-FullColor-RGB.png" alt="Paypal logo" width="50" height="50" />
        </div>
      </Link>
    </div>
  )
}