import Heading1 from "@/app/components/heading-1"
import Image from "next/image"

const SuperMarioBrosWonder = () => {
    return (
        <>
          <Heading1>Super Mario Bros. Wonder - Análise</Heading1>
          <Image 
            src="/images/super-mario-bros-wonder.jpg" 
            alt="Super Mario Bros. Wonder" 
            width="640" 
            height="360" 
            priority
            className="rounded-lg mt-5 mb-5"
          />
          <p>Análise de Super Mario Bros. Wonder aqui</p>
        </>
    )
}

export default SuperMarioBrosWonder