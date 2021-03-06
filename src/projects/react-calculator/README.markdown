# React Calculator

A Pen created on CodePen.io. Original URL: [https://codepen.io/oguzhanslmtemiz/pen/zYdQWjJ](https://codepen.io/oguzhanslmtemiz/pen/zYdQWjJ).

<hr>

## Build a JavaScript Calculator

<div class="challenge-instructions"><div><section id="description">
<p><strong>Objective:</strong> Build a <a href="https://codepen.io">CodePen.io</a> app that is functionally similar to this: <a href="https://codepen.io/freeCodeCamp/full/wgGVVX">https://codepen.io/freeCodeCamp/full/wgGVVX</a>.</p>
<p>Fulfill the below <a href="https://en.wikipedia.org/wiki/User_story">user stories</a> and get all of the tests to pass. Give it your own personal style.</p>
<p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
<p><strong>User Story #1:</strong> My calculator should contain a clickable element containing an <code>=</code> (equal sign) with a corresponding <code>id="equals"</code>.</p>
<p><strong>User Story #2:</strong> My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: <code>id="zero"</code>, <code>id="one"</code>, <code>id="two"</code>, <code>id="three"</code>, <code>id="four"</code>, <code>id="five"</code>, <code>id="six"</code>, <code>id="seven"</code>, <code>id="eight"</code>, and <code>id="nine"</code>.</p>
<p><strong>User Story #3:</strong> My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: <code>id="add"</code>, <code>id="subtract"</code>, <code>id="multiply"</code>, <code>id="divide"</code>.</p>
<p><strong>User Story #4:</strong> My calculator should contain a clickable element containing a <code>.</code> (decimal point) symbol with a corresponding <code>id="decimal"</code>.</p>
<p><strong>User Story #5:</strong> My calculator should contain a clickable element with an <code>id="clear"</code>.</p>
<p><strong>User Story #6:</strong> My calculator should contain an element to display values with a corresponding <code>id="display"</code>.</p>
<p><strong>User Story #7:</strong> At any time, pressing the <code>clear</code> button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of <code>display</code>.</p>
<p><strong>User Story #8:</strong> As I input numbers, I should be able to see my input in the element with the id of <code>display</code>.</p>
<p><strong>User Story #9:</strong> In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit <code>=</code>, the correct result should be shown in the element with the id of <code>display</code>.</p>
<p><strong>User Story #10:</strong> When inputting numbers, my calculator should not allow a number to begin with multiple zeros.</p>
<p><strong>User Story #11:</strong> When the decimal element is clicked, a <code>.</code> should append to the currently displayed value; two <code>.</code> in one number should not be accepted.</p>
<p><strong>User Story #12:</strong> I should be able to perform any operation (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) on numbers containing decimal points.</p>
<p><strong>User Story #13:</strong> If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (<code>-</code>) sign). For example, if <code>5 + * 7 =</code> is entered, the result should be <code>35</code> (i.e. <code>5 * 7</code>); if <code>5 * - 5 =</code> is entered, the result should be <code>-25</code> (i.e. <code>5 * (-5)</code>).</p>
<p><strong>User Story #14:</strong> Pressing an operator immediately following <code>=</code> should start a new calculation that operates on the result of the previous evaluation.</p>
<p><strong>User Story #15:</strong> My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like <code>2 / 7</code> with reasonable precision to at least 4 decimal places).</p>
<p><strong>Note On Calculator Logic:</strong> It should be noted that there are two main schools of thought on calculator input logic: <dfn>immediate execution logic</dfn> and <dfn>formula logic</dfn>. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.</p>
<p><strong>EXAMPLE:</strong> <code>3 + 5 x 6 - 2 / 4 =</code></p>
<ul>
<li><strong>Immediate Execution Logic:</strong> <code>11.5</code></li>
<li><strong>Formula/Expression Logic:</strong> <code>32.5</code></li>
</ul>
<p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" target="_blank" rel="nofollow">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
<p>Once you're done, submit the URL to your working project with all its tests passing.</p>
</section></div><hr></div>
