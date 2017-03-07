class JSTicker {
    constructor(text) {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:700';
        link.rel = 'stylesheet';

        document.getElementsByTagName('head')[0].appendChild(link);

        const inner = document.createElement('div');
        inner.className = 'inner';
        inner.innerHTML = text;

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        wrapper.appendChild(inner);

        document.getElementsByTagName('body')[0].appendChild(wrapper);

        const styles = document.createElement('style')

        styles.innerHTML = `
            .wrapper {
                top: 0;
                z-index: 2147483647;
                width: 100vw;
                position: fixed;
                background-color: red;
            }

            .inner {
                font-family: 'Roboto Mono', monospace;
                z-index: 2147483647;
                font-size: 30px;
                color: white;
                height: 38px;
                line-height: 36px;
                display: inline-block;
                position: relative;
            }
        `;

        document.body.appendChild(styles);

        const screenWidth = document.documentElement.clientWidth;
        const width = parseInt(inner.offsetWidth);
        const animationStyles = document.createElement('style')

        animationStyles.innerHTML = `
            .inner {
                left: ${width * -1};
            }

            @keyframes scroll {
                0% {
                    transform: translate3d(${screenWidth + width}px, 0px, 0px);
                }
                100% {
                    transform: translate3d(0px, 0px, 0px);
                }
            }

            .inner {
                animation-name: scroll;
                animation-duration: 10s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
        `;

        document.body.appendChild(animationStyles);

        this.elems = [ link, wrapper, styles, animationStyles ];
    }

    remove() {
        this.elems.forEach(elem => elem.remove());
    }
}

module.exports = JSTicker;
