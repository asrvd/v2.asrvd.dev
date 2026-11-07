export default function NowPage() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Now ~</h2>
        <p className="text-xs text-zinc-400">November 2026</p>
        <p>
          Over the past month, I went to Bangalore for an in-office hackathon
          at WLDD and won a consolation prize, finally planned and went on a
          solo trip, and started a bulk at the gym after a long cut.
        </p>
        <p>Right now, I&apos;m:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mb-0">
          <li>Getting back to writing more code by hand</li>
          <li>
            Learning about AI agents by building with them, and sharing it on{" "}
            <a href="https://x.com/_asheeshh">X</a>
          </li>
          <li>Trying my hand at building Roblox games</li>
          <li>
            Looking forward to our company offsite at the end of the month and
            a concert in December
          </li>
        </ul>
      </section>
    </div>
  );
}
