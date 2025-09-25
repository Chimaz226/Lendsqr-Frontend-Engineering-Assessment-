import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

const users = Array.from({ length: 500 }).map((_, i) => ({
  id: i + 1,
  orgName: faker.company.name(),
  userName: faker.internet.username(),
  email: faker.internet.email(),
  phoneNumber: faker.helpers.replaceSymbols("+234##########"),
  createdAt: faker.date.past().toISOString(),
  status: faker.helpers.arrayElement([
    "active",
    "inactive",
    "pending",
    "blacklisted",
  ]),
}));

writeFileSync("db.json", JSON.stringify({ users }, null, 2));

console.log(`✅ db.json generated with ${users.length} users!`);
