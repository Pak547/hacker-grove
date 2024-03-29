const Language = require('./Language')
const User = require('./User');
const Project = require('./Project');
//const Tracking = require('./Tracking')

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Language, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Language.belongsTo(User, {
    foreignKey: 'user_id'
});

// User.hasOne(Tracking, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Tracking.belongsTo(User, {
//     foreignKey: 'user_id'
// });

module.exports = { User, Project, Language };