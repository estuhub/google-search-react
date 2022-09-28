import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props); // what is this
    var stateData = [
      {
        ID: 1,
        input: "",
      },
    ]
    this.state = {
      data: stateData,
			results: [{
				title: 'JavaScript',
				description: 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
				url: 'www.W3Schools.com',
				links: [
					{
					title: 'JavaScript Introduction',
					url: '#'
				}, {
					title: 'JavaScript Functions',
					url: '#'
				}, {
					title: 'JavaScript Examples',
					url: '#'
				}]}
			]
    }
  }
  handleInputChange = e => {
    const stateDataCopy = this.state.data.slice()
    const objectCopy = Object.assign({}, stateDataCopy[e.target.dataset.index])
    objectCopy["input"] = e.target.value
    stateDataCopy[e.target.dataset.index] = objectCopy
    this.setState({ data: stateDataCopy })
    console.log(this.state.data)
  }
	submitSearch(form) {
		console.log(this.state.data[0].input)
		let data = this.state.data
		data[0].input = ''
		console.log(data);
		form.preventDefault()
		this.setState({
			data
		})
	}
  render() {
    return (
			<div>
		    <div className="header">
		      <img className="logo" src="google.png" />
			    <form onSubmit={e => this.submitSearch(e)}>
						{this.state.data.map((d, index) => (
						<input
							key={d.ID} // ID in stateData
							data-index={index} //index generated here
							name={d.Name}
							type="text"
							className="form-control"
							value={this.state.data[index]["input"]} //links to stateData Object
							onChange={this.handleInputChange}
						/>
						))}
			       <button className="primary">Search</button>
		      </form>
		    </div>
				{/* results count */}
		    <div className="small">
		      <small>{this.state.results.length} Result{this.state.results.length !== 1 ? 's' : ''}</small>
		    </div>
				{/* results */}
				{/* to do
make this a controller called Result.js
	cut-paste block
import it into this file
pass relevant data to the child Result.js
	make it work using this.prod
				*/}
				{this.state.results.map((result, i) =>
					<section>
		      <span>{result.url}</span>
		      <h2><a href={result.url}>{result.title}</a></h2>
		      <p>{result.description}</p>
		      <ul>
						{result.links.map((link, i) =>
						<li key={i}><a href={link.url}>{link.title}</a></li>
					)}
		      </ul>
					</section>
					)}
			</div>
    );
  }
}

export default Results
