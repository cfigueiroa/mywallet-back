import joi from "joi";

const transactionSchema = joi.object({
  description: joi.string().required(),
  type: joi.string().valid("credit", "debit").required(),
  value: joi.number().integer().positive().strict().required(),
});

export default transactionSchema;
