import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '@public/ssb-logo-green.svg';
import Link from '@atoms/Link/Link';

// TODO: Make this either hard coded or load through endpoint or more sexy or whatever.
const MenuStructure = require('./menu-structure.config.json');

const MegaMenuAlpha = ({ openByDefault }) => {
    
    let [ActiveGroup, SetActiveGroupState] = useState(false)
    let [ActiveTopic, SetActiveTopic] = useState(false)
    
    const SetActiveGroup = ( group ) => {
        SetActiveGroupState( group )
        SetActiveTopic( false )
    }

    const [isOpen, toggleOpen] = useState(openByDefault);

    const Groups = Object.keys(MenuStructure);

    
    let FilterArrayKeys = {};
    for (let group in MenuStructure) {
        for (let topic in MenuStructure[group]) {
            for (let index in MenuStructure[group][topic].filter) {
                if (
                    ( ActiveGroup == group && topic == ActiveTopic ) ||
                    ( !ActiveTopic && ActiveGroup == group ) ||
                    ( !ActiveGroup && !ActiveTopic )
                ){
                    console.log( ActiveGroup, ActiveTopic );
                    FilterArrayKeys[ MenuStructure[group][topic].filter[index] ] = true;
                }
            }
        }
    }
    let FilterArray = Object.keys( FilterArrayKeys );
    FilterArray.sort();

    let topicMenu = false;
    if (ActiveGroup) {
        let TopicArray = Object.keys(MenuStructure[ActiveGroup]).map(topic => topic);
        TopicArray.sort();
        topicMenu = TopicArray.map(topic => <li key={topic} onClick={()=>SetActiveTopic(topic)} className={topic == ActiveTopic ? "active" : ""}>{topic}</li>);
    }
    let filterMenuColumns = ActiveGroup ? 6 : 9;
    let filterMenu = <ul className={`filterMenu ${ ActiveGroup ? "text-col-2" : "text-col-3"}`}>{FilterArray.map(filter => <li className="col-12" key={filter}><a href={filter}>{filter}</a></li>)}</ul>

    return (
        <nav className="mega-menu prototype-1">
            <a className="navbar-brand">
                <img className="logo" src={logo} alt="logo" />
            </a>

            <div id="navbarMainMenu" className="row no-gutters">
                <div className="col-3">
                    <ul className="groupMenu">
                        <li onClick={()=>SetActiveGroup(false)} className={ ! ActiveGroup ? "active" : ""}>A-Å</li>
                        {Groups.map(group => <li onClick={()=>SetActiveGroup(group)} key={group} className={ActiveGroup == group ? "active" : ""}>{group}</li>)}
                    </ul>
                </div>
                {ActiveGroup ?
                    <div className="col-3 content-appear">
                        <ul className="groupMenu">
                            <li onClick={()=>SetActiveTopic(false)}  className={!ActiveTopic ? "active" : ""}>A–Å</li>
                            {topicMenu}
                        </ul>
                    </div>
                    : ""}
                <div className={`col-${filterMenuColumns }`}>
                    {filterMenu}
                </div>
            </div>
        </nav>
    );
};

MegaMenuAlpha.defaultProps = {
    openByDefault: false,
};

MegaMenuAlpha.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    openByDefault: PropTypes.bool,
    subHeader: PropTypes.string,
};

export default MegaMenuAlpha;
