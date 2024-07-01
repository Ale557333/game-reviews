import Link from "next/link"

const Reviews = () => {
    return (
        <div>
          <h1>Análises</h1>
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