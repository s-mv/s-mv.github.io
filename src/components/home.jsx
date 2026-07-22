export default function Home() {
  return (
    <header class="mb-12 sm:mb-16">
      <h1 class="mb-5 text-4xl font-bold sm:text-5xl">
        hello world
      </h1>

      <p class="mb-2 text-lg sm:text-xl">
        this is the domain of smv
      </p>

      <p class="mb-2">
        (compiler dev, tech nerd)
      </p>

      <p class="mb-6">
        I also sometimes write!!!
      </p>

      <div>
        <p class="mb-1">Links:</p>
        <ul className="list-disc pl-6">
          {[
            { label: "github", url: "github.com/s-mv" },
            { label: "blog", url: "s-mv.github.io/blog" },
            { label: "linkedIn", url: "linkedin.com/in/smvdev" },
          ].map(({ label, url }) => (
            <li key={url}>
              {label}:{" "}
              <div className="inline underline">
                <a href={`https://${url}`} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
