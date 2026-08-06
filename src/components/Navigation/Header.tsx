/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext } from "react";
import { Link } from "react-router";
import {
	TdsHeader,
	TdsHeaderHamburger,
	TdsHeaderTitle,
	TdsHeaderDropdown,
	TdsHeaderDropdownList,
	TdsBadge,
	TdsHeaderDropdownListItem,
	TdsHeaderDropdownListUser,
	TdsHeaderBrandSymbol,
	TdsIcon,
	TdsHeaderLauncher,
	TdsHeaderLauncherGrid,
	TdsHeaderLauncherGridItem,
	TdsHeaderLauncherGridTitle,
} from "@scania/tegel-react";
import { UserContext } from "../../App";
import "./Header.scss";

interface HeaderProps {
	pathname: string;
	toggleMobileNav: () => void;
}

const Header = ({ toggleMobileNav, pathname }: HeaderProps) => {
	const userContext = useContext(UserContext);
	return (
		
			<TdsHeader>
				<TdsHeaderHamburger
					onClick={() => {
						toggleMobileNav();
					}}
					aria-label="Open application drawer"
					aria-haspopup="true"
					aria-expanded="false"
				></TdsHeaderHamburger>

				<TdsHeaderTitle>React Demo</TdsHeaderTitle>

				<TdsHeaderDropdown>
					<span slot="label">Wheel types</span>
					<TdsHeaderDropdownList>
						<TdsHeaderDropdownListItem selected={pathname === "/about"}>
							<Link to="about">About</Link>
						</TdsHeaderDropdownListItem>
						<TdsHeaderDropdownListItem selected={pathname === "/table"}>
							<Link to="table">Table</Link>
						</TdsHeaderDropdownListItem>
					</TdsHeaderDropdownList>
				</TdsHeaderDropdown>

				<TdsHeaderLauncher slot="end">
					<TdsHeaderLauncherGridTitle>Operations</TdsHeaderLauncherGridTitle>
					<TdsHeaderLauncherGrid>
						<TdsHeaderLauncherGridItem>
							<a href="https://tegel.scania.com">
								<TdsIcon name="star" size="32"/>
								ScaniaCare
          					</a>
						</TdsHeaderLauncherGridItem>
						<TdsHeaderLauncherGridItem>
							<a href="https://tegel.scania.com">
								<TdsIcon name="truck" size="32"/>
								Logistics
          					</a>
						</TdsHeaderLauncherGridItem>
						<TdsHeaderLauncherGridItem>
							<a href="https://tegel.scania.com">
								<TdsIcon name="clock" size="32"/>
								Schedule
          					</a>
						</TdsHeaderLauncherGridItem>
					</TdsHeaderLauncherGrid>
				</TdsHeaderLauncher>
				
				<TdsHeaderDropdown onClick={() => {}} slot="end" no-dropdown-icon>
					<div slot="icon">
						<img
							src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
							alt="User menu."
						/>
						{userContext?.user.notifications && userContext?.user.notifications?.length > 0 && (
							<TdsBadge size="sm"></TdsBadge>
						)}
					</div>
					<TdsHeaderDropdownList size="lg">
						<TdsHeaderDropdownListUser
							header={userContext?.user.userName}
							subheader={userContext?.user.placeOfWork}
						></TdsHeaderDropdownListUser>
						<TdsHeaderDropdownListItem>
							<Link to="settings">
								<TdsIcon name="settings"></TdsIcon>
								<div className="tds-u-pl1">Profile</div>
							</Link>
						</TdsHeaderDropdownListItem>
						<TdsHeaderDropdownListItem>
							<Link to="notifications">
								<TdsBadge value={userContext?.user.notifications?.length.toString()}></TdsBadge>
								<div className="tds-u-pl1">Notifications</div>
							</Link>
						</TdsHeaderDropdownListItem>
					</TdsHeaderDropdownList>
				</TdsHeaderDropdown>

				<TdsHeaderBrandSymbol slot="end">
					{/** biome-ignore lint/a11y/useAnchorContent: We don't know yet */}
					<a href="https://scania.com" aria-label="Scania website"></a>
				</TdsHeaderBrandSymbol>
			</TdsHeader>
	);
};

export default Header;
