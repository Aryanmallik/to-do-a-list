import Link from 'next/link';
export default function Header()
{
    return <header style={{padding:10}}>
        <nav>
            <ul style={{fontSize:20, fontFamily:'cursive'}}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </header>;
}
