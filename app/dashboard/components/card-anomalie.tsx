import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
export default function CardAnomalie() {
  return (
    <div className="card-anomalie border border-gray-100 relative overflow-hidden">
      <Alert className="rounded-sm">
        <InfoIcon />
        <AlertTitle className="font-normal">Heads up!</AlertTitle>
        <AlertDescription className="text-xs text-black">
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
