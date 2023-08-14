import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import gameModel from '../models/gameModel.js';

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);

export const game = gameModel(db);

export default db;
