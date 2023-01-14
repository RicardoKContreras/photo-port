import React from 'react';


function Nav() {

const categories = [
    {
        name: "commercial",
        description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {name: "portraits", description: "Portraits of people in my life"},
    {name: "food", description: "Delicious delicacies"},
    {
        name: "landscape",
        description: "Fields, famrhouses, waterfalls, and the beauty of nature",   
    },

];

function categorySelected(name) {
    console.log(`${name} clicked`)
}

    return (
        <header>
            <h2>
                {/* we'll use a separate data-testid attribute specific for testing purposes instead of using the id */}
                {/* The class and id attributes are used for CSS and JavaScript selection.  */}
                {/* In the case of a change in styling, we wouldn't want to break tests as a side effect of an unrelated change. */}
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className='mx-1'
                        //Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique.
                        // This helps React keep track of items in the virtual DOM.
                        key={category.name}
                        >
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;