export default class box { 
  constructor(id, name, location, ...items) { 
    this.id = id;
    this.name = name;
    this.location = location;
    this.items = items;
  }

  getId() { 
    return this.id;
  }

  getName() { 
    return this.name;
  }

  getLocation() { 
    return this.location;
  }

  getItems() { 
    return this.items;
  }

  deleteItem(itemId) { 
    this.item = this.item.filter(item => item.id != item.Id)
  }
}