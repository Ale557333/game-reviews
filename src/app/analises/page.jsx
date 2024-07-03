import Link from "next/link"
import Heading1 from "../components/heading-1"

const Reviews = () => {
    return (
        <div>
          <Heading1>Análises</Heading1>
            <nav>
                <ul>
                    <li>
                        <Link href="/analises/sonic-frontiers">Sonic Frontiers</Link>
                    </li>
                    <li>
                        <Link href="/analises/super-mario-bros-wonder">Super Mario Bross Wonder</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Reviews