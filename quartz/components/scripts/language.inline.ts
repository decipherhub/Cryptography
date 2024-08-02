const userLang = navigator.language.startsWith("ko")
  ? "ko"
  : navigator.language.startsWith("ja")
    ? "ja"
    : navigator.language.startsWith("zh")
      ? "zh"
      : navigator.language.startsWith("es")
        ? "es"
        : navigator.language.startsWith("fr")
          ? "fr"
          : "en"

const currentLang = localStorage.getItem("lang") ?? userLang
document.documentElement.setAttribute("lang", currentLang)

const emitLangChangeEvent = (lang: string) => {
  const event = new CustomEvent("langchange", {
    detail: { lang },
  })
  document.dispatchEvent(event)
}

const getCurrentPathWithoutLang = () => {
  const path = window.location.pathname
  const pathParts = path.split("/").filter((part) => part)

  if (pathParts[0] === "i18n") {
    pathParts.splice(0, 2)
  }
  return pathParts.join("/")
}

const navigateToUrl = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" })
    if (response.status === 404) {
      window.location.href = "/translate"
    } else {
      window.location.href = url
    }
  } catch (error) {
    console.error("Failed to check URL status:", error)
    window.location.href = "/translate"
  }
}

document.addEventListener("nav", () => {
  const switchLang = async (e: Event) => {
    const newLang = (e.target as HTMLSelectElement)?.value
    document.documentElement.setAttribute("lang", newLang)
    localStorage.setItem("lang", newLang)
    emitLangChangeEvent(newLang)

    const currentPath = getCurrentPathWithoutLang()
    const newUrl = newLang === "en" ? `/${currentPath}` : `/i18n/${newLang}/${currentPath}`

    await navigateToUrl(newUrl)
  }

  const langSelect = document.querySelector("#language-select") as HTMLSelectElement
  langSelect.addEventListener("change", switchLang)
  window.addCleanup(() => langSelect.removeEventListener("change", switchLang))
  if (currentLang) {
    langSelect.value = currentLang
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") ?? userLang
  document.documentElement.setAttribute("lang", lang)
  emitLangChangeEvent(lang)
})

document.addEventListener("langchange", (event) => {
  const newLang = event.detail.lang
  console.log(`Language changed to: ${newLang}`)

  // Update language selector value
  const langSelect = document.querySelector("#language-select") as HTMLSelectElement
  if (langSelect) {
    langSelect.value = newLang
  }
})
