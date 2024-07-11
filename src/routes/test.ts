/**
 * @jest-environment jsdom
 */

import { type RenderResult, render } from "@testing-library/svelte"
import "@testing-library/jest-dom"
import type { SvelteComponent } from "svelte"
import Layout from "./+layout.svelte"

describe("+layout.svelte", () => {
  let renderResult: RenderResult<SvelteComponent<any, any, any>>

  beforeEach(() => {
    renderResult = render(Layout)
  })

  it("renders author meta tag", () => {
    const { container } = renderResult
    const metaAuthor = container.querySelector("meta[name=\"author\"]")
    expect(metaAuthor).toBeInTheDocument()
    expect(metaAuthor?.getAttribute("content")).toBe("Daniil Gazizullin")
  })

  it("renders description meta tag", () => {
    const { container } = renderResult
    const metaDescription = container.querySelector("meta[name=\"description\"]")
    expect(metaDescription).toBeInTheDocument()
    expect(metaDescription?.getAttribute("content")).toBe(
      "Inquisitive, curious, and a little bit of a nerd.",
    )
  })

  it("renders header with correct class", () => {
    const { container } = renderResult
    const header = container.querySelector("header")
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass("absolute w-screen")
  })

  it("renders navigation links", () => {
    const { getByText } = renderResult
    const homeLink = getByText("home")
    const comicLink = getByText("comic")
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.getAttribute("href")).toBe("/")
    expect(comicLink).toBeInTheDocument()
    expect(comicLink.getAttribute("href")).toBe("/comic")
  })
})
