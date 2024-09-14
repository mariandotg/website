import type { Work } from '@/components/ui/JobCard'
import type { Project } from '@/components/ui/ProjectCard'

const workExperience = [
  {
    company: 'Stefanini',
    title: 'Full Stack Developer',
    start: '2024',
    end: null,
    description: 'I work on RCI (Renault Credit International) project',
    responsabilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl sem, et tincidunt tellus euismod efficitur. Sed a tristique dolor.',
      'Pellentesque at eleifend mi. Vestibulum ornare augue nec massa auctor fermentum.',
      'Cras ipsum tortor, accumsan elementum ornare ac, pharetra id metus.',
    ],
    techStack: [
      {
        variant: 'default',
        label: 'Java',
      },
      {
        variant: 'secondary',
        label: 'Spring Boot',
      },
      {
        variant: 'secondary',
        label: 'AngularJS',
      },
      {
        variant: 'secondary',
        label: 'SQLServer',
      },
    ],
  },
  {
    company: 'Upward Solutions',
    title: 'Full Stack Developer',
    start: '2022',
    end: '2024',
    description: 'I worked across multiple projects from start to finish',
    responsabilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl sem, et tincidunt tellus euismod efficitur. Sed a tristique dolor.',
      'Pellentesque at eleifend mi. Vestibulum ornare augue nec massa auctor fermentum.',
      'Cras ipsum tortor, accumsan elementum ornare ac, pharetra id metus.',
    ],
    techStack: [
      {
        variant: 'default',
        label: 'React/Next.js',
      },
      {
        variant: 'secondary',
        label: 'Node.js',
      },
      {
        variant: 'secondary',
        label: 'Java',
      },
      {
        variant: 'secondary',
        label: 'Spring Boot',
      },
    ],
  },
] as Work[]

const projects = [
  {
    faviconUrl: 'https://marianoguillaume.com/en/',
    title: 'personal website',
    description: 'personal website',
    techStack: [
      {
        variant: 'default',
        label: 'React/Next.js',
      },
      {
        variant: 'secondary',
        label: 'Node.js',
      },
      {
        variant: 'secondary',
        label: 'Java',
      },
    ],
  },
] as Project[]

export { workExperience, projects }
