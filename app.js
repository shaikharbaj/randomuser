const express = require("express")
require("dotenv").config();
const app = express();
const { faker } = require("@faker-js/faker")

function generateUniqueRecord() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        // Add more fields as needed
    };
}

// Endpoint to fetch 2000 unique records
app.get('/api/unique-records', (req, res) => {
    const records = [];
    for (let i = 0; i < 500; i++) {
        records.push(generateUniqueRecord());
    }
    const payload = {
           users:records
    }
    return res.status(201).json({success:true,users:records})
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`);
})