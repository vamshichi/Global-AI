import { footerColumns } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-line bg-void py-16">
      <div className="container-edge">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="label-tag">{col.heading}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="focus-ring text-sm text-ink-dim transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Global AI GRCS Summit India. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="focus-ring hover:text-ink-dim">
              Privacy Policy
            </a>
            <a href="#" className="focus-ring hover:text-ink-dim">
              Terms
            </a>
            <a href="#" className="focus-ring hover:text-ink-dim">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
