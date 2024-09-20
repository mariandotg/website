import React from 'react'
import { Badge, type TechBadge } from '../design-system/Badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../design-system/Card'
import FaviconDisplay from './FaviconDisplay'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../design-system/tooltip'

export interface Project {
  faviconUrl: string
  title: string
  description: string
  techStack: TechBadge[]
}

interface Props {
  project: Project
}

const ProjectCard: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Card className="bg-transparent max-w-96" hoverable>
      <CardHeader>
        <CardTitle className="content-center flex gap-x-2">
          <FaviconDisplay url={project.faviconUrl} />
          {project.title}
        </CardTitle>
        <ul className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <li>
              <Badge variant={tech.variant} className="whitespace-nowrap">
                {tech.label}
              </Badge>
            </li>
          ))}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-4">test</TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ul>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
