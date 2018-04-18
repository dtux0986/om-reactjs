import React from 'react';

import Ionicon from 'react-ionicons'

class Header extends React.Component {
	render() {
		return (
				<header id="masthead" className="site-header">

					<section className="site-header__main">
						<div className="container">
							<div className="row">
								<div className="col-12">

									<section id="c-logo" className="c-logo">
										<div className="c-logo__wrapper">
											<div className="c-block">
												<h3>GradientGen</h3>
											</div>
										</div>
									</section>

								</div>
							</div>

						</div>
					</section>

					<section className="site-header__bottom">
						<div className="container">
							<div className="row">
								<div className="col-12">

									<section id="c-message" className="c-message">
										<div className="c-message__wrapper">
											<div className="c-block">
												<p>Made by <a href={"#"}>CactusThemes</a> with <Ionicon icon="md-heart" fontSize="14px" color="red"/></p>
											</div>
										</div>
									</section>

								</div>
							</div>
						</div>
					</section>

				</header>
		);
	}
}

export default Header;