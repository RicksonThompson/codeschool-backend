import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateModule1620500766499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name: 'modules',
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
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'user_id',
              type: 'int',
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
        }), true
      )

      queryRunner.clearSqlMemory();

      const foreignKey = new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      await queryRunner.createForeignKey('modules', foreignKey);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('modules');
    }

}
