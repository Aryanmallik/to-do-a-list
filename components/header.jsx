import Link from 'next/link';
export default function Header()
{
    return <header style={{backgroundColor:'pink',padding:10}}>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </header>;
}
