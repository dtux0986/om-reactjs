import React from 'react';

import Card from '../../src/components/card';

class Content extends React.Component {
	render() {
		return (
				<section id="content" className="site-content">
					<div className="container">
						<div className="row">
							<Card/>
						</div>
					</div>
				</section>
		);
	}
}

export default Content;