import {classNames} from "shared/lib";

import cls from './Sidebar.module.scss'
import {useState} from "react";
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const onToggle = () => {
        setIsCollapsed(state => !state)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.Collapsed]: isCollapsed}, [className])}>
            <Button onClick={onToggle} theme={ThemeButton.PRIMARY}>Toggle</Button>
        </div>
    );
};
