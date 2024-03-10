import React, { useEffect, useRef } from 'react';
import CustomNavbar from '../Components/Navbar';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import Chart from 'chart.js/auto'; // Import Chart.js
import Table from 'react-bootstrap/Table';
import { getUsers, getYearlyEarning, getYearlyOrder, getMonthlyOrder, getMonthlyIncomeByYear } from './API';
import { useState } from 'react';



function Home() {

    const [users, setUsers] = React.useState([]);




    const [totalSaleyear, setTotalSale] = React.useState(0);
    const [totalOrderBymonth, setTotalOrderBymonth] = React.useState(0);
    const [totalOrderbyyear, setTotalOrderbyyear] = React.useState(0);
    const [monthlyEarningByYear, setMonthlyEarningByYear] = useState([]);


    const fetchStats = async () => {
        try {

            const responseU = await getUsers();
            setUsers(responseU.users);

            console.log("fetching stats");
            const response = await getYearlyEarning();
            setTotalSale(response.TOTAL_EARNING);
            const totalOrderbyyear = await getMonthlyOrder();
            setTotalOrderBymonth(totalOrderbyyear.TOTAL_ORDER);
            const totalOrderByYear = await getYearlyOrder();
            setTotalOrderbyyear(totalOrderByYear.TOTAL_ORDER);
            // console.log("totalSaleyear", totalSaleyear);


            const monthlyByYear = await getMonthlyIncomeByYear();
            setMonthlyEarningByYear(monthlyByYear.data);
            // console.log("monthlyEarningByYear", monthlyEarningByYear); 


        } catch (error) {
            console.error('Yearly Earning fetch failed:', error);
        }
    }



    useEffect(() => {

        fetchStats();
        console.log("monthlyEarningByYear", monthlyEarningByYear);

    }, []);


    const chartRef = useRef(null);

    useEffect(() => {
        const labels = [ 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March'];

        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Earning by Month',
                    data: [4670,4670 , 4670, 4670, 4670,3450,2160, 5670, 4670,11661.25],
                    backgroundColor: [
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)',
                        'rgba(35, 145, 77)'
                    ],
                    borderColor: [
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)',
                        'rgb(35, 145, 77)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        const context = chartRef.current.getContext('2d');
        let chartInstance = new Chart(context, config);

        // Cleanup function to destroy the chart instance
        return () => {
            chartInstance.destroy();
        };
    }, []);





    return (
        <>
            <CustomNavbar />
            <Container className='d-flex flex-wrap'>
                <Row>


                    <Row>
                        <Col md={5}>
                            <Row>
                                <div style={{ margin: '10px', marginTop: '30px' }}>
                                    <Card >
                                        <Card.Body style={{ backgroundColor: '#ffffe4' }}>
                                            <Row>
                                                <h4>Total earnings by this year</h4>
                                                <h1>{totalSaleyear}</h1>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                            <Row>
                                <Col md={6} >
                                    <div style={{ margin: '10px' }}>
                                        <Card >
                                            <Card.Body style={{ backgroundColor: '#ffffe4' }}>
                                                <Row>
                                                    <h4>Total Orders by this month</h4>
                                                    <h1>{totalOrderBymonth}</h1>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div style={{ marginTop: '10px' }}>
                                        <Card >
                                            <Card.Body style={{ backgroundColor: '#ffffe4' }}>
                                                <Row>
                                                    <h4>Total Orders by this year</h4>
                                                    <h1>{totalOrderbyyear}</h1>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >

                            <div style={{ marginTop: '30px', marginBottom: '40px' }}>
                                <Card >
                                    <Card.Body style={{ backgroundColor: '#ffffe4' }}>
                                        <canvas ref={chartRef}></canvas>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </Row>
                    <Row>

                        <div style={{ marginBottom: '20px' }}>

                            <Card style={{ backgroundColor: '#ffffe4' }}>
                                <Card.Body >
                                    <Card.Title>Registered Users</Card.Title>
                                </Card.Body>
                            </Card>

                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: '#ffffe4' }}>ID</th>
                                    <th style={{ backgroundColor: '#ffffe4' }}>IMAGE</th>
                                    <th style={{ backgroundColor: '#ffffe4' }}>NAME</th>
                                    <th style={{ backgroundColor: '#ffffe4' }}>EMAIL</th>
                                    <th style={{ backgroundColor: '#ffffe4' }}>PHONE</th>
                                    <th style={{ backgroundColor: '#ffffe4' }}>CART_ID</th>
                                </tr>
                            </thead>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tbody >
                                            <tr>
                                                <td style={{ backgroundColor: '#ffffe4' }}>{user.ID}</td>
                                                <td style={{ backgroundColor: '#ffffe4' }}>
                                                    <img src={user.IMAGE} alt="user" style={{ width: '50px', height: '50px' }} />
                                                </td>
                                                <td style={{ backgroundColor: '#ffffe4' }}>{user.NAME}</td>
                                                <td style={{ backgroundColor: '#ffffe4' }}>{user.EMAIL}</td>
                                                <td style={{ backgroundColor: '#ffffe4' }}>{user.PHONE}</td>
                                                <td style={{ backgroundColor: '#ffffe4' }}>{user.CART_ID}</td>
                                            </tr>

                                        </tbody>
                                    )
                                })
                            }
                        </Table>

                    </Row>
                </Row>

            </Container>
            <Footer />
        </>
    );
}

export default Home;
