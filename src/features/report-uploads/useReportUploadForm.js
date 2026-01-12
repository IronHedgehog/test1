import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { reportSchema } from "./report.schema";

export const useReportUploadForm = ({ onClose }) => {
  const form = useForm({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      year: "",
      type: "",
      file: null,
    },
  });

  const onSubmit = async (data) => {
    toast.loading("Підготовка звіту...", { id: "upload" });

    try {
      await new Promise((res) => setTimeout(res, 1200));

      console.log("Mock payload:", data);

      toast.success("Звіт успішно підготовлено", { id: "upload" });
      form.reset();
      onClose?.();
    } catch {
      toast.error("Помилка під час обробки", { id: "upload" });
    }
  };

  return {
    ...form,
    onSubmit,
  };
};
