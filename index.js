console.log(`WELCOME TO BABATOSH SHOP
      To access our services, please login as either:
        1) Admin
        2) Customer
      (Enter 1 for admin, and 2 for customer)
    `);
const prompt = require("prompt");
const babaTosh = {
  properties: {
    option: {
      description: "Option",
      type: "number",
      message: "Option must be a valid number",
      required: true,
    },
  },
};
const admin = {
  properties: {
    username: {
      description: "Username",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Name must be only letters, spaces, or dashes!",
      required: true,
    },
    password: {
      description: "Password",
      hidden: true,
      replace: "*",
    },
  },
};
const newCustomers = [];
const newCustomer = {
  properties: {
    username: {
      description: "Please enter a username",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Name must be only letters, spaces, or dashes!",
      required: true,
    },
    password: {
      description: "Please enter a password you'd like to use",
      hidden: true,
      replace: "*",
    },
  },
};
const returningCustomer = {
  properties: {
    username: {
      description: "Please enter your username",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Name must be only letters, spaces, or dashes!",
      required: true,
    },
    password: {
      description: "Password",
      hidden: true,
      replace: "*",
    },
  },
};
// Start the prompt
prompt.start();
// Get properties from the user
prompt.get(babaTosh, function (error, result) {
  if (error) {
    console.log(error);
    return 1;
  }
  if (result.option === 1) {
    console.log("Hello, please enter your adminstrative details to proceed: ");
    prompt.get(admin, function (error, result) {
      if (error) {
        console.log(error);
        return 1;
      }
      console.log(`Hello ${result.username}, Welcome!
      What would you like to do?
      1:white_medium_small_square:Stock taking
      2:white_medium_small_square:Accounting
      3:white_medium_small_square:Customer management`);
    });
    prompt.start();
  } else if (result.option === 2) {
    console.log(`Hello, please select whether you are a new customer or returning customer?
        1) New customer
        2) Returning customer
    `);
    prompt.get(babaTosh, function (error, result) {
      if (error) {
        console.log(error.message);
      }
      if (result.option === 1) {
        console.log(`
        We would love to set you up to our system
        Please enter your details below: `);
        prompt.get(newCustomer, function (error, result) {
          if (error) {
            return error;
          }
          newCustomers.push(result.username);
          console.log(newCustomers);
          console.log(`
          Your username is: ${result.username}
          Your password is: ${result.password}`);
          console.log(`What would you like to do: 
      1:white_medium_small_square:Shop
      2:white_medium_small_square:View balance
      3:white_medium_small_square:View shopping history
      4:white_medium_small_square:Edit profile
            `);
        });
      } else if (result.option === 2) {
        console.log(`Thank you, please login to continue...`);
        prompt.get(returningCustomer, function (error, result) {
          if (error) {
            return error;
          }
          console.log(`What would you like to do: 
      1:white_medium_small_square:Shop
      2:white_medium_small_square:View balance
      3:white_medium_small_square:View shopping history
      4:white_medium_small_square:Edit profile
            `);
        });
      }
    });
  }
});