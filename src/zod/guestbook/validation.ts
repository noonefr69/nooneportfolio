import * as z from "zod";

export const guestbookSchema = z.object({
  username: z.string().min(1, "is required.").max(8, "Max 8 characters."),
  message: z
    .string()
    .min(1, "Message cannot be empty.")
    .max(200, "Max 200 characters."),
  human: z
    .boolean()
    .refine((val) => val === true, "Please verify you are human."),
});

export type GuestbookInput = z.infer<typeof guestbookSchema>;
