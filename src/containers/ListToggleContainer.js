import {connect} from 'react-redux';
import ListToggle from "../components/ListToggle";
import {saveMyMovie, removeMyMovie} from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    saveMyMovie: (movie) => {
      let action = saveMyMovie(movie);
      dispatch(action);
    },
    removeMyMovie: (movie) => {
      let action = removeMyMovie(movie);
      dispatch(action);
    }
  };
};


const ListToggleContainer = connect(null, mapDispatchToProps)(ListToggle);
export default ListToggleContainer
