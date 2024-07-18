import AccordionInfo from './ComponentsInfo/AccordionInfo';
import accordionIcon from '../../../public/customIcons/accordion.svg';
import BreadcrumbInfo from './ComponentsInfo/BreadcrumbInfo';
import breadcrumbIcon from '../../../public/customIcons/breadcrumb.svg';
import ButtonInfo from './ComponentsInfo/ButtonInfo';
import buttonsIcon from '../../../public/customIcons/buttons.svg';
import CardsInfo from './ComponentsInfo/CardsInfo';
import cardsIcon from '../../../public/customIcons/cards.svg';
import CheckboxInfo from './ComponentsInfo/CheckboxInfo';
import checkboxIcon from '../../../public/customIcons/checkbox.svg';
import WarningsErrorsInfo from './ComponentsInfo/WarningsErrorsInfo';
import dialogIcon from '../../../public/customIcons/dialog.svg';
import DividerInfo from './ComponentsInfo/DividerInfo';
import dividersIcon from '../../../public/customIcons/dividers.svg';
import DropdownInfo from './ComponentsInfo/DropdownInfo';
import dropdownIcon from '../../../public/customIcons/dropdown.svg';
import FactBoxInfo from './ComponentsInfo/FactBoxInfo';
import factboxIcon from '../../../public/customIcons/factbox.svg';
import footerIcon from '../../../public/customIcons/footer.svg';
import FooterInfo from './ComponentsInfo/FooterInfo';
import FormErrorInfo from './ComponentsInfo/FormErrorInfo';
import GlossaryInfo from './ComponentsInfo/GlossaryInfo';
import wordExplanationIcon from '../../../public/customIcons/wordexplanation.svg';
import graphsIcon from '../../../public/customIcons/graphs.svg';
import HeaderInfo from './ComponentsInfo/HeaderInfo';
import headerIcon from '../../../public/customIcons/header.svg';
import IconInfo from './ComponentsInfo/IconInfo';
import iconsIcon from '../../../public/customIcons/icons.svg';
import InputInfo from './ComponentsInfo/InputInfo';
import inputIcon from '../../../public/customIcons/input.svg';
import KeyFiguresInfo from './ComponentsInfo/KeyFiguresInfo';
import keyfiguresIcon from '../../../public/customIcons/keyfigures.svg';
import LinksInfo from './ComponentsInfo/LinksInfo';
import linksIcon from '../../../public/customIcons/links.svg';
import mapIcon from '../../../public/customIcons/map.svg';
import PaginationInfo from './ComponentsInfo/PaginationInfo';
import paginationIcon from '../../../public/customIcons/pagination.svg';
import QuotesInfo from './ComponentsInfo/QuotesInfo';
import quoteIcon from '../../../public/customIcons/quote.svg';
import RadioButtonInfo from './ComponentsInfo/RadioButtonInfo';
import radiobuttonIcon from '../../../public/customIcons/radiobutton.svg';
import responsiveIcon from '../../../public/customIcons/responsive.svg';
import ReferenceInfo from './ComponentsInfo/ReferenceInfo';
import referenceIcon from '../../../public/customIcons/reference.svg';
import SearchBoxInfo from './ComponentsInfo/SearchBoxInfo';
import searchIcon from '../../../public/customIcons/search.svg';
import sidenavigationIcon from '../../../public/customIcons/sidenavigation.svg';
import StickyMenuInfo from './ComponentsInfo/StickyMenuInfo';
import stickymenuIcon from '../../../public/customIcons/stickymenu.svg';
import tableIcon from '../../../public/customIcons/table.svg';
import TabsInfo from './ComponentsInfo/TabsInfo';
import tabsIcon from '../../../public/customIcons/tabs.svg';
import TagsInfo from './ComponentsInfo/TagsInfo';
import tagsIcon from '../../../public/customIcons/tags.svg';
import ExpansionBoxInfo from './ComponentsInfo/ExpansionBox';

const componentsList = [
	{ component: AccordionInfo, label: 'Accordion', path: '/accordion', icon: accordionIcon },
	{ component: BreadcrumbInfo, label: 'Breadcrumb', path: '/breadcrumb', icon: breadcrumbIcon },
	{ component: ButtonInfo, label: 'Button', path: '/button', icon: buttonsIcon },
	{ component: CardsInfo, label: 'Cards', path: '/cards', icon: cardsIcon },
	{ component: CheckboxInfo, label: 'Checkbox', path: '/checkbox', icon: checkboxIcon },
	{ component: DividerInfo, label: 'Divider', path: '/divider', icon: dividersIcon },
	{ component: DropdownInfo, label: 'Dropdown', path: '/dropdown', icon: dropdownIcon },
	{ component: ExpansionBoxInfo, label: 'Expansion Box', path: '/expansion-box', icon: factboxIcon },
	{ component: FactBoxInfo, label: 'Fact Box (Utgått)', path: '/fact-box', icon: factboxIcon },
	{ component: FooterInfo, label: 'Footer', path: '/footer', icon: footerIcon },
	{ component: FormErrorInfo, label: 'Form Error', path: '/form-error' },
	{ component: GlossaryInfo, label: 'Glossary', path: '/glossary', icon: wordExplanationIcon },
	{ component: '', label: 'Graphs', path: '/graphs', icon: graphsIcon, comingSoon: true },
	{ component: HeaderInfo, label: 'Header', path: '/header', icon: headerIcon },
	{ component: IconInfo, label: 'Icons', path: '/icons', icon: iconsIcon },
	{ component: InputInfo, label: 'Input', path: '/input', icon: inputIcon },
	{ component: KeyFiguresInfo, label: 'Key Figures', path: '/key-figures', icon: keyfiguresIcon },
	{ component: LinksInfo, label: 'Links', path: '/links', icon: linksIcon },
	{ component: '', label: 'Map', path: '/map', icon: mapIcon, comingSoon: true },
	{ component: PaginationInfo, label: 'Pagination', path: '/pagination', icon: paginationIcon },
	{ component: QuotesInfo, label: 'Quote and Highlighting	', path: '/quotes', icon: quoteIcon },
	{ component: RadioButtonInfo, label: 'Radio Buttons', path: '/radiobutton', icon: radiobuttonIcon },
	{ component: '', label: 'Responsive media', path: '/responsive-media', icon: responsiveIcon, comingSoon: true },
	{ component: ReferenceInfo, label: 'Reference', path: '/reference', icon: referenceIcon },
	{ component: SearchBoxInfo, label: 'Search', path: '/search-box', icon: searchIcon },
	{ component: '', label: 'Site navigation', path: '/site-navigation', icon: sidenavigationIcon, comingSoon: true },
	{ component: StickyMenuInfo, label: 'Sticky Menu', path: '/sticky-menu', icon: stickymenuIcon },
	{ component: '', label: 'Table', path: '/table', icon: tableIcon, comingSoon: true },
	{ component: TabsInfo, label: 'Tabs', path: '/tabs', icon: tabsIcon },
	{ component: TagsInfo, label: 'Tags', path: '/tags', icon: tagsIcon },
	{ component: WarningsErrorsInfo, label: 'Warnings and errors', path: '/warnings-errors', icon: dialogIcon },
];

export default componentsList;
