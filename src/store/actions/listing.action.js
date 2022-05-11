import { listingType } from '../types';
import RNFS from 'react-native-fs';
import { insertListing, fetchListings } from '../../db/index';

const { ADD_LISTING, LOAD_LISTING } = listingType;

export default {
  addListing: (title, picture, price, address) => {
    return async (dispatch) => {
      const fileName = picture.split('/').pop();
      const Path = `file://${RNFS.DocumentDirectoryPath}/${fileName}`;

      try {
        await RNFS.copyFile(picture, Path);

        const result = await insertListing(title, Path, price, address);
        dispatch({
          type: ADD_LISTING,
          payload: {
            Id: result.insertId,
            title,
            picture: Path,
            price,
            address,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
  loadListing: () => {
    return async (dispatch) => {
      try {
        const result = await fetchListings();
        dispatch({
          type: LOAD_LISTING,
          payload: result,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};
