import React from 'react';
//the import render "renders" the component.
// What actually happens is that Jest creates a simulated DOM in a Node.js environment
//to Approximate the DOM
//The cleanup function is used to remove components from the Dom to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import {render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';
//the component we will be testing
import About from '..';

//calling the cleanup function using the afterEach global function from Jest
//this will ensure after each test, we won't have any leftover memory data that could five false results
afterEach(cleanup);

//then use the describe function to declare the component we're testing
describe('About component', () => {
    //renders About test

    //First Test
    //The first test will be the baseline to verify that the component is rendering. 
    //In the first argument, a string declares what is being tested.
    // In the second argument, a callback function runs the test.
    //This is where we'll use the render function to render the About component using JSX.
    //Alternatively, test can also be used interchangeably with it to create a test.
    it('renders', () => {
        render(<About/>);
    });


    //Second Test
    //In the next test, also known as a "test case", we'll compare snapshot versions of the DOM node structure.
    // A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    //In this test case, we'll use the asFragment function, 
    //which returns a snapshot of the About component. 
    it('matches snapshot DOM node structure', () => {
        // render About 
        const { asFragment } = render(<About/>);

        //In the next statement, we'll test and compare whether 
        //the expected and actual outcomes match.
        //Use the expect function with a matcher to assert something about a value.
        //we'll use the toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    });
})
//Looking in the __tests__ folder, we can see a new folder called __snapshots__
//in that folder a new file called index.test.js.snap
//The index.test.js.snap file is a serialized version of the component's node structure,
// includes elements, attributes, and text content.
//The file in the __snapshots__ folder will serve as the base model of
// the component's structure, and be compared against new snapshots that
//are created by the asFragment function.