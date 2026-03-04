import Image from "next/image"
import Link from "next/link"

import { TwitchPlayer } from "../components/twitch-embed"
import { StreamElementDonateButton } from "../components/custom-button"

function PCSpectacles({ src, alt, productname, storeurl }: { src:string, alt:string, productname:string, storeurl:string }) {
  return (
    <li className="flex flex-row items-center bg-gray-200 dark:bg-gray-950 bg-gradient-to-r from-gray-400 dark:from-gray-500 via-transparent rounded-xl border-l-4 border-black dark:border-white m-2">
      <Image src={src} alt={alt} width={100} height={100} className="rounded-l-xl ml-2"/>
      <div className="px-6">
        <Link href={storeurl} target="_blank" className="text-2xl font-bold hover:underline">{productname}</Link>
      </div>
    </li>
  )
}

function Peripherals({ src, alt, productname, storeurl }: { src:string, alt:string, productname:string, storeurl:string }) {
  return (
    <li className="flex flex-row items-center bg-gray-200 dark:bg-gray-950 bg-gradient-to-r from-gray-400 dark:from-gray-500 via-transparent rounded-xl border-l-4 border-black dark:border-white m-2">
      <Image src={src} alt={alt} width={100} height={100} className="rounded-l-xl ml-2"/>
      <div className="px-6">
        <Link href={storeurl} target="_blank" className="text-2xl font-bold hover:underline">{productname}</Link>
      </div>
    </li>
  )
}

export default function TwitchPage() {
  return (
    <div id="twitch-page">
      <section aria-label="Twitch Page Description">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Streaming</h1>
          <p className="text-xl text-center">I enjoy streaming! I mainly play games and occassionally some other stuffs during live. Feel free to tune in! :)</p>
        </div>
      </section>
      <section aria-label="Twitch embed display">
        <div className="container">
          <TwitchPlayer channel="rueleerj" parent="www.ruleonlee.com" />
          <StreamElementDonateButton />
          <p className="italic text-center tracking-wide mt-4">PLEASE NOTE that donations are FINAL AND NON-REFUNDABLE!!!</p>
        </div>
      </section>
      <section aria-label="PC Spectacles and Peripherals Section">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="col-box-50">
              <h1 className="text-4xl font-bold my-8 text-center">Current PC Spectacles</h1>
              <ul>
                {/* Image Sources: https://icons8.com/icons/authors/klDPcgJ2LxJD/febrian-hidayat/external-febrian-hidayat-outline-color-febrian-hidayat/external-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat */}
                <PCSpectacles
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Cooler-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Cooler-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="AMD Ryzen 5 5600G"
                  storeurl="https://www.amazon.com/AMD-Ryzen-5600G-12-Thread-Processor/dp/B092L9GF5N"
                />
                <PCSpectacles
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Random-Access-Memory-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Random-Access-Memory-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="G.SKILL Ripjaws V Series DDR4 32GB"
                  storeurl="https://www.amazon.com/G-SKILL-Ripjaws-PC4-25600-Platform-F4-3200C16D-32GVK/dp/B0171GQR0C?th=1"
                />
                <PCSpectacles
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Video-Graphics-Adapter-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Video-Graphics-Adapter-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="NVIDIA GeForce RTX 3060"
                  storeurl="https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/"
                />
                <PCSpectacles
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Power-Supply-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Power-Supply-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="HP Cooler Master 500W 80 Bronze"
                  storeurl="https://www.coolermaster.com/en-global/products/masterwatt-lite-500w-full-range/"
                />
                <PCSpectacles
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Solid-State-Drive-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Solid-State-Drive-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="Western Digital 1TB PC SN530 NVMe SSD"
                  storeurl="https://www.amazon.com/PC-SN530-SDBPNPZ-Solid-State/dp/B09HQH6ZWL"
                />
              </ul>
            </div>
            <div className="col-box-50">
              <h1 className="text-4xl font-bold my-8 text-center">Current Peripherals</h1>
              <ul>
                <Peripherals
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Monitor-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Monitor-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="BenQ ZOWIE XL2546K (Primary)*"
                  storeurl="https://www.amazon.com/BenQ-Professional-Gaming-Esport-Monitor/dp/B0CZLCQZXR"
                />
                <Peripherals
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Curved-Monitor-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Curved-Monitor-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="Dell S3220DGF (Secondary)"
                  storeurl="https://www.amazon.co.uk/Dell-S3220DGF-Anti-Glare-Edgelight-FREE-Sync/dp/B07XTVYDC3"
                />
                <Peripherals
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Mouse-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat-2.png"
                  alt="external-Mouse-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat-2"
                  productname="Logitech G PRO X SUPERLIGHT"
                  storeurl="https://www.amazon.com/Logitech-SUPERLIGHT-Ultra-Lightweight-Programmable-Compatible/dp/B087LXCTFJ?th=1"
                />
                <Peripherals
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Keyboard-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat-2.png"
                  alt="external-Keyboard-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat-2"
                  productname="Royal Kludge RK84"
                  storeurl="https://rkgamingstore.com/products/rk84-75-percent-keyboard?variant=42776935530717"
                />
                <Peripherals
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/100/external-Headphones-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="external-Headphones-pc-gaming-febrian-hidayat-outline-color-febrian-hidayat"
                  productname="HyperX Cloud Alpha"
                  storeurl="https://hyperx.com/products/hyperx-cloud-alpha?variant=41031691239581"
                />
              </ul>
              <p className="mt-4 italic">* Product Discontinued. Linked to relevant item instead!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}