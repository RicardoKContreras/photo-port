import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {

const {
    categories = [],
    setCurrentCategory,
    currentCategory,
} = props

useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);

// function categorySelected(name) {
//     console.log(`${name} clicked`)
// }

    return (
        <header className="flex-row px-1">
            <h2>
                {/* we'll use a separate data-testid attribute specific for testing purposes instead of using the id */}
                {/* The class and id attributes are used for CSS and JavaScript selection.  */}
                {/* In the case of a change in styling, we wouldn't want to break tests as a side effect of an unrelated change. */}
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                        </span>{" "}
                         Oh Snap!
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
                    {/* //Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique.
                        // This helps React keep track of items in the virtual DOM. */}
                    {categories.map((category) => (
                        <li
                        className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                          <span
                            onClick={() => {
                              setCurrentCategory(category)
                            }}
                          >
                            {capitalizeFirstLetter(category.name)}
                        
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;