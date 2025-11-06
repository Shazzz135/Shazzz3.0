// Simple in-memory rate limiter: 2 requests per IP per day
const RATE_LIMIT = 2;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

const ipStore = new Map();

export function rateLimit(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.ip ||
    'unknown';

  const now = Date.now();
  let entry = ipStore.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    entry = { count: 1, start: now };
    ipStore.set(ip, entry);
    return true;
  }

  if (entry.count < RATE_LIMIT) {
    entry.count += 1;
    return true;
  }

  // Rate limit exceeded
  res.status(429).json({
    error: 'Too many requests',
    message: `You can only send ${RATE_LIMIT} messages per day. Please try again tomorrow.`,
  });
  return false;
}
