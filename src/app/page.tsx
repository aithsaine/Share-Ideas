import Image from 'next/image'

export default function Home() {
  return (
  <section className=' p-6 flex m-6 flex-col  items-center text-center justify-center '>
    <h1 className="text-5xl sm:text-7xl  font-bold">Discover <span className='sm:inline block'>&</span> Share</h1>
   <p className='p-4  text-5xl sm:text-8xl font-bold font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 font-bold'>Ideas Application</p>
    <p className=' p-4 sm:text-2xl text-xl  text-gray-600  leading-10 '>hello welcome you can share your ideas with Us, also you can give a software advices and new technologies, or every think or idea you want to share it with the fucking world</p>
    <input  type="text" placeholder='Write key word for searching ...' className='bg-w w-full rounded-xl border border-2 m-6 p-3'  />
  </section>
  )
}
