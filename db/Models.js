const db = require('./index');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // eslint-disable-next-line class-methods-use-this
  parseSelectQuery(input) {
    return Object.entries(input).reduce((parsed, [key, val]) => {
      parsed.fields += `${key} = ? `;
      parsed.values.push(val);
      return parsed;
    }, { fields: '', values: [] });
  }

  getAll() {
    return db.queryAsync(`SELECT * FROM ${this.tableName};`);
  }

  getOneWhere(params) {
    const parsedParams = this.parseSelectQuery(params);
    return db.queryAsync(`SELECT * FROM ${this.tableName} WHERE ${parsedParams.fields}`, parsedParams.values);
  }
}

class Course extends Model {
  constructor() {
    super('courses');
  }

  getAll() {
    return this.getAll(this.tableName);
  }

  findCourseById(id) {
    return this.getOneWhere({ id });
  }
}

module.exports.Course = new Course();
