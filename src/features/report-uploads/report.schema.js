import { z } from "zod";

export const reportSchema = z.object({
  year: z.string().min(4, "Вкажіть рік").max(4, "Рік має складатись з 4 цифр"),
  type: z.enum(["activity", "financial"], {
    errorMap: () => ({ message: "Оберіть тип звіту" }),
  }),
  file: z
    .instanceof(File, { message: "PDF файл обовʼязковий" })
    .refine((file) => file.type === "application/pdf", {
      message: "Дозволено лише PDF",
    }),
});
