class Listing {
  constructor(Id, title, picture, price, address) {
    this.Id = Id.toString();
    this.title = title;
    this.picture = picture;
    this.price = price;
    this.address = address;
  }
}

export default Listing;
