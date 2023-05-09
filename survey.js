const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const obj1 = {
  name: '',
  activity: '',
  listen: '',
  meal: '',
  eat: '',
  sport: '',
  superPower: '',
};

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  obj1["name"] = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    obj1["activity"] = answer;
    rl.question(`What do you listen to while doing that? `, (answer) => {
      obj1["listen"] = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        obj1["meal"] = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          obj1["eat"] = answer;
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            obj1["sport"] = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              obj1["superPower"] = answer;
              console.log(`${obj1["name"]} loves listening to ${obj1["listen"]} while ${obj1["activity"]}, devouring ${obj1["eat"]} for ${obj1["meal"]}, prefers ${obj1["sport"]} over any other sport, and is amazing at ${obj1["superPower"]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});





