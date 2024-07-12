"use client";
import WordRotate from "../custom/word-rotate";

export const Tagline = () => {

  return (
    <section className="w-full py-6 md:py-12 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 items-center text-center mx-auto">
              <div className="flex flex-col items-center justify-center h-[40rem] ">
                <p className="text-neutral-600 dark:text-neutral-200 text-xl md:text-3xl mb-10">
                  Have fun creating your own server for
                </p>
                <WordRotate words={["Playing games", "Group study", "Weekend Fun", "Sharing memes", "Family times"]} className="text-5xl md:text-7xl font-bold"/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}