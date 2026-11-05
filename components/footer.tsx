
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { footerColumns } from "@/data/footer";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060A12]">
      <div className="container-edge">
        {/* Brand block */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
          <div>
            <a href="#top" className="group inline-block">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                AI GRCS Summit
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                India <span className="text-white/35">2027</span>
              </h2>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Where leaders come together to shape the future of AI governance,
              risk, compliance, and security.
            </p>

            <a
              href="#registration"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-200"
            >
              Be part of the conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {col.heading}
                </p>

                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Event information strip */}
        <div className="flex flex-col gap-4 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.15em] text-white/45">
            <span>21 January 2027</span>
            <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
            <span className="text-blue-200">Mumbai, India</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/35">
            <ShieldCheck className="h-4 w-4 text-blue-200/70" />
            <span>Responsible AI. Trusted Leadership.</span>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 py-7 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © 2027 Global AI GRCS Summit India. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#" className="transition hover:text-white/75">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white/75">
              Terms &amp; Conditions
            </a>

            <a href="#" className="transition hover:text-white/75">
              Code of Conduct
            </a>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 transition hover:text-white/75"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
