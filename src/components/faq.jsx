import Section from "./section.jsx";

export default function Faq({ items }) {
  return (
    <Section title="FAQ">
      {items.map((item, index) => (
        <div class={index < items.length - 1 ? "mb-5" : ""} key={item.question}>
          <p class="mb-1 font-semibold">Q: {item.question}</p>
          <p>A: {item.answer}</p>
        </div>
      ))}
    </Section>
  );
}
