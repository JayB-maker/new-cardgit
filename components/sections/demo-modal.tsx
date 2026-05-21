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

const fields = [
  { name: "name", label: "Name *", required: true },
  { name: "email", label: "Email *", type: "email", required: true },
  { name: "enterpriseName", label: "Enterprise Name" },
  { name: "role", label: "Role" },
  { name: "phoneNumber", label: "Phone Number *", type: "tel", required: true },
  { name: "location", label: "Location *", required: true },
];

export default function DemoModal({ trigger }: DemoModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const endpoint = process.env.NEXT_PUBLIC_DEMO_ENDPOINT;
    const payload = Object.fromEntries(new FormData(event.currentTarget));

    if (!endpoint) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Unable to submit demo request");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
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
              Demo request captured. We will connect this to the final endpoint when it is ready.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-[10px] bg-[#FFF1F1] px-4 py-3 text-sm font-medium text-[#B42318]">
              The request could not be sent. Please try again.
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
