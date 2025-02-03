import Link from "next/link";
import Tree from "../_components/tree";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto mt-6 flex flex-row items-center justify-center sm:mt-10">
      <div className="slide-in-left max-w-[88vw] sm:max-w-[320px]">
        <div className="flex justify-between text-[42px] text-white">
          <b>Ruslan Veselov</b>
        </div>
        <div className="group -mt-2 flex items-center gap-2 sm:mt-1">
          <Image
            src="/images/github.svg"
            width={20}
            height={20}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            alt="github"
          />
          <Link
            href="https://github.com/rakkateichou"
            className="text-[20px] text-white text-opacity-60 underline decoration-dashed transition-opacity group-hover:text-opacity-100"
          >
            @rakkateichou
          </Link>
        </div>
        <section className="mt-4 sm:mt-5">
          <article className="text-justify text-xl leading-relaxed sm:leading-normal">
            <p>Hello,</p>
            <br />
            <p>
              This is my personal website with projects I am working on and some
              other stuff.
            </p>
            <p>Currently a student @ UWA</p>
          </article>
        </section>
        <div className="mt-5 flex flex-col sm:mt-10">
          <div className="flex-grow text-xl sm:self-center">
            <b>Areas of interest</b>
          </div>
          <div className="mt-3 flex flex-col justify-between gap-3 sm:mt-6 sm:flex-row sm:gap-0">
            <div className="flex flex-row items-center gap-2 sm:flex-col">
              <Image
                src="/images/react.svg"
                width={48}
                height={48}
                className="transition-transform hover:rotate-180"
                alt="react"
              />
              <span className="text-xl sm:text-lg">Frontend</span>
            </div>
            <div className="flex flex-row items-center gap-2 sm:flex-col">
              <Image
                src="/images/data-science.svg"
                width={48}
                height={48}
                alt="data science"
              />
              <span className="text-xl sm:text-lg">Data science</span>
            </div>
            <div className="flex flex-row items-center gap-2 sm:flex-col">
              <Image src="/images/mobile.svg" width={48} height={48} alt="mobile" />
              <span className="text-xl sm:text-lg">Mobile dev</span>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-10">
          <div className="text-xl">
            <b>Contact me</b>
          </div>
          <div className="mt-3 flex flex-col gap-3 sm:mt-5">
            <div className="flex items-center">
              <Image
                src="/images/mail.svg"
                width={48}
                height={48}
                className="sm:h-[32px] sm:w-[32px]"
                alt="mail"
              />
              <a
                href="mailto:rv@rakkade.su"
                className="ml-3 text-xl transition-colors hover:text-sakura-3"
              >
                rv@rakkade.su
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/telegram.svg"
                width={48}
                height={48}
                className="sm:h-[32px] sm:w-[32px]"
                alt="telegram"
              />
              <a
                href="https://t.me/rakkatei"
                className="ml-3 text-xl transition-colors hover:text-sakura-3"
              >
                @rakkatei
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/linkedin.svg"
                width={48}
                height={48}
                className="sm:h-[32px] sm:w-[32px]"
                alt="linkedin"
              />
              <a
                href="https://linkedin.com/in/ruslan-veselov/v"
                className="ml-3 text-xl transition-colors hover:text-sakura-3"
              >
                @ruslan-veselov
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[2rem] top-[27rem] flex h-[13rem] w-[10rem] justify-center sm:static sm:h-[30rem] sm:w-[30rem]">
        <Tree />
      </div>
    </main>
  );
}
