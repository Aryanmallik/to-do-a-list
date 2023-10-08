    import Link from 'next/link';
    export default function Header()
    {
        return <header style={{padding:10, marginLeft:'42%'}}>
            <nav>
                <ul style={{fontSize:20, fontFamily:'monospace'}}>
                    <li><Link style={{color:'black'}} href="/">Home</Link></li>
                    <li><Link style={{color:'black'}} href="/about">About</Link></li>
                </ul>
            </nav>
        </header>;
    }
