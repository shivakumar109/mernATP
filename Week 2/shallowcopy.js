// 🧪 Given Data:
const user = {
     id: 101,
     name: "Ravi",
     preferences: {
     theme: "dark",
     language: "en"
     }
};

// 🎯 Task
//     1. Create a shallow copy of user
let usercopy={...user}
//2. Change:
     // i. name in the copied object
     usercopy.name="ram"
     // ii. preferences.theme in the copied object
     usercopy.preferences.theme="Light"
     // iii .Log both original and copied objects
     console.log(user)
     console.log(usercopy)
     // iv. Observe what changes and what doesn’t