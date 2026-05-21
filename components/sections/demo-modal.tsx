"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type DemoModalProps = {
  trigger: ReactNode;
};

type DemoResponse = {
  isSuccess?: boolean;
  message?: string;
};

const fields = [
  { name: "name", label: "Name *", required: true },
  { name: "email", label: "Email *", type: "email", required: true },
  { name: "enterprise_name", label: "Enterprise Name" },
  { name: "role", label: "Role" },
  { name: "phone", label: "Phone Number *", type: "tel", required: true },
  { name: "location", label: "Location *", required: true },
];

export default function DemoModal({ trigger }: DemoModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("");

    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/demos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as DemoResponse | null;
      const isSuccessful =
        result?.isSuccess === true || (response.ok && result?.isSuccess !== false);

      if (!isSuccessful) {
        throw new Error(result?.message || "Unable to submit demo request");
      }

      setMessage(result?.message || "Demo request submitted successfully");
      setStatus("success");
      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "The request could not be sent. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-[16px] border-0 p-6 shadow-2xl sm:max-w-[546px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#070B18]">
            Request a Demo
          </DialogTitle>
          <DialogDescription className="sr-only">
            Fill in your contact and company details to request a CardGit demo.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.name} className="block space-y-2">
              <span className="font-medium text-[#070B18]">{field.label}</span>
              <Input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className="h-[50px] rounded-[12px] border-[#D9E0EA] bg-white transition focus-visible:ring-[#4055F1]/30"
              />
            </label>
          ))}

          {status === "success" && (
            <p className="rounded-[10px] bg-[#EEFDF4] px-4 py-3 text-sm font-medium text-[#127A3A]">
              {message || "Demo request submitted. We will reach out to you shortly."}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-[10px] bg-[#FFF1F1] px-4 py-3 text-sm font-medium text-[#B42318]">
              {message || "The request could not be sent. Please try again."}
            </p>
          )}

          <DialogFooter className="gap-3 pt-1">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="h-12 rounded-[12px] bg-[#E8EDF5] px-6 text-base text-[#070B18] hover:bg-[#DDE5F0]"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-12 rounded-[12px] bg-[#4055F1] px-6 text-base text-white hover:bg-[#3245D8]"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
