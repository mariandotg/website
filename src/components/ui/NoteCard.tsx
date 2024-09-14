import React from 'react'
import { Badge, type TechBadge } from '../design-system/Badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../design-system/Card'
import { ArrowUpRight, ArrowUpRightIcon, ExternalLinkIcon } from 'lucide-react'
import useDate from '@/hooks/useDate'

export interface Note {
  title: string
  description: string
  date: Date
}

interface Props {
  note: Note
}

const NoteCard: React.FunctionComponent<Props> = ({ note }) => {
  const { long } = useDate(note.date)
  return (
    /**
     * hover card styles:
     * transition-all hover:bg-accent/25 hover:cursor-pointer
     */
    <Card className="bg-transparent w-96 transition-all hover:bg-accent/25 hover:cursor-pointer group">
      <CardHeader>
        <CardTitle className="w-full flex flex-wrap justify-between">
          {note.title}{' '}
          <ArrowUpRightIcon
            size={16}
            className="text-muted-foreground group-hover:text-white transition-all"
          />
        </CardTitle>
        {
          // Topics array list
          /* <ul className="flex gap-2 flex-wrap">
          {work.techStack.map((tech) => (
            <li>
              <Badge variant={tech.variant} className="whitespace-nowrap">
                {tech.label}
              </Badge>
            </li>
          ))}
        </ul> */
        }
        <span className="text-[14px]/[14px] text-muted-foreground">
          {long['es']}
        </span>
        <CardDescription className="text-[14px]/[14px] ">
          {note.description}
        </CardDescription>
      </CardHeader>
      {/* <CardContent></CardContent> */}
    </Card>
  )
}

export { NoteCard }
