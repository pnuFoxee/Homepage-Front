import { Switch } from '@headlessui/react';
import { connect } from 'react-redux';

// local
import actionDarkMode from 'redux/action/darkMode';

const DarkModeSwitch = ({ state, darkModeToggle }) => {
  const darkMode = state.darkMode;

  const handleChange = (e) => {
    darkModeToggle();
    console.log('다크모드');
  };

  return (
    <Switch
      checked={darkMode}
      onChange={handleChange}
      className="bg-gray-200 dark:bg-darkComponent relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={
          'translate-x-1 dark:translate-x-6 inline-block w-4 h-4 transform bg-mainYellow rounded-full'
        }
      />
    </Switch>
  );
};

const mapStateToProps = (state, OwnProps) => {
  return { state };
};
const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    darkModeToggle: () => {
      dispatch(actionDarkMode.toggle());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeSwitch);
