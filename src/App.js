import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';

import Header from '../src/components/header';
import Content from '../src/components/content';
import Footer from '../src/components/footer';

class App extends React.Component {
	render() {
		return (
				<div className="c-wrapper">

					<div id="page" className="hfeed site">
						<Header/>
						<Content/>
						<Footer/>
					</div>

				</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;

