import { RSSInterface } from "./rss";

export interface RSSItemInterface {
    id: number;
    pubDate: Date;
    link: string;
    guid: string;
    description: string;
    rss?: RSSInterface;
    rssId?: number;
}