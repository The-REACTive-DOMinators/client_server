import {
  Model,
  Table,
  AllowNull,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  Unique
} from 'sequelize-typescript';
import { User } from './User';

@Table({
  tableName: 'tokens',
  createdAt: false,
  updatedAt: false
})
export class Token extends Model {
  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  token: string;

  @ForeignKey(() => User)
  @BelongsTo(() => User, 'userId')
  userAssociation: User;
}
