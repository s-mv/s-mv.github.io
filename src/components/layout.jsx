import Section from "./section.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Resume from "./resume.jsx";
import Faq from "./faq.jsx";

const FAQ_ITEMS = [
  {
    question: "What is this site for?",
    answer: "A small personal corner for projects, notes, and experiments.",
  },
  {
    question: "What stack is this built with?",
    answer: "Preact + Vite with a very lightweight layout.",
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

              <NavLink href="/resume" currentRoute={route} onNavigate={onNavigate}>
                Resume
              </NavLink>

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
              <p class="mb-3">hey, i'm smv.</p>
              <p class="mb-3">i like building things, learning systems, and writing from time to time.</p>
              <p>this site is intentionally simple and fast.</p>
            </Section>
          )}

          {isFaq && <Faq items={FAQ_ITEMS} />}

          <Footer />
        </main>
      </div>
    </div>
  );
}
