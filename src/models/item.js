export default class item { 
  constructor(id, name, description, location, imageUri) { 
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location
    this.imageUri = imageUri
  }

  getId() { 
    return this.id;
  }

  getName() { 
    return this.name;
  }

  getDescription() { 
    return this.description;
  }

  getLocation() { 
    return this.location;
  }
}