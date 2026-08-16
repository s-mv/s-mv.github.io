import Section from "./section.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Resume from "./resume.jsx";
import Faq from "./faq.jsx";
import { Fragment } from "preact";

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
    answer: (
      <div className="inline underline">
        <a
          href="https://s-mv.github.io/blog/2026/05/09/life-at-google.html"
          target="_blank"
        >
          Not this again...
        </a>
      </div>
    ),
  },
];

function NavLink({ href, currentRoute, children }) {
  const isActive = currentRoute === href;

  return (
    <a
      href={`#${href}`}
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
  theme,
  onToggleTheme,
  onToggleWallpaper,
}) {
  const isHome = route === "/";
  const isAbout = route === "/about";
  const isResume = route === "/resume";
  const isPlato = route === "/plato";
  const isFaq = route === "/faq";

  if (isResume) {
    return (
      <div class="resume-route-bg">
        <Resume />
      </div>
    );
  }

  let now, hour, mightBeInLab;
  let DAYS, SCHEDULE, TIMES, availability;

  if (isPlato) {
    DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    SCHEDULE = {
      Mon: [["09:00", "11:30"], ["14:00", "17:00"]],
      Tue: [["09:00", "11:30"], ["17:30", "19:00"]],
      Wed: [["09:00", "11:00"], ["17:00", "19:00"]],
      Thu: [["09:00", "11:00"], ["17:00", "19:00"]],
      Fri: [["09:00", "11:00"], ["17:00", "19:00"]],
      Sat: [["15:00", "18:00"]],
      Sun: [["15:00", "18:00"]],
    };

    const toMinutes = (t) => {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    };

    TIMES = Array.from({ length: 19 }, (_, i) => {
      const mins = 9 * 60 + i * 30;

      return {
        label: `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(
          mins % 60
        ).padStart(2, "0")}`,
        minutes: mins,
      };
    });

    availability = (day, startMinutes) => {
      const endMinutes = startMinutes + 15;

      const block = SCHEDULE[day].find(([start, end]) => {
        const blockStart = toMinutes(start);
        const blockEnd = toMinutes(end);

        return startMinutes >= blockStart && endMinutes <= blockEnd;
      });

      if (!block) {
        return "none";
      }

      const blockStart = toMinutes(block[0]);
      const blockEnd = toMinutes(block[1]);

      if (startMinutes === blockStart || endMinutes === blockEnd) {
        return "partial";
      }

      return "full";
    };

    now = new Date();
    hour = now.getHours() + now.getMinutes() / 60;

    const today = DAYS[now.getDay() === 0 ? 6 : now.getDay() - 1];

    mightBeInLab = SCHEDULE[today].some(
      ([start, end]) =>
        hour >= toMinutes(start) / 60 &&
        hour < toMinutes(end) / 60
    );
  }

  const availabilityLabel = (status) => {
    switch (status) {
      case "full":
        return "available";
      case "partial":
        return "maybe available";
      default:
        return "not available";
    }
  };

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
        <main
          class="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16"
          style={{ color: "var(--text)" }}
        >
          <div class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav class="flex flex-wrap gap-y-2">
              <NavLink href="/" currentRoute={route}>
                Home
              </NavLink>

              <NavLink href="/about" currentRoute={route}>
                About
              </NavLink>

              {/* <NavLink href="/resume" currentRoute={route}>
                Resume
              </NavLink> */}

              <NavLink href="/faq" currentRoute={route}>
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

          {isHome && <Home />}

          {isAbout && (
            <Section title="About">
              <p class="text-xl font-bold mb-3">
                hey, I'm Shreerang (aka smv).
              </p>

              <p class="mb-3">
                I'm a student of computer science trying to understand more
                about systems and compilers. I like reading, writing, and
                playing badminton when I can. Currently I am pursuing an MS by
                Research @ IITB.
              </p>

              <p class="mb-3">
                You can call me Shreerang or anything you like, I am used to
                nicknames since many people mispronouce my name (somehow).
              </p>

              <p class="mb-3">
                I also love watching cringe movies with smug disdain.
              </p>
            </Section>
          )}

          {isPlato && (
            <Section title="smv @ PLATO">
              <p class="text-xl font-bold mb-3">my work @ PLATO</p>

              <p class="mb-3">
                I'm currently working on a small part of CoS-SSA (particularly
                the implementation of the data dependence graph) as well as
                SLIM IR at PLATO.
              </p>

              <p class="mb-3">
                Tentatively I am in the lab in the given time slots.
              </p>

              <p class="mb-3">
                <strong>Current status:</strong>{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                    textDecorationColor: mightBeInLab
                      ? "rgba(34, 197, 94, 0.65)"
                      : "rgba(239, 68, 68, 0.55)",
                  }}
                >
                  {mightBeInLab
                    ? "There's a good chance I'm in the lab."
                    : "I'm probably not in the lab right now."}
                </span>
              </p>

              <div class="mb-3 overflow-x-auto">
                <table
                  class="border-collapse text-xs"
                  style={{
                    border: "1px solid var(--border)",
                    tableLayout: "fixed",
                    width: "max-content",
                  }}
                >
                  <thead>
                    <tr>
                      <th class="px-2 py-1"></th>

                      {DAYS.map((day) => (
                        <th
                          key={day}
                          class="px-2 py-1 text-center"
                          style={{
                            border: "1px solid var(--border)",
                            width: "40px",
                          }}
                        >
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {TIMES.map(({ label, minutes }) => (
                      <Fragment key={label}>
                        <tr>
                          <td
                            rowSpan={2}
                            class="px-2 py-1 text-right align-middle"
                            style={{
                              border: "1px solid var(--border)",
                            }}
                          >
                            {label}
                          </td>

                          {DAYS.map((day) => {
                            const status = availability(day, minutes);

                            return (
                              <td
                                key={`${day}-${minutes}`}
                                title={availabilityLabel(status)}
                                style={{
                                  width: "18px",
                                  height: "9px",
                                  borderLeft: "1px solid var(--border)",
                                  borderRight: "1px solid var(--border)",
                                  borderTop: "1px solid var(--border)",
                                  borderBottom: "none",
                                  backgroundColor:
                                    status === "full" || status === "partial"
                                      ? "var(--text)"
                                      : "transparent",
                                  opacity:
                                    status === "full"
                                      ? 0.7
                                      : status === "partial"
                                        ? 0.25
                                        : 1,
                                }}
                              />
                            );
                          })}
                        </tr>

                        <tr>
                          {DAYS.map((day) => {
                            const status = availability(day, minutes + 15);

                            return (
                              <td
                                key={`${day}- ${minutes + 15} `}
                                title={availabilityLabel(status)}
                                style={{
                                  width: "18px",
                                  height: "9px",
                                  borderLeft: "1px solid var(--border)",
                                  borderRight: "1px solid var(--border)",
                                  borderBottom: "1px solid var(--border)",
                                  backgroundColor:
                                    status === "full" || status === "partial"
                                      ? "var(--text)"
                                      : "transparent",
                                  opacity:
                                    status === "full"
                                      ? 0.7
                                      : status === "partial"
                                        ? 0.25
                                        : 1,
                                }}
                              />
                            );
                          })}
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <div class="text-xs opacity-70">
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                    textDecorationColor: "rgba(34, 197, 94, 0.65)",
                  }}
                >
                  good chance
                </span>{" "}
                ·{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                    textDecorationColor: "rgba(250, 204, 21, 0.65)",
                  }}
                >
                  small chance
                </span>{" "}
                ·{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                    textDecorationColor: "rgba(239, 68, 68, 0.55)",
                  }}
                >
                  probably not
                </span>
              </div>
            </Section>
          )}

          {isFaq && <Faq items={FAQ_ITEMS} />}

          <Footer />
        </main>
      </div>
    </div>
  );
}
