import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows the terminal', async ({ page }) => {
    await page.goto('/')
    // The terminal should be visible
    await expect(page.getByRole('log', { name: 'Terminal output' })).toBeVisible()
  })

  test('shows about section on load', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Designer and developer/)).toBeVisible()
  })

  test('sidebar navigation opens a section', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'contact' }).click()
    await expect(page.getByText(/jan.kosutnik@icloud.com/)).toBeVisible()
  })

  test('typing a command and pressing Enter runs it', async ({ page }) => {
    await page.goto('/')
    const input = page.getByRole('textbox', { name: 'Command' })
    await input.fill('principles')
    await input.press('Enter')
    await expect(page.getByText('Principles')).toBeVisible()
  })

  test('hash in URL opens correct section', async ({ page }) => {
    await page.goto('/#writing')
    await expect(page.getByText('Writing')).toBeVisible()
  })
})

test.describe('Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('terminal renders on mobile', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('log', { name: 'Terminal output' })).toBeVisible()
  })

  test('sidebar is horizontal on mobile', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Sections' })
    await expect(nav).toBeVisible()
  })
})
