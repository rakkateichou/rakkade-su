import Link from "next/link";
import Tree from "../_components/tree";

export default function Home() {
  return (
    <main className="flex flex-row pl-36 ">
      <div className="max-w-[43.5vh]">
        <div className="text-5xl text-white flex justify-between">
          <b>Ruslan{' '}</b>
          <b>Veselov</b>
        </div>
        <div className="mt-1 flex items-center gap-2 group">
          <img
            src="/github.svg"
            className="w-[20px] h-[20px] opacity-60 transition-opacity group-hover:opacity-100"
          />
          <Link
            href="https://github.com/rakkateichou"
            className="text-white text-opacity-60 text-[20px] underline decoration-dashed transition-opacity group-hover:text-opacity-100"
          >
            @rakkateichou
          </Link>
        </div>
        <section className="mt-5">
          <article className="text-xl text-justify">
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
          <div className="text-xl flex-grow self-center">
            <b>Areas of interest</b>
          </div>
          <div className="flex justify-between pt-6">
            <div className="flex-col flex items-center gap-2">
              <img
                src="/react.svg"
                className="w-[48px] h-[48px] hover:rotate-180 transition-transform"
              />
              <span className="text-lg">Frontend</span>
            </div>
            <div className="flex-col flex items-center gap-2">
              <img src="/data-science.svg" className="w-[48px] h-[48px]" />
              <span className="text-lg">Data science</span>
            </div>
            <div className="flex-col flex items-center gap-2">
              <img src="/mobile.svg" className="w-[48px] h-[48px]" />
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
              <img src="/mail.svg" className="w-[32px] h-[32px]" />
              <a
                href="mailto:me@rakkade.su"
                className="text-xl ml-3 hover:text-sakura-3 transition-colors"
              >
                me@rakkade.su
              </a>
            </div>
            <div className="flex items-center">
              <img src="/telegram.svg" className="w-[32px] h-[32px]" />
              <a
                href="https://t.me/rakkatei"
                className="text-xl ml-3 hover:text-sakura-3 transition-colors"
              >
                @rakkatei
              </a>
            </div>
            <div className="flex items-center">
              <img src="/linkedin.svg" className="w-[32px] h-[32px]" />
              <a
                href="https://linkedin.com/in/ruslan-veselov/v"
                className="text-xl ml-3 hover:text-sakura-3 transition-colors"
              >
                @ruslan-veselov
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <Tree />
      </div>
    </main>
  );
}
