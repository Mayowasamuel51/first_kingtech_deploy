import Image from 'next/image'
import instructors from  '../../../../public/images/instructors.jpg'
    // '../../../public/images/instructors.jpg'

export default function Instructors() {
    return (
        <section className=" grid grid-cols-1 lg:grid-cols-2">
            <Image src={instructors} alt="group of instructors" className=' w-full h-full' />
            <div className=' px-5 py-7 bg-black flex flex-col gap-y-5 md:py-14 md:px-14 lg:gap-y-10'>
                <h2 className=' capitalise text-xl font-semibold text-white md:text-3xl'>
                    Instructors
                </h2>
                <p className=' text-white text-sm lg:text-base'>
                    Our experienced instructors are dedicated to helping you succeed in the field of cybersecurity. They teach you essential test-taking techniques and provide real-world scenarios to enhance your understanding of security practices. They'll also guide you through the methodologies used to improve endpoint security, minimizing or negating improper configurations. Our instructors are passionate, motivated, and simplify even the most complex security concepts. Sign up for our course today to learn from the best in the industry.
                </p>
            </div>
        </section>
    )
}