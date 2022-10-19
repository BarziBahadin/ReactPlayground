const appRoot = document.getElementById('app'); const app = {
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const options = e.target.elements.option.value;

    if (options) {
        app.options.push(options);
        e.target.elements.option.value = ""
        render();
    }
}

const removeOptions = () => {
    app.options = []
    render();
}

const onMakeDecision = () => {

    const randomNumber = Math.floor(Math.random() * app.options.length);
    const options = app.options[randomNumber];
    alert(options);
}
let Visibility = false;

const show = () => {
    Visibility = !Visibility;
    render();
}
const render = () => {
    const template = (
        <div>      <button onClick={removeOptions}>remove all options</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
            <br />
            number of options : {app.options.length}


            <ol>
                {/* {app.options} */}
                {app.options.map((option) => {
                    return <li>the option is {option}</li>
                })}


            </ol>


            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>

        </div>
    )

    const template2 = (
        <div>
            <h1 onHover={show}>Visibility Toggle with react</h1>
            <button onClick={show}>{Visibility ? "hide details" : 'show details'}</button>
            {
                Visibility && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequatur saepe perferendis exercitationem vero possimus pariatur voluptatum at assumenda qui dolores deserunt nisi. Odit temporibus ipsum excepturi, quasi voluptatem aperiam?
                    </p>)
            }
        </div>
    )

    ReactDOM.render(template, appRoot);
    // ReactDOM.render(template2, appRoot);

}


render()


