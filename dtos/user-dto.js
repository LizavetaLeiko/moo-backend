module.exports = class UserDto {
  email;
  id;
  isActivated;
  likedFilms;
  // theme;


  constructor(model) {
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
      this.likedFilms = model.likedFilms;
      // this.theme = model.theme;
  }
}