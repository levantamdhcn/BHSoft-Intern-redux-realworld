import React from 'react'
import NewFeeds from '../NewFeeds/index'
import PopularTags from '../NewFeeds/PopularTags'
import { Row,Col,Layout } from 'antd'

const AppContent = () => {
    return (
        <Layout.Content style={{ padding: '0 50px' }}>
            <Row gutter={[32, 16]}>
                <Col span={18}>
                    <NewFeeds />
                </Col>
                <Col span={6}>
                    <PopularTags />
                </Col>
            </Row>
        </Layout.Content>
    )
}

export default AppContent
