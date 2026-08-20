"use server";

import dbConnect from "@/lib/db";
import { Guestbook } from "@/app/schema/guest-book";
import { revalidatePath } from "next/cache";
import { GuestbookInput, guestbookSchema } from "@/zod/guestbook/validation";

export type ActionResult = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function createGuestbook(
  input: GuestbookInput,
): Promise<ActionResult> {
  try {
    const validatedData = guestbookSchema.safeParse(input);

    if (!validatedData.success) {
      return {
        success: false,
        error: "Invalid data submitted.",
      };
    }

    await dbConnect();

    await Guestbook.create({
      username: validatedData.data.username,
      message: validatedData.data.message,
      human: validatedData.data.human,
    });

    revalidatePath("/guest-book");

    return {
      success: true,
      message: "Message created successfully in guestbook.",
    };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Something went wrong." };
  }
}
