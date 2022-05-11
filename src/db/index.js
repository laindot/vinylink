import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('listings.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS listings (Id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, picture TEXT NOT NULL, price REAL NOT NULL, address TEXT NOT NULL)',
        [],
        () => {
          console.log('successfully create database');
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertListing = (title, picture, price, address) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO listings (title, picture, price, address) VALUES (?, ?, ?, ?)',
        [title, picture, price, address],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject('mi error', err);
        }
      );
    });
  });
  return promise;
};

export const fetchListings = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          let data = [];
          var len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject('error', err);
        }
      );
    });
  });
  return promise;
};
