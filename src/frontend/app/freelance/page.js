import Link from "next/link";

export default function FreelancePage() {
  return (
    <div id="freelance-page">
      <section aria-label="Freelance Coming Soon">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Coming Soon...</h1>
          <p className="text-center">Currently, I'm not open for commission yet. As part of the trial process, I am working for the following organizations:</p>
          <div className="l-border-list-background p-8 my-8">
            <ul className="list-disc pl-4">
              <li>
                <p className="text-xl">Ability Family</p>
              </li>
              <li>
                <Link href="https://amcla.org/" target="_blank" className="text-xl link-hover">Antioch Mission Church</Link>
              </li>
            </ul>
          </div>
          <p className="text-center">I will have a form released on this page so check back again in the meantime.</p>
        </div>
      </section>
    </div>
  );
}