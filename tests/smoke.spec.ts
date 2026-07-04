import { test, expect } from "@playwright/test";
import { projects, navLinks } from "../src/data/content";

test("hero renders with name and tagline", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Amr Abujabal");
});

test("resume PDF link is present and the file is served", async ({ page, request }) => {
  await page.goto("/");
  const link = page.getByRole("link", { name: "Download Resume" });
  await expect(link).toHaveAttribute("href", "/AmrAbujabal_CV.pdf");
  const res = await request.get("/AmrAbujabal_CV.pdf");
  expect(res.status()).toBe(200);
});

test("every project renders with a repo link", async ({ page }) => {
  await page.goto("/");
  for (const project of projects) {
    await expect(page.getByRole("heading", { name: project.title })).toBeAttached();
  }
  await expect(page.getByRole("link", { name: /View Code/ })).toHaveCount(projects.length);
});

test("nav anchor targets exist on the page", async ({ page }) => {
  await page.goto("/");
  for (const { href } of navLinks) {
    await expect(page.locator(href)).toBeAttached();
  }
});

test("theme toggle switches to dark mode", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
});
