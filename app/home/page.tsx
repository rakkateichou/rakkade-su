import Link from "next/link";
import Tree from "../_components/tree";

export default function Home() {
  return (
    <main className="flex flex-row pl-36">
      <div className="max-w-[43.5vh]">
        <div className="flex justify-between text-5xl text-white">
          <b>Ruslan </b>
          <b>Veselov</b>
        </div>
        <div className="group mt-1 flex items-center gap-2">
          <img
            src="/github.svg"
            className="h-[20px] w-[20px] opacity-60 transition-opacity group-hover:opacity-100"
          />
          <Link
            href="https://github.com/rakkateichou"
            className="text-[20px] text-white text-opacity-60 underline decoration-dashed transition-opacity group-hover:text-opacity-100"
          >
            @rakkateichou
          </Link>
        </div>
        <section className="mt-5">
          <article className="text-justify text-xl">
            <p>Hello,</p>
            <br />
            <p>
              This is my personal website with projects I am working on and some
              other stuff.
            </p>
            <p>Currently a student @ UWA</p>
          </article>
        </section>
        <div className="mt-10 flex flex-col">
          <div className="flex-grow self-center text-xl">
            <b>Areas of interest</b>
          </div>
          <div className="flex justify-between pt-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/react.svg"
                className="h-[48px] w-[48px] transition-transform hover:rotate-180"
              />
              <span className="text-lg">Frontend</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/data-science.svg" className="h-[48px] w-[48px]" />
              <span className="text-lg">Data science</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/mobile.svg" className="h-[48px] w-[48px]" />
              <span className="text-lg">Mobile dev</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl">
            <b>Contact me</b>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center">
              <img src="/mail.svg" className="h-[32px] w-[32px]" />
              <a
                href="mailto:me@rakkade.su"
                className="ml-3 text-xl transition-colors hover:text-sakura-3"
              >
                me@rakkade.su
              </a>
            </div>
            <div className="flex items-center">
              <img src="/telegram.svg" className="h-[32px] w-[32px]" />
              <a
                href="https://t.me/rakkatei"
                className="ml-3 text-xl transition-colors hover:text-sakura-3"
              >
                @rakkatei
              </a>
            </div>
            <div className="flex items-center">
              <img src="/linkedin.svg" className="h-[32px] w-[32px]" />
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
      <div className="flex flex-grow flex-col justify-center">
        <Tree />
      </div>
    </main>
  );
}
