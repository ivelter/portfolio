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
  header?: TimelineHeader;
  items?: TimelineItem[];
}

export interface TimelineType {
  title: string,
  start: TimelineHeader|null,
  end: TimelineHeader|null,
  content: TimelineContent[]
}

