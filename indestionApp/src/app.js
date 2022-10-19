// const obj={
//     name: 'foo',
//     getName(){
//         return this.name;
//     }
// }

// const getName =opj.getName.bind();

  

class IndecisionApp extends React.Component {
    render() {
        const title = "IndecisionApp"
        const subtitle = "you work at your own risk"
        const options = ['thing ones', 'thing two', 'thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
            // df
        )
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props)
        this.removeAll = this.removeAll.bind(this)
      }

    handelPick() 
    {
        alert('porfavorite');
    }

    removeAll() {
        alert('all options removed');
    }

    render() {
        return (
            <div>
                <button onClick={this.handelPick}>what should I do?</button>
                <br />
                <button onClick={this.removeAll}>remove all options</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>options Component</p>
                <ol>
                    {this.props.options.map((option) => {
                        return <Option key={option} optionText={option}></Option>
                    })
                    }
                </ol>


            </div>
        )
    }
}

class Option extends React.Component {
    render() { return <div>Option : {this.props.optionText}</div> }
}

class AddOptions extends React.Component {
    AddOptions(e) {
        e.preventDefault();
        const options = e.target.elements.option.value.trim();

        if (options) {
            alert(options);
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.AddOptions}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));