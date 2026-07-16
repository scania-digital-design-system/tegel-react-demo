import React, { useRef, useState } from "react";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";
import ModeVariantSwitcher from "./components/ModeVariantSwitcher/ModeVariantSwitcher";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navigation/Header";
import SideMenu from "./components/Navigation/SideMenu";
import { createContext } from "react";
import AppBreadcrumbs from "./components/Navigation/AppBreadcrumbs/AppBreadcrumbs";
import "./MainLayout.css";
import MainBanner from "./MainBanner";
import type { UserContextValue } from "./App";
import BrandSwitcher from "./components/BrandSwitcher/BrandSwitcher";

interface MainLayoutProps {
	children?: React.ReactNode;
	pathname?: string;
	toggleMobileNav?: () => void;
	userContextValue?: UserContextValue; // Define the type for userContextValue
	mode?: string;
	modeVariant?: string; // Define the type for modeVariant
	sideMenuRef?: React.RefObject<HTMLTdsSideMenuElement>; // Define the type for sideMenuRef
	shouldRenderBreadcrumbs?: boolean; // Define the type for shouldRenderBreadcrumbs
	shouldRenderModeSwitcher?: boolean; // Define the type for shouldRenderBreadcrumbs
}

export const UserContext = createContext<UserContextValue | null>(null);

const HEADER_HEIGHT = 64;
const BANNER_HEIGHT = 68;

const MainLayout = ({
	children,
	pathname = "/",
	toggleMobileNav = () => {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		sideMenuRef.current!.open = !sideMenuRef.current!.open;
	},
	userContextValue,
	sideMenuRef = React.createRef(),
	shouldRenderBreadcrumbs,
	shouldRenderModeSwitcher,
}: MainLayoutProps) => {
	const headerAndBannerRef = useRef<HTMLDivElement>(null);
	const [isBannerOpen, setIsBannerOpen] = useState(true);
	const [lightMode, setLightMode] = useState<"on" | "off">("on");
	const [primaryVariant, setPrimaryVariant] = useState<"on" | "off">("on");
	const [brand, setBrand] = useState<"scania" | "traton">("scania");
	const headerAndBannerHeight = HEADER_HEIGHT + (isBannerOpen ? BANNER_HEIGHT : 0);

	return (
		<div className={`App mode-wrapper ${brand} `}>
			<div
				className={`tds-mode-${lightMode === "on" ? "light" : "dark"} mode-variant-wrapper tds-mode-variant-${
					primaryVariant === "on" ? "primary" : "secondary"
				}`}
			>
				<UserContext.Provider value={userContextValue ?? null}>
					<div className="header-and-banner" ref={headerAndBannerRef}>
						<MainBanner
							onClose={() => {
								setIsBannerOpen(false);
							}}
						/>
						<Header className="app-header" pathname={pathname} toggleMobileNav={toggleMobileNav} />
					</div>
					<div className="side-menu-and-main">
						<SideMenu
							className="app-side-menu"
							style={{
								maxHeight: `calc(100vh - ${headerAndBannerHeight}px)`,
								top: `${headerAndBannerHeight}px`,
							}}
							sideMenuRef={sideMenuRef}
							pathname={pathname}
							toggleMobileNav={toggleMobileNav}
						/>
						<main
							style={{
								marginTop: `${headerAndBannerHeight}px`,
							}}
						>
							{shouldRenderModeSwitcher && (
								<div className="switcher-container">
									<ModeSwitcher mode={lightMode} setMode={setLightMode} />
									<ModeVariantSwitcher
										modeVariant={primaryVariant}
										setModeVariant={setPrimaryVariant}
									/>
									<BrandSwitcher brand={brand} setBrand={setBrand}/>
								</div>
							)}
							{shouldRenderBreadcrumbs && <AppBreadcrumbs />}
							<div className="content-container">{children}</div>
							<Footer />
						</main>
					</div>
				</UserContext.Provider>
			</div>
		</div>
	);
};

export default MainLayout;
