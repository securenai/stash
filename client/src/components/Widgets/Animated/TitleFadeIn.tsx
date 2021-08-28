import React, { useState } from 'react';
import { Transition, animated } from 'react-spring';

export interface TitleFadeInProps {
	text: string;
}

const TitleFadeIn: React.FC<TitleFadeInProps> = ({ text }) => {
	const [show, setShow] = useState(false);

	return (
		<Transition
			items={show}
			from={{ opacity: 0 }}
			enter={{ opacity: 1 }}
			leave={{ opacity: 0 }}
			reverse={show}
			// delay={0}
			// config={config.molasses}
			onRest={() => setShow(true)}>
			{(styles, item) =>
				item && <animated.div style={styles}>{text}</animated.div>
			}
		</Transition>
	);
};

export default TitleFadeIn;
