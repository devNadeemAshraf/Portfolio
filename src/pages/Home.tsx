import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="max-w-[1280px] w-full h-full flex-1 flex flex-col items-center justify-center gap-10">
      <section
        id="hero"
        className="w-full h-full flex flex-col items-start justify-center select-none pb-4"
      >
        <div className="w-full h-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-regular text-secondary-foreground animate-fade animate-ease-in-out">
            Hello, I'm Nadeem.
          </h4>
          <h1 className="opacity-1 max-w-[90%] w-full text-[56px] leading-[1] md:text-6xl font-bold text-primary animate-fade-up animate-once animate-ease-in-out">
            A Full Stack <span className="text-blue-600">Typescript</span>{" "}
            Developer,{" "}
            <span className="font-light text-muted-foreground">
              and a design enthusiast,{" "}
            </span>{" "}
            delivering excellence!
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Button variant={"outline"} size={"lg"}>
            Get In Touch <ChevronRight className="w-4 h-4 mt-1 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
