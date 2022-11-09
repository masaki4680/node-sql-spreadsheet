import db from './db'
import { GoogleSpreadsheetService } from './spread-sheet';

const spreadService = await GoogleSpreadsheetService.getInstance();

const sql1 = "SELECT name.email FROM users;";

const users = await db.query(sql1);
await spreadService.addSheet('newSheet2', ['name', 'email']);
await spreadService.addRows('newSheet2', users );