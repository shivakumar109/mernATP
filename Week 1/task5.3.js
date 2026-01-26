const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";
//  Turn autoSave to true
settings.autoSave = true;
//  Remove the notifications setting
delete settings.notifications;
//  Freeze the settings object so it cannot be modified
Object.freeze(settings);