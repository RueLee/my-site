"use client";

import Image from "next/image"
import Link from "next/link"

const li_className = "bg-gray-200 dark:bg-gray-950 p-8 my-8 rounded-xl border-l-4 border-black dark:border-white bg-gradient-to-r from-gray-400 dark:from-gray-700 via-transparent"

interface DescriptionItem {
  id: number;
  comment: string;
}

function DefaultFormat({ src="", alt, name, role, startdate, enddate="", location="" }: { src?:string, alt:string, name:string, role:string, startdate:string, enddate?:string, location?:string }) {
  return (
    <div className="inline-flex flex-row">
      { src != "" ? <Image src={src} alt={alt} width={80} height={80} className="rounded object-contain" /> : null }
      <div className="ml-8">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold">{role}</p>
        { location != "" ? <p>{location}&emsp;•&emsp;{`${startdate} - ${enddate}`}</p> : enddate != "" ? <p>{`${startdate} - ${enddate}`}</p> : <p>Issued on {startdate}</p> }
      </div>
    </div>
  )
}

export function DegreeBox({ src="", alt="", name, degree, startdate, enddate, location="" }: { src?:string, alt?:string, name:string, degree:string, startdate:string, enddate:string, location?:string }) {
  return (
    <li className={li_className}>
      <DefaultFormat src={src} alt={alt} name={name} role={degree} startdate={startdate} enddate={enddate} location={location} />
    </li>
  );
}

export function ExperienceBox({ src="", alt="", name, role, startdate, enddate="", location="", descarray, sourcecode="" }: { src?:string, alt?:string, name:string, role:string, startdate:string, enddate?:string, location?:string, descarray:Array<DescriptionItem>, sourcecode?:string }) {
  return (
    <li className={li_className}>
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

export function ProjectBox({ src="", alt="", name, role, startdate, enddate="", location="", descarray, sourcecode="" }: { src?:string, alt?:string, name:string, role:string, startdate:string, enddate?:string, location?:string, descarray:Array<DescriptionItem>, sourcecode?:string }) {
  return (
    <li className={li_className}>
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

export function CertificateBox({ src="", alt="", name, organization, issuedate, link="" }: {src?:string, alt?:string, name:string, organization:string, issuedate:string, link?:string }) {
  return (
    <li className={li_className}>
      <div className="inline-flex flex-row">
        <Image src={src} alt={alt} width={80} height={80} className="rounded object-contain" />
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
    <div className={li_className}>
      <div className="ml-4">
        <h1 className="font-bold text-2xl">Programming Language</h1>
        <ul className="list-disc pl-4">
          <li>Python</li>
          <li>C++</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>Typescript</li>
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
          <li>Django</li>
          <li>Tailwind CSS</li>
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
        </ul>
      </div>
    </div>
  )
}

export function AwardBox({ src="", alt="", name, organization, issuedate }: { src?:string, alt?:string, name:string, organization:string, issuedate:string }) {
  return (
    <li className={li_className}>
      <DefaultFormat src={src} alt={alt} name={name} role={organization} startdate={issuedate} />
    </li>
  )
}