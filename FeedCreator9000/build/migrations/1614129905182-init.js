"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1614129905182 = void 0;
class init1614129905182 {
    constructor() {
        this.name = 'init1614129905182';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "rss_item" ("id" SERIAL NOT NULL, "pubDate" TIMESTAMP NOT NULL, "link" character varying NOT NULL, "guid" character varying NOT NULL, "description" character varying NOT NULL, "rssId" integer NOT NULL, CONSTRAINT "PK_09289f2d16c1560380e085feb20" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "rss" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "language" character varying NOT NULL, "rssUrlLink" character varying NOT NULL, CONSTRAINT "PK_52b0451245f4b73ae3d488ffb5e" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "rss_item" ADD CONSTRAINT "FK_6034d69f6f5291b6bdc9b816f94" FOREIGN KEY ("rssId") REFERENCES "rss"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "rss_item" DROP CONSTRAINT "FK_6034d69f6f5291b6bdc9b816f94"`);
            yield queryRunner.query(`DROP TABLE "rss"`);
            yield queryRunner.query(`DROP TABLE "rss_item"`);
        });
    }
}
exports.init1614129905182 = init1614129905182;
