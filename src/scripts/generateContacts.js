import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
   
let existingContacts = [];
   try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    existingContacts = JSON.parse(data); 
   } catch (err){
    throw(err)
   }

const newContacts  = [];
   for (let i = 0; i < number; i++) { 
    newContacts.push(createFakeContact()) 
   }


const updateContacts = [...existingContacts, ...newContacts];
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updateContacts,null, 2), 'utf-8');
    } catch (err){
        throw(err);
    }
};
generateContacts(5);
