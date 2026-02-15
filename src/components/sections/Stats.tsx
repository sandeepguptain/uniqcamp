const stats = [
  { value: "500+", label: "Schools" },
  { value: "50K+", label: "Students" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "70%", label: "Reduction in Dismissal Time" },
];

export default function Stats() {
  return (
    <section className="bg-purple-banner py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center text-white">
              <div className="text-3xl font-bold md:text-4xl">{value}</div>
              <div className="mt-1 text-sm font-medium opacity-95 md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
