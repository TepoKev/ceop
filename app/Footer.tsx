import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer flex flex-col items-center mx-auto w-full max-w-screen-xl py-6">
            {/*Social Media*/}
            <div className='flex flex-row items-center'>
                <Link href={"https://www.facebook.com/ceopfmp"} className='m-3' target="_blank">
                    <Image src={"/facebook_icon.png"} width={25} height={25} alt="facebook icon" />
                </Link>
                <Link href={"https://www.instagram.com/ceop_fmp/"} className='m-3' target="_blank">
                    <Image src={"/instagram_icon.png"} width={25} height={25} alt="instagram icon" />
                </Link>
                <Link href={"https://www.youtube.com/@centrodeestudiosdeopinionp7687"} className='m-3' target="_blank">
                    <Image src={"/youtube_icon.svg"} width={25} height={25} alt="youtube icon" />
                </Link>
            </div>
            {/*Copyright*/}
            <div className='sm:flex sm:flex-row'>
                <div className='flex flex-col items-center text-center mx-3 mb-3'>
                    <Image className='h-7 w-auto' src="/image_logo_ceop.png" alt="ceop logo" width={100} height={100} />
                    <label htmlFor="">Copyright 2024 © Centro de Estudios de Opinión Pública</label>
                </div>
                <div className='flex flex-col items-center text-center mx-3 mb-3'>
                    <Image className='h-7 w-auto' src="/minerva.png" alt="minerva" width={100} height={100} />
                    <label htmlFor="">Universidad de El Salvador - Facultad Multidiciplinaria Paracentral</label>
                </div>
            </div>
        </footer>
    )
}

export default Footer;