import { db } from '@/databases';
import { Task } from '@interfaces/tasks.interface';
import { DataTypes, Model } from 'sequelize';

class TaskModel extends Model<Task, Task> {
  public declare id: string;
  public declare position: number;
  public declare content: string;
  public declare userId: string | null;
  public declare columnId: string | null;
}

TaskModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    columnId: {
      type: DataTypes.STRING,
      references: {
        model: 'columns',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    tableName: 'tasks',
    sequelize: db,
  },
);

export default TaskModel;
