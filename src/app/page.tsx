import Image from 'next/image';
import profilePic from '../../public/profile.jpg';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20">
      <Image
        src={profilePic}
        alt="Falak Javed"
        width={150}
        height={150}
        className="rounded-full border-4 border-purple-400"
      />
      <h1 className="text-4xl font-bold mt-6">Falak Javed</h1>
      <p className="mt-2 text-xl text-gray-600">Creative Developer & Designer</p>
      <p className="mt-4 max-w-xl">
        Welcome to my portfolio! I build modern and responsive websites with a professional touch.
      </p>
    </section>
  );
}