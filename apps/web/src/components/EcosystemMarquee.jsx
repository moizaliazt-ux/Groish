import React from 'react';

const labels = ['GROISH', 'DIGITAL', 'TECHNOLOGY', 'HEALTHCARE', 'E-COMMERCE', 'GROWTH', 'INNOVATION', 'GLOBAL'];

const MarqueeTrack = ({ reverse = false }) => {
	const items = [...labels, ...labels];

	return (
		<div className={`ecosystem-marquee__track${reverse ? ' ecosystem-marquee__track--reverse' : ''}`}>
			{items.map((label, index) => (
				<React.Fragment key={`${label}-${index}`}>
					<span className="ecosystem-marquee__item">{label}</span>
					<span className="ecosystem-marquee__separator" aria-hidden="true">✦</span>
				</React.Fragment>
			))}
		</div>
	);
};

const EcosystemMarquee = () => (
	<section className="ecosystem-marquee" aria-label="GROISH ecosystem" data-cursor="text">
		<div className="ecosystem-marquee__row" aria-hidden="true">
			<MarqueeTrack />
		</div>
		<div className="ecosystem-marquee__row" aria-hidden="true">
			<MarqueeTrack reverse />
		</div>
	</section>
);

export default EcosystemMarquee;
