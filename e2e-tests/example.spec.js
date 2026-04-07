const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})

describe('Check Link ivysaur and watch out for chlorophyll', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await page.getByText('ivysaur').click();
    await page.waitForURL('**/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()


    
  })
})