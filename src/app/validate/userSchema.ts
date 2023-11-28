import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().minLength(3).maxLength(30),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20),
});


export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20),
});