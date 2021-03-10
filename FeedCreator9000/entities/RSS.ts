import { Field, ID, Int, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { RSSInterface } from "../interface/RSS";
import { RSSItem } from "./RSSItem";

@ObjectType({ description: "RSS Data" })
@Entity()
export class RSS implements RSSInterface {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    link: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    language: string;

    @Field(_type => [RSSItem])
    @OneToMany(() => RSSItem, rssItem => rssItem.rss)
    rssItems: RSSItem[];

    @Field()
    @Column()
    rssUrlLink: string;
}