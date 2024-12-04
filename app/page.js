import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link"
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-[82vh]">
      <section className="grid md:grid-cols-2 h-[50vh] ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in the market</p>
          <p className="md:px-12 text-center">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.</p>
          <div className='flex gap-3 text-white'>
                    <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold '>Try now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold '>Github</button></Link>
                </div>
        </div>
        <div className="flex justify-start relative ">
          <Image className="mix-blend-darken" alt="Image of the vector" src={"/vector.jpg"} fill="true"></Image>
        </div>
      </section>
    </main>
  );
}
