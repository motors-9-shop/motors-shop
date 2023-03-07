import { MigrationInterface, QueryRunner } from "typeorm";

export class addRecoverCode1677861564070 implements MigrationInterface {
    name = 'addRecoverCode1677861564070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "recoveryCode" character varying
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "recoveryCode"
        `);
    }

}
