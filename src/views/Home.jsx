import { useState, useCallback } from 'react';

function Home() {

    return (
        <div>
            <h1>Home</h1>
            <SongList />
            <Loading />
        </div>
    );
}
function SongList() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    // const songs = [{ id: 1, name: "song1", artist: "artist1" }, { id: 2, name: "song2", artist: "artist2" }, { id: 3, name: "song3", artist: "artist3" }];
    return (
        <div>
            return (
            <button onClick={increment}>
                {count}
            </button>
            );

        </div>
    );
}
function Loading() {
    const isLoading = false;

    return <p>{isLoading ? "Loading..." : ""}</p>
}
const songList = () => {
    const songs = [{ id: 1, name: "song1", artist: "artist1" }, { id: 2, name: "song2", artist: "artist2" }, { id: 3, name: "song3", artist: "artist3" }];
    return (
        <div>
            <ul>
                {songs.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}
export default Home;