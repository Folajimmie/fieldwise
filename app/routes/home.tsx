import type { Route } from "./+types/home";
import {
  Bell,
  ChartNoAxesCombined,
  CirclePlus,
  Cog,
  Download,
  Droplets,
  Factory,
  Flame,
  HelpCircle,
  House,
  Search,
  Sprout,
  TrendingUp,
  Wifi,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digital Agronomist Dashboard" },
    { name: "description", content: "Precision monitoring dashboard" },
  ];
}

const storageRows = [
  {
    name: "Central Silo A-01",
    location: "LOC: NORTH QUAD",
    commodity: "CORN (G-A)",
    utilization: 88,
    status: "OPTIMAL",
    color: "bg-[#1f5e28]",
    icon: Factory,
  },
  {
    name: "North Storage B-12",
    location: "LOC: SECTOR D",
    commodity: "SOYBEANS",
    utilization: 42,
    status: "STABLE",
    color: "bg-[#8ecb84]",
    icon: Factory,
  },
  {
    name: "Liquid Tank C-03",
    location: "LOC: WEST SITE",
    commodity: "FERT. (NITRO)",
    utilization: 94,
    status: "CRITICAL",
    color: "bg-[#cf1d1d]",
    icon: Droplets,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8edf1] text-[#1e2227]">
      <div className="mx-auto flex min-h-screen max-w-[1720px]">
        <aside className="relative flex w-[320px] flex-col bg-gradient-to-b from-[#003b33] via-[#01342d] to-[#002820] text-white shadow-2xl">
          <div className="border-b border-white/10 px-8 py-10">
            <h1 className="text-[41px] font-semibold leading-[1.1]">Digital Agronomist</h1>
            <p className="mt-2 text-sm tracking-[0.28em] text-[#27b07a]">PRECISION MONITORING</p>
          </div>

          <nav className="mt-8 space-y-3 px-4 text-[32px]">
            {[
              { label: "Dashboard", icon: House, active: true },
              { label: "Storage Monitor", icon: Factory },
              { label: "Market Intelligence", icon: TrendingUp },
              { label: "Settings", icon: Cog },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-4 rounded-xl px-6 py-4 transition ${
                  item.active ? "bg-[#004c40] text-[#e6fff6]" : "text-[#1cd6a2] hover:bg-[#02483d]"
                }`}
              >
                <item.icon className="size-7" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto px-8 pb-8">
            <button className="mb-10 w-full rounded-2xl bg-[#1dd49a] py-4 text-[30px] font-semibold text-[#003728]">
              New Field Report
            </button>
            <div className="flex items-center gap-4 rounded-xl bg-black/25 p-3">
              <div className="size-12 rounded-full bg-white/20" />
              <div>
                <p className="text-[26px] font-semibold">Dr. Aris Thorne</p>
                <p className="text-[22px] text-[#20cc96]">Senior Specialist</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 px-10 py-8">
          <header className="mb-8 flex items-center gap-6">
            <div className="flex h-16 flex-1 items-center gap-3 rounded-2xl bg-[#dfe5ec] px-6 text-[#7d8998]">
              <Search className="size-6" />
              <span className="text-xl">Search fields, silos, or sensors...</span>
            </div>
            <Bell className="size-6 text-[#4f5d6e]" />
            <HelpCircle className="size-6 text-[#4f5d6e]" />
            <div className="h-10 w-px bg-[#c5ced8]" />
            <h2 className="text-[38px] font-medium text-[#1e4b2f]">Agri Intelligence</h2>
          </header>

          <div className="grid grid-cols-[1.45fr_1fr] gap-6">
            <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d5c1d] to-[#10491f] p-8 text-white shadow-md">
              <p className="text-sm tracking-[0.22em] text-white/80">CONSOLIDATED YIELD FORECAST</p>
              <h3 className="mt-2 text-[74px] font-semibold leading-none">14,280<span className="ml-2 text-[50px] font-normal">MetricTons</span></h3>
              <div className="absolute bottom-6 left-8 rounded-2xl bg-white/15 px-5 py-3 text-xl font-semibold">↗ +12.4% vs Previous Season</div>
              <p className="absolute bottom-8 right-8 text-right text-lg text-white/75">OPTIMAL HARVEST WINDOW<br /><span className="text-[42px] text-white">Oct 12 — Oct 28</span></p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 opacity-35 [background:radial-gradient(70%_110%_at_50%_100%,transparent_64%,#d0f0cb_66%,transparent_68%)]" />
            </article>

            <div className="space-y-6">
              <article className="rounded-2xl bg-[#f6f7f5] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border-4 border-[#89c784] px-5 py-4 text-[44px] font-semibold text-[#202828]">94%</div>
                  <div>
                    <p className="text-sm tracking-[0.18em] text-[#595f58]">AVG. SOIL HEALTH INDEX</p>
                    <h3 className="text-[50px] font-semibold text-[#164124]">Optimal Conditions</h3>
                    <p className="text-[31px] text-[#38463a]">Nitrogen levels stable across Sector A-4.</p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl bg-gradient-to-r from-[#6f2c4d] to-[#8c3b63] p-6 text-white shadow-sm">
                <p className="text-sm tracking-[0.2em] text-[#ff9daf]">● SPOILAGE RISK ALERT</p>
                <h3 className="mt-2 text-[52px] font-semibold">High Humidity in Silo 04</h3>
                <p className="text-[34px] text-white/90">Immediate aeration cycle recommended.</p>
              </article>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-[1fr_1.45fr] gap-6">
            <article className="rounded-2xl bg-[#dfe5eb] p-6 shadow-sm">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-[48px] font-semibold">Active Field Map</h3>
                  <p className="text-[31px] text-[#495561]">Real-time multispectral overlay</p>
                </div>
                <span className="rounded-md bg-[#74b770] px-3 py-1 text-sm font-semibold tracking-wide text-[#07300e]">LIVE STREAM</span>
              </div>

              <div className="h-[420px] rounded-xl border border-[#c7d0d8] bg-[linear-gradient(90deg,#d8d7c8_1px,transparent_1px),linear-gradient(#d8d7c8_1px,transparent_1px),#e8e4d6] bg-[size:46px_46px] p-4">
                <div className="grid h-full place-items-center rounded-lg border border-dashed border-[#b6c4cb] text-[#51606b]">
                  <ChartNoAxesCombined className="mb-2 size-10" />
                  <p className="text-lg">Map Preview</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-[#ced8d0] px-5 py-3">
                <p className="text-sm tracking-[0.16em] text-[#4f5b53]">REGION INDEX</p>
                <p className="text-[44px] font-semibold text-[#103f28]">Sector Gamma-9</p>
              </div>

              <ul className="mt-6 space-y-4 text-[34px]">
                <li className="flex items-center justify-between"><span className="flex items-center gap-3"><span className="size-3 rounded-sm bg-[#295b25]" />Winter Wheat</span><span>1,200 ac</span></li>
                <li className="h-2 rounded bg-[#ccd4db]"><div className="h-full w-[48%] rounded bg-[#285c25]" /></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-3"><span className="size-3 rounded-sm bg-[#6e4f2d]" />Soybeans (Organic)</span><span>850 ac</span></li>
                <li className="h-2 rounded bg-[#ccd4db]"><div className="h-full w-[34%] rounded bg-[#785231]" /></li>
              </ul>
            </article>

            <article className="overflow-hidden rounded-2xl bg-[#f3f4f2] shadow-sm">
              <div className="flex items-start justify-between px-6 py-6">
                <div>
                  <h3 className="text-[48px] font-semibold leading-tight">Inventory &amp; Storage<br />Management</h3>
                  <p className="text-[31px] text-[#4a5560]">Status monitoring for 12 localized units</p>
                </div>
                <div className="flex gap-3">
                  <button className="rounded-xl border border-[#d6dade] px-6 py-4 text-[28px] font-medium"><Download className="mr-2 inline size-4" />Export</button>
                  <button className="rounded-xl bg-[#ecc7a2] px-6 py-4 text-[28px] font-medium text-[#573821]">Manage Units</button>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_.8fr_1fr_.8fr] bg-[#d9dde1] px-6 py-4 text-sm font-semibold tracking-[0.18em] text-[#4a545f]">
                <span>UNIT / FACILITY</span><span>COMMODITY</span><span>UTILIZATION</span><span>STATUS</span>
              </div>

              {storageRows.map((row) => (
                <div key={row.name} className="grid grid-cols-[1.2fr_.8fr_1fr_.8fr] items-center border-t border-[#dde2e6] px-6 py-6">
                  <div className="flex items-center gap-4">
                    <row.icon className="size-9 rounded-lg border border-[#d3dae1] p-2 text-[#3f4a55]" />
                    <div>
                      <p className="text-[40px] font-medium leading-tight">{row.name}</p>
                      <p className="text-sm tracking-[0.12em] text-[#67717d]">{row.location}</p>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-[#f0cba6] px-3 py-1 text-sm font-semibold tracking-wide text-[#53361f]">{row.commodity}</span>
                  <div>
                    <div className="h-3 rounded-full bg-[#cfd6dd]"><div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.utilization}%` }} /></div>
                    <p className="mt-2 text-sm text-[#3f4953]">{row.utilization}% Capacity</p>
                  </div>
                  <p className="text-sm font-semibold tracking-[0.14em] text-[#26482c]">● {row.status}</p>
                </div>
              ))}

              <div className="flex items-center justify-between border-t border-[#dde2e6] px-6 py-6">
                <a href="#" className="mx-auto text-sm font-semibold tracking-[0.2em] text-[#2c5b36]">VIEW ALL STORAGE UNITS →</a>
                <button className="grid size-20 place-items-center rounded-2xl bg-[#0f5019] text-white"><CirclePlus className="size-8" /></button>
              </div>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-[1fr_1fr_1.05fr] gap-6 pb-8">
            <article className="rounded-2xl bg-[#f7f4f0] p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-3 text-[44px] font-semibold"><Wifi className="size-6 text-[#856b55]" />Sensor Network</h3>
              <ul className="space-y-4 text-[31px] text-[#464f58]">
                <li className="flex gap-3"><span className="mt-2 size-2 rounded-full bg-[#15b97f]" />Gate-42 Connectivity restored after 12m downtime.</li>
                <li className="flex gap-3"><span className="mt-2 size-2 rounded-full bg-[#f09a1b]" />Low battery alert: Soil probe SP-904 (Sector D).</li>
              </ul>
            </article>

            <article className="rounded-2xl bg-[#f7f6f5] p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-3 text-[44px] font-semibold"><Sprout className="size-6 text-[#5b705e]" />Recent Monitoring</h3>
              <ul className="space-y-4 text-[31px]">
                <li className="flex justify-between"><span>Aerial Multispectral Scans</span><span className="text-[#59636f]">2h ago</span></li>
                <li className="flex justify-between"><span>Auto-Irrigation Log (West)</span><span className="text-[#59636f]">5h ago</span></li>
              </ul>
            </article>

            <article className="rounded-2xl bg-gradient-to-br from-[#0f4f15] to-[#0a3d10] p-6 text-white shadow-sm">
              <h3 className="mb-4 flex items-center gap-3 text-[44px] font-semibold"><Flame className="size-6" />Agronomist Insights</h3>
              <p className="text-[33px] italic leading-relaxed text-[#d8f0d7]">“Predictive modeling suggests a 5% increase in yield if irrigation is increased in Sector C by Tuesday morning.”</p>
              <button className="mt-6 w-full rounded-xl border border-white/25 bg-white/10 py-3 text-sm font-semibold tracking-[0.2em]">APPLY RECOMMENDATION</button>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
