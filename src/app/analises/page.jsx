import Link from "next/link"
import Heading1 from "../components/heading-1"
import Image from "next/image"

const reviews = [
    {
        title: 'Sonic Frontiers',
        path: '/analises/sonic-frontiers',
        img: '/images/sonic-frontiers.jpg'
    },
    {
        title: 'Super Mario Bross Wonder',
        path: '/analises/super-mario-bros-wonder',
        img: '/images/super-mario-bros-wonder.jpg'
    }
]

const Reviews = () => {
    return (
        <>
          <Heading1>Análises</Heading1>
            <ul className="flex gap-5 mt-3">
                {reviews.map(review => (
                    <li key={review.title} className="bg-slate-700 rounded-lg border border-slate-700 
                    hover:shadow-lg">
                        <Link href={review.path}>
                          <Image 
                            src={review.img} 
                            width="320" 
                            height="180"
                            alt=""
                            priority
                            className="rounded-t-lg" 
                          />
                            <h2 className="text-center text-lg font-semibold">{review.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>           
        </>
    )
}

export default Reviews