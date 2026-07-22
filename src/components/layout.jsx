import Section from "./section.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Resume from "./resume.jsx";
import Faq from "./faq.jsx";

const FAQ_ITEMS = [
  {
    question: "What is this site for?",
    answer: "It's my site! So that people know that I exist.",
  },
  {
    question: "Please replace vite's default favicon for this site!",
    answer: "That's not a question!",
  },
  {
    question: "Do you work at google?",
    answer: <div
      className="inline underline">
      <a
        href="https://s-mv.github.io/blog/2026/05/09/life-at-google.html"
        target="_blank">
        Not this again...
      </a>
    </div>,
  },
];

function NavLink({ href, currentRoute, onNavigate, children }) {
  const isActive = currentRoute === href;

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
      }}
      class="mr-5 text-sm"
      style={{
        fontWeight: isActive ? 700 : 500,
        opacity: isActive ? 1 : 0.75,
      }}
    >
      {children}
    </a>
  );
}

export default function Layout({
  wallpaper,
  route,
  onNavigate,
  theme,
  onToggleTheme,
  onToggleWallpaper,
}) {
  const isHome = route === "/";
  const isAbout = route === "/about";
  const isResume = route === "/resume";
  const isFaq = route === "/faq";

  if (isResume) {
    return (
      <div class="resume-route-bg">
        <Resume />
      </div>
    );
  }

  return (
    <div
      class="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div
        class="min-h-screen"
        style={{
          backgroundColor: "var(--overlay)",
        }}
      >
        <main class="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16" style={{ color: "var(--text)" }}>
          <div class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav class="flex flex-wrap gap-y-2">
              <NavLink href="/" currentRoute={route} onNavigate={onNavigate}>
                Home
              </NavLink>

              <NavLink href="/about" currentRoute={route} onNavigate={onNavigate}>
                About
              </NavLink>

              {/* <NavLink href="/resume" currentRoute={route} onNavigate={onNavigate}>
                Resume
              </NavLink> */}

              <NavLink href="/faq" currentRoute={route} onNavigate={onNavigate}>
                FAQ
              </NavLink>
            </nav>

            <div class="flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded px-3 py-2 text-sm"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card)",
                }}
                onClick={onToggleWallpaper}
              >
                Switch wallpaper
              </button>

              <button
                type="button"
                class="rounded px-3 py-2 text-sm"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card)",
                }}
                onClick={onToggleTheme}
              >
                Theme: {theme}
              </button>
            </div>
          </div>

          {isHome && (
            <Home />
          )}

          {isAbout && (
            <Section title="About">
              <p class="text-xl font-bold mb-3">hey, I'm smv.</p>
              <p class="mb-3">
                I'm a student of computer science trying to understand more
                about systems, compilers and all things tech. I like reading,
                writing, and playing badminton when I can. Currently I am
                pursuing an MS by Research @ IITB.
              </p>
              <p class="mb-3">
                I also love watching cringe movies with smug disdain.
              </p>
            </Section>
          )}

          {isFaq && <Faq items={FAQ_ITEMS} />}

          <Footer />
        </main>
      </div>
    </div>
  );
}
