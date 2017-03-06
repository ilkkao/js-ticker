class Scroller {
    constructor(text) {
        const link = document.createElement('link');

        Object.assign(link, {
            href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:700',
            rel: 'stylesheet'
        });

        document.getElementsByTagName('head')[0].appendChild(link);

        const inner = document.createElement('div');
        Object.assign(inner, { className: 'inner', innerHTML: text });

        const wrapper = document.createElement('div');
        Object.assign(wrapper, { className: 'wrapper' });
        wrapper.appendChild(inner);

        document.getElementsByTagName('body')[0].appendChild(wrapper);

        const styles = document.createElement('style')

        styles.innerHTML = `
            .wrapper {
                width: 100vw;
                position: fixed;
                background-color: red;
            }

            .inner {
                font-family: 'Roboto Mono', monospace;
                font-size: 26px;
                color: white;
                height: 30px;
                line-height: 28px;
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
