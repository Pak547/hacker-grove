const sequelize = require('../config/connection');
const { User, Project, Language, Tracking } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const languageData = require('./languageData.json');
const trackingData = require('./trackingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const language of languageData) {
    await Language.create({
      ...language,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const tracking of trackingData) {
    await Tracking.create({
      ...tracking,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};


seedDatabase();
