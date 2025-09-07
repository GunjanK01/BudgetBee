import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

import "dotenv/config";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, "60 s"),
});
// The "sliding window" rate limiter allows up to 100 requests in any 60-second period.
// Unlike a fixed window, it continuously checks the last 60 seconds from the current request,
// so bursts are smoothed out and limits are more precise over time.

export default ratelimit;