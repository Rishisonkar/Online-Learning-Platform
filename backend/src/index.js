import dotenv from "dotenv";
dotenv.config(); // Load environment variables at the start

import { app } from "./app.js";
import { db } from "./database/db.js";

const PORT = process.env.PORT || 3000;

db().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("❌ Database connection failed", err);
});
