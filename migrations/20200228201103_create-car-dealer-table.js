exports.up = function(knex) {
  return knex.schema.createTable("car", tbl => {
    tbl.increments();
    tbl.text("VIN", 128).notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("mileage", 10).notNullable();
    tbl.integer("transmissionType", 128);
    tbl.integer("StatusOfTitle", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car");
};
