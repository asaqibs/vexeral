"use client";

import { motion } from "motion/react";
import { Badge } from "./ui/badge";

const PROBLEMS = [
  {
    category: "Revenue Loss",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
    title: "The Silent Churn",
    items: [
      { title: "Missed leads", desc: "Unanswered messages drive prospects elsewhere." },
      { title: "Slow support", desc: "Delayed responses cause immediate churn." },
      { title: "Weak reviews", desc: "Lack of consistent social proof." },
    ]
  },
  {
    category: "Operational Cost",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.56a2 2 0 0 1-1 1.72l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    title: "System Friction",
    items: [
      { title: "Admin overload", desc: "Manual data entry wastes time." },
      { title: "Disconnected stacks", desc: "Fragmented systems lose valuable data." },
      { title: "Broken follow-up", desc: "High-intent leads lose engagement." },
    ]
  }
];

export function Problems() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-24 text-center">
          <Badge variant="outline" className="mb-6">The Cost of Manual</Badge>
          <h2 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[80px]">
            Where businesses <span className="text-primary/70">leak value.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {PROBLEMS.map((group, groupIdx) => (
            <div key={group.category} className="flex flex-col">
              <div className="mb-12 border-l border-primary/20 pl-6">
                <div className="flex items-center gap-3">
                  <div className="text-primary/70">{group.icon}</div>
                  <p className="font-mono text-sm uppercase tracking-widest text-primary/70">{group.category}</p>
                </div>
                <h3 className="mt-2 font-serif text-3xl">{group.title}</h3>
              </div>
              
              <div className="flex flex-col gap-8">
                {PROBLEMS[groupIdx].items.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIdx * 3 + i) * 0.1 }}
                    className="group relative flex gap-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-mono text-lg text-primary shadow-sm ring-1 ring-border/20">
                      {groupIdx * 3 + i + 1}
                    </span>
                    <div>
                      <h4 className="text-xl font-medium text-foreground">{item.title}</h4>
                      <p className="mt-1.5 text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
