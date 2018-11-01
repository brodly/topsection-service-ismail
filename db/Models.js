const { queryAsync } = require('./db.js');

class Model {

  constructor(tableName) {
    this.tableName = tableName;
  }

  parseSelectQuery(input) {
    return Object.entries(input).reduce((parsed, [ key, val ]) => {
      parsed.fields += `${key} = ? `;
      parsed.values.push(val);
      return parsed;
    }, { fields: '', values: [] });
  }

  getAll() {
    return queryAsync(`SELECT * FROM ${this.tableName};`);
  }

  getOneWhere(params) {
    const parsedParams = this.parseSelectQuery(params);
    return queryAsync(`SELECT * FROM ${this.tableName} WHERE ${parsedParams.fields}`, parsedParams.values);
  }

}

class Course extends Model {

  constructor() {
    super('courses');
  }

  getAll() {
    this.super.getAll(this.tableName);
  }

}

module.exports.Model = Model;
module.exports.Course = Course;

