
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl
            .string('name', 110)
            .notNullable()
            .unique();
            tbl.text('description');
            tbl
            .boolean('completed')
            .defaultTo(false)
            .notNullable()

    })
        .createTable('actions', tbl => {
            tbl.increments();
            tbl
            .text('description')
            .notNullable();
            tbl.text('more_info');
            tbl
            .boolean('completed')
            .defaultTo(false)
            .notNullable();
            tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        })

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
  
};
