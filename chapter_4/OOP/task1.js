// membuat abstract class
class UserRepository {
  getAll() {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  add(user) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  getByID(id) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  deleteByID(id) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}

class UserRepositoryPostgres extends UserRepository {
  // membuat constructor untuk memdifine atribut
  constructor(users = []) {
    super();
    this.users = users;
  }

  getAll() {
    return this.users;
  }

  add(user) {
    this.users.push(user);
    return this.users;
  }

  getByID(id) {
    const user = this.users.filter((user) => user.id === id)[0];
    if (user == null) {
      return "user not found";
    }
    return user;
  }

  deleteByID(id) {
    this.users = this.users.filter((user) => user.id != id);

    return `user with id ${id} deleted successfully`;
  }
}

// Implementation
users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "asep",
  },
];

const newUser = {
  id: 3,
  name: "selo",
};

const userPostgres = new UserRepositoryPostgres(users);

console.table(userPostgres.getAll());
console.table(userPostgres.add(newUser));
console.table(userPostgres.getByID(1));
console.table(userPostgres.deleteByID(2));
console.table(userPostgres.getAll());
