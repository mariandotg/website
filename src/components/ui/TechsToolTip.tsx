import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../design-system/tooltip'
import { Badge, type TechBadge } from '../design-system/Badge'

interface Props {
  techs: TechBadge[]
}

const TechsToolTip: React.FunctionComponent<Props> = ({ techs }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge className="px-1 py-0.5" variant={'secondary'}>
            +{techs.length}
          </Badge>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {techs.map((tech) => (
            <p key={tech.label}>{tech.label}</p>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TechsToolTip
