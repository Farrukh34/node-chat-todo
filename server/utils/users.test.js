const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Joe',
      room: 'Campus'
    }, {
      id: 2,
      name: 'Peter',
      room: 'Dark'
    }, {
      id: 3,
      name: 'Helen',
      room: 'Campus'
    }];
  });


  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 12,
      name: 'Joe',
      room: 'Ninety'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should remove user', () => {
    var userId = 2;
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = 7;
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = 1;
    var user = users.getUser(userId);

    expect(user.name).toBe('Joe');
  });

  it('should not find user', () => {
    var userId = 7;
    var user = users.getUser(userId);
    expect(user).toBeFalsy();
  });

  it('should return names for room Campus', () => {
    var userList = users.getUserList('Campus');
    expect(userList).toEqual(['Joe', 'Helen']);
  });

  it('should return names for room Dark', () => {
    var userList = users.getUserList('Dark');
    expect(userList).toEqual(['Peter']);
  });

})
