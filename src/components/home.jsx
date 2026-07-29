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
        (compiler enthusiast, systems enjoyer)
      </p>

      <p class="mb-6">
        I also sometimes write!!!
      </p>

      <div>
        <p className="mb-4">Currently part of <div className="inline underline"><a href="https://www.cse.iitb.ac.in/plato/" target="_blank">PLATO</a></div> @ IITB.</p>


        <p class="mb-1">Know more:</p>
        <ul className="list-disc pl-6 mb-6">
          {[
            { label: "More about me", url: "/about" },
            { label: "smv @ PLATO", url: "/plato" },
          ].map(({ label, url }) => (
            <li key={url}>
              <div className="inline underline">
                <a href={`#${url}`} class="mr-5">{label}</a>
              </div>
            </li>
          ))}
        </ul>


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
