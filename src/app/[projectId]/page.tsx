"use client";

import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import { getSingleProject } from "../../../lib/data";
import { useParams, useRouter } from "next/navigation";
import YouTubePlayer from "./YoutubePlayer";

const ProjectPage = () => {
  const { projectId } = useParams();

  const item = getSingleProject(+projectId!);

  const router = useRouter();

  return (
    <>
      <Header />
      {item && (
        <div className="max-w-[1300px] mx-auto mt-10">
          {/* <Image
            src={item.imageUrl}
            alt={item.title}
            width={1286}
            height={724}
            className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
          /> */}

          <div className="mx-auto p-4">
            <YouTubePlayer url={item.videoLink} />
          </div>

          <div className="my-32 max-w-3xl mx-auto flex flex-col gap-4 px-4">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
            <h3>
              <strong>Role:</strong> {item.role}
            </h3>

            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                className="border border-white px-4 py-2 mr-auto block w-fit rounded hover:bg-black bg-white hover:text-white text-black transition-colors cursor-pointer"
              >
                {item.link.title}
              </a>
            )}
          </div>

          <div className="my-32 mx-auto flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Frames</h1>

            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {item.frames.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg group cursor-pointer"
                    style={{ aspectRatio: "358/286" }}
                  >
                    <Image
                      src={item}
                      alt={item}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-14">
              <span
                onClick={() => router.push("/all")}
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Back To the Works
              </span>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProjectPage;
