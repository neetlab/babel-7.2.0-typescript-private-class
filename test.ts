import Dexie from 'dexie';

interface Settings {
  foo: string;
}

export class Database extends Dexie {
  public settings: Dexie.Table<Settings, string>;

  constructor () {
    super('pixim');

    this.version(1).stores({
      settings: 'foo',
    });
  }
}

export const db = new Database();
