import { Footer } from "./footer"

export function AboutSection() {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-serif mb-2">shiying·he</h1>
        <p className="text-muted-foreground text-sm">/ˈfshʊ.yioʊ/</p>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground">noun</p>
        <ol className="space-y-2 list-decimal list-inside">
          <li className="text-foreground">
            young soul with a curious spirit; habitual note collector; beholder of quiet beauty.
          </li>
          <li className="text-foreground">
            founding girlfriend at{" "}
            <a
              href="https://atlasworkspace.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
            >
              Atlas Workspace
            </a>
            ; previously at{" "}
            <a
              href="https://www.costellomedical.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
            >
              Costello Medical
            </a>
            .
          </li>
          <li className="text-foreground">
            substacker at{" "}
            <a
              href="https://dearspring.day/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
            >
              Dear Spring
            </a>
            .
          </li>
        </ol>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <span className="text-muted-foreground">See also:</span>
        <a
          href="https://dearspring.day/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
        >
          Substack
        </a>
        <a
          href="https://x.com/floguo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
        >
          Twitter
        </a>
      </div>
      </div>

      <Footer />
    </div>
  )
}
