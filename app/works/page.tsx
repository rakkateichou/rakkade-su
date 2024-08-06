"use client";

import { useState } from "react";

type Category = { name: string; iconSrc: string };

export default function Works() {
  const [snappedCategoryId, setSnappedCategoryId] = useState<number>(0);

  const categories: Array<Category> = [
    { name: "Android", iconSrc: "/android.svg" },
    { name: "Flutter", iconSrc: "/flutter.svg" },
    { name: "Web", iconSrc: "/web.svg" },
    { name: "DevOps", iconSrc: "/devops.svg" },
  ];

  return (
    <main className="flex">
      <aside></aside>
      <div className="flex-grow">
        <div className="slide-in-left sticky top-[68px] z-50 flex w-auto justify-center gap-8 bg-gray pt-3">
          {categories.map((category, index) => {
            let classNameTint = "invert";
            if (index === snappedCategoryId) {
              classNameTint = "sakura-3";
            }
            return (
              <a
                href={`#${category.name}`}
                className="cursor-pointer scroll-m-96 scroll-smooth"
              >
                <img
                  src={category.iconSrc}
                  className={`h-14 w-14 transition-all ${classNameTint}`}
                  onClick={() => setSnappedCategoryId(index)}
                />
              </a>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {categories.map((category, index) => {
            let classNameTint = "invert";
            let classNameTextColor = "text-white";

            if (index === snappedCategoryId) {
              classNameTint = "sakura-3";
              classNameTextColor = "text-sakura-3";
            }

            return (
              <div className="flex">
                <div className="slide-in-left -mt-1 flex h-[165px] flex-col items-center gap-3 bg-gray pl-2 pr-2 pt-1">
                  <img
                    src={category.iconSrc}
                    className={`ml-1 h-8 w-8 ${classNameTint}`}
                  />
                  <div
                    className={`rotate-180 text-lg [writing-mode:vertical-lr] ${classNameTextColor}`}
                  >
                    {category.name}
                  </div>
                </div>
                <div
                  id={category.name}
                  className="no-scrollbar slide-in-right flex w-[89vw] snap-x snap-proximity snap-normal gap-4 overflow-x-scroll"
                >
                  <div className="h-[160px] min-w-[300px] snap-center bg-sakura-2"></div>
                  <div className="mr-[70px] h-[160px] min-w-[300px] snap-center bg-sakura-1"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
