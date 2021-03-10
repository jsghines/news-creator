import { Field, ID, Int, ObjectType } from "type-graphql";
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { RSSItemInterface } from "../interface/RSSItem";
import {RSS} from "./RSS";

@ObjectType({ description: "RSS feed items" })
@Entity()
export class RSSItem implements RSSItemInterface{
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(_type => String)
    @Column()
    pubDate: Date;

    @Field()
    @Column()
    link: string;

    @Field()
    @Column()
    guid: string;

    @Field()
    @Column()
    description: string;

    @Field(_type => Int)
    @JoinColumn({
        name: 'rssId'
    })
    @ManyToOne(() => RSS, rss => rss.rssItems)
    rss: RSS;

    @Column({
        name: 'rssId'
    })
    rssId: number;
}