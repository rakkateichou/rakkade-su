"use client";

import { usePathname, useRouter } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";

type MyRoute = { name: string; path: string; ref: RefObject<any> };

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();

  const selectorRef = useRef<HTMLDivElement>(null);
  const [selectorWidth, setSelectorWidth] = useState<number>(0);
  const [selectorLeft, setSelectorLeft] = useState<number>(0);

  const routes: Array<MyRoute> = [
    { name: "home", path: "/home", ref: useRef(null) },
    { name: "works", path: "/works", ref: useRef(null) },
    { name: "blog", path: "/blog", ref: useRef(null) },
  ];

  const [currentRef, setCurrentRef] = useState(routes[0].ref);

  useEffect(() => {
    let currentLeft = currentRef.current?.offsetLeft ?? 0;
    let currentWidth = currentRef.current?.offsetWidth ?? 0;

    setSelectorLeft(currentLeft);
    setSelectorWidth(currentWidth);
  }, [currentRef]);

  useEffect(() => {
    let ref: RefObject<any> =
      routes.find((item) => item.path === pathname)?.ref ?? routes[0].ref;
    setCurrentRef(ref);
  }, [pathname]);

  return (
    <nav className="m-auto w-[30rem]">
      <div className="relative flex justify-between px-6 py-1">
        {routes.map((item) => (
          <div
            key={item.name}
            ref={item.ref}
            onClick={() => {
              setCurrentRef(item.ref);
              router.replace(item.path);
            }}
            className="cursor-pointer text-2xl"
          >
            {item.name}
          </div>
        ))}
      </div>
      <div
        ref={selectorRef}
        style={{ marginLeft: selectorLeft ?? 0, width: selectorWidth ?? 0 }}
        className="h-1 w-14 bg-sakura-1 transition-all"
      />
      <div className="h-px bg-sakura-1" />
    </nav>
  );
}
