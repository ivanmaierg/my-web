/**
 * Slow scroll utilities for enhanced user experience
 * Optimized for 120Hz displays with customizable scroll speed
 */

export interface SlowScrollOptions {
  duration?: number; // Duration in milliseconds
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  offset?: number; // Offset from target element
  behavior?: 'smooth' | 'auto';
}

const defaultOptions: Required<SlowScrollOptions> = {
  duration: 2000, // 2 seconds for slow scroll
  easing: 'ease-out',
  offset: 0,
  behavior: 'smooth'
};

/**
 * Custom slow scroll function with easing
 */
export const slowScrollTo = (
  target: Element | number,
  options: SlowScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const opts = { ...defaultOptions, ...options };
    const startTime = performance.now();
    const startPosition = window.pageYOffset;
    
    let targetPosition: number;
    
    if (typeof target === 'number') {
      targetPosition = target;
    } else {
      const elementRect = target.getBoundingClientRect();
      targetPosition = window.pageYOffset + elementRect.top - opts.offset;
    }
    
    const distance = targetPosition - startPosition;
    
    const easingFunctions = {
      'ease': (t: number) => t * t * (3 - 2 * t),
      'ease-in': (t: number) => t * t,
      'ease-out': (t: number) => t * (2 - t),
      'ease-in-out': (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      'linear': (t: number) => t
    };
    
    const ease = easingFunctions[opts.easing];
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / opts.duration, 1);
      const easedProgress = ease(progress);
      
      const currentPosition = startPosition + (distance * easedProgress);
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    };
    
    requestAnimationFrame(animate);
  });
};

/**
 * Slow scroll to element by selector
 */
export const slowScrollToElement = (
  selector: string,
  options: SlowScrollOptions = {}
): Promise<void> => {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element with selector "${selector}" not found`);
    return Promise.resolve();
  }
  return slowScrollTo(element, options);
};

/**
 * Slow scroll to top
 */
export const slowScrollToTop = (options: SlowScrollOptions = {}): Promise<void> => {
  return slowScrollTo(0, options);
};

/**
 * Slow scroll to bottom
 */
export const slowScrollToBottom = (options: SlowScrollOptions = {}): Promise<void> => {
  return slowScrollTo(document.body.scrollHeight, options);
};

/**
 * Custom scroll speed multiplier
 * Higher values = slower scroll
 */
export const setScrollSpeed = (speed = 1) => {
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: smooth;
      scroll-timeline: auto;
      animation-timeline: scroll;
    }
    
    * {
      scroll-behavior: smooth;
      scroll-snap-type: y proximity;
      scroll-snap-align: start;
    }
    
    /* Custom scroll speed */
    html, body {
      scroll-behavior: smooth;
      scroll-timeline: auto;
      animation-timeline: scroll;
      scroll-snap-type: y proximity;
      /* Slower scroll momentum */
      transition: scroll-behavior ${speed}s ease-out;
    }
  `;
  
  document.head.appendChild(style);
};

/**
 * Disable slow scroll and return to normal
 */
export const disableSlowScroll = () => {
  const style = document.createElement('style');
  style.textContent = `
    html, body, * {
      scroll-behavior: auto;
      scroll-snap-type: none;
      scroll-snap-align: none;
      transition: none;
    }
  `;
  
  document.head.appendChild(style);
};

/**
 * React hook for slow scroll functionality
 */
export const useSlowScroll = () => {
  return {
    scrollTo: slowScrollTo,
    scrollToElement: slowScrollToElement,
    scrollToTop: slowScrollToTop,
    scrollToBottom: slowScrollToBottom,
    setScrollSpeed,
    disableSlowScroll
  };
};
