import { render } from 'preact'
import { useState } from 'preact/hooks';
import { Resume } from "./resume";
import { About } from "./about";
import './index.css'

const App = () => {
    const [activeComponent, setActiveComponent] = useState('Resume');
    const showComponent = (component) => {
        setActiveComponent(component);
    };

    let displayedComponent = Resume;

    switch (activeComponent) {
        case 'Resume':
            displayedComponent = <Resume />;
            break;
        case 'About':
            displayedComponent = <About />;
            break;
        default:
            displayedComponent = <Resume />;
    }

    return <div class="min-h-screen bg-white">
        <div class="flex justify-around w-full min-h-7">
            <div class="flex w-full justify-end">
                <button class="min-w-20 rounded-md bg-black text-white px-2 m-1 hover:bg-purple-800 duration-200"
                    onClick={() => showComponent('Resume')}
                >Portfolio</button>
            </div>
            <div class="flex w-full justify-start">
                <button class="min-w-20 rounded-md bg-black text-white px-2 m-1 hover:bg-purple-800 duration-200"
                    onClick={() => showComponent('About')}
                >About</button>
            </div>
        </div>
        {displayedComponent}
    </div>;
};

render(<App />, document.getElementById("app"));