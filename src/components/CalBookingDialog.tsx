import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Cal.com booking link in "username/event-slug" form
export const CAL_LINK = "cristian-dieguez-uhgoro/15min";
export const CAL_EMBED_URL = `https://cal.com/${CAL_LINK}`;

interface CalBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalBookingDialog = ({ open, onOpenChange }: CalBookingDialogProps) => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2563EB" },
          dark: { "cal-brand": "#2563EB" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
        <div className="flex-1 px-2 pb-2 h-full overflow-auto">
          <Cal
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", minHeight: 500 }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalBookingDialog;
