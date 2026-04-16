"use client";

import Image from "next/image"
import Link from "next/link"

function DefaultFormat({ src="", alt, name, role, startdate, enddate="", location="" }) {
  return (
    <div className="inline-flex flex-row">
      { src != "" ? <Image src={src} alt={alt} width={80} height={80} className="object-contain" /> : null }
      <div className="ml-8">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold">{role}</p>
        { location != "" ? <p>{location}&emsp;•&emsp;{`${startdate} - ${enddate}`}</p> : enddate != "" ? <p>{`${startdate} - ${enddate}`}</p> : <p>Issued on {startdate}</p> }
      </div>
    </div>
  )
}

export function DegreeBox({ src="", alt="", name, degree, startdate, enddate, location="" }) {
  return (
    <li className="l-border-list-background p-8">
      <DefaultFormat src={src} alt={alt} name={name} role={degree} startdate={startdate} enddate={enddate} location={location} />
    </li>
  );
}

export function ExperienceBox({ src="", alt="", name, role, startdate, enddate="", location="", descarray, sourcecode="" }) {
  return (
    <li className="l-border-list-background p-8">
      <DefaultFormat src={src} alt={alt} name={name} role={role} startdate={startdate} enddate={enddate} location={location} />
      <ul className="list-disc mx-12">
        {descarray.map((desc) => (
          <li key={desc.id}>{desc.comment}</li>
        ))}
      </ul>
      { sourcecode != "" ? <p className="mt-4">View <Link href={sourcecode} target="_blank" className="link-hover">Source Code</Link></p> : null }
    </li>
  )
}

export function ProjectBox({ src="", alt="", name, role, startdate, enddate="", location="", descarray, sourcecode="" }) {
  return (
    <li className="l-border-list-background p-8">
      <DefaultFormat src={src} alt={alt} name={name} role={role} startdate={startdate} enddate={enddate} location={location} />
      <ul className="list-disc mx-12">
        {descarray.map((desc) => (
          <li key={desc.id}>{desc.comment}</li>
        ))}
      </ul>
      { sourcecode != "" ? <p className="mt-4">View <Link href={sourcecode} target="_blank" className="link-hover">Source Code</Link></p> : null }
    </li>
  )
}

export function CertificateBox({ src="", alt="", name, organization, issuedate, link="" }) {
  return (
    <li className="l-border-list-background p-8">
      <div className="inline-flex flex-row">
        <Image src={src} alt={alt} width={80} height={80} className="object-contain" />
        <div className="ml-8">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="font-bold">{organization}</p>
          <p>{issuedate}</p>
          { link != "" ? <Link href={link} target="_blank" className="link-hover">Show Credentials</Link> : null }
        </div>
      </div>
    </li>
  )
}

export function SkillBox() {
  return (
    <div className="l-border-list-background p-8">
      <div className="ml-4">
        <h1 className="font-bold text-2xl">Programming Language</h1>
        <ul className="list-disc pl-4">
          <li>Python</li>
          <li>C/C++</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>Javascript/Typescript</li>
          <li>Squirrel</li>
        </ul>
      </div>
      <br></br>
      <div className="ml-4">
        <h1 className="font-bold text-2xl">Library (Python)</h1>
        <ul className="list-disc pl-4">
          <li>NumPy</li>
          <li>Matplotlib</li>
          <li>Keras</li>
          <li>Scikit Learn</li>
          <li>Pandas</li>
          <li>PyTorch</li>
          <li>Pyro</li>
        </ul>
      </div>
      <br></br>
      <div className="ml-4">
        <h1 className="font-bold text-2xl">Framework</h1>
        <ul className="list-disc pl-4">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Django</li>
          <li>ShadCN</li>
        </ul>
      </div>
      <br></br>
      <div className="ml-4">
        <h1 className="font-bold text-2xl">Developer Tools</h1>
        <ul className="list-disc pl-4">
          <li>Amazon Web Services (AWS)</li>
          <li>Cloudflare</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Vim</li>
          <li>Ubuntu</li>
          <li>Arch Linux</li>
          <li>Huggingface</li>
        </ul>
      </div>
    </div>
  )
}

export function AwardBox({ src="", alt="", name, organization, issuedate }) {
  return (
    <li className="l-border-list-background p-8">
      <DefaultFormat src={src} alt={alt} name={name} role={organization} startdate={issuedate} />
    </li>
  )
}