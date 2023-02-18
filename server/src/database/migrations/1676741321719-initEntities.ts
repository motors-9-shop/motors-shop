import { MigrationInterface, QueryRunner } from 'typeorm';

export class initEntities1676741321719 implements MigrationInterface {
  name = 'initEntities1676741321719';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "address" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "state" character varying NOT NULL,
                "city" character varying NOT NULL,
                "street" character varying NOT NULL,
                "number" integer NOT NULL,
                "complement" character varying,
                "cep" character varying NOT NULL,
                "userId" uuid,
                CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"),
                CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'common')
        `);
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "dateOfBirth" date NOT NULL,
                "cpf" character varying(11) NOT NULL,
                "phone" character varying(11) NOT NULL,
                "description" character varying NOT NULL,
                "role" "public"."user_role_enum" NOT NULL DEFAULT 'common',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "comment" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "text" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "userId" uuid,
                "adId" uuid,
                CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TYPE "public"."ad_type_enum" AS ENUM('sell', 'auction')
        `);
    await queryRunner.query(`
            CREATE TABLE "ad" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "description" character varying NOT NULL,
                "isActive" boolean NOT NULL DEFAULT true,
                "price" money NOT NULL,
                "type" "public"."ad_type_enum" NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "userId" uuid,
                CONSTRAINT "PK_0193d5ef09746e88e9ea92c634d" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TYPE "public"."vehicle_type_enum" AS ENUM('car', 'motocycle')
        `);
    await queryRunner.query(`
            CREATE TABLE "vehicle" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "km" integer NOT NULL,
                "year" integer NOT NULL,
                "bannerUrl" character varying NOT NULL,
                "type" "public"."vehicle_type_enum" NOT NULL,
                "adId" uuid,
                CONSTRAINT "REL_4715819c7ee1eb3ac647aa5036" UNIQUE ("adId"),
                CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "image" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "url" character varying NOT NULL,
                "vehicleId" uuid,
                CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "address"
            ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "comment"
            ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "comment"
            ADD CONSTRAINT "FK_89aba65bd40e79c3a9b4de649aa" FOREIGN KEY ("adId") REFERENCES "ad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "ad"
            ADD CONSTRAINT "FK_9ef75c41971255cd79702c9048a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "vehicle"
            ADD CONSTRAINT "FK_4715819c7ee1eb3ac647aa5036d" FOREIGN KEY ("adId") REFERENCES "ad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "image"
            ADD CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "image" DROP CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427"
        `);
    await queryRunner.query(`
            ALTER TABLE "vehicle" DROP CONSTRAINT "FK_4715819c7ee1eb3ac647aa5036d"
        `);
    await queryRunner.query(`
            ALTER TABLE "ad" DROP CONSTRAINT "FK_9ef75c41971255cd79702c9048a"
        `);
    await queryRunner.query(`
            ALTER TABLE "comment" DROP CONSTRAINT "FK_89aba65bd40e79c3a9b4de649aa"
        `);
    await queryRunner.query(`
            ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"
        `);
    await queryRunner.query(`
            ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"
        `);
    await queryRunner.query(`
            DROP TABLE "image"
        `);
    await queryRunner.query(`
            DROP TABLE "vehicle"
        `);
    await queryRunner.query(`
            DROP TYPE "public"."vehicle_type_enum"
        `);
    await queryRunner.query(`
            DROP TABLE "ad"
        `);
    await queryRunner.query(`
            DROP TYPE "public"."ad_type_enum"
        `);
    await queryRunner.query(`
            DROP TABLE "comment"
        `);
    await queryRunner.query(`
            DROP TABLE "user"
        `);
    await queryRunner.query(`
            DROP TYPE "public"."user_role_enum"
        `);
    await queryRunner.query(`
            DROP TABLE "address"
        `);
  }
}
