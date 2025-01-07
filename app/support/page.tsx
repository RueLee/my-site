import { StreamElementDonateButton, PayPalDonateButton } from "../components/custom-button";

export default function SupportPage() {
  return (
    <div id="support-page">
      <section aria-label="Support">
        <div className="container">
          <StreamElementDonateButton />
          <PayPalDonateButton />
          <p className="italic text-center tracking-wide mt-4">PLEASE NOTE that donations are FINAL AND NON-REFUNDABLE!!!</p>
          <p className="text-xl font-bold text-center mt-10">More method coming soon...</p>
        </div>
      </section>
    </div>
  )
}