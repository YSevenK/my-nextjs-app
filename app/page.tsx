import Link from 'next/link';
import { inter, josefin_sans } from '@/app/ui/fonts';
import Image from 'next/image';
import OlympicLogo from '@/app/ui/logo';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-cyan-500 p-4 md:h-52">
        <OlympicLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p className={`${inter.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Y_Olympic.</strong> To introduce the Olympic Games-{' '}
            <a href="https://olympics.com/en/paris-2024" className="text-blue-500">
              Paris 2024 Olympics
            </a>
            , It's not just the Paris Olympics, of course.
          </p>
          {/* TODO 可能登录注册功能 */}
          {/* <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link> */}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* 添加图片 */}
          <Image
            src="/olympics.jpg"
            width={1000}
            height={650}
            className="block md:block mt-[-40px]"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="mt-5 flex h-8 shrink-0 items-center rounded-lg bg-cyan-300 p-4 md:h-20">
        <p className={`${josefin_sans.className} text-sm md:text-base text-indent-2rem`}>
          This is the first product I learned to develop independently, and I am learning and getting familiar with the model.It is currently under development.Thank you for your use and feedback, you can <strong>contact</strong> me by{'  '}<a href="mailto:ysevenk.k7@gmail.com" className="text-indigo-500">email</a> or {'  '}<a href="https://x.com/ysevenk_k7" className="text-indigo-500">X</a>
        </p>
      </div>
    </main>
  );
}