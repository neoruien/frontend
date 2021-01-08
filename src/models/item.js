export default class item { 
  constructor(id, name, imageUri) { 
    this.id = id;
    this.name = name;
    this.imageUri = imageUri
  }

  getId() { 
    return this.id;
  }

  getName() { 
    return this.name;
  }
}