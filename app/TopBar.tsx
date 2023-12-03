import Link from 'next/link'
import Image from 'next/image'

const TopBar = () => {
    return (
        <nav className="topbar">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/ceop_logo_short.png" alt="CEOP Logo" width='30' height='30' />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CEOP</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <Link href="/" className="text-white" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/estudios" className="text-white">Estudios</Link>
                        </li>
                        <li>
                            <Link href="/quienes_somos" className="text-white">¿Quienes somos?</Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="text-white">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;