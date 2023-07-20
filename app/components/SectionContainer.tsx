import React from "react";

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-5xl w-full bg-gradient-to-bl from-slate-300/70 to-slate-200/80 bg-no-repeat bg-top bg-cover rounded-2xl px-10 py-5 relative mx-auto">
      {children}
    </section>
  );
};

export default SectionContainer;
