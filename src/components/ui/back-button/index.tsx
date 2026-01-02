'use client';

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button variant="outline" className={cn(className)} onClick={() => router.back()}>
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </Button>
  )
}