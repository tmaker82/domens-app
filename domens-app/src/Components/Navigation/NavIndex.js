import React, {useState} from 'react';
import {TabMenu} from 'primereact/tabmenu';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {
            label: 'Main', icon: 'pi pi-fw pi-home', command: (event) => {
                window.location.href = "/";
            }
        },
        {
            label: 'Perle', icon: 'pi pi-fw pi-calendar', command: (event) => {
                console.log('perl')
                /* <NavLink to={'perle'}>};*/

            }
        },
        {
            label: 'Atal', icon: 'pi pi-fw pi-pencil', command: (event) => {
                window.location.href = "atal";
            }
        },
        {
            label: 'Bagrationi', icon: 'pi pi-fw pi-file', command: (event) => {
                window.location.href = "bagrationi";
            }
        },
        {
            label: 'Yakutyanochka', icon: 'pi pi-fw pi-cog', command: (event) => {
                window.location.href = "yakutyanochka";
            }
        },
        {
            label: '404', icon: 'pi pi-fw pi-cog', command: (event) => {

            }

        }

    ];

    const setSelectedTab = (e) => {
        setActiveIndex(e.index);
        console.log('location: ', window.location);
    }

    return (
        <div>
            <div className="card">
                {/*<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setSelectedTab(e)}/>*/}
                <NavLink to="/">Main</NavLink>
                <NavLink to="/perle">Perle</NavLink>
                <NavLink to="/atal">Atal</NavLink>
                <NavLink to="/bagrationi">Bagrationi</NavLink>
                <NavLink to="/yakutyanochka">Yakutyanochka</NavLink>
            </div>
        </div>
    );
}

    export default Navigation;
