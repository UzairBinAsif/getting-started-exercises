"use strict";
let current_users = ['Jay', 'Michael', 'Dolly', 'Eric', 'ChahatFatehAliKhan'];
let new_users = ['DukeMichael', 'Molly', 'ERIC', 'NusratFatehAliKhan', 'jay'];
let current_users_lowercase = current_users.map(user => user.toLowerCase());
for (let unique_name of new_users) {
    let new_user_lowercase = unique_name.toLowerCase();
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`The username ${unique_name} already in use, please enter a new username.`);
    }
    else {
        console.log(`The username ${unique_name} is available.`);
    }
}
