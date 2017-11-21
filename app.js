const usersData = [
  {
      username: 'anaeze',
      password: 'password1',
  },
  {
      username: 'oreoluwa',
      password: 'password2',
  },
  {
      username: 'seun',
      password: 'password3',
  },
  {
      username: 'godswill',
      password: 'password4',
  },
  {
      username: 'wisdom',
      password: 'password5',
  },
];
const events = [
    {
        eventname: 'Hackaton',
        center: 'Lagos',
        date: '25 Dec',
    }
];
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validate() {
        for (var i = 0; i < usersData.length; i++) {
            if (
              this.username === usersData[i].username &&
              this.password === usersData[i].password
            ) {
                return true;
            }
        }
        return { error: 'You have no access to this resource' };
    }

    validateEvent(eventname, center, date) {
        for (var i = 0; i < events.length; i++) {
            if (
              events[i].eventname === eventname &&
              events[i].center === center &&
              events[i].date === date
            ) {
                return { error: 'Event already exists' };
            }
        }
        return true;
    }

    createEvent(eventname, center, date) {
        if (this.validate() !== true) {
            return this.validate();
        } else if (this.validateEvent(eventname, center, date) !== true) {
            return this.validateEvent(eventname, center, date);
        } else {
            const newEvent = {
                eventname: eventname,
                center: center,
                date: date,
            };
            events.push(newEvent);
            return `Successfullly created: ${JSON.stringify(events.pop())}`;
        }
    }
}
const newUser = new User('anaeze', 'password2');
newUser.createEvent('Hackaton', 'Lagos', '25 Dec');
