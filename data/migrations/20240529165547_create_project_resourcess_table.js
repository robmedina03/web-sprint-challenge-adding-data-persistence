
exports.up = function(knex) {
  return knex.schema.createTable('project_resources', table => {
    table.increments()
    table.integer('project_id').notNullable().references('project_id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
    table.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE')

    
  })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
};
