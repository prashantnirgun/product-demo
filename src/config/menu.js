import { i18n } from "src/boot/i18n";

export const root = [
  {
    label: "Dashboard",
    icon: "home",
    to: `/${i18n.locale}`,
    level: 1
  },
  {
    label: "Training",
    icon: "home",
    to: `/${i18n.locale}/training`,
    level: 1
  },
  {
    label: "Tax",
    icon: "home",
    to: `/${i18n.locale}/tax`,
    level: 1
  },
  {
    label: "Transaction",
    icon: "home",
    to: `/${i18n.locale}/transaction`,
    level: 1
  },
  {
    label: "Dhada Book",
    icon: "menu_book",
    level: 0.5,
    children: [
      {
        label: "",
        icon: "category",
        to: `/${i18n.locale}/mysql`,
        level: 5
      },
      {
        label: "Product",
        icon: "redeem",
        to: `/${i18n.locale}/version`,
        level: 1
      },
      {
        label: "Unit",
        icon: "straighten",
        to: `/${i18n.locale}/faq`,
        level: 1
      },
      {
        label: "Price List",
        icon: "playlist_add",
        to: `/${i18n.locale}/quotation`,
        level: 1
      },
      {
        label: "Party Price List",
        icon: "playlist_add_check",
        to: `/${i18n.locale}/quotation-party`,
        level: 1
      },
      {
        label: "GST Rates",
        icon: "content_cut",
        to: `/${i18n.locale}/gst-rate`,
        level: 1
      }
    ]
  },
  {
    label: "Account",
    icon: "account_balance",
    level: 0.5,
    children: [
      {
        label: "General Ledger",
        icon: "view_headline",
        to: `/${i18n.locale}/general-ledger`,
        level: 1
      },
      {
        label: "Account Group",
        icon: "view_list",
        to: `/${i18n.locale}/account-group`,
        level: 1
      },
      {
        label: "Account Head",
        icon: "view_module",
        to: `/${i18n.locale}/account-head`,
        level: 1
      }
    ]
  },
  {
    label: "Installation",
    icon: "security",
    level: 0.5,
    children: [
      {
        label: "Requirement",
        icon: "business",
        to: `/${i18n.locale}/company`,
        level: 1
      },
      {
        label: "MySQL",
        icon: "business",
        to: `/${i18n.locale}/company`,
        level: 1
      },
      {
        label: "Application",
        icon: "person",
        to: `/${i18n.locale}/user`,
        level: 1
      },
      {
        label: "Restore Database",
        icon: "group",
        to: `/${i18n.locale}/user-group`,
        level: 1
      },
      {
        label: "Additional Software",
        icon: "group",
        to: `/${i18n.locale}/user-group`,
        level: 1
      }
    ]
  },
  {
    label: "Tally",
    icon: "verified",
    to: `/${i18n.locale}/posts/tally`,
    level: 1
  },
  {
    label: "Version",
    icon: "verified",
    to: `/${i18n.locale}/posts/version`,
    level: 1
  },
  {
    label: "FAQ",
    icon: "help_outline",
    to: `/${i18n.locale}/posts/faq`,
    level: 1
  },
  {
    label: "Contact Us",
    icon: "location_on",
    to: `/${i18n.locale}/posts/contact`,
    level: 1
  },
  {
    label: "Settings",
    icon: "settings",
    level: 0.5,
    children: [
      {
        label: "Area of Operation",
        icon: "add_location",
        to: `/${i18n.locale}/delivery-places`,
        level: 1
      },
      {
        label: "Device Info",
        icon: "important_devices",
        to: `/${i18n.locale}/device`,
        level: 1
      }
    ]
  }
];
