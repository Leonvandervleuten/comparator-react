import React from "react";
import Layout from "../layout";
import '../pages/Dashboard.css';
import excelMock from '../assets/headerBackground.jpg'
import Uploadxls from "../components/Uploadxls/Uploadxls";

const Dashboard = () => {
    return (
        <Layout>
            <header className={"header-container"}>
                <img src={excelMock} alt={""}/>
            </header>
            <Uploadxls/>
        </Layout>
    )
}

export default Dashboard;