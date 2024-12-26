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

