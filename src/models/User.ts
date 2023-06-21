import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';
import { Products } from './Products';
import { Token } from './Token';

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false
})
export class User extends Model {
  @AllowNull(false)
  @Unique
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID
  })
  id: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  password: string;

  @AllowNull(true)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  favorites: string[];

  @AllowNull(true)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  cart: string[];

  @AllowNull(true)
  @Column({
    type: DataType.STRING
  })
  activationToken: string | null;

  @HasMany(() => Products)
  products: Products[];

  @HasOne(() => Token)
  token: Token;
}
