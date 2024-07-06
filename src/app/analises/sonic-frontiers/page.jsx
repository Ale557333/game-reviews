import { readFile } from 'node:fs/promises'
import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Image from "next/image"
import Heading1 from "@/app/components/heading-1"

const SonicFrontiersReview = async () => {
  const review = await 
    readFile(`${process.cwd()}/src/app/content/reviews/sonic-frontiers.md`, {encoding: 'utf-8'})

    return (
        <>
          <Heading1>Sonic Frontiers Análise</Heading1>
          <Image 
            src="/images/sonic-frontiers.jpg" 
            alt="Sonic Frontiers" 
            width="640" 
            height="360" 
            priority 
            className="rounded-lg mt-5 mb-5"
          />
          <article 
            className="prose text-slate-200 prose-strong:text-slate-200"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(parse(review)) }} 
          />
        </>
    )
}

export default SonicFrontiersReview