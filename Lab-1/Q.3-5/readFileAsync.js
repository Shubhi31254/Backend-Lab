const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("❌ File not found!");
    } else {
      console.error("❌ Error:", err.message);
    }
    return;
  }
  console.log("✅ File data:\n" + data);
});
