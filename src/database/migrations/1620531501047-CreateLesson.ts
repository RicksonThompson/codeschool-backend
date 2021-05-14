import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLesson1620531501047 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'lessons',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'link',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'module_id',
              type: 'int',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        }),
        true,
      );

      queryRunner.clearSqlMemory();

      const foreignKey = new TableForeignKey({
        columnNames: ['module_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'modules',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      await queryRunner.createForeignKey('lessons', foreignKey);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('lessons');
    }

}
