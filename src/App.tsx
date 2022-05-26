import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';

import Data from './Data/Index';
import Section from './Components/Section';
import SideMenu from './Components/SideMenu';
import MenuForm from './Components/MenuForm';


function App() {
    return (
        <>
            <Section
                variant="blue"
                title={Data[0].title}
                description={Data[0].description}
            />
            <Section
                variant="beige"
                title={Data[1].title}
                description={Data[1].description}
            />
            <Section
                variant="blue"
                title={Data[2].title}
                description={Data[2].description}
            />
            <Section
                variant="white"
                title={Data[3].title}
                description={Data[3].description}
            />
            <Section
                variant="black"
                title={Data[4].title}
                description={Data[4].description}
            />

            <SideMenu>
                <MenuForm />
            </SideMenu>

            <GlobalStyles />
        </>
    );
}

export default App;
