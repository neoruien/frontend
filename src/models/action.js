export default class action {

  static num = 0;

  constructor(description) { 
    this.id = action.num;
    this.description = description;
    action.num++;
  }

  getId() { 
    return this.id;
  }

  getDescription() { 
    return this.description;
  }
}