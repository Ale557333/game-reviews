import Heading1 from "@/app/components/heading-1"
import Image from "next/image"

const SonicFrontiers = () => {
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
          <p>Análise Sonic Frontiers aqui</p>
        </>
    )
}

export default SonicFrontiers