/**
    Para criar esse arquivo
    yarn typeorm migration:create -n CreateSurveysUsers
    
    Depois de preencher esse arquivo
    yarn typeorm migration:run

    Lembrar de criar agora o modelo, o repository e o controller
**/

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveysUsers1615646440184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveysUsers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:  true
                    },
                    {
                        name: "userId",
                        type: "uuid"
                    },
                    {
                        name: "surveyId",
                        type: "uuid"
                    },
                    {
                        name: "value",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["userId"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKSurvey",
                        referencedTableName: "surveys",
                        referencedColumnNames: ["id"],
                        columnNames: ["surveyId"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveysUsers");
    }

}
