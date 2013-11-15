/** A Sample Angular E2E test */

describe('My Sample App', function() {

  it('should let Angular do its work', function() {
    browser().navigateTo('/');
    //input('yourName').enter('A Pirate!');
    expect(element('title').text()).toBe("Express");
  });

  it('should let Angular do its work2', function() {
    browser().navigateTo('/users');
    //input('yourName').enter('A Pirate!');
    expect(element('title').text()).toBe("Users, Bitch");
  });

  it('should players', function() {
    browser().navigateTo('/players');
    //input('yourName').enter('A Pirate!');
    expect(element('title').text()).toBe("Players");
  });

  it('should player richard', function() {
    browser().navigateTo('/players/richard');
    //input('yourName').enter('A Pirate!');
    expect(element('title').text()).toBe("Player: richard");
  });

  it('should player jake', function() {
    browser().navigateTo('/players/jake');
    //input('yourName').enter('A Pirate!');
    expect(element('title').text()).toBe("Player: jake");
  });

  it('should try to fucking break', function() {

    for (var i = 0; i < 20000; i++) {
      browser().navigateTo('/items/' + i);
    }

    //input('yourName').enter('A Pirate!');
//    expect(element('title').text()).toBe("Player: jake");
  });

  xit('should skip this e2e test', function() {
    sleep(15);
    browser().navigateTo('/index.html');
  });
});