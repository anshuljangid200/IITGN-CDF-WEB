const urlRegex = /(https?:\/\/|www\.)\S+/gi;
const suspiciousTerms = [
  "viagra",
  "crypto investment",
  "guaranteed income",
  "loan approval",
];

export type SpamCheckInput = {
  message?: string;
  notes?: string;
  ipAddress: string;
  userAgent: string;
  honeypot?: string | null;
};

export const evaluateSpam = (input: SpamCheckInput) => {
  let score = 0;

  if (input.honeypot && input.honeypot.trim().length > 0) {
    score += 3;
  }

  const combined = `${input.message ?? ""} ${input.notes ?? ""}`.toLowerCase();

  const links = combined.match(urlRegex);
  if (links && links.length > 2) {
    score += 2;
  }

  if (combined.length < 12) {
    score += 1;
  }

  if (suspiciousTerms.some((term) => combined.includes(term))) {
    score += 3;
  }

  if (input.ipAddress.startsWith("10.") || input.ipAddress.startsWith("192.0.2.")) {
    score += 1;
  }

  return {
    score,
    isSpam: score >= 3,
  };
};

