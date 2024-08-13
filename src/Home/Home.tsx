import Header from '../layouts/Header';
import { rootUrl } from '../utils/rootUrl';
import UserList from '../Users/UserList';

function Home() {

    return (
        <>
            <Header />
            <div className='text-center text-danger'>Home {rootUrl}</div>
            <UserList />
        </>
    )
}

export default Home