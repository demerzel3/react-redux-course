import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomLink from './CustomLink';

const toggleLink = prevState => ({
    linkEnabled: !prevState.linkEnabled,
});

const propTypes = {
    customLinks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })),
};

class AppCustomLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkEnabled: true,
        };

        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleLinkClick(ev) {
        const { linkEnabled } = this.state;

        if (!linkEnabled) {
            ev.preventDefault();
        }
    }

    handleToggleClick() {
        this.setState(toggleLink);
    }

    render() {
        const { linkEnabled } = this.state;
        const { customLinks } = this.props;

        return (
            <div>
                <p> The links are enabled? {linkEnabled.toString()}</p>
                <ul>
                    <button onClick={this.handleToggleClick}> Toggle link</button>
                    {customLinks.map(({ text, href }, idx) =>
                        (<li>
                            <CustomLink key={idx} text={text} href={href} onLinkClick={this.openLink} />
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

AppCustomLink.propTypes = propTypes;
AppCustomLink.defaultProps = {
    customLinks: [
        { text: 'Google', href: 'http://google.it' },
        { text: 'Bing', href: 'http://bing.it' },
    ],
};

export default AppCustomLink;
