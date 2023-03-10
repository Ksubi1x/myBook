module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define('Posts', {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        postText: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Asssociates posts with comments

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade',
        })
    }

    return Posts;
}