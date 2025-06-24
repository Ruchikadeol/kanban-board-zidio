import UserModel from './users.model';
import ColumnModel from './columns.model';
import TaskModel from './tasks.model';
import { db } from '@/databases';

export const setupAssociations = () => {
  UserModel.hasMany(ColumnModel, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'columns',
  });

  UserModel.hasMany(TaskModel, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'tasks',
  });

  ColumnModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'user',
  });

  ColumnModel.hasMany(TaskModel, {
    sourceKey: 'id',
    foreignKey: 'columnId',
    as: 'tasks',
    onDelete: 'CASCADE',
  });

  TaskModel.belongsTo(ColumnModel, {
    foreignKey: 'columnId',
    as: 'column',
  });

  TaskModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'user',
  });
};

export const syncDatabase = async () => {
  try {
    // Sync models in the correct order: parent models first, then children
    await UserModel.sync();
    await ColumnModel.sync();
    await TaskModel.sync();
    console.log('Database tables synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database tables:', error);
    throw error;
  }
};
