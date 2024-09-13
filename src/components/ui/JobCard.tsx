import React from 'react'
import { Badge, type TechBadge } from '../design-system/Badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../design-system/Card'
import { ExternalLinkIcon } from 'lucide-react'

export interface Work {
  company: string
  title: string
  start: string
  end: string | null
  description: string
  responsabilities: string[]
  techStack: TechBadge[]
}

interface Props {
  work: Work
}

const JobCard: React.FunctionComponent<Props> = ({ work }) => {
  return (
    /**
     * hover card styles:
     * transition-all hover:bg-accent/25 hover:cursor-pointer
     */
    <Card className="bg-transparent w-96">
      <CardHeader>
        <span className="text-[14px]/[14px] mb-1 text-muted-foreground">
          {work.start} - {work.end || 'Current'}
        </span>
        <CardTitle className="content-center mb-1">
          {work.title} -{' '}
          <span className="text-muted-foreground">{work.company}</span>
        </CardTitle>
        <ul className="flex gap-2 flex-wrap">
          {work.techStack.map((tech) => (
            <li>
              <Badge variant={tech.variant} className="whitespace-nowrap">
                {tech.label}
              </Badge>
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-1.5">
          I work on{' '}
          <a
            href="https://www.renaultcredit.com.ar/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-blue-500 underline hover:text-blue-700 transition-all inline-flex gap-x-1 items-center mr-1"
          >
            RCI (Renault Credit International)
            <ExternalLinkIcon size={16} />
          </a>
          project
        </CardDescription>
        <ul className="list-disc list-inside space-y-1.5">
          {work.responsabilities.map((resp) => (
            <li className="text-sm text-muted-foreground">{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export { JobCard }
