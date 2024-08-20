import { Link } from '@tanstack/react-router';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ToolLogoProps {
  logoName: string;
  logoSrc: string;
  logoUrl: string;
}

export const ToolLogo = ({ logoName, logoSrc, logoUrl }: ToolLogoProps) => {
  return (
    <Link to={logoUrl} target="_blank" className="select-none hover:scale-110">
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger>
            <img src={logoSrc} alt="react" className="h-10" />
          </TooltipTrigger>
          <TooltipContent>{logoName}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};
