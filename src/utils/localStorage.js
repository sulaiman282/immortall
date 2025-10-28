/**
 * Utility functions for localStorage-based caching
 */

const CACHE_PREFIX = 'hoodout_';
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Set item in localStorage with expiry
 */
export const setCache = (key, data, expiryMs = DEFAULT_EXPIRY) => {
  if (typeof window === 'undefined') return false;
  
  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + expiryMs
    };
    
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(cacheData));
    return true;
  } catch (error) {
    console.warn('Failed to cache data:', error);
    return false;
  }
};

/**
 * Get item from localStorage with expiry check
 */
export const getCache = (key) => {
  if (typeof window === 'undefined') return null;
  
  try {
    const cachedItem = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cachedItem) return null;
    
    const parsedData = JSON.parse(cachedItem);
    
    // Check if expired
    if (Date.now() > parsedData.expiry) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }
    
    return parsedData.data;
  } catch (error) {
    console.warn('Failed to retrieve cached data:', error);
    return null;
  }
};

/**
 * Clear specific cache item
 */
export const clearCache = (key) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(`${CACHE_PREFIX}${key}`);
  } catch (error) {
    console.warn('Failed to clear cache:', error);
  }
};

/**
 * Clear all HOODOUT cache items
 */
export const clearAllCache = () => {
  if (typeof window === 'undefined') return;
  
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn('Failed to clear all cache:', error);
  }
};

/**
 * Get cache info (for debugging)
 */
export const getCacheInfo = () => {
  if (typeof window === 'undefined') return {};
  
  const cacheInfo = {};
  const keys = Object.keys(localStorage);
  
  keys.forEach(key => {
    if (key.startsWith(CACHE_PREFIX)) {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        cacheInfo[key.replace(CACHE_PREFIX, '')] = {
          size: new Blob([localStorage.getItem(key)]).size,
          timestamp: new Date(data.timestamp).toISOString(),
          expiry: new Date(data.expiry).toISOString(),
          expired: Date.now() > data.expiry
        };
      } catch (error) {
        cacheInfo[key.replace(CACHE_PREFIX, '')] = 'Invalid cache data';
      }
    }
  });
  
  return cacheInfo;
};