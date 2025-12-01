import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type BrochureDownloadButtonProps = {
  /** Optional className to tweak button spacing where used */
  className?: string;
  /** Size to forward to the underlying button */
  size?: "default" | "sm" | "lg" | "icon";
  /** Variant to forward to the underlying button */
  variant?: "default" | "outline" | "cta" | "ctaOutline" | "ctaOnDark" | "ghost" | "secondary";
  /** Custom button label */
  label?: string;
};

type BrochureFormState = {
  name: string;
  email: string;
  phone: string;
};

const initialFormState: BrochureFormState = {
  name: "",
  email: "",
  phone: "",
};

const BROCHURE_PATH = "/images/brochure.pdf";
const BROCHURE_FILENAME = "IITGN-PG-Diploma-Brochure.pdf";

const BrochureDownloadButton = ({
  className,
  size = "sm",
  variant = "outline",
  label = "Download Brochure",
}: BrochureDownloadButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BrochureFormState>(initialFormState);

  const handleInputChange =
    (field: keyof BrochureFormState) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleDownloadBrochure = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill out all fields so we can share the brochure.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    const link = document.createElement("a");
    link.href = BROCHURE_PATH;
    link.download = BROCHURE_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitting(false);
    setFormData(initialFormState);
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          variant={variant}
          className={className}
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Download the Program Brochure</DialogTitle>
          <DialogDescription>
            Share a few details so we can provide you with the complete IITGN CDF PG Diploma brochure.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDownloadBrochure} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brochure-name">Full Name</Label>
            <Input
              id="brochure-name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange("name")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brochure-email">Email ID</Label>
            <Input
              id="brochure-email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brochure-phone">Mobile Number</Label>
            <Input
              id="brochure-phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              required
            />
          </div>
          {formError && <p className="text-sm text-destructive">{formError}</p>}
          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Preparing download..." : "Download PDF"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDownloadButton;


