import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import injectSheet from 'react-jss';
import styles from './ContextMenu.styles';
import ContextMenuItem from './ContextMenuItem/ContextMenuItem';

const options = [
    {
        label: 'Ctx One',
        id: 'op1',
        action: (id) => {alert('ha')}
    },
    {
        label: 'Ctx Two',
        id: 'op2',
        action: (id) => {alert('boo')},
        options: [
            {
                label: 'Sub Option 1',
                id: 'sub1'
            },
            {
                label: 'Sub Option 2',
                id: 'sub2',
                options: [
                    {
                        label: 'sub sub 1',
                        id: 'subsub1'
                    }
                ]
            },
            {
                label: 'Sub Option 3',
                id: 'sub3'
            }
        ]
    },
    {
        label: 'Ctx Three',
        id: 'op3',
        action: (id) => {alert('boo')}
    }
];

const ContextMenu = ({classes, anchor}) => {

    const [pos, setPos] = useState({x: 0, y: 0});
    const [isOpen, setIsOpen] = useState(false);
    const [menuId] = useState(`context-menu-${uuid()}`)

    useEffect(() => {
        document.addEventListener('click', closeCtxOnAppClick);

        return function cleanup() {
            document.removeEventListener('click', closeCtxOnAppClick);
        }
    });

    const openMenu = (e) => {
        setPos({
            x: e.pageX + 12,
            y: e.pageY + 12
        });

        setIsOpen(!isOpen);
    };

    const closeCtxOnAppClick = (e) => {
        const contextMenu = document.getElementById(menuId);
        const isCtxClick = contextMenu.contains(e.target);

        if (!isCtxClick) {
            setIsOpen(false);
        }
    };

    return (
        <div id={menuId}>
            <div className={classes.anchor} onClick={openMenu}>
                { anchor }
            </div>
            {isOpen && <ul className={classes.options} style={{top: `${pos.y}px`, left: `${pos.x}px`}}>
                {options.map((option) => (
                    <ContextMenuItem key={option.id} option={option} />
                ))}
            </ul>}
        </div>
    );
};

export default injectSheet(styles)(ContextMenu);
