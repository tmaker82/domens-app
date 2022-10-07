import React, {useState} from 'react';
import {TabMenu} from 'primereact/tabmenu';

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {
            label: 'Main', icon: 'pi pi-fw pi-home', command: (event) => {
                window.location.hash = "";
            }
        },
        {
            label: 'Perle', icon: 'pi pi-fw pi-calendar', command: (event) => {
                window.location.hash = "perle";
            }
        },
        {
            label: 'Atal', icon: 'pi pi-fw pi-pencil', command: (event) => {
                window.location.hash = "atal";
            }
        },
        {
            label: 'Bagrationi', icon: 'pi pi-fw pi-file', command: (event) => {
                window.location.hash = "bagrationi";
            }
        },
        {
            label: 'Yakutyanochka', icon: 'pi pi-fw pi-cog', command: (event) => {
                window.location.hash = "yakutyanochka";
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
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setSelectedTab(e)}/>
            </div>
        </div>
    );
}

export default Navigation;
