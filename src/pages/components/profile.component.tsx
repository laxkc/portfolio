import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

export default function ProfileComponent() {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
      {/* Avatar */}
      <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-muted shadow-sm">
        <AvatarImage src="https://github.com/laxkc.png" alt="Laxman KC" />
        <AvatarFallback className="bg-muted flex items-center justify-center">
          <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>

      {/* Name + Title */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Laxman KC</h2>
        <p className="text-sm sm:text-base text-muted-foreground font-medium">
          Software Developer
        </p>
      </div>
    </div>
  );
}
