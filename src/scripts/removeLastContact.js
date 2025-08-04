import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data)

    if(contacts.length === 0) { 
        return [];
     };

     const removed = contacts.pop();
     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
     return removed;
 };

removeLastContact();
