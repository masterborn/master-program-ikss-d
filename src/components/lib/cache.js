import fs from 'fs';
import path from 'path';

function fetchMembersData() {
  console.log('Fetching members data...');
  return [{ email: 'test1@email.com' }, { email: 'test12@email.com' }];
}

const MEMBERS_CACHE_PATH = path.resolve('lib/.members');

export default async function getMembers() {
  let cachedData;

  try {
    cachedData = JSON.parse(fs.readFileSync(path.join(__dirname, MEMBERS_CACHE_PATH), 'utf8'));
  } catch (error) {
    console.log('Member cache not initialized');
  }

  if (!cachedData) {
    const data = fetchMembersData();

    try {
      fs.writeFileSync(path.join(__dirname, MEMBERS_CACHE_PATH), JSON.stringify(data), 'utf8');
      console.log('Wrote to members cache');
    } catch (error) {
      console.log('ERROR WRITING MEMBERS CACHE TO FILE');
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
