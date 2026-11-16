import Section from "./section.jsx";

const rabbitHoles = [
  {
    date: "17/11/2026",
    title: <>hex0</>,
    url: "https://esolangs.org/wiki/Hex0",
  },
];

export default function RabbitHoles() {
  return (
    <Section title="Rabbit Holes">
      <ul class="space-y-4">
        {rabbitHoles.map((hole) => (
          <li key={hole.title} class="flex flex-col sm:flex-row sm:gap-6">
            <span class="shrink-0 text-sm opacity-60 sm:w-20">{hole.date}</span>

            <div class="font-semibold underline">
              {hole.url ? (
                <a href={hole.url} target="_blank" rel="noreferrer">
                  {hole.title}
                </a>
              ) : (
                hole.title
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
