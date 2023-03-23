import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1679607822180 implements MigrationInterface {
  name = "createTables1679607822180";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "tel" character varying(13) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "UQ_55d4171a7380cfed5b492cf85f9" UNIQUE ("tel"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying(127) NOT NULL, "tel" character varying(13) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_2bd89ee79c1d3705c56cfef7e9b" UNIQUE ("tel"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`
    );
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(`DROP TABLE "contact"`);
  }
}
