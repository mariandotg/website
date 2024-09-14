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
    /**
     * hover card styles:
     * transition-all hover:bg-accent/25 hover:cursor-pointer
     */
    <Card className="bg-transparent w-96 transition-all hover:bg-accent/25 hover:cursor-pointer">
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
        </ul>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
