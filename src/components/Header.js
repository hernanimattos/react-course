import React from "react";


class Header extends React.Component {
	render() {
		return (
		<header classname="top">
		<h1>
			Aqui e percaria malandrex
				<span className="ofThe"> NOosso
					<span className="of">Dia</span>
					<span className="the"> do</span>
				</span>
			Dia
		</h1>
		<h3>{this.props.tagline}</h3>
		<span>{this.props.minhaprop}</span>
		</header>
		)
	}
}

export default Header;
