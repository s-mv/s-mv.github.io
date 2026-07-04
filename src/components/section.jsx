export default function Section({ title, children }) {
  return (
    <section class="mb-12">

      <h2
        class="mb-4 border-b pb-2 text-2xl font-semibold"
        style={{ borderColor: "var(--border)" }}
      >
        {title}
      </h2>

      {children}

    </section>
  );
}
