export async function sendQuote(customerEmail, payload) {
  const base = import.meta.env.VITE_API_URL || ''
  try {
    const res = await fetch(base + '/api/send-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerEmail, payload })
    })
    if (!res.ok) throw new Error('Failed to send')
    return await res.json()
  } catch (e) {
    console.error(e)
    throw e
  }
}