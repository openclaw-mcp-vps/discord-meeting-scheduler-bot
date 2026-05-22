export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Bot
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule Voice Meetings Across{" "}
          <span className="text-[#58a6ff]">Discord Timezones</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop the timezone chaos. Your bot finds the perfect meeting time for every member, sends calendar invites, and handles recurring standups automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. Instant bot access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { icon: "🌍", title: "Timezone Detection", desc: "Auto-detects each member's timezone from their Discord profile." },
          { icon: "📅", title: "Calendar Invites", desc: "Sends Google Calendar and iCal invites directly in Discord." },
          { icon: "🔁", title: "Recurring Standups", desc: "Set it once. The bot handles weekly or daily recurring meetings." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month per server</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited meeting scheduling",
              "Up to 50 members per server",
              "Google Calendar & iCal integration",
              "Recurring standup management",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bot detect timezones?",
              a: "Members run a simple /timezone set command once. The bot stores their preference and uses it for all future scheduling."
            },
            {
              q: "Which calendar services are supported?",
              a: "Google Calendar and standard iCal (.ics) files work out of the box. Outlook support is on the roadmap."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal at any time. Your bot access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Discord Meeting Scheduler Bot. All rights reserved.
      </footer>
    </main>
  );
}
