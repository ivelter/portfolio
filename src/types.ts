//-----------
// Timelines
export interface TimelineItem {
  type: 'item',
  date: string,
  description: string
}

export interface TimelineHeader {
  type: 'header',
  description: string
}

export interface TimelineContent {
  type: 'header' | 'items';
  header?: TimelineHeader | undefined;
  items?: TimelineItem[] | undefined;
}

export interface TimelineType {
  title: string,
  start: string|null,
  end: string|null,
  content: TimelineContent[]
}

//-----------
// Projects (preview)
export enum ProjectTypes {
  sae,
  hackaton,
  gamejam,
  personnel,
}

export interface Project {
  title: string,
  subtitle: string,
  type: ProjectTypes,
  route: string,
  imageSource: string|undefined,
  imageAlt: string|undefined
}

//-----------
// Openable summary/details sections
export interface AccordionItem {
  category: Competences|null|undefined,
  summary: string,
  details: string,
}

//-----------
// Portfolio IUT
export enum Competences {
  realiser,
  optimiser,
  administrer,
  gerer,
  conduire,
  collaborer,
}
