/***************************************************************
 * File: App.js
 * Author: SKD
 * Date: Aug 02, 2024
 * Description:
 * EComApp design using RTK
 * 
 * Usage:
 * Compile:
 * Run:
 * Notes: tutor "https://github.com/SSA-988/ecommerce-app.git"
 * Revision History:
 * - 1.0 (2024-08-02): Initial version.
 * 
 ***************************************************************/
// import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { UserProvider } from './UserContext';
import Routes from './navigation/Routes';

export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        {/* <StackNavigator /> */}
        <Routes />
      </UserProvider>
    </Provider>
  );
}