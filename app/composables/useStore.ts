export const useStore = () => {
  const BRAND_NAME = 'Zamari Surfaces'
  const STORE_URL = 'https://kauntaos.vercel.app/store/zamari-surfaces'
  const ADMIN_URL = 'https://kauntaos.vercel.app/login'
  const WA_NUMBER = '254723054899' // Kenya country code + phone without +

  const paths: Record<string, string> = {
    countertops: '/countertops',
    kitchen: '/kitchen',
    faucets: '/faucets',
    showers: '/showers',
    sinks: '/sinks',
    pedestals: '/pedestals',
    toilets: '/toilets'
  }

  const getStoreUrl = (category = 'general') => {
    const path = paths[category] || ''
    const base = `${STORE_URL}${path}`
    const sep = base.includes('?') ? '&' : '?'
    return `${base}${sep}utm_source=landing&utm_medium=site&utm_content=${category}`
  }

  const getWaUrl = (message: string) => {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const track = (event: string, params: Record<string, any> = {}) => {
    try {
      if (typeof window !== 'undefined') {
        const w = window as any
        if (w.dataLayer) w.dataLayer.push({ event, ...params })
        if (w.gtag) w.gtag('event', event, params)
        if (w.fbq) w.fbq('trackCustom', event, params)
      }
    } catch {}
  }

  return {
    BRAND_NAME,
    ADMIN_URL,
    WA_NUMBER,
    getStoreUrl,
    getWaUrl,
    track
  }
}