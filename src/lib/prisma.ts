import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function getPrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  }
  // In development, reuse instance across hot reloads
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  return global.prisma;
}

// Lazy proxy — Prisma is only instantiated when first method is called,
// never at module import time (which would crash Netlify's build phase)
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient();
    const value = (client as any)[prop];
    return typeof value === 'function' ? value.bind(client) : value;
  },
});
