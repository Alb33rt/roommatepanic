import React, { useEffect } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import StatCard from '../components/StatCard';
import RoommatesCard from '../components/RoommatesCard';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <Container className="mt-3 justify-content-center">
                <Row>
                    <Col>
                        <TaskCard />
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <StatCard />
                            <RoommatesCard />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;