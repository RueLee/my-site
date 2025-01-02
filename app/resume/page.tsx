import Link from "next/link";

import { ResumePDFButton } from "../components/custom-button"
import { DegreeBox, ExperienceBox, CertificateBox, SkillBox, AwardBox } from "../components/resume-box";

interface DescriptionItem {
  id: number;
  comment: string;
}

const exp_description1: DescriptionItem[] = [
  { id: 1, comment: "Developed a Python GUI application to create and manage business invoices by parsing Google Calendar events to translate into Microsoft Excel." },
  { id: 2, comment: "Hosted database on Amazon Web Services using MySQL engine to store and manage clients invoice data."},
  { id: 3, comment: "Collaborated with the Quality Assurance team to and gather feedback from end users for quality improvements." }
]

export default function ResumePage() {
  return (
    <div id="resume-page">
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Printable Resume</h1>
          <div className="flex justify-center">
            <ResumePDFButton />
          </div>
          <p className="text-base mt-4 text-center">For DETAILED information/activity, refer to my <Link href="https://www.linkedin.com/in/ruleon-lee/" target="_blank" className="link-hover">LinkedIn</Link> page.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
          <ul>
            <DegreeBox src="/University_of_California,_Irvine_seal.svg.png" alt="UCI Logo Seal" name="University of California, Irvine" degree="Bachelor of Science, Computer Science" yearspan="Sep 2021 - Dec 2025" location="Irvine, CA" />
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
          <ul>
            <ExperienceBox src="/gw1.jpg" alt="Boston Edu Logo" name="Boston Education" role="Software Dev Contractor" yearspan="Dec 2023 - Present" location="Los Angeles, CA" descarray={exp_description1} sourcecode="https://github.com/Boston-Education/bosvoiceton-gui" />
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Certification</h1>
          <ul>
            <CertificateBox src="/coursera-logo.png" alt="Coursera Logo" name="Supervised Machine Learning: Regression and Classification" organization="Coursera" issuedate="Issued on Sep 2023" link="https://www.coursera.org/account/accomplishments/certificate/UM48QRR89EA9"/>
            <CertificateBox src="/linkedin-icon.svg" alt="LinkedIn Logo" name="Public Speaking" organization="LinkedIn Learning" issuedate="Issued on Sep 2023" />
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Skill</h1>
          <SkillBox />
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">Award</h1>
          <ul>
            <AwardBox src="/americorpslogo.jpg" alt="AmeriCorps Logo" name="The President's Volunteer Service Award" organization="AmeriCorps" issuedate="Oct 2023" />
          </ul>
        </div>
      </section>
    </div>
  );
}