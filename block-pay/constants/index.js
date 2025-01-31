
import {  shield1, shield2, shield3, ophirImg, homeIcon, paymentplan, paymentlink, heroImg, cashpayment, deleteIcon, genpaylink, paymentID, trustedblank, getpayName, getPayLink, logo, bluedash, transactIcon, payments, settingsIcon, logOut, carlPfp, kaiyaPfp, chancePfp, cristoferPfp, abramPfp} from "@/public/assets/images"

export const navLinks = [
    {
        id: " ",
        title: "Home",
    },
    {
        id: "sign-up",
        title: "Pay",
    },
    {
        id: " ",
        title: "Contact Us",
    },
    {
        id: "sign-up",
        title: "Get Started",
    },
];


export const advantages = [
    {
        img: shield1,
        id: "Security",
        desc: "Lorem ipsum dolor sit amet consectetur. Consectetur quis suspendisse netus iaculis semper commodo viverra eget. Tincidunt eget vestibulum fringilla urna eget. Leo scelerisque adipiscing dignissim sed commodo mauris mattis tempor. Odio velit turpis ac nibh."
    },
    {
        img: shield2,
        id: "Transparency",
        desc: "Lorem ipsum dolor sit amet consectetur. Consectetur quis suspendisse netus iaculis semper commodo viverra eget. Tincidunt eget vestibulum fringilla urna eget. Leo scelerisque adipiscing dignissim sed commodo mauris mattis tempor. Odio velit turpis ac nibh."
    },
    {
        img: shield3,
        id: "Low Cost Transaction",
        desc: "Lorem ipsum dolor sit amet consectetur. Consectetur quis suspendisse netus iaculis semper commodo viverra eget. Tincidunt eget vestibulum fringilla urna eget. Leo scelerisque adipiscing dignissim sed commodo mauris mattis tempor. Odio velit turpis ac nibh."
    },
]


export const trusts = [
    {
        alt: "ophir",
        img: ophirImg,
    },
    {
        alt: 2,
        img: ophirImg,
    },
    {
        alt: 3,
        img: ophirImg,
    },
    {
        alt: 4,
        img: ophirImg,
    },
    {
        alt: 5,
        img: ophirImg,
    },
]


export const successes = [
    {
        id: 1,
        icon: bluedash,
        desc: "3 Million Accounts created"
    },
    {
        id: 2,
        icon: bluedash,
        desc: "20 Countries Reached"
    },
    {
        id: 3,
        icon: bluedash,
        desc: "20 Countries Reached"
    },
    {
        id: 4,
        icon: bluedash,
        desc: "Over 200k Payments Daily"
    }
]


export const footerLinks = [
    {
        id: 1,
        name: "Learn More",
        desc1: "About",
        desc2: "Light Paper"
    },
    {
        id: 2,
        name: "Legal",
        desc1: "Privacy",
        desc2: "Terms of Use"
    }
]

export const dashboards = [
    {
        id: "user/dashboard",
        icon: homeIcon,
        title: "Dashboard"
    },
    {
        id: "user/transactions",
        icon: transactIcon,
        title: "Transactions"
    },
    {
        id: "user/payments",
        icon: payments,
        title: "Payment"
    },
    {
        id: "user/settings",
        icon: settingsIcon,
        title: "Settings"
    },
    {
        id: "sign-in",
        icon: logOut,
        title: "Log Out"
    }
]

export const rates = [
    {
        desc: "Last rate",
        rate: 0.00016
    },
    {
        desc: "New rate",
        rate: 0.14
    },
    {
        desc: "% Change",
        rate: "2.9 %"
    }
]

export const dashData = [
    {
        id: 1,
        title: "Name",
        desc: "Carla Herwitz"
    },
    {
        id: 2,
        title: "Amount",
        desc: "900.00"
    },
    {
        id: 3,
        title: "Payout Method",
        desc: "Bank Transfer"
    },
    {
        id: 4,
        title: "Date",
        desc: "25/7/2023"
    },
    {
        id: 5,
        title: "Status",
        desc: "Pending"
    }
]

/*
export const dashData = [
    {
        id: 1,
        name: "Name",
        amount: "Amount",
        method: "Payout Method",
        date: "Date",
        status: "Status"
    },
    {
        id: 2,
        name: "Carla Herwitz",
        amount: "900.00",
        method: "Bank Transfer",
        date: "25/7/2023",
        status: "Pending"
    },
    {
        id: 3,
        name: "Abram Geidt",
        amount: "900.00",
        method: "Card",
        date: "25/7/2023",
        status: "Pending"
    },
    {
        id: 4,
        name: "Cristofer Philips",
        amount: "900.00",
        method: "Bank Transfer",
        date: "25/7/2023",
        status: "Successful"
    },
    {
        id: 5,
        name: "Chance Dokidis",
        amount: "900.00",
        method: "Bank Transfer",
        date: "25/7/2023",
        status: "Successful"
    },
    {
        id: 6,
        name: "Kaiya Philips",
        amount: "900.00",
        method: "Bank Transfer",
        date: "25/7/2023",
        status: "Failed"
    },
    {
        id: 7,
        name: "Hanna Press",
        amount: "900.00",
        method: "Bank Transfer",
        date: "25/7/2023",
        status: "Successful"
    },
]
*/

export const transactions = [
    {
        title: "Name",
        desc: [carlPfp, "Carla Herwitz"],
        desc: [abramPfp, "Abram Geidt"],
        desc: [cristoferPfp, "Cristofer Philips"],
        desc: [chancePfp, "Chance Dokidis"],
        desc: [kaiyaPfp, "Kaiya Philips"]
    },
    {
        title: "Transaction ID",
        desc: 143867250,
        desc: 143867250,
        desc: 143867250,
        desc: 143867250,
        desc: 143867250
    },
    {
        title: "Amount",
        desc: "900.00",
        desc: "900.00",
        desc: "900.00",
        desc: "900.00",
        desc: "900.00"
    },
    {
        title: "Payout Method",
        desc: "Bank Transfer",
        desc: "Card",
        desc: "Bank Transfer",
        desc: "Bank Transfer",
        desc: "Bank Transfer"
    },
    {
        title: "Date",
        desc: "25/7/2023",
        desc: "25/7/2023",
        desc: "25/7/2023",
        desc: "25/7/2023",
        desc: "25/7/2023",
    },
    {
        title: "Status",
        desc: "Pending",
        desc: "Pending",
        desc: "Successful",
        desc: "Successful",
        desc: "Failed"
    }
]


export const paymentCards = [
    {
        id: "generate-payment-link",
        img: getPayLink,
        title: "Generate Payment Link",
        desc: "Generate Links to receive funds seamlessly."
    },
    {
        id: "payment-plan",
        img: paymentplan,
        title: "Payment Plan",
        desc: "Schedule payments easily with just a click."
    },
    {
        id: "payment-link",
        img: paymentlink,
        title: "Payment Link",
        desc: "Track and monitor all your payment links with ease.`"
    },
]