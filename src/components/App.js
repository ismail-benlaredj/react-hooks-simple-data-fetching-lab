// create your App component here
import React, { useEffect, useState } from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [dog, setDog] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(async () => {
        const res = await fetch(url);
        const data = await res.json();
        setDog(data.message);
        setLoaded(true);
    }, []);

    return (
        <main>
            {!loaded && <p>Loading...</p>}
            {loaded && <img src={dog} alt="A Random Dog" />}
        </main>
    );
}

export default App;