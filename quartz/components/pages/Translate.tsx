import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Translate: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`

  const contributionGuideUrl = `${baseDir}Contribution-Guide`

  return (
    <article class="popover-hint">
      <h1>Translation Not Available</h1>
      <p>
        Translation for this document is not yet available. If you are fluent in this language,
        please help translate it. Refer to this{" "}
        <a href={contributionGuideUrl}>contribution guide</a>.
      </p>
      <a href={baseDir}>Go to home</a>
    </article>
  )
}

export default (() => Translate) satisfies QuartzComponentConstructor
