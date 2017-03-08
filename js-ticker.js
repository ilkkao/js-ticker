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
            @-webkit-keyframes scroll {
                0% {
                    -webkit-transform: translate3d(${screenWidth}px, 0px, 0px);
                            transform: translate3d(${screenWidth}px, 0px, 0px);
                }
                100% {
                    -webkit-transform: translate3d(${width * -1}px, 0px, 0px);
                            transform: translate3d(${width * -1}px, 0px, 0px);
                }
            }

            @keyframes scroll {
                0% {
                    -webkit-transform: translate3d(${screenWidth}px, 0px, 0px);
                            transform: translate3d(${screenWidth}px, 0px, 0px);
                }
                100% {
                    -webkit-transform: translate3d(${width * -1}px, 0px, 0px);
                            transform: translate3d(${width * -1}px, 0px, 0px);
                }
            }

            .inner {
                -webkit-animation-name: scroll;
                        animation-name: scroll;
                -webkit-animation-duration: 10s;
                        animation-duration: 10s;
                -webkit-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                -webkit-animation-timing-function: linear;
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
