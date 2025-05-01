# Stage 1: Base image with Node.js
FROM node:20-alpine AS base
WORKDIR /app
ARG PORT=3000
ENV PORT=${PORT}
ENV NEXT_TELEMETRY_DISABLED=1

# Stage 2: Install dependencies
FROM base AS deps
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Stage 3: Build the application
FROM deps AS builder
COPY . .
RUN npm run build

# Stage 4: Production image
FROM base AS runner
WORKDIR /app
# Set NODE_ENV to production
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE ${PORT}
CMD ["node", "server.js"]
