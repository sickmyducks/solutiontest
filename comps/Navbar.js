import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={70} height={70}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/solutions"><a>Solutions</a></Link>            
        </nav>
    );
}
 
export default Navbar;