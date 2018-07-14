import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'

import { styles } from './ReactBurgerMenu'

class Sidebar extends PureComponent {
    static propTypes = {
        resetFilters: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        isSidebarOpen: PropTypes.bool.isRequired,
        sidebarIcons: PropTypes.node.isRequired,
        captureStateChange: PropTypes.func.isRequired,
        onMouseLeave: PropTypes.func.isRequired,
        onMouseEnter: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Menu
                styles={styles}
                noOverlay
                customBurgerIcon={null}
                customCrossIcon={<img src="/img/cross_grey.svg" />}
                isOpen={this.props.isSidebarOpen}
                onStateChange={this.props.captureStateChange}
            >
                <div
                    onMouseLeave={this.props.onMouseLeave}
                    onMouseEnter={this.props.onMouseEnter}
                >
                    {this.props.sidebarIcons}
                    {this.props.resetFilters}
                    {/* <ListSideBar /> */}
                    {this.props.children}
                </div>
            </Menu>
        )
    }
}

export default Sidebar
