import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { POKEMON_LIST, POKEMON_LIST_FAILED, POKEMON_FETCH_REQUESTED, POKEMON_ABILITIES_REQUESTED } from '../constants/ActionTypes';
import pokemonApi from '../API/api.js';
export function *fetchUser(action) {
  const source = (action && action.source)? action.source : {};
   try {
      const pokemon = yield call(fetch, {api: source.api, method: source.method, aliasedType: source.aliasedType, args:source.args});
      yield put({type: source.aliasedType, pokemon: pokemon});
   }catch (e) {
      yield put({type: `${source.aliasedType}_FAILED`, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function *mySaga() {
  yield takeEvery("POKEMON_FETCH_REQUESTED", fetchUser);
}

export function *fetch({
	api,
	method,
	aliasedType='',
	args=[],
	saveError=false,
	saveSuccess=true
}) {
	try {
		let value = null;
			value = yield call([ pokemonApi, pokemonApi[method]], ...args);
		return value;
	}
	catch(error) {
		if (!saveError) {
			yield put({type: `${aliasedType}_ERROR`, value: error});
		}
		return error;
	}
}
