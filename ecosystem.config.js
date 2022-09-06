module.exports = {
  script: "BKP-MOR.exe",
  // Specify which folder to watch
  watch: ["BKP-MOR.exe"],
  // Specify delay between watch interval
  watch_delay: 1000,

  watch: true,
  // Specify which folder to ignore 
  ignore_watch : ["configs.json", "README.md", "update.bat", "teste.bat"],
}
