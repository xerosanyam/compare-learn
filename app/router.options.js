// Nuxt 3 router options. Must export a config object (not a function).
// Section wrappers carry matching ids (see ComparisonViewer / pages), so
// fragment nav also works with JS disabled. This only enhances
// client-side navigation.
//
// NOTE: pass the hash through UNESCAPED. vue-router detects "#" selectors
// and resolves them with getElementById (which needs the raw id).
// CSS.escape() output breaks that lookup and silently disables scrolling.
export default {
  async scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = await waitForElementById(decodeURIComponent(to.hash.slice(1)))
      if (el) {
        return { el: to.hash, behavior: 'smooth' }
      }
      return false
    }
    return savedPosition || { top: 0 }
  },
}

// Content resolves async on client-side navigation, so the target may not
// be in the DOM when scrollBehavior first runs. Poll briefly for it.
function waitForElementById(id, timeout = 1500) {
  if (typeof document === 'undefined') return Promise.resolve(null)
  const found = document.getElementById(id)
  if (found) return Promise.resolve(found)
  return new Promise((resolve) => {
    const start = Date.now()
    const tick = () => {
      const node = document.getElementById(id)
      if (node || Date.now() - start > timeout) {
        resolve(node)
        return
      }
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
}
