import { GlobalProvider } from 'rmox';
import './app.scss';
import 'windi.css';

const App = ({ children }) => <GlobalProvider>{children}</GlobalProvider>;

export default App;
