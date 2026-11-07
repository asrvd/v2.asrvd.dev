const experience = [
  {
    company: "Imagined (acquired by WLDD)",
    role: "Software Development Engineer",
    period: "Jan 2026 – Present",
    points: [
      "Own the backend and infrastructure for Tatva, a consumer app, end to end, from data model to production.",
      "Scaled it to handle 100K+ concurrent users at launch, and brought p95 API latency from over 100ms to under 5ms.",
      "Built a media service that auto-generates branded images and videos for every post.",
      "Set up centralised logging and monitoring, and run day-to-day production operations.",
      "Built the website and dashboard for The Offline Network.",
      "Built an invite-only waitlist with referral codes for Protocol32's Shopify store.",
      "Previously worked on a fintech product built with Java and Spring Boot, including its staging environment and deployment pipeline.",
    ],
  },
  {
    company: "TravelArrow",
    role: "Software Engineer (Contract)",
    period: "Jan 2024 – Sep 2026",
    points: [
      "Built core features and UI for a travel Chrome extension used by 300K+ people.",
      "Designed remotely hosted popups so the team could ship UI changes without an extension release.",
      "Built roomunlocker.com, which compares hotel deals across major booking sites in one search.",
    ],
  },
  {
    company: "GroVr",
    role: "SDE Intern",
    period: "Sep 2023 – Nov 2023",
    points: ["Built the full-stack MVP end to end."],
  },
];

const projects = [
  {
    name: "create-t3-app",
    href: "https://github.com/t3-oss/create-t3-app",
    description: "Maintainer of the CLI for scaffolding full-stack, typesafe Next.js apps.",
  },
  {
    name: "Catppuccin",
    href: "https://github.com/catppuccin",
    description: "Maintained several ports of the open-source pastel colour theme.",
  },
  {
    name: "Supathreads",
    description: "Turns long-form blog posts into Twitter threads. Won Best Use of AI at Supabase Launch Week 7.",
  },
  {
    name: "Munchwise",
    description: "AI calorie tracker. Won Most Visually Pleasing at Supabase Launch Week 13.",
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Work ~</h2>
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div key={job.company} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h4 className="m-0">{job.company}</h4>
                <span className="text-xs text-zinc-400">{job.period}</span>
              </div>
              <p className="m-0 text-zinc-400">{job.role}</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 m-0">
                {job.points.map((point) => (
                  <li key={point} className="text-zinc-200">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Open source & projects ~</h2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-1">
              <h4 className="m-0">
                {project.href ? (
                  <a href={project.href}>{project.name}</a>
                ) : (
                  project.name
                )}
              </h4>
              <p className="m-0 text-zinc-200">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Elsewhere ~</h2>
        <ul className="list-disc pl-5 flex flex-col gap-1 m-0">
          <li className="text-zinc-200">Won the Arweave Hacker House, Bangalore (2025).</li>
          <li className="text-zinc-200">
            Wrote 31 articles on <a href="https://dev.to/asheeshh">DEV</a>, with 200K+ views and 4.4K+ followers.
          </li>
          <li className="text-zinc-200">Grew a YouTube channel to 2K+ subscribers.</li>
        </ul>
      </section>
    </div>
  );
}
