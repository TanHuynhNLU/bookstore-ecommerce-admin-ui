import { useSpring, animated } from 'react-spring';
import { formatNumber } from '~/utils/utils';

function AnimatedNumber({ number }) {
    const { num } = useSpring({
        from: { num: 0 },
        num: number,
        delay: 200,
        config: { duration: 1000 },
    });

    return <animated.span className="inline-block">{num.to((n) => formatNumber(n.toFixed(0)))}</animated.span>;
}

export default AnimatedNumber;
