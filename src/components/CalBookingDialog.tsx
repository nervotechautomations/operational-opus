import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ⚙️ UPDATE THIS to your Cal.com booking link
export const CAL_EMBED_URL = "https://cal.com/cristian-dieguez-uhgoro/30min";

interface CalBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalBookingDialog = ({ open, onOpenChange }: CalBookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] h-[85vh] p-0 bg-background border-border/50 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-lg font-semibold text-foreground">
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Book a free 30-minute strategy call
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 px-2 pb-2 h-full">
          <iframe
            src={`${CAL_EMBED_URL}?embed=true&theme=dark`}
            className="w-full h-full min-h-[500px] rounded-lg border-0"
            style={{ colorScheme: "dark" }}
            title="Schedule a consultation"
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalBookingDialog;
