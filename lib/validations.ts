import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, "Name is too short").max(255, "Name is too long"),
  email: z.string().email("Invalid email address"),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University card is required"),
  password: z.string().min(8, "Password is too short"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is too short"),
});

export const bookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is too short")
    .max(100, "Title is too long"),
  description: z
    .string()
    .trim()
    .min(10, "Description is too short")
    .max(1000, "Description is too long"),
  author: z
    .string()
    .trim()
    .min(2, "Author is too short")
    .max(100, "Author is too long"),
  genre: z
    .string()
    .trim()
    .min(2, "Genre is too short")
    .max(50, "Genre is too long"),
  rating: z.number().min(1, "Rating is too low").max(5, "Rating is too high"),
  totalCopies: z.coerce.number().int().positive().lte(10000),
  coverUrl: z.string().nonempty("Cover URL is required"),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color code"),
  videoUrl: z.string().nonempty("Video URL is required"),
  summary: z.string().trim().min(10, "Summary is too short"),
});
