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
    // { name: "blog", path: "/blog", ref: useRef(null) },
  ];

  const [currentRoute, setCurrentRoute] = useState(routes[0]);

  useEffect(() => {
    let currentLeft = currentRoute.ref.current?.offsetLeft ?? 0;
    let currentWidth = currentRoute.ref.current?.offsetWidth ?? 0;

    setSelectorLeft(currentLeft);
    setSelectorWidth(currentWidth);
  }, [currentRoute]);

  useEffect(() => {
    let route: MyRoute = routes.find((item) => item.path === pathname) ?? routes[0];
    setCurrentRoute(route);
  }, [pathname]);

  // useEffect(() => {
  //   document.addEventListener("keypress", (e) => {
  //     if (e.key === "w") {
  //       // FIXME: doesn't update for some reason
  //       let nextRouteIndex = (routes.findIndex((item) => item.name === currentRoute.name) + 1) % routes.length;
  //       let nextRoute = routes[nextRouteIndex];

  //       setCurrentRoute(nextRoute);
  //       router.replace(nextRoute.path);
  //     }
  //   });
  // }, [pathname]);


  return (
    <nav className="m-auto w-96 sm:w-[30rem]">
      <div className="relative flex justify-between px-6 py-1">
        {routes.map((item) => (
          <div
            key={item.name}
            ref={item.ref}
            onClick={() => {
              setCurrentRoute(item);
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
        className="mt-1 h-1 w-14 bg-sakura-1 transition-all sm:mt-0"
      />
      <div className="h-px bg-sakura-1" />
    </nav>
  );
}
