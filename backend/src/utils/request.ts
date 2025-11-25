import { FastifyRequest } from "fastify";

export const getClientMetadata = (request: FastifyRequest) => {
  const ip =
    (request.headers["cf-connecting-ip"] as string) ||
    (request.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    request.ip;

  const userAgent = (request.headers["user-agent"] as string) ?? "unknown";

  return {
    ipAddress: ip,
    userAgent,
  };
};

