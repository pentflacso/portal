import { useAppContext } from '../../../context/AppContext';
import CustomScrollbar from '../../../customScrollbar/CustomScrollbar';

export default function MainWrapper({ children }) {

    const { windowSize } = useAppContext();

    if(windowSize >= 1025) {
        return(<CustomScrollbar>{children}</CustomScrollbar>);
    } else {
        return (<main>{children}</main>);
    }
}