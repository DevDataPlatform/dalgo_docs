"use strict";(self.webpackChunkdalgo_docs=self.webpackChunkdalgo_docs||[]).push([[671],{9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={},i="Welcome to Dalgo",s={unversionedId:"intro",id:"intro",title:"Welcome to Dalgo",description:"Leverage Dalgo to manage your Data. So that you can Learn from it.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/dalgo_docs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},l={},c=[{value:"Leverage Dalgo to manage your Data. So that you can Learn from it.",id:"leverage-dalgo-to-manage-your-data-so-that-you-can-learn-from-it",level:2},{value:"Platform Overview",id:"platform-overview",level:2},{value:"1. Logging in as a first time user",id:"1-logging-in-as-a-first-time-user",level:2},{value:"2. Ingest",id:"2-ingest",level:2},{value:"2.1. Managing your Warehouse",id:"21-managing-your-warehouse",level:3},{value:"2.2. Managing your Data Sources",id:"22-managing-your-data-sources",level:3},{value:"2.3 Managing your Connections",id:"23-managing-your-connections",level:3},{value:"3. Transform",id:"3-transform",level:2},{value:"4. Orchestrate",id:"4-orchestrate",level:2},{value:"5. Pipeline Overview",id:"5-pipeline-overview",level:2},{value:"6. Analysis",id:"6-analysis",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-dalgo"},"Welcome to Dalgo"),(0,n.kt)("h2",{id:"leverage-dalgo-to-manage-your-data-so-that-you-can-learn-from-it"},"Leverage Dalgo to manage your Data. So that you can Learn from it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Our open-source data platform enables NGOs to harness the power of data by automating data consolidation, transformation, storage and visualization through a unified interface.")),(0,n.kt)("p",null,"This ensures that you spend no time on repetitive manual data crunching and can direct your efforts towards the use of data to monitor and evaluate your impact. Learning, iterating and communicating your impact internally and externally."),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://dalgo.in/"},"dalgo.in")," to learn more about the product and pricing, or contact us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@dalgo.in"},"support@dalgo.in")),(0,n.kt)("p",null,"Our team is always available to provide you with support via Discord. ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/C7BKvYPufp"},"Join our server")," and chat with us on Dalgo Support."),(0,n.kt)("h2",{id:"platform-overview"},"Platform Overview"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dashboard.dalgo.in/"},"dashboard.dalgo.in")," is the interface for your M&E team, data analysts/engineers, or IT team.\nIt enables you to set up and monitor your automated data pipelines through the following sections:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ingest:")," Set up your data warehouse>Connect to your sources of data>Connect your sources to your data warehouse."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Transform:")," Connect to your DBT repository which contains the SQL code for your data transformation (cleaning/merging/computation)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Orchestrate:")," Schedule your data ingestion and/or transformation."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Pipeline Overview:")," Monitor the health of your pipeline with a view of all your past runs."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Analysis:")," View your data on your Superset dashboards within the platform and ensure that it is being populated as per your expectations."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"User Management"),": Add relevant team members to your organisation and collaborate.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note : ",(0,n.kt)("em",{parentName:"p"},"Superset will only be made available to you if you have subscribed to Dalgo with Superset."))))),(0,n.kt)("h1",{id:"managing-up-your-data-pipeline"},"Managing up your data pipeline"),(0,n.kt)("p",null,"As a user of Version 1 of Dalgo your data pipelines will likely already be set up for you by us or by one of our partners. The steps below are intended to help you make changes to your pipeline as you use it over time."),(0,n.kt)("h2",{id:"1-logging-in-as-a-first-time-user"},"1. Logging in as a first time user"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You will receive an invitation to the platform from ",(0,n.kt)("a",{parentName:"li",href:"mailto:notifications@dalgo.in"},"notifications@dalgo.in"),".")),(0,n.kt)("img",{width:"1308",alt:"1) Invite",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/d53e3893-c44b-403a-ab0e-c0f25b69f0b5"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Clicking on the link will take you to the Dalgo platform."),(0,n.kt)("li",{parentName:"ol"},"Accept the invitation and set up your password.")),(0,n.kt)("img",{width:"735",alt:"1 2)Accept invite",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/06696041-9b80-433d-a320-e4c73e3542fb"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"You are now logged into the platform. ",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note : If the pipeline overview page says \u201cNo pipelines available. Please create one\u201d then reach out to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@dalgo.in"},"support@dalgo.in")," or to the partner who is helping you with setup.")))),(0,n.kt)("h2",{id:"2-ingest"},"2. Ingest"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Through this step Dalgo connects your different data sources to a single warehouse.")),(0,n.kt)("h3",{id:"21-managing-your-warehouse"},"2.1. Managing your Warehouse"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Your warehouse is the single location where data from various sources is stored.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Ingest from the left menu pane and then select the \u2018Your Warehouse\u2019 tab."),(0,n.kt)("li",{parentName:"ol"},"Dalgo currently supports BigQuery and PostgreSQL as warehouses for the platform. You should see one of these already set up."),(0,n.kt)("li",{parentName:"ol"},"If you wish to edit your Warehouse name then click on the green edit button at the bottom of the window.")),(0,n.kt)("img",{width:"1467",alt:"2 1 3  Edit Warehouse",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/361a8e1f-7f6e-4a5c-bef8-fe83f2ee6d7f"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"If you wish to use a different warehouse from what is currently set up then select \u2018delete warehouse\u2019 and confirm. Then select \u2018add a new warehouse\u2019. "),(0,n.kt)("li",{parentName:"ol"},"To set up a new warehouse name your warehouse, select the type of warehouse, fill in the relevant credentials, and click \u2018save changes and test\u2019.")),(0,n.kt)("img",{width:"898",alt:"2 15) Select Warehouse",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/2c98f1e3-96a0-4451-a648-ab25daa7381b"}),"___",(0,n.kt)("img",{width:"606",alt:"2 152) Add WH Details",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/8ea11da5-05c1-4f5e-be3a-22fffa820638"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note : Please seek advice from your internal tech team, your tech partner, or the Dalgo team (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@dalgo.in"},"support@dalgo.in"),") if you need guidance on this.")),(0,n.kt)("h3",{id:"22-managing-your-data-sources"},"2.2. Managing your Data Sources"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Your data Sources are the different places where data lies. These could be Google Sheets, KoboToolbox, Avni, or CommCare to name a few. Dalgo can connect to over 300 data sources. ",(0,n.kt)("em",{parentName:"strong"},"We also develop connectors for new sources to meet your needs"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the \u201cSources\u201d tab in the Ingest section"),(0,n.kt)("li",{parentName:"ol"},"To add a source, click on \u201c+ New Source\u201d")),(0,n.kt)("img",{width:"1469",alt:"2 2 2) Add source",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/b649b580-8769-435c-b0d7-420092978bda"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Give your source a unique name "),(0,n.kt)("li",{parentName:"ol"},"Select the type of source you want to add, and the required credentials for this source will appear.")),(0,n.kt)("img",{width:"562",alt:"2 2 4) Add source credentials",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fd10e1d8-f597-4c09-a1d8-77d8a55d259a"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Fill in the required credentials."),(0,n.kt)("li",{parentName:"ol"},"Click \u2018save changes and test\u2019. "),(0,n.kt)("li",{parentName:"ol"},"If you have entered the correct credentials the source will be added. ",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: If you do not have the required credentials for your selected source then contact the relevant person on your team who would have them. Else simply google it and you will find instructions on where and how to find these source credentials."))),(0,n.kt)("li",{parentName:"ol"},"To edit a source, click the 3 dots on the right of the source bar and select edit. Then click 'save changes and test'.\nNote: You cannot change the source type. Instead add a new source of the new type."),(0,n.kt)("li",{parentName:"ol"},"To delete a source, click the 3 dots on the right of the source bar and select delete, then confirm.")),(0,n.kt)("h3",{id:"23-managing-your-connections"},"2.3 Managing your Connections"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This is the section where you direct the data coming in from your data sources into your warehouse and specify which tables from this source you want to sync and how you wish to sync them.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the \u2018connections\u2019 tab in the Ingest section"),(0,n.kt)("li",{parentName:"ol"},"To add a new connection select \u201c+New connection\u201d")),(0,n.kt)("img",{width:"1470",alt:"2 3 2) Select connections",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/fb81addc-d29e-477f-bb5b-3c05b0c21854"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Give your connection a name and select the source for which you want to build the connection. You will see all the source tables that you added appear in the streams column.")),(0,n.kt)("img",{width:"561",alt:"2 3 3) Ad connection",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/48604c29-caf2-499d-b0e2-d26899000fc2"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select whether you want the data to be ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/basic-normalization"},"normalised"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the relevant streams (tables) from your data source that you wish to connect by toggling the sync button."),(0,n.kt)("li",{parentName:"ol"},"Then select how you would like this data to be synced and click \u2018Connect\u2019."),(0,n.kt)("li",{parentName:"ol"},"To test your configuration, select the \u2018Sync\u2019 button on the right side of the connections bar. The sync will begin to run and logs will populate in the section below.")),(0,n.kt)("img",{width:"1470",alt:"N2 3 7) Manual sync- Blur",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/00d705da-6ae1-4dfa-9f6b-39915e3370d8"}),(0,n.kt)("h2",{id:"3-transform"},"3. Transform"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dalgo runs data transformations (data cleaning, joining, computation) using ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/docs/introduction"},"dbt (data build tool)")," .")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select Transform on the left menu panel.")),(0,n.kt)("img",{width:"1470",alt:"3 1) Select Transform",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/ca2afe55-e8ab-4523-b86c-51271a03663b"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},'To set up your transformations click "connect and set up repo".'),(0,n.kt)("li",{parentName:"ol"},"Paste your github repo URL (where the code for your data transformations lies)"),(0,n.kt)("li",{parentName:"ol"},"Specify the target schema. (Generally \u2018prod\u2019 or \u2018dev\u2019, this depends on your dbt developer\u2019s naming convention)")),(0,n.kt)("img",{width:"574",alt:"3 4) Set up Transform",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c15b5823-4e0f-4537-93e1-85e41e9c83cd"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click save"),(0,n.kt)("li",{parentName:"ol"},"To check your setup, select a function and click execute.")),(0,n.kt)("img",{width:"1470",alt:"N3 6) Select Function (blur)",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/22beda74-4c73-412b-b8b5-543c44905b54"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"The function will be executed and the logs displayed below.")),(0,n.kt)("img",{width:"1469",alt:"N3 7) Logs generated (blur)",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/031480a0-f03b-40a5-b5c5-7d58f3179cf7"}),(0,n.kt)("h2",{id:"4-orchestrate"},"4. Orchestrate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Through this step Dalgo enables you to automate your data pipeline by setting up scheduled ingestion and transformation.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select orchestrate on the left menu panel."),(0,n.kt)("li",{parentName:"ol"},"Select \u201c+ New Pipeline\u201d -This will take you to the \u201cCreate a new Pipeline\u201d screen")),(0,n.kt)("img",{width:"1470",alt:"N4 2 SlctOrch",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/e966b8e9-8186-4c84-a316-1ecceae3a9b4"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Give your pipeline a name."),(0,n.kt)("li",{parentName:"ol"},"Select one or more of the connections you have set up."),(0,n.kt)("li",{parentName:"ol"},"Toggle \u2018Transform data?\u2019 as per your needs."),(0,n.kt)("li",{parentName:"ol"},"Set the schedule for your pipeline and click Save.")),(0,n.kt)("img",{width:"1470",alt:"NN4 7 OrchDtls",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/46854fb0-f203-4c34-97f1-6dcc852837ae"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"You can test your pipeline by clicking 'Run'.")),(0,n.kt)("img",{width:"1467",alt:"N4 8  orch manual run",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/65adb73d-e227-4aa0-8807-95529fd1992e"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"You can view logs of your past runs by selecting \u2018last logs\u2019. Click \u2018show more\u2019 to see the details.")),(0,n.kt)("img",{width:"613",alt:"N4 9  Orch logs",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/72e90987-3754-41f5-a461-9c4926a9c9ff"}),(0,n.kt)("h1",{id:"monitoring-your-data-pipelines"},"Monitoring your data pipelines"),(0,n.kt)("h2",{id:"5-pipeline-overview"},"5. Pipeline Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This section is intended to help you monitor the health of your data pipelines and provide you with a way to investigate further.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Once you have set up at least one pipeline in the orchestration section you will see it in the overview section. Each pipeline will be represented separately.")),(0,n.kt)("img",{width:"1465",alt:"N5 1 ovrvwsect",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c56e2733-09a4-42dc-8c8b-d6d187ab55f0"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Each vertical bar represents a pipeline run. A green bar represents success. A yellow bar represents a successful run, but a failure in ancillary functions, for example in a \u2018DBT test\u2019. A red line indicates that the pipeline run has failed."),(0,n.kt)("li",{parentName:"ol"},"To investigate further, hover over the bar, note the start time, and click on check logs.")),(0,n.kt)("img",{width:"1470",alt:"N5 3) Overview+logs",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/e09f3d8f-7f3c-47e1-bc5b-04dc4bea3410"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"This will take you to the orchestrate section, where you would need to select logs and check for logs corresponding to the start time of the relevant run. (ref. Step 8 in the orchestrate section above)")),(0,n.kt)("h2",{id:"6-analysis"},"6. Analysis"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dalgo runs and offers a hosted version of Superset for visualisation. Subscription to superset is optional.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you have not subscribed to Superset you will see a message to this effect. Kindly contact ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@dalgo.in"},"support@dalgo.in")," If you wish to add Superset to your subscription."),(0,n.kt)("li",{parentName:"ol"},"If you have subscribed to Superset you will see a button for Google sign-in, click on it.")),(0,n.kt)("img",{width:"1464",alt:"N6 2) DSS sign in",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/afe2d22c-14de-47f8-8acd-8417643b6220"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"A pop-up window will appear. Select Sign In with Google.")),(0,n.kt)("img",{width:"1470",alt:"NN6 3 gogle sign in",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/69b470be-5cbc-4f98-84f7-94e7f29431b2"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"If your Superset admin has granted access to your email ID, you will be successfully logged in. Else contact your Superset admin."),(0,n.kt)("li",{parentName:"ol"},"Once successfully logged in, close the pop-up window. You will now be able to access Superset via Dalgo to build your charts and monitor if visualisations are being populated as expected.")),(0,n.kt)("img",{width:"1464",alt:"N6 5 ss",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/0e767faf-a140-4ab9-983d-4b803f0f5aab"}),(0,n.kt)("h1",{id:"user-management"},"User Management"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User management enables you to collaborate with relevant team members while using Dalgo")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on User Management in the left menu pane."),(0,n.kt)("li",{parentName:"ol"},"In the \u2018Users\u2019 tab you will be able to see all your current users of Dalgo and their roles. Dalgo currently has two roles; Account Manager and Pipeline Manager.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Account Manager is likely to be the person who has set up your account. They can invite or delete any user and have the power to transfer their role to a Pipeline Manager."),(0,n.kt)("li",{parentName:"ul"},"Pipeline Managers are the team members who monitor the health of the pipelines and manage changes to them. They can also invite and delete users of the same role.")),(0,n.kt)("img",{width:"1470",alt:"N8) user management",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/f4be1e48-1763-4947-8bdf-9b14d7d8138b"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To invite a user, select invite user, enter their email, and select send invitation.")),(0,n.kt)("img",{width:"597",alt:"9)user invite",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/09a79781-b6ab-414c-a334-92669ce27b49"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Once a user is invited you will see their name in the Pending invitations tab. You can choose to delete the invite or resend it using the three dots to the right."),(0,n.kt)("li",{parentName:"ol"},"To delete a user or transfer role ownership select the 3 dots to the right of their name and then pick the relevant option, then confirm.")),(0,n.kt)("img",{width:"1468",alt:"10)pendinginvite",src:"https://github.com/DalgoT4D/dalgo_docs/assets/119285990/2f4aa20e-13e7-4ddf-bb9f-d9dc07c1dce1"}))}h.isMDXComponent=!0}}]);