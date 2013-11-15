/**
 * Runs all end to end tests
 */

describe('My Sample Static Site', function() {

  it('should render the root', function() {
    browser().navigateTo('/');
    expect(element('title').text()).toBe("Express");
  });

  it('should render /users', function() {
    browser().navigateTo('/users');
    expect(element('title').text()).toBe("Users");
  });

  it('should render /players', function() {
    browser().navigateTo('/players');
    expect(element('title').text()).toBe("Players");
  });

  it('should render /players/richard', function() {
    browser().navigateTo('/players/richard');
    expect(element('title').text()).toBe("Player: richard");
  });

  it('should player /players/jake', function() {
    browser().navigateTo('/players/jake');
    expect(element('title').text()).toBe("Player: jake");
  });

  it('should player /players/guy', function() {
    browser().navigateTo('/players/guy');
    expect(element('title').text()).toBe("Player: guy");
  });

});