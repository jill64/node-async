import { expect, test } from 'vitest'
import { access, exists } from '../src/index'

test('test', async () => {
  expect(await access('package.json')).toBe(true)
  expect(await exists('README2.md')).toBe(false)
})
