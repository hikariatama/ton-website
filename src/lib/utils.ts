export function customGoto(url: string) {
  const a = document.createElement("a")
  a.href = url
  a.style.display = "none"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
