import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
 let existingContacts = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        existingContacts = JSON.parse(data)
    } catch (err){
        throw(err)
    }
 const oneContact = createFakeContact(); 
  existingContacts.push(oneContact); 

    try {
        await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2), 'utf-8');
    } catch (err) {
        throw (err)
    }
};

addOneContact();
