import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../design-system/Card'
import { ArrowUpRightIcon } from 'lucide-react'
import useDate from '@/hooks/useDate'

export interface Note {
  title: string
  description: string
  date: string
  slug: string
}

interface Props {
  note: Note
  stripped?: boolean
}

const NoteCard: React.FunctionComponent<Props> = ({ note, stripped }) => {
  const { long } = useDate(new Date(note.date))
  return (
    <Card
      className="bg-transparent border-none rounded-none"
      stripped={stripped}
      hoverable
    >
      <a href={`notes/${note.slug}`}>
        <CardHeader>
          <CardTitle className="w-full flex flex-wrap justify-between">
            {note.title}
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
      </a>
    </Card>
  )
}

export { NoteCard }
