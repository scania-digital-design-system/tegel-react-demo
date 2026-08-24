import { useContext } from "react";
import { Link } from "react-router";
import {
	TdsSideMenu,
	TdsSideMenuCloseButton,
	TdsSideMenuDropdown,
	TdsSideMenuDropdownList,
	TdsSideMenuDropdownListItem,
	TdsSideMenuItem,
	TdsSideMenuOverlay,
	TdsSideMenuCollapseButton,
	TdsIcon,
	TdsSideMenuUserImage,
	TdsSideMenuUserLabel,
} from "@scania/tegel-react";
import { UserContext } from "../../App";
import "./SideMenu.scss";

interface SideMenuProps {
	className?: string;
	style?: React.CSSProperties;
	pathname: string;
	toggleMobileNav: () => void;
	sideMenuRef: React.RefObject<HTMLTdsSideMenuElement>;
}

const SideMenu = ({ style, className, pathname, toggleMobileNav, sideMenuRef }: SideMenuProps) => {
	const userContext = useContext(UserContext);
	return (
		<div className={className} style={style}>
			<TdsSideMenu ref={sideMenuRef} id="demo-side-menu" aria-label="Side menu" persistent>
				<TdsSideMenuOverlay onClick={() => toggleMobileNav()} slot="overlay"></TdsSideMenuOverlay>
				<TdsSideMenuCloseButton
					onClick={() => toggleMobileNav()}
					slot="close-button"
				></TdsSideMenuCloseButton>
				<TdsSideMenuItem selected={pathname === "/about"}>
					<Link to={"/about"} onClick={() => toggleMobileNav()}>
						<TdsIcon name="info" size="24"></TdsIcon>
						About us
					</Link>
				</TdsSideMenuItem>
				<TdsSideMenuItem selected={pathname === "/stepper"}>
					<Link to={"/stepper"} onClick={() => toggleMobileNav()}>
						<TdsIcon name="report" size="24"></TdsIcon>
						Stepper
					</Link>
				</TdsSideMenuItem>
				<TdsSideMenuDropdown
					default-open={pathname.includes("/table")}
					selected={pathname.includes("/table")}
				>
					<TdsIcon slot="icon" name="document_tool" size="24"></TdsIcon>
					<span slot="label">Table</span>
					<TdsSideMenuDropdownList>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/table")}>
							<Link to="/table">Tegel Table</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("ag-grid")}>
							<Link to="/ag-grid">Tegel + AG-Grid</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("tanstack")}>
							<Link to="/tanstack">Tegel + Tanstack</Link>
						</TdsSideMenuDropdownListItem>
					</TdsSideMenuDropdownList>
				</TdsSideMenuDropdown>

				<TdsSideMenuDropdown
					default-open={pathname.includes("/web-components")}
					selected={pathname.includes("/web-components")}
				>
					<TdsIcon slot="icon" name="tool" size="24"></TdsIcon>
					<span slot="label">Web Components</span>
					<TdsSideMenuDropdownList>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/accordion")}>
							<Link to="/web-components/accordion">Accordion</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/badge")}>
							<Link to="/web-components/badge">Badge</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/banner")}>
							<Link to="/web-components/banner">Banner</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/block")}>
							<Link to="/web-components/block">Block</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/breadcrumbs")}>
							<Link to="/web-components/breadcrumbs">Breadcrumbs</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/button")}>
							<Link to="/web-components/button">Button</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/card")}>
							<Link to="/web-components/card">Card</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/checkbox")}>
							<Link to="/web-components/checkbox">Checkbox</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/chip")}>
							<Link to="/web-components/chip">Chip</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/datetime")}>
							<Link to="/web-components/datetime">Datetime</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/divider")}>
							<Link to="/web-components/divider">Divider</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/dropdown")}>
							<Link to="/web-components/dropdown">Dropdown</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/link")}>
							<Link to="/web-components/link">Link</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/message")}>
							<Link to="/web-components/message">Message</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/modal")}>
							<Link to="/web-components/modal">Modal</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/popover-canvas")}>
							<Link to="/web-components/popover-canvas">Popover Canvas</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/popover-menu")}>
							<Link to="/web-components/popover-menu">Popover Menu</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/radio-button")}>
							<Link to="/web-components/radio-button">Radio Button</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/spinner")}>
							<Link to="/web-components/spinner">Spinner</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/web-components/stepper")}>
							<Link to="/web-components/stepper">Stepper</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/tag")}>
							<Link to="/web-components/tag">Tag</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/web-components/tabs")}>
							<Link to="/web-components/tabs">Tabs</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/text-field")}>
							<Link to="/web-components/text-field">Text Field</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/text-area")}>
							<Link to="/web-components/text-area">Text Area</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/toast")}>
							<Link to="/web-components/toast">Toast</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/toggle")}>
							<Link to="/web-components/toggle">Toggle</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/tooltip")}>
							<Link to="/web-components/tooltip">Tooltip</Link>
						</TdsSideMenuDropdownListItem>
					</TdsSideMenuDropdownList>
				</TdsSideMenuDropdown>

				<TdsSideMenuItem selected={pathname === "/form"}>
					<Link to={"/form"} onClick={() => toggleMobileNav()}>
						<TdsIcon name="edit" size="24"></TdsIcon>
						Form
					</Link>
				</TdsSideMenuItem>
				<TdsSideMenuDropdown
					default-open={pathname.includes("/tabs")}
					selected={pathname.includes("/tabs")}
				>
					<TdsIcon slot="icon" name="folder" size="24"></TdsIcon>
					<span slot="label">Tabs</span>
					<TdsSideMenuDropdownList>
						<TdsSideMenuDropdownListItem selected={pathname.includes("/tabs-button")}>
							<Link to="/tabs-buttons">Button</Link>
						</TdsSideMenuDropdownListItem>
						<TdsSideMenuDropdownListItem selected={pathname.includes("tabs-links")}>
							<Link to="/tabs-links">Link</Link>
						</TdsSideMenuDropdownListItem>
					</TdsSideMenuDropdownList>
				</TdsSideMenuDropdown>
				<TdsSideMenuItem selected={pathname === "/text"}>
					<Link to={"/text"} onClick={() => toggleMobileNav()}>
						<TdsIcon name="document" size="24"></TdsIcon>
						Text
					</Link>
				</TdsSideMenuItem>
					<TdsSideMenuDropdown slot="end" selected={pathname.includes("settings")}>
						<TdsSideMenuUserImage slot='icon' src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
							alt="person" ></TdsSideMenuUserImage>
						<TdsSideMenuUserLabel
							slot="label"
							heading={userContext?.user.userName || "Name Namesson"}
							subheading={userContext?.user.placeOfWork}
						></TdsSideMenuUserLabel>
						<TdsSideMenuDropdownList>
							<TdsSideMenuDropdownListItem selected={pathname.includes("settings")}>
								<Link to="settings">
									<TdsIcon name="settings"></TdsIcon>
									<div className="tds-u-pl1">Settings</div>
								</Link>
							</TdsSideMenuDropdownListItem>
						</TdsSideMenuDropdownList>
					</TdsSideMenuDropdown>
				<TdsSideMenuCollapseButton slot="sticky-end"></TdsSideMenuCollapseButton>
			</TdsSideMenu>
		</div>
	);
};

export default SideMenu;
