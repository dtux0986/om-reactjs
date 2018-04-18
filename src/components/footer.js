import React from 'react';



class Footer extends React.Component {
	render() {
		return (
				<footer id="colophon" className="site-footer">

					<section className="site-footer__main">
						<div className="container">
							<div className="row">
								<div className="col-12">

									<section id="c-copyright" className="c-copyright">
										<div className="c-copyright__wrapper">
											<div className="c-block">
												<p>© 2018 Copyright by <a href={"#"}>CactusThemes</a></p>
											</div>
										</div>
									</section>

								</div>
							</div>
						</div>
					</section>

				</footer>
		);
	}
}

export default Footer;