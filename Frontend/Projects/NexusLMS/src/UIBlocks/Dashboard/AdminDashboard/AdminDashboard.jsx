import React from 'react'
import { spotlightCards,stats } from '@/dummyData/Dummy'

function AdminDashboard() {
  return (
    <section className="space-y-10">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm shadow-slate-200/30 transition duration-500 ease-out hover:-translate-y-1 hover:shadow-xl animate-fade-in-up">
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Admin Overview
            </p>
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Power your learning experience with smart analytics.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Welcome back to the Nexus LMS dashboard. Everything is responsive and animated so your admin experience feels fluid across phones, tablets, and desktops.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-sidebar p-5 text-sidebar-foreground shadow-sm ring-1 ring-sidebar-border">
              <p className="text-sm uppercase tracking-[0.35em] text-sidebar-accent-foreground/80">
                Today’s active students
              </p>
              <p className="mt-4 text-4xl font-bold">242</p>
              <p className="mt-2 text-sm text-sidebar-accent-foreground/80">Strong participation across live sessions.</p>
            </div>
            <div className="rounded-3xl bg-sidebar-accent p-5 text-sidebar-accent-foreground shadow-sm ring-1 ring-sidebar-border">
              <p className="text-sm uppercase tracking-[0.35em] text-sidebar-accent-foreground/80">
                New enrollments
              </p>
              <p className="mt-4 text-4xl font-bold">98</p>
              <p className="mt-2 text-sm text-sidebar-accent-foreground/80">Most enrollments come in before noon.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="rounded-[1.75rem] border border-border bg-card p-6 text-center shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-4 text-4xl font-bold text-foreground">{item.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {spotlightCards.map((card, index) => (
          <div
            key={card.title}
            className={`rounded-[1.75rem] p-6 shadow-sm transition duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${card.accent} animate-fade-in-up`}
            style={{ animationDelay: `${120 + index * 80}ms` }}
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-current/90">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminDashboard