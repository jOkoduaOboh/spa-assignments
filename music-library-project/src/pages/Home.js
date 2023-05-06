import React from 'react';

import PlayArea from '../components/PlayArea';
import Footer from '../components/Footer';
import ListItems from '../components/ListItems';

export default function Home() {

    return (
        <>
            <main>
                {/* Hero unit */}
                <PlayArea />
                <ListItems />
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}