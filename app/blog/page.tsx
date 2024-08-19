type BlogPost = { title: string; date: string; link: string };

export default function Blog() {
  const blogPosts: Array<BlogPost> = [
    {
      title: "Exporting a Minecraft tree to Three.js",
      date: "03/08/24",
      link: "/exporting-a-minecraft-tree-to-three-js",
    },
  ];

  return (
    <main className="fade-in mt-10 px-6 sm:mt-10 sm:px-72">
      {blogPosts.map((post) => (
        <div key={post.link}>
          <div className="flex justify-between text-nowrap text-xl">
            <a href={post.link} className="w-64 truncate sm:w-full">
              {post.title}
            </a>
            <div className="opacity-75">{post.date}</div>
          </div>
          <div className="mt-1 h-px bg-sakura-1" />
        </div>
      ))}
    </main>
  );
}
