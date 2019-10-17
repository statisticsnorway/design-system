import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '@public/ssb-logo-green.svg';
import Checkbox from '@atoms/Checkbox/Checkbox';

// TODO: Make this either hard coded or load through endpoint or more sexy or whatever.
const MenuStructure = require('./menu-structure.config.json');

const MegaMenuBeta = ({ openByDefault }) => {
    let tempTopics = [];
    for (let group in MenuStructure) {
        for (let topic in MenuStructure[group]) {
            let icon = require("./icons/" + MenuStructure[group][topic].icon)
            tempTopics.push({ "name": topic, "active": false, "group": group, "icon": icon });
        }
    }
    tempTopics.sort((a, b) => a.name.localeCompare(b.name));
    let [Topics, setTopics] = useState(tempTopics)
    let [Groups, setGroups] = useState(Object.keys(MenuStructure).map(group => { return { "name": group, "active": false } }).sort((a, b) => a.name.localeCompare(b.name)));
    let [OpenMenu, SetOpenMenu] = useState(true);

    let noGroupActive = () => {
        return Groups.filter(group => group.active).length == 0;
    }

    let resetSelection = () => {
        setGroups(Groups.map(group => { return { ...group, "active": false } }));
        setTopics(Topics.map(topic => { return { ...topic, "active": false } }));
    }

    const toggleOpenMenu = () => {
        console.log(OpenMenu);
        SetOpenMenu(!OpenMenu)
    }

    let toggleGroup = in_group => {
        console.log("toggle:", in_group)
        let tempGroups = Groups.map(group => {
            let active = group.active;
            if (group.name == in_group) {
                active = !group.active;
                setTopics(Topics.map(topic => { return { ...topic, "active": (topic.group == in_group ? active : topic.active) } }))
            }
            return { "name": group.name, "active": active }
        })
        setGroups(tempGroups);
    }
    return (
        <nav className="mega-menu prototype-2">
            <div className="row no-gutters coreSiteStuff">
                <div className="col-12">
                    <a href="#">Innrapportering</a>
                    <a href="#">Cookies og personvern</a>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-4">
                    <a className="navbar-brand">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="col-4">
                    <ul id="globalMenuItems">
                        <li onClick={toggleOpenMenu}>Finn statistikk</li>
                        <li>SSB forskingin</li>
                        <li>Om SSB</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul id="toolsMenuItems">
                        <li onClick={toggleOpenMenu}>Finn statistikk</li>
                        <li>Søk</li>
                    </ul>
                </div>
            </div>

            <div id="navbarMainMenu" className={`row no-gutters ${OpenMenu ? "expand" : "collapse"}`}>
                <div className="col-3">
                    <ul className="groupMenu">
                        <li>
                            <Checkbox
                                key="default"
                                index={0}
                                selected={noGroupActive()}
                                value="false"
                                callback={resetSelection}
                            >Vis alle (a-å)
                            </Checkbox>
                        </li>
                        <li className="divider">Filtrer etter tema:</li>
                        {Groups.map((group, index) =>
                            <li key={group.name}>
                                <Checkbox
                                    key={group.name}
                                    index={index + 1}
                                    selected={group.active}
                                    value={group.name}
                                    callback={toggleGroup}
                                >{group.name}
                                </Checkbox>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="col-9">
                    <ul className={`topicMenu ${!noGroupActive() ? "highlightGroups" : ""}`}>
                        {Topics.map(topic => <li className={`col-12 ${topic.active ? "active" : ""}`} key={topic.name}>
                            <img src={topic.icon} alt={`Icon for ${topic.name}`} />{topic.name}
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

MegaMenuBeta.defaultProps = {
    openByDefault: false,
};

MegaMenuBeta.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    openByDefault: PropTypes.bool,
    subHeader: PropTypes.string,
};

export default MegaMenuBeta;
