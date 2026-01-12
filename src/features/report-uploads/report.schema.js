import { z } from "zod";

export const reportSchema = z.object({
  year: z.string().min(4, "Вкажіть рік").max(4, "Рік має складатись з 4 цифр"),
  type: z
    .string()
    .min(1, "Оберіть тип звіту")
    .refine((val) => val === "activity" || val === "financial", {
      message: "Оберіть тип звіту",
    }),
  file: z
    .instanceof(File, { message: "PDF файл обовʼязковий" })
    .refine((file) => file.type === "application/pdf", {
      message: "Дозволено лише PDF",
    }),
});
