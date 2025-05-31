import { createClient } from 'redis';

export const redisClient = createClient();

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis connected');
  } catch (err) {
    console.error('Redis error:', err);
  }
};
