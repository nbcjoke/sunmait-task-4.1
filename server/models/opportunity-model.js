module.exports = (sequelize, DataTypes) => {
  const Opportunity = sequelize.define(
    "opportunity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Opportunity;
};
