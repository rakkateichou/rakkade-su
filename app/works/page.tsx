"use client";

import Image from "next/image";
import Link from "next/link";

type Project = { name: string; imageSrc: string; link: string };
type Category = { name: string; iconSrc: string; projects: Array<Project> };

export default function Works() {
  // const [snappedCategoryId, setSnappedCategoryId] = useState<number>(0);

  const androidProjects: Array<Project> = [
    {
      name: "The Guardian Reader",
      imageSrc: "/works/the-guardian-reader.webp",
      link: "https://github.com/rakkateichou/TheGuardianReader",
    },
    {
      name: "MuEmmiter",
      imageSrc: "/works/muemitter.webp",
      link: "https://github.com/rakkateichou/MuEmitter",
    },
  ];

  const flutterProjects: Array<Project> = [
    {
      name: "Daily Planner",
      imageSrc: "/works/daily-planner.webp",
      link: "https://github.com/rakkateichou/daily-planner",
    },
    {
      name: "Music Matcher",
      imageSrc: "/works/music-matcher.webp",
      link: "https://github.com/rakkateichou/music-matcher",
    },
  ];

  const webProjects: Array<Project> = [
    {
      name: "This Website",
      imageSrc: "/works/this-website.webp",
      link: "https://github.com/rakkateichou/rakkade-su",
    },
  ];

  const devOpsProjects: Array<Project> = [
    {
      name: "Jenkins CI/CD",
      imageSrc: "/works/jenkins-ci-cd.webp",
      link: "https://github.com/rakkateichou/devops-hello-world",
    },
  ];

  const categories: Array<Category> = [
    { name: "Android", iconSrc: "/images/android.svg", projects: androidProjects },
    { name: "Flutter", iconSrc: "/images/flutter.svg", projects: flutterProjects },
    { name: "Web", iconSrc: "/images/web.svg", projects: webProjects },
    { name: "DevOps", iconSrc: "/images/devops.svg", projects: devOpsProjects },
  ];

  return (
    <main className="flex">
      <aside></aside>
      <div className="flex-grow pt-3">
        {/* <div className="fade-in sticky top-[72px] z-40 flex w-auto justify-center gap-8 bg-gray pt-5 pb-3"> // todo scroll margin
          {categories.map((category, index) => {
            let classNameTint = "invert";
            if (index === snappedCategoryId) {
              classNameTint = "sakura-3";
            }
            return (
              <a
                href={`#${category.name}`}
                key={category.name}
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
        </div> */}
        <div className="mt-4 flex flex-col gap-6">
          {categories.map((category, index) => {
            let classNameTint = "invert";
            let classNameTextColor = "text-white";

            // if (index === snappedCategoryId) {
            //   classNameTint = "sakura-3";
            //   classNameTextColor = "text-sakura-3";
            // }

            return (
              <div className="ml-3 flex sm:ml-[15vw]" key={category.name}>
                <div className="slide-in-left -mt-1 flex w-11 flex-col items-center gap-3 bg-gray pl-2 pr-2 pt-1">
                  <Image
                    src={category.iconSrc}
                    width={32}
                    height={32}
                    className={`h-8 w-8 ${classNameTint}`}
                    alt={category.name}
                  />
                  <div
                    className={`rotate-180 text-lg [writing-mode:vertical-lr] ${classNameTextColor}`}
                  >
                    {category.name}
                  </div>
                </div>
                <div
                  id={category.name}
                  className="fade-in flex flex-wrap gap-4"
                >
                  {category.projects.map((project) => (
                    <Link href={project.link} key={project.name}>
                      <Image
                        src={project.imageSrc}
                        width={300}
                        height={160}
                        className="h-[160px] min-w-[300px]"
                        alt={project.name}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
