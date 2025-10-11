/**
 * Utility functions for View Transition API
 * 
 * The View Transition API provides smooth transitions between different states
 * of a web page. This is particularly useful for theme changes, where we want
 * to animate the transition between light and dark modes.
 * 
 * Browser support: Chrome 111+, Edge 111+. Fallback gracefully for unsupported browsers.
 */

export const supportsViewTransition = (): boolean => {
  return typeof document !== 'undefined' && 'startViewTransition' in document
}

export const startViewTransition = (callback: () => void): void => {
  if (supportsViewTransition()) {
    // @ts-ignore - startViewTransition is not yet in TypeScript DOM types
    document.startViewTransition(callback)
  } else {
    // Fallback for browsers that don't support View Transition API
    callback()
  }
}
