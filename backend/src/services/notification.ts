import pino from "pino";

const logger = pino({ name: "notification" });

type SubmissionType = "contact" | "visit";

export const notifySubmission = async (type: SubmissionType, payload: unknown) => {
  logger.info({ type, payload }, "Submission stored");
};

