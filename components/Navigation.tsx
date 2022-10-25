import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Shark family</Link>
                </li>
                <li>
                    <Link href="/add-member">Add member</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
