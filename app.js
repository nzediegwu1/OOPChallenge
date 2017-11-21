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
const centers = [
{
    centerName: 'Andela Epic Tower',
    location: 'Lagos',
    price: 45000, // per day
}];

// class
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validateUser() {
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
    sendNotification(eventName) {
        if (typeof eventName === 'string') {
            return { message: `Admin deleted your event: ${eventName}` };
        }
        return { error: 'An error occured' };
    }

    createEvent(eventname, center, date) {
        if (this.validateUser() !== true) {
            return this.validateUser();
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
/*object*/
const newUser = new User('anaeze', 'password1');

/* encapsulation*/
newUser.createEvent('Hackaton', 'Lagos', '25 Dec');
newUser.sendNotification('Hackathon');

// inheritance
class AdminUser extends User {
    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;
    }
    // polymorphism
    sendNotification(eventName, center) {
        if (typeof eventName === 'string' && center === 'string') {
            return { message: `User deleted own event: ${eventName} at ${center} center` };
        }
        return { error: 'An error occured' };
    }
    validateCenter(centerName, location, price) {
        for (var i = 0; i < centers.length; i++) {
            if (
              centers[i].centerName === centerName &&
              centers[i].location === location &&
              centers[i].price === date
            ) {
                return { error: 'Center already exists' };
            }
        }
        return true;
    }
    createCenter(centerName, location, price) {
        if (this.validateUser() !== true) {
            return this.validateUser();
        } else if (this.validateCenter(centerName, location, price) !== true) {
            return this.validateCenter(centerName, location, price);
        } else {
            const newCenter = {
                centerName: centerName,
                location: location,
                price: price,
            };
            centers.push(newCenter);
            return `Successfullly created: ${JSON.stringify(centers.pop())}`;
        }
    }
}
/*object*/
const adminUser = new AdminUser('anaeze', 'password1');

/* encapsulation*/
adminUser.createEvent('Hackaton', 'Lagos', '25 Dec');
adminUser.createCenter('National Stadium', 'Abuja', 55000);

adminUser.sendNotification('Hackathon', 'Andela Tower');
