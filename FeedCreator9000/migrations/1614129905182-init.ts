import {MigrationInterface, QueryRunner} from "typeorm";

export class init1614129905182 implements MigrationInterface {
    name = 'init1614129905182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rss_item" ("id" SERIAL NOT NULL, "pubDate" TIMESTAMP NOT NULL, "link" character varying NOT NULL, "guid" character varying NOT NULL, "description" character varying NOT NULL, "rssId" integer NOT NULL, CONSTRAINT "PK_09289f2d16c1560380e085feb20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rss" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "language" character varying NOT NULL, "rssUrlLink" character varying NOT NULL, CONSTRAINT "PK_52b0451245f4b73ae3d488ffb5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rss_item" ADD CONSTRAINT "FK_6034d69f6f5291b6bdc9b816f94" FOREIGN KEY ("rssId") REFERENCES "rss"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rss_item" DROP CONSTRAINT "FK_6034d69f6f5291b6bdc9b816f94"`);
        await queryRunner.query(`DROP TABLE "rss"`);
        await queryRunner.query(`DROP TABLE "rss_item"`);
    }

}
