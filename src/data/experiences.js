import Cubane from "../assets/icons/cubane.svg";

import Qlik from "../assets/icons/qlik.svg";
import MySQL from "../assets/icons/mysql.svg";
import Github from "../assets/icons/github.svg";
import Jira from "../assets/icons/jira.svg";
import AWS from "../assets/icons/aws.svg";
import ReactIcon from "../assets/icons/react-icon.svg";
import Vue from "../assets/icons/vue.svg";
import D3 from "../assets/icons/d3.svg";
import CreditSuisse from "../assets/icons/credit-suisse.svg";
import Westpac from "../assets/icons/westpac.svg";
import Azure from "../assets/icons/azure.svg";
import Bitbucket from "../assets/icons/bitbucket.svg";

const experiences = [
    {
        time: "2014",
        Logo: CreditSuisse,
        company: "Credit Suisse",
        link: "https://www.credit-suisse.com",
        position: "Analyst, Investment Banking",
        description:
            "I participated in Credit Suisse’s graduate program for investment banking. I was part of the leveraged finance team which facilitates high yield issuances and leveraged buyouts.",
        responsibilities: [
            "Financial modelling in Excel, used to assess risk and return of high yield bond issuances",
            "Work as part of the team to develop return maximising financial strategies for clients",
        ],
        technologies: [],
        color: "fontMedium",
    },
    {
        time: "2015-2017",
        Logo: Cubane,
        company: "Cubane Consulting",
        link: "https://www.cubaneconsulting.com",
        position: "BI Developer",
        description:
            "After leaving university I joined Cubane Consulting, a boutique management consultancy. Although I joined as a consultant, I quickly found an aptitude for the technical side of things.  During this time my main focus was leading the project to replace Cubane's existing BI tools with a new platform based on Qlik Sense.",
        responsibilities: [
            "Lead end-to-end implementation of Qlik Sense to replace existing BI tools",
            "Gather business requirements from internal and external stakeholders",
            "Lead development of all internal and client-facing applications in Qlik Sense",
            "Design data structures that underpin Qlik Sense reporting",
            "Generate client-facing instructional materials and host ongoing Qlik Sense training webinars",
        ],
        technologies: [Qlik, MySQL, Github, AWS, Jira],
        color: "secondary",
    },
    {
        time: "2017-2020",
        Logo: Cubane,
        company: "Cubane Consulting",
        link: "https://www.cubaneconsulting.com",
        position: "BI Lead",
        description:
            "With a maturing analytics platform, my focus shifted to adding more advanced reporting capabilities. In particular this involved integration of reporting directly into Cubane's web applications.",
        responsibilities: [
            "Responsibility for designing and maintaining all outflows of data across all offices and locations",
            "Line management of other members of the reporting team",
            "Development of web-based Qlik Sense reporting using React.js and Vue.js",
            "Creating Qlik Sense extensions for more customised reporting using D3.js and AngularJS",
            "Facilitating Qlik Sense and Python integration, allowing machine learning techniques to be used in reporting. Includes implementing the underlying algorithms in Python for sentiment analysis, regression, clustering, etc.",
            "Managing the suite of test and production servers using AWS",
        ],
        technologies: [Qlik, ReactIcon, Vue, D3, MySQL, Github, AWS, Jira],
        color: "primary",
    },
    {
        time: "2020-Current",
        Logo: Westpac,
        company: "Westpac",
        link: "https://www.westpac.com.au/about-westpac/global-locations/westpac-australia",
        position: "Senior Engineer",
        description:
            "I am currently with Westpac's Institutional Bank working on their Qlik-based data analytics platform which uses data to support risk management activities. My focus is on developing Qlik Sense dashboards that support the daily trading activity which limits the Bank’s exposure to financial risk.",
        responsibilities: [
            "Developing and supporting dashboards in Qlik Sense used to inform daily trading activity",
            "Meeting with key stakeholders to compile business requirements and turn these into user-friendly dashboards and reports",
            "Technical solution design for new requirements and reporting needs",
            "Following best-practice agile methodologies, tracking work in JIRA & Azure DevOps",
            "Working with third party Qlik extension including Inphinity Forms, NewHub and Vizlib",
            "Developing and maintaining static report generation using NPrinting",
            "Maintenance of legacy dashboards in QlikView",
        ],
        technologies: [Qlik, Vue, Azure, Jira, Bitbucket],
        color: "secondary",
    },
];

export default experiences;
