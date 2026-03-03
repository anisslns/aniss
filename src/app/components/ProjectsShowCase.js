import projects from "../components/projects.json";
import Link from "next/link";
export default function ProjectsShowCase() {
  return (
    <>
      <div className="block  mt-5 font-light text-[14px] w-[95%] py-4 p pt-4   ">
        {projects.map((project, index) => (
          <Link
            href={project.href || "#"}
            key={index}
            className="flex  items-center  hover:opacity-50 hover:scale-99 transition ease-in-out py-5 pt-5 border-t  border-[#f0f0f0]"
          >
            <div className="flex-[1.5] whitespace-nowrap text-ellipsis overflow-hidden font-normal text-left ">{project.title}</div>
            <div className="flex-1 text-left whitespace-nowrap text-ellipsis overflow-hidden">{project.category}</div>
            <div className=" flex-1 text-right whitespace-nowrap text-ellipsis overflow-hidden ">{project.year}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
